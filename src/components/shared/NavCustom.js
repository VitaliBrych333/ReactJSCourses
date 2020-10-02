import React, { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { setGenre } from "../../redux/actions/criteriaActions";
import {
  filterByGenre,
  setMoviesByGenre,
} from "../../redux/actions/moviesActions";
import { sortRating, sortRelease } from "../../redux/actions/moviesActions";

const NavCustom = (props) => {
  const [active, setActive] = useState("All");

  const handleSelect = (selectedKey) => {
    props.dispatch(setGenre(selectedKey));
    props.dispatch(setMoviesByGenre(props.movies));

    props.sort === "vote_average"
      ? props.dispatch(sortRating(props.moviesByCriteria))
      : props.dispatch(sortRelease(props.moviesByCriteria));

    selectedKey !== "All"
      ? props.dispatch(filterByGenre(props.movies.data, selectedKey))
      : undefined;
  };

  useEffect(() => {
    setActive(props.genre);
  }, [props.genre]);

  return (
    <Nav activeKey="/home" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="All" className={active === "All" ? "active" : ""}>
          All
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="Documentary"
          className={active === "Documentary" ? "active" : ""}
        >
          Documentary
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="Comedy"
          className={active === "Comedy" ? "active" : ""}
        >
          Comedy
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="Horror"
          className={active === "Horror" ? "active" : ""}
        >
          Horror
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="Crime"
          className={active === "Crime" ? "active" : ""}
        >
          Crime
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

const mapStateToProps = (state) => ({
  moviesByCriteria: state.movieReducer.moviesByCriteria.data,
  movies: state.movieReducer.movies,
  sort: state.criteriaReducer.sort,
  genre: state.criteriaReducer.genre,
});

export default connect(mapStateToProps)(NavCustom);
