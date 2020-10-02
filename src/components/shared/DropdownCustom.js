import React, { useState, useCallback } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { connect } from "react-redux";
import styled from "styled-components";
import { setSort } from "../../redux/actions/criteriaActions";
import { sortRelease, sortRating } from "../../redux/actions/moviesActions";

const StyledGroup = styled(Dropdown)`
  display: inline-block;

  button: hover {
    background-color: #f65261;
  }
`;

const DropdownCustom = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = useCallback(() => {
    setDropdownOpen((prevState) => !prevState);
  }, [dropdownOpen]);

  const [dropdownValue, setValue] = useState(
    props.sort === "release_date" ? "Release date" : "Rating"
  );

  const handleClick = useCallback(
    (e) => {
      setValue(() => e.target.textContent);

      switch (e.target.textContent) {
        case "Release date":
          props.dispatch(setSort("release_date"));
          props.dispatch(sortRelease(props.moviesByCriteria));
          break;
        case "Rating":
          props.dispatch(setSort("vote_average"));
          props.dispatch(sortRating(props.moviesByCriteria));
          break;
        default:
          break;
      }
    },
    [props.moviesByCriteria]
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

const mapStateToProps = (state) => ({
  sort: state.criteriaReducer.sort,
  moviesByCriteria: state.movieReducer.moviesByCriteria.data,
});

export default connect(mapStateToProps)(DropdownCustom);
