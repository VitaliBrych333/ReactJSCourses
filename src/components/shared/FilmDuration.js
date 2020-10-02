import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const StyledDiv = styled.div`
  p {
    margin: 0 30px 0 0;
    font-size: 18px;
    display: inline-block;
  }

  span {
    color: red;
  }
`;

const Duration = (props) => {
  const filmId = props.filmId;
  return (
    <StyledDiv>
      <p>
        <span>{filmId.release_date.slice(0, 4)}</span> year
      </p>
      {filmId.runtime && (
        <p>
          <span>{filmId.runtime}</span> min
        </p>
      )}
    </StyledDiv>
  );
};

Duration.propTypes = {
  filmId: PropTypes.object,
};

const mapStateToProps = (state) => ({
  filmId: state.movieReducer.filmId.data,
});

export default connect(mapStateToProps)(Duration);
