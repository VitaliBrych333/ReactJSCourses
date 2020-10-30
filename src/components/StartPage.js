import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import CardFilm from './CardFilm';
import EditPage from './EditPage';
import DeleteWindow from './DeleteWindow';
import SearchHeader from './SearchHeader';
import NotFound from './NotFound';
import {
  fetchMovies,
  fetchMoviesByGenre,
} from '../redux/actions/moviesActions';

const StyledSection = styled.section`
  padding: 25px;
  background-color: rgb(209, 189, 189);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .card {
    margin-top: 15px;
    margin-bottom: 10px;
  }
`;

const useQuery = () => new URLSearchParams(useLocation().search);

const StartPage = (props) => {
  const {
    data,
    isShowEditPage,
    isShowDeletePage,
    fetchMovies,
    fetchMoviesByGenre,
  } = props;

  const query = useQuery();
  const history = useHistory();
  const sortBy = query.get('sortBy');
  const search = query.get('search');
  const searchBy = query.get('searchBy');
  const filter = query.get('filter');

  let main;

  useEffect(() => {
    sortBy && search ? fetchMovies(sortBy, search) : undefined;
    sortBy && searchBy && filter
      ? fetchMoviesByGenre(sortBy, filter)
      : undefined;
  }, [
    sortBy,
    search,
    history,
    fetchMovies,
    searchBy,
    filter,
    fetchMoviesByGenre,
  ]);

  if (data !== null && data.length) {
    main = (
      <StyledSection>
        {data.map((item) => (
          <CardFilm key={item.id} info={item} />
        ))}
      </StyledSection>
    );
  } else if (data !== null && !data.length) {
    main = <NotFound />;
  }

  return (
    <>
      {isShowEditPage && <EditPage />}
      {isShowDeletePage && <DeleteWindow />}
      <SearchHeader />
      {main}
    </>
  );
};

StartPage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  isShowEditPage: PropTypes.bool,
  isShowDeletePage: PropTypes.bool,
  fetchMovies: PropTypes.func,
  fetchMoviesByGenre: PropTypes.func,
};

const mapDispatchToProps = {
  fetchMovies,
  fetchMoviesByGenre,
};

const mapStateToProps = (state) => ({
  data: state.movieReducer.moviesByCriteria.data,
  isShowEditPage: state.windowReducer.isShowEditPage,
  isShowDeletePage: state.windowReducer.isShowDeletePage,
});

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
