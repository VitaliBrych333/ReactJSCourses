import React, { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NamePage from './shared/NamePage';
import { showDeletePage } from '../redux/actions/windowActions';
import { deleteMovie } from '../redux/actions/moviesActions';

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

const updateFilms = (films, id) => {
  const newValueMovies = {
    data: films.data.filter((item) => item.id !== id),
    totalAmount: films.totalAmount - 1,
  };

  return newValueMovies;
};

const DeleteWindow = (props) => {
  const {
    moviesByCriteria,
    movies,
    filmEdit,
    deleteMovie,
    showDeletePage,
  } = props;

  const handleClose = useCallback(() => showDeletePage(false), [
    showDeletePage,
  ]);

  const handleClick = useCallback(() => {
    const newMoviesByCriteria = updateFilms(moviesByCriteria, filmEdit.id);
    const newMovies = updateFilms(movies, filmEdit.id);
    deleteMovie(filmEdit.id, newMoviesByCriteria, newMovies);
  }, [moviesByCriteria, filmEdit.id, movies, deleteMovie]);

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

DeleteWindow.propTypes = {
  showDeletePage: PropTypes.func,
  deleteMovie: PropTypes.func,
  filmEdit: PropTypes.shape({
    id: PropTypes.number,
  }),
  moviesByCriteria: PropTypes.shape({
    data: PropTypes.array,
  }),
  movies: PropTypes.shape({
    data: PropTypes.array,
  }),
};

const mapStateToProps = (state) => ({
  filmEdit: state.windowReducer.filmEdit,
  moviesByCriteria: state.movieReducer.moviesByCriteria,
  movies: state.movieReducer.movies,
});

const mapDispatchToProps = {
  deleteMovie,
  showDeletePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteWindow);
