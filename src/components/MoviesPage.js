import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMovies } from '../redux/actions/moviesActions';
import StartPage from './StartPage';

const useQuery = () => new URLSearchParams(useLocation().search);

const MoviesPage = ({ dispatch }) => {
  const query = useQuery();
  const history = useHistory();
  const sortBy = query.get('sortBy');
  const search = query.get('search');

  useEffect(() => {
    !sortBy || !search
      ? history.push('/')
      : dispatch(fetchMovies(sortBy, search));
  }, [sortBy, search, history, dispatch]);

  return <StartPage />;
};

MoviesPage.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(MoviesPage);
