import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Styled = styled.div`
  h2,
  .close {
    color: #fff;
  }

  h2 {
    text-transform: uppercase;
  }
`;

// PATTERN: Destructuring Arguments, Stateless function
const NamePage = (props) => {
  const { namePage, handleClose } = props;

  return (
    <Styled>
      <button type="button" className="close" onClick={handleClose}>
        <span>&times;</span>
      </button>
      <h2>{namePage}</h2>
    </Styled>
  );
};

NamePage.propTypes = {
  handleClose: PropTypes.func,
  namePage: PropTypes.string,
};

export default memo(NamePage);
