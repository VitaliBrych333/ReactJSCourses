import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

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
  return (
    <StyledDiv>
      <Button variant="primary" onClick={props.handleReset}>
        Reset
      </Button>
      <Button
        variant="primary"
        onClick={props.handleSave}
        disabled={props.disabledSave}
      >
        {props.nameButton}
      </Button>
    </StyledDiv>
  );
};

export default ButtonsFormGroup;
