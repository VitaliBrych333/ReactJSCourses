import React from 'react';
import styled from 'styled-components';

const Styledh3 = styled.h3`
  height: calc(100vh - 546px);
  margin: 150px auto 0;
  width: 250px;
`;

const NotFound = () => <Styledh3>404 incorrect path</Styledh3>;

export default NotFound;
