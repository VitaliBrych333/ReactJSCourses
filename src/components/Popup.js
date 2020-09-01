import React, { Component, Fragment } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import NamePage from './shared/NamePage';
import { connect } from 'react-redux';

const StyledSection = styled.section`
    width: 400px;
    padding: 25px;
    margin: 50px auto;
    border: 3px solid black;
    background-color: #424242;
    div {
        margin-bottom: 10px;
    }
    p {
        color: #FFF;
    }
    .btn-primary {
        background-color: #232323;
        border-color: #F65261;
        color: #F65261;
        text-transform: uppercase;
        margin-left: 250px;
    }
    .btn-primary: hover {
        background-color: #F65261;
        color: #FFF;
    }
`;

class Popup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            kind: 'Search',
            left: 'Title',
            right: 'Genre',
            disabled: true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log('delete', e.target)
    }

    render() {
        return (
            <Fragment>
                <StyledSection>
                    <NamePage namePage="Delete Movie"></NamePage>
                    <p>Are you sure you want to delete this movie?</p>
                    <Button variant="primary" onClick={this.handleClick}>Confirm</Button>
                </StyledSection>
            </Fragment>
        );
    }
};

const mapStateToProps = state => ({
    data: state.movieReducer.movies.data,
    filmId: state.movieReducer.filmId
});

export default connect(mapStateToProps)(Popup);
