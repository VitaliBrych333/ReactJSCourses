import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SearchFilm from "./shared/SearchFilm";
import ButtonsCriteriaSearch from "./shared/ButtonsCriteriaSearch";
import NavCustom from "./shared/NavCustom";

const StyledHeader = styled.header`
  height: 333px;
  background-color: rgb(161, 144, 144);

  .types {
    padding: 10px 50px;
    display: flex;
    margin-top: 50px;
    justify-content: space-between;
    background-color: rgb(90, 70, 70);
    color: beige;
  }

  .count-movie {
    padding-left: 50px;
    display: flex;
    justify-content: flex-end;
    color: beige;
  }

  .count-movie p {
    margin-left: 0;
  }

  .add-movie {
    margin: 40px;
    float: right;
  }

  .add-movie:hover {
    background-color: rgb(90, 70, 70);
  }

  div,
  button {
    text-transform: uppercase;
  }

  .count-movie {
    text-transform: lowercase;
  }

  .nav-item a:hover {
    border-bottom: 2px solid red;
  }

  .active {
    border-bottom: 2px solid red;
  }

  h1 {
    padding: 70px 0 20px 50px;
  }

  p {
    display: inline-block;
    margin: 0 20px 0 50px;
    padding-top: 5px;
  }

  .count {
    flex-grow: 1;
  }
`;

const SearchHeader = (props) => {
  return (
    <StyledHeader>
      <SearchFilm />
      <div className="types">
        <NavCustom />
        <ButtonsCriteriaSearch />
      </div>
      <div className="count-movie">
        {props.count > 0 && <p className="count">{props.count} Movies found</p>}
      </div>
    </StyledHeader>
  );
};

SearchHeader.propTypes = {
  count: PropTypes.number,
};

export default SearchHeader;
