import React, { memo } from 'react';
import styled from 'styled-components';

const Styledh3 = styled.h3`
  margin: 150px auto 0;
  text-transform: capitalize;
  text-align: center;
  font-size: 40px;
`;

// PATTERN: Stateless function
const NotFound = () => {
  return <Styledh3>No movie found</Styledh3>;
};

export default memo(NotFound);
