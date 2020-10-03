import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import CardFilm from "./CardFilm";
import EditPage from "./EditPage";
import DeleteWindow from "./DeleteWindow";
import SearchHeader from "./SearchHeader";
import NotFound from "./NotFound";

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

const StartPage = (props) => {
  const data = props.data;
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
    <Fragment>
      {props.showEditPage && <EditPage />}
      {props.showDeletePage && <DeleteWindow />}
      <SearchHeader />
      {main}
    </Fragment>
  );
};

StartPage.propTypes = {
  data: PropTypes.array,
  total: PropTypes.number,
};

const mapStateToProps = (state) => ({
  data: state.movieReducer.moviesByCriteria.data,
  showEditPage: state.windowReducer.showEditPage,
  showDeletePage: state.windowReducer.showDeletePage,
});

export default connect(mapStateToProps)(StartPage);
