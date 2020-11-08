import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

// PATTERN: Destructuring Arguments, Stateless function, Conditional Rendering
const Duration = ({ filmId }) => (
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

Duration.propTypes = {
  filmId: PropTypes.shape({
    release_date: PropTypes.string,
    runtime: PropTypes.number,
  }),
};

const mapStateToProps = (state) => ({
  filmId: state.movieReducer.filmId.data,
});

export default connect(mapStateToProps)(memo(Duration));
