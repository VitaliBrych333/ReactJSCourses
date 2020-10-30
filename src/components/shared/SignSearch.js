import React from 'react';
import { MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import useLocalStorageState from './useLocalStorageState';

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

const SignSearch = ({ sortType }) => {
  const [defaultValue] = useLocalStorageState('my-app-defaultValueSearch');

  return (
    <StyledSpan>
      <Link
        to={{
          pathname: `/search/movies?sortBy=${sortType}&sortOrder=desc&search=${defaultValue}&searchBy=title`,
        }}
      >
        <MDBIcon icon="search" size="1x" className="pr-3" />
      </Link>
    </StyledSpan>
  );
};

SignSearch.propTypes = {
  sortType: PropTypes.string,
};

const mapStateToProps = (state) => ({
  sortType: state.movieReducer.sort,
});

export default connect(mapStateToProps)(SignSearch);
