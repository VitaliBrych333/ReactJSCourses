import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchMovies } from '../../redux/actions/moviesActions';
import ButtonsCriteriaSearch from './ButtonsCriteriaSearch';
import styled from 'styled-components';

const StyledGroup = styled(InputGroup)`
    padding: 0 50px;
    margin: 0 auto;
    max-width: 700px;

    .input-group-append {
        background-color: bisque;
    }
`;

class FormInfo extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         kind: 'Search',
    //         left: 'Title',
    //         right: 'Genre',
    //         disabled: true
    //     }
    // }

    handleClick() {
        this.props.dispatch(
            fetchMovies(this.props.sort, this.props.search, this.myInput.value));
    }

    handleChange() {
        const value = this.myInput.value;

        value ? this.setState({disabled: false})
              : this.setState({disabled: true})
    }

    render() {
        return (
            <Fragment>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="title" placeholder="Title" />

                        <Form.Label>Release date</Form.Label>
                        <Form.Control type="date" placeholder="Select Date" />

                        <Form.Label>Movie URL</Form.Label>
                        <Form.Control type="url" placeholder="Movie URL here" />

                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select" placeholder="Select Genre">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>

                        <Form.Label>Overview</Form.Label>
                        <Form.Control type="text" placeholder="Overview here" />

                        <Form.Label>Runtime</Form.Label>
                        <Form.Control type="number" placeholder="Runtime here" />


                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Reset
                    </Button>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                {/* <Button className="add-movie" variant="outline-danger">
                    <Link to={{pathname: '/add'}}>+ Add movie</Link>
                </Button>
                <h1>Find your movie</h1>
                <StyledGroup className="mb-3">
                    <FormControl
                        placeholder="Please write the film name"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        ref={value => { this.myInput = value; }}
                        onChange={() => this.handleChange()}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-danger" onClick={this.handleClick.bind(this)} disabled={this.state.disabled}>Search</Button>
                    </InputGroup.Append>
                </StyledGroup>
                <ButtonsCriteriaSearch buttonNames={this.state}/> */}
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    search: state.criteriaReducer.search,
    sort: state.criteriaReducer.sort
});

export default connect(mapStateToProps)(FormInfo);
