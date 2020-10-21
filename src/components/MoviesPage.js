import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMovies } from '../redux/actions/moviesActions';
import StartPage from './StartPage';

const useQuery = () => new URLSearchParams(useLocation().search);

const MoviesPage = ({ fetchMovies }) => {
  const query = useQuery();
  const history = useHistory();
  const sortBy = query.get('sortBy');
  const search = query.get('search');

  useEffect(() => {
    !sortBy || !search ? history.push('/') : fetchMovies(sortBy, search, true);
  }, [sortBy, search, history, fetchMovies]);

  return <StartPage />;
};

MoviesPage.propTypes = {
  fetchMovies: PropTypes.func,
};

const mapDispatchToProps = {
  fetchMovies,
};

export default connect(null, mapDispatchToProps)(MoviesPage);
