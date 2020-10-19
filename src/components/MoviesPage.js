import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMovies } from '../redux/actions/moviesActions';
import StartPage from './StartPage';

const useQuery = () => new URLSearchParams(useLocation().search);

const MoviesPage = ({ getMovies }) => {
  const query = useQuery();
  const history = useHistory();
  const sortBy = query.get('sortBy');
  const search = query.get('search');

  useEffect(() => {
    !sortBy || !search ? history.push('/') : getMovies(sortBy, search);
  }, [sortBy, search, history, getMovies]);

  return <StartPage />;
};

MoviesPage.propTypes = {
  getMovies: PropTypes.func,
};

const mapStateToProps = (state) => ({
  sortType: state.movieReducer.sort,
  isShowAddPage: state.windowReducer.isShowAddPage,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (sortType, value) =>
      dispatch(fetchMovies(sortType, value, true)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
