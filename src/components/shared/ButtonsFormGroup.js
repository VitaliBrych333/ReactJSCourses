import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDiv = styled.div`
  width: 173px;
  margin-left: 170px;
  display: flex;
  justify-content: space-between;

  .btn-primary {
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

const ButtonsFormGroup = (props) => {
  const { handleReset, handleSave, nameButton } = props;

  return (
    <StyledDiv>
      <Button variant="primary" onClick={handleReset}>
        Reset
      </Button>
      <Button variant="primary" onClick={handleSave}>
        {nameButton}
      </Button>
    </StyledDiv>
  );
};

ButtonsFormGroup.propTypes = {
  handleReset: PropTypes.func,
  handleSave: PropTypes.func,
  nameButton: PropTypes.string,
};

export default ButtonsFormGroup;
