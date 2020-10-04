import React, { useState, useCallback } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { setSort } from '../../redux/actions/criteriaActions';
import { sortRelease, sortRating } from '../../redux/actions/moviesActions';

const StyledGroup = styled(Dropdown)`
  display: inline-block;

  button: hover {
    background-color: #f65261;
  }
`;

const DropdownCustom = (props) => {
  const { sort, moviesByCriteria, dispatch } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const [dropdownValue, setValue] = useState(
    sort === 'release_date' ? 'Release date' : 'Rating'
  );

  const handleClick = useCallback(
    (e) => {
      setValue(() => e.target.textContent);

      switch (e.target.textContent) {
        case 'Release date':
          dispatch(setSort('release_date'));
          dispatch(sortRelease(moviesByCriteria));
          break;
        case 'Rating':
          dispatch(setSort('vote_average'));
          dispatch(sortRating(moviesByCriteria));
          break;
        default:
          break;
      }
    },
    [dispatch, moviesByCriteria]
  );

  return (
    <StyledGroup>
      <Dropdown className="drop" isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>{dropdownValue}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={handleClick}>Release date</DropdownItem>
          <DropdownItem onClick={handleClick}>Rating</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </StyledGroup>
  );
};

DropdownCustom.propTypes = {
  sort: PropTypes.string,
  moviesByCriteria: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => ({
  sort: state.criteriaReducer.sort,
  moviesByCriteria: state.movieReducer.moviesByCriteria.data,
});

export default connect(mapStateToProps)(DropdownCustom);
