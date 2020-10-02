import React, { Fragment, useState, useEffect, useCallback } from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";
import { connect } from "react-redux";
import styled from "styled-components";
import ButtonsFormGroup from "./ButtonsFormGroup";
import NamePage from "./NamePage";
import selectOptions from "./SelectOptions";
import {
  addMovie,
  updateMovie,
  setMoviesByGenre,
  fetchMoviesSuccess,
} from "../../redux/actions/moviesActions";
import { showEditPage, showAddPage } from "../../redux/actions/windowActions";

const StyledGroup = styled.div`
  label {
    color: #f65261;
    text-transform: uppercase;
  }
`;

const FormInfo = (props) => {
  const initialState = {
    title: "",
    release_date: "",
    poster_path: "",
    genres: "",
    overview: "",
    runtime: "",
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const setSelectValue = useCallback(() => {
    let genres = props.filmEdit.genres;

    if (genres.length) {
      let selectedValue = [];
      selectOptions.forEach((item) => {
        if (genres.includes(item.label)) {
          selectedValue.push(item);
        }
      });

      if (selectedValue.length) {
        setSelectedOption(selectedValue);
      }
    }
  }, [props.filmEdit]);

  const [dataForm, setData] = useState(initialState);

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setData({ ...dataForm, [field]: value });
  };

  const handleReset = useCallback(() => {
    setData(Object.assign({ ...dataForm }, initialState));
    setSelectedOption(null);
  }, [dataForm]);

  const handleClose = useCallback(() => {
    switch (props.namePage) {
      case "Edit movie":
        setData(props.filmEdit);
        setSelectValue();
        props.dispatch(showEditPage(false));
        break;

      case "Add movie":
        handleReset();
        props.dispatch(showAddPage(false));
        break;

      default:
        break;
    }
  }, [props.namePage, props.filmEdit]);

  const updateFilms = (films, editFilm) => {
    let objMovies = Object.assign({}, films);

    objMovies.data.forEach((item) => {
      if (item.id === editFilm.id) {
        for (let key in item) {
          if (key !== "id") {
            item[key] = editFilm[key];
          }
        }
      }
    });

    return objMovies;
  };

  const handleSave = useCallback(
    (e) => {
      let genres = [];

      if (selectedOption && selectedOption.length) {
        selectedOption.forEach((item) => genres.push(item.label));
      }

      const newFilm = {
        title: dataForm.title,
        release_date: dataForm.release_date,
        poster_path: dataForm.poster_path,
        genres: genres,
        overview: dataForm.overview,
        runtime: Number(dataForm.runtime),
      };

      if (e.target.innerHTML === "Submit") {
        props.dispatch(addMovie(newFilm));
        handleClose();
      } else if (e.target.innerHTML === "Save") {
        let editFilm = {};
        editFilm.id = Number(dataForm.id);
        editFilm.vote_average = props.filmEdit.vote_average;

        const updateFilm = Object.assign(editFilm, newFilm);

        props.dispatch(updateMovie(updateFilm));
        props.dispatch(
          setMoviesByGenre(updateFilms(props.moviesByCriteria, editFilm))
        );
        props.dispatch(fetchMoviesSuccess(updateFilms(props.movies, editFilm)));
      }
    },
    [selectedOption, dataForm, props.filmEdit, props.data]
  );

  useEffect(() => {
    if (props.namePage === "Edit movie" && props.filmEdit) {
      setSelectValue();
      setData(props.filmEdit);
    }
  }, [props.namePage, props.filmEdit]);

  return (
    <StyledGroup>
      <Form>
        <NamePage
          namePage={props.namePage}
          handleClose={handleClose}
        ></NamePage>

        <Form.Group className={props.namePage}>
          {dataForm.id && (
            <Fragment>
              <Form.Label>Movie id</Form.Label>
              <Form.Control
                type="title"
                placeholder="Id"
                name="id"
                value={dataForm.id}
                readOnly
              />
            </Fragment>
          )}
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="title"
            placeholder="Title"
            name="title"
            value={dataForm.title}
            onChange={handleChange}
          />

          <Form.Label>Release date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Select Date"
            name="release_date"
            value={dataForm.release_date}
            onChange={handleChange}
          />

          <Form.Label>Movie URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="Movie URL here"
            name="poster_path"
            value={dataForm.poster_path}
            onChange={handleChange}
          />

          <Form.Label>Example select</Form.Label>
          <Select
            className="select"
            options={selectOptions}
            placeholder="Select Genre"
            isMulti="true"
            value={selectedOption}
            onChange={setSelectedOption}
          />

          <Form.Label>Overview</Form.Label>
          <Form.Control
            type="text"
            placeholder="Overview here"
            name="overview"
            value={dataForm.overview}
            onChange={handleChange}
          />

          <Form.Label>Runtime</Form.Label>
          <Form.Control
            type="number"
            placeholder="Runtime here"
            name="runtime"
            value={dataForm.runtime}
            onChange={handleChange}
          />
        </Form.Group>
        <ButtonsFormGroup
          nameButton={props.nameButton}
          handleReset={handleReset}
          handleSave={handleSave}
        ></ButtonsFormGroup>
      </Form>
    </StyledGroup>
  );
};

const mapStateToProps = (state) => ({
  filmEdit: state.movieReducer.filmEdit,
  moviesByCriteria: state.movieReducer.moviesByCriteria,
  movies: state.movieReducer.movies,
});

export default connect(mapStateToProps)(FormInfo);
