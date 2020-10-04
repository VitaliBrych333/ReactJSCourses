import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setGenre } from '../../redux/actions/criteriaActions';
import {
  filterByGenre,
  setMoviesByGenre,
  sortRating,
  sortRelease,
} from '../../redux/actions/moviesActions';

const NavCustom = (props) => {
  const { dispatch, movies, moviesByCriteria, genre, sort } = props;
  const [active, setActive] = useState('All');

  const handleSelect = (selectedKey) => {
    dispatch(setGenre(selectedKey));
    dispatch(setMoviesByGenre(movies));

    sort === 'vote_average'
      ? dispatch(sortRating(moviesByCriteria))
      : dispatch(sortRelease(moviesByCriteria));

    selectedKey !== 'All'
      ? dispatch(filterByGenre(movies.data, selectedKey))
      : undefined;
  };

  useEffect(() => {
    setActive(genre);
  }, [genre]);

  return (
    <Nav activeKey="/home" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="All" className={active === 'All' ? 'active' : ''}>
          All
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="Documentary"
          className={active === 'Documentary' ? 'active' : ''}
        >
          Documentary
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="Comedy"
          className={active === 'Comedy' ? 'active' : ''}
        >
          Comedy
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="Horror"
          className={active === 'Horror' ? 'active' : ''}
        >
          Horror
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="Crime"
          className={active === 'Crime' ? 'active' : ''}
        >
          Crime
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

NavCustom.propTypes = {
  dispatch: PropTypes.func,
  sort: PropTypes.string,
  genre: PropTypes.string,
  moviesByCriteria: PropTypes.arrayOf(PropTypes.object),
  movies: PropTypes.shape({
    data: PropTypes.array,
  }),
};

const mapStateToProps = (state) => ({
  moviesByCriteria: state.movieReducer.moviesByCriteria.data,
  movies: state.movieReducer.movies,
  sort: state.criteriaReducer.sort,
  genre: state.criteriaReducer.genre,
});

export default connect(mapStateToProps)(NavCustom);
