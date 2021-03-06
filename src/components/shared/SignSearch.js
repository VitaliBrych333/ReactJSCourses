import React, { memo } from 'react';
import { MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSpan = styled.span`
  display: flex;
  justify-content: flex-end;
  padding-right: 25px;
  background-color: rgb(161, 144, 144);

  i {
    margin-top: 25px;
    transform: rotateZ(90deg);
    color: red;

    &:hover {
      cursor: pointer;
      color: gray;
    }
  }
`;

// PATTERN: Stateless function
const SignSearch = () => {
  return (
    <StyledSpan>
      <Link
        to={{
          pathname: `/`,
        }}
      >
        <MDBIcon icon="search" size="1x" className="pr-3" />
      </Link>
    </StyledSpan>
  );
};

export default memo(SignSearch);
