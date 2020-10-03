import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovies } from "../redux/actions/moviesActions";
import StartPage from "./StartPage";

const useQuery = () => new URLSearchParams(useLocation().search);

const MoviesPage = (props) => {
  const query = useQuery();
  const history = useHistory();
  const sortBy = query.get('sortBy');
  const search = query.get('search');

  useEffect(() => {
    (!sortBy || !search) ? history.push('/')
                         : props.dispatch(fetchMovies(sortBy, search));
  }, [sortBy, search]);

  return (
    <StartPage />
  );
};

export default connect()(MoviesPage);
