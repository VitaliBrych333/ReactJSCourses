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
  const { sortType, sort } = props;
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
      sort(e.target.textContent);
    },
    [sort]
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
  sort: PropTypes.func,
};

const mapStateToProps = (state) => ({
  sortType: state.movieReducer.sort,
});

const mapDispatchToProps = {
  sort,
};

export default connect(mapStateToProps, mapDispatchToProps)(DropdownCustom);
