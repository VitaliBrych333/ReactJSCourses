import React, { Component, Fragment } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ButtonsFormGroup from './ButtonsFormGroup';
import NamePage from './NamePage';

const StyledGroup = styled.div`
    label {
        color: #F65261;
    }
`;

class FormInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Select Genre',
            genres: ['Select Genre', 'Horror', 'Action', 'Comedy']
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log('value was changed on', e.target.value)
        this.setState({value: e.target.value})
    }

    componentWillUnmount() {
        console.log('component was deleted')
    }

    componentDidMount() {
        const newDate = this.props.data;

        newDate ? this.setState({value: newDate.genre})
                : null
    }

    render() {
        const data = this.props.data;

        return (
            <Fragment>
              <StyledGroup>
              <Form>
                    <NamePage namePage={this.props.namePage}></NamePage>

                    <Form.Group controlId="formBasicEmail">
                        {
                            data && <Fragment>
                                        <Form.Label>Movie id</Form.Label>
                                        <Form.Control type="title" placeholder="Id" defaultValue={(data && data.id) ? data.id : null} />
                                    </Fragment>
                        }
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="title" placeholder="Title" defaultValue={(data && data.title) ? data.title : null}/>

                        <Form.Label>Release date</Form.Label>
                        <Form.Control type="date" placeholder="Select Date" defaultValue={(data && data.date) ? data.date : null} />

                        <Form.Label>Movie URL</Form.Label>
                        <Form.Control type="url" placeholder="Movie URL here" defaultValue={(data && data.url) ? data.url : null} />

                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select" placeholder="Select Genre" value={this.state.value} onChange={this.handleChange}>
                            {this.state.genres.map((item, index) => <option key={index} value={item}>{item}</option> )}
                        </Form.Control>

                        <Form.Label>Overview</Form.Label>
                        <Form.Control type="text" placeholder="Overview here" defaultValue={(data && data.overview) ? data.overview : null}/>

                        <Form.Label>Runtime</Form.Label>
                        <Form.Control type="number" placeholder="Runtime here" defaultValue={(data && data.time) ? data.time : null}/>
                    </Form.Group>
                    <ButtonsFormGroup nameButton={this.props.nameButton}></ButtonsFormGroup>
                </Form>
              </StyledGroup>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    search: state.criteriaReducer.search,
    sort: state.criteriaReducer.sort
});

export default connect(mapStateToProps)(FormInfo);
