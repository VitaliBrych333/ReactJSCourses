import React, { Component, Fragment } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ButtonsFormGroup from './ButtonsFormGroup';
import NamePage from './NamePage';
import { showEditPage, showAddPage } from '../../redux/actions/windowActions';

const StyledGroup = styled.div`
    label {
        color: #F65261;
    }
`;

class FormInfo extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            id: '',
            title: null,
            date: null,
            url: null,
            overview: null,
            time: null
        };

        this.newState = null;

        this.elemInputs = [];
        this.saveInputs = [];

        this.state = {
            value: 'Select Genre',
            genres: ['Select Genre', 'Horror', 'Action', 'Comedy'],
            dataForm: Object.assign({}, this.initialState)
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    handleReset() {
        if (this.props.showEditPage) {
            this.elemInputs = document.querySelectorAll('.Edit input')

        } else if (this.props.showAddPage) {
            this.elemInputs = document.querySelectorAll('.Add input')
        }

        if (this.elemInputs.length) {
            this.elemInputs.forEach(input => {
                this.saveInputs.push(input.value);
                input.value = '';
            });
        }

        this.setState({ value: 'Select Genre' });
    }

    handleClose() {
        switch (this.props.namePage) {
            case 'Edit movie':
                this.setState({ value: this.newState.genre });

                this.elemInputs.forEach((input, index) => {
                    input.value = this.saveInputs[index];
                });

                this.props.dispatch(showEditPage(false));
                break;

            case 'Add movie':
                this.handleReset();
                this.props.dispatch(showAddPage(false));
                break;

            default:
                break;
        }
    }

    componentWillUnmount() {
        console.log('component was deleted');
    }

    componentDidMount() {
        const newDate = this.props.data;
        this.newState = Object.assign({}, newDate);

        newDate ? this.setState({
                      value: newDate.genre,
                      dataForm: this.newState
                  })
                : null
    }

    render() {
        const data = this.props.data;

        return (
            <StyledGroup>
                <Form>
                    <NamePage namePage={this.props.namePage} handleClose={this.handleClose}></NamePage>

                    <Form.Group className={this.props.namePage}>
                        {
                            data && <Fragment>
                                        <Form.Label>Movie id</Form.Label>
                                        <Form.Control type="title" placeholder="Id" defaultValue={this.state.dataForm.id}/>
                                    </Fragment>
                        }
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="title" placeholder="Title" defaultValue={this.state.dataForm.title}/>

                        <Form.Label>Release date</Form.Label>
                        <Form.Control type="date" placeholder="Select Date" defaultValue={this.state.dataForm.date} />

                        <Form.Label>Movie URL</Form.Label>
                        <Form.Control type="url" placeholder="Movie URL here" defaultValue={this.state.dataForm.url} />

                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select" placeholder="Select Genre" value={this.state.value} onChange={this.handleChange}>
                            {this.state.genres.map((item, index) => <option key={index} value={item}>{item}</option> )}
                        </Form.Control>

                        <Form.Label>Overview</Form.Label>
                        <Form.Control type="text" placeholder="Overview here" defaultValue={this.state.dataForm.overview}/>

                        <Form.Label>Runtime</Form.Label>
                        <Form.Control type="number" placeholder="Runtime here" defaultValue={this.state.dataForm.time}/>
                    </Form.Group>
                    <ButtonsFormGroup nameButton={this.props.nameButton} handleReset={this.handleReset}></ButtonsFormGroup>
                </Form>
            </StyledGroup>
        );
    };
};

const mapStateToProps = state => ({
    showEditPage: state.windowReducer.showEditPage,
    showAddPage: state.windowReducer.showAddPage,
});

export default connect(mapStateToProps)(FormInfo);
