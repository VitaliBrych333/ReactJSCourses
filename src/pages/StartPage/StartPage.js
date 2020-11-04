import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import queryString from 'query-string';
import CardFilm from '../../components/CardFilm';
import EditPage from '../../components/EditPage';
import DeleteWindow from '../../components/DeleteWindow';
import SearchHeader from '../../components/SearchHeader';
import NotFound from '../../components/NotFound';
import {
  fetchMovies,
  fetchMoviesByGenre,
  fetchMoviesBegin,
} from '../../redux/actions/moviesActions';

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

class StartPage extends PureComponent {
  static initialAction(req) {
    const { sortBy, search, searchBy, filter } = req.query;
    if (sortBy && search) {
      return fetchMovies(sortBy, search);
    }

    if (sortBy && searchBy && filter) {
      return fetchMoviesByGenre(sortBy, filter);
    }

    return fetchMoviesBegin();
  }

  componentDidUpdate(prevProps) {
    const { fetchMovies, fetchMoviesByGenre, location } = this.props;

    if (prevProps.location.search !== location.search) {
      const url = location.search;
      const params = queryString.parse(url);
      const { sortBy, search, searchBy, filter } = params;

      if (sortBy && search) {
        fetchMovies(sortBy, search);
      }

      if (sortBy && searchBy && filter) {
        fetchMoviesByGenre(sortBy, filter);
      }
    }
  }

  render() {
    const { data, isShowEditPage, isShowDeletePage } = this.props;
    let main;

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
  }
}

StartPage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  isShowEditPage: PropTypes.bool,
  isShowDeletePage: PropTypes.bool,
  fetchMovies: PropTypes.func,
  fetchMoviesByGenre: PropTypes.func,
  location: PropTypes.objectOf(PropTypes.any),
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
