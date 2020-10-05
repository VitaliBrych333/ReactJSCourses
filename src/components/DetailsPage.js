import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CardFilm from './CardFilm';
import FilmDetails from './FilmDetails';
import EditPage from './EditPage';
import DeleteWindow from './DeleteWindow';
import NotFound from './NotFound';

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

const DetailsPage = (props) => {
  const { isShowEditPage, isShowDeletePage, data } = props;
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
};

DetailsPage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  isShowEditPage: PropTypes.bool,
  isShowDeletePage: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  data: state.movieReducer.moviesByCriteria.data,
  isShowEditPage: state.windowReducer.isShowEditPage,
  isShowDeletePage: state.windowReducer.isShowDeletePage,
});

export default connect(mapStateToProps)(DetailsPage);
