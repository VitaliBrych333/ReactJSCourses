import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchMovies } from '../../redux/actions/moviesActions';
import ButtonsCriteriaSearch from './ButtonsCriteriaSearch';
import styled from 'styled-components';
import ButtonsFormGroup from './ButtonsFormGroup';

const StyledGroup = styled.div`
    label {
        color: #F65261;
    }

    h2, .close, a {
        color: #FFF;
    }

    a:hover {
        text-decoration: none;
    }

`;

class FormInfo extends Component {

    render() {
        const data = this.props.data;
        return (
            <Fragment>
              <StyledGroup>
              <Form>
                    <button type="button" className="close" aria-label="Close">
                       <Link to={{pathname: '/'}}><span aria-hidden="true">&times;</span></Link>
                    </button>
                    <h2>{this.props.namePage}</h2>

                    <Form.Group controlId="formBasicEmail">
                        {
                            data && <Fragment>
                                        <Form.Label>Movie id</Form.Label>
                                        <Form.Control type="title" placeholder="Id" defaultValue={data.id ? data.id : null} />
                                    </Fragment>
                        }
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="title" placeholder="Title" defaultValue={data.title ? data.title : null}/>

                        <Form.Label>Release date</Form.Label>
                        <Form.Control type="date" placeholder="Select Date"/>

                        <Form.Label>Movie URL</Form.Label>
                        <Form.Control type="url" placeholder="Movie URL here" defaultValue={data.url ? data.url : null} />

                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select" placeholder="Select Genre">
                            <option>Select Genre</option>
                            <option>Horror</option>
                            <option>Action</option>
                            <option>Comedy</option>
                            <option>4</option>
                        </Form.Control>

                        <Form.Label>Overview</Form.Label>
                        <Form.Control type="text" placeholder="Overview here" defaultValue={data.overview ? data.overview : null}/>

                        <Form.Label>Runtime</Form.Label>
                        <Form.Control type="number" placeholder="Runtime here" defaultValue={data.time ? data.time : null}/>
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
