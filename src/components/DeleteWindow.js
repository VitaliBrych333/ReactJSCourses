import React, { useCallback } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import NamePage from "./shared/NamePage";
import { showDeletePage } from "../redux/actions/windowActions";
import {
  deleteMovie,
  setMoviesByGenre,
  fetchMoviesSuccess,
} from "../redux/actions/moviesActions";

const StyledSection = styled.section`
  .modal {
    background: rgba(0, 0, 0, 0.6);
    display: block;
  }

  .modal-main {
    position: fixed;
    width: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 25px;
    margin: 50px auto;
    border: 3px solid black;
    background-color: #424242;
  }

  p {
    color: #fff;
  }

  .btn-primary {
    background-color: #232323;
    border-color: #f65261;
    color: #f65261;
    text-transform: uppercase;
    margin-left: 250px;
  }

  .btn-primary: hover {
    background-color: #f65261;
    color: #fff;
  }
`;

const DeleteWindow = (props) => {
  const handleClose = () => props.dispatch(showDeletePage(false));

  const updateFilms = (films) => {
    const newValueMovies = {
      data: films.data.filter((item) => item.id !== props.filmEdit.id),
      totalAmount: films.totalAmount - 1,
    };

    return newValueMovies;
  };

  const handleClick = useCallback(() => {
    props.dispatch(deleteMovie(props.filmEdit.id));

    props.dispatch(setMoviesByGenre(updateFilms(props.moviesByCriteria)));
    props.dispatch(fetchMoviesSuccess(updateFilms(props.movies)));

    handleClose();
  }, [props.filmEdit]);

  return (
    <StyledSection>
      <div className="modal">
        <section className="modal-main">
          <NamePage namePage="Delete Movie" handleClose={handleClose} />
          <p>Are you sure you want to delete this movie?</p>
          <Button variant="primary" onClick={handleClick}>
            Confirm
          </Button>
        </section>
      </div>
    </StyledSection>
  );
};

const mapStateToProps = (state) => ({
  filmEdit: state.movieReducer.filmEdit,
  moviesByCriteria: state.movieReducer.moviesByCriteria,
  movies: state.movieReducer.movies,
});

export default connect(mapStateToProps)(DeleteWindow);
