import React, { PureComponent, memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CardFilm from '../../components/CardFilm';
import FilmDetails from '../../components/FilmDetails';
import EditPage from '../../components/EditPage';
import DeleteWindow from '../../components/DeleteWindow';
import NotFound from '../../components/NotFound';
import { fetchMovieId } from '../../redux/actions/moviesActions';

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

// PATTERN: Destructuring Arguments, Array as children, Children Types, Conditional Rendering
class DetailsPage extends PureComponent {
  static initialAction(req) {
    return fetchMovieId(req.url.substring(8));
  }

  componentDidMount() {
    this.getMovieById();
  }

  componentDidUpdate() {
    this.getMovieById();
  }

  getMovieById = () => {
    const { fetchMovieId, match } = this.props;
    const { id } = match.params;
    fetchMovieId(id);
  };

  render() {
    const { isShowEditPage, isShowDeletePage, data } = this.props;
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
        <FilmDetails />
        {main}
      </>
    );
  }
}

DetailsPage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  isShowEditPage: PropTypes.bool,
  isShowDeletePage: PropTypes.bool,
  fetchMovieId: PropTypes.func,
  match: PropTypes.objectOf(PropTypes.any),
};

const mapStateToProps = (state) => ({
  data: state.movieReducer.moviesByCriteria.data,
  isShowEditPage: state.windowReducer.isShowEditPage,
  isShowDeletePage: state.windowReducer.isShowDeletePage,
});

const mapDispatchToProps = {
  fetchMovieId,
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(DetailsPage));
