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
import { sort } from '../../redux/actions/moviesActions';

const StyledGroup = styled(Dropdown)`
  display: inline-block;

  button: hover {
    background-color: #f65261;
  }
`;

const DropdownCustom = (props) => {
  const { sortType, sortBy } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const [dropdownValue, setValue] = useState(
    sortType === 'release_date' ? 'Release date' : 'Rating'
  );

  const handleClick = useCallback(
    (e) => {
      setValue(() => e.target.textContent);

      switch (e.target.textContent) {
        case 'Release date':
          sortBy('release_date');
          break;
        case 'Rating':
          sortBy('vote_average');
          break;
        default:
          break;
      }
    },
    [sortBy]
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
  sortType: PropTypes.string,
  sortBy: PropTypes.func,
};

const mapStateToProps = (state) => ({
  sortType: state.movieReducer.sort,
});

const mapDispatchToProps = (dispatch) => {
  return {
    sortBy: (value) => dispatch(sort(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownCustom);
