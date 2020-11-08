import React, { memo } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Styledh3 = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 250px auto 0;
  width: 370px;

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
    width: 200px;
    text-transform: uppercase;
    margin: 0 auto;
  }

  p {
    font-size: 50px;
    text-align: center;
    text-transform: capitalize;
  }

  span {
    font-size: 170px;
    text-align: center;
  }
`;

// PATTERN: Stateless function, Style component
const NotFound = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };

  return (
    <Styledh3>
      <p>Page not found</p>
      <span>404</span>
      <Button variant="primary" onClick={handleClick}>
        Go back to home
      </Button>
    </Styledh3>
  );
};

export default memo(NotFound);
