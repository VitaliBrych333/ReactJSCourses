import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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
  return (
    <StyledDiv>
      <p>
        <span>{props.propValue.release_date.slice(0, 4)}</span> year
      </p>
      {props.propValue.runtime && (
        <p>
          <span>{props.propValue.runtime}</span> min
        </p>
      )}
    </StyledDiv>
  );
};

Duration.propTypes = {
  propValue: PropTypes.shape({
    release_date: PropTypes.string,
    runtime: PropTypes.number,
  }),
};

export default Duration;
