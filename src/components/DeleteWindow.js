import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import NamePage from './shared/NamePage';
import { showDeletePage } from '../redux/actions/windowActions';
import { deleteMovie, setMoviesByGenre, fetchMoviesSuccess } from '../redux/actions/moviesActions.js';

const StyledSection = styled.section`
    .modal {
        background: rgba(0, 0, 0, 0.6);
    }

    .modal-main {
        position:fixed;
        width: 400px;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        padding: 25px;
        margin: 50px auto;
        border: 3px solid black;
        background-color: #424242;
    }

    .display-block {
        display: block;
    }

    .display-none {
        display: none;
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

const DeleteWindow = (props) => {
    const showHideClassName = props.showDeletePage ? "modal display-block" : "modal display-none";

    const handleClose = () => props.dispatch(showDeletePage(false));
    const handleClick = () => {
        props.dispatch(deleteMovie(props.filmEdit.id));

        const newValueMovies = {
            data: props.moviesByCriteria.data.filter(item => item.id !== props.filmEdit.id),
            totalAmount: props.moviesByCriteria.totalAmount - 1
        };

        props.dispatch(setMoviesByGenre(newValueMovies));
        props.dispatch(fetchMoviesSuccess(newValueMovies))

        handleClose();
    }

    return (
        <StyledSection>
            <div className={showHideClassName}>
                <section className="modal-main">
                    <NamePage namePage="Delete Movie" handleClose={handleClose} />
                    <p>Are you sure you want to delete this movie?</p>
                    <Button variant="primary" onClick={handleClick}>Confirm</Button>
                </section>
            </div>
        </StyledSection>
    );
};

const mapStateToProps = state => ({
    showDeletePage: state.windowReducer.showDeletePage,
    filmEdit: state.movieReducer.filmEdit,
    moviesByCriteria: state.movieReducer.moviesByCriteria,
});

export default connect(mapStateToProps)(DeleteWindow);

