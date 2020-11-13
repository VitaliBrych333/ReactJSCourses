import React, { memo } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDiv = styled.div`
  width: 173px;
  margin-left: 170px;
  display: flex;
  justify-content: space-between;

  .btn-primary,
  .btn-primary:disabled {
    background-color: #232323;
    border-color: #f65261;
    color: #f65261;
  }

  .btn-primary: hover {
    background-color: #f65261;
    color: #fff;
  }

  button {
    text-transform: uppercase;
  }
`;

// PATTERN: Destructuring Arguments, Stateless function, Style component
const ButtonsFormGroup = (props) => {
  const { handleReset, handleSave, nameButton, disabledSave } = props;

  return (
    <StyledDiv>
      <Button variant="primary" onClick={handleReset}>
        Reset
      </Button>
      <Button variant="primary" onClick={handleSave} disabled={disabledSave}>
        {nameButton}
      </Button>
    </StyledDiv>
  );
};

ButtonsFormGroup.propTypes = {
  handleReset: PropTypes.func,
  handleSave: PropTypes.func,
  nameButton: PropTypes.string,
  disabledSave: PropTypes.bool,
};

export default memo(ButtonsFormGroup);
