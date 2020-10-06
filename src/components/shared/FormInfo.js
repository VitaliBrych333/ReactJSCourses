import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonsFormGroup from './ButtonsFormGroup';
import NamePage from './NamePage';
import selectOptions from './SelectOptions';
import {
  addMovie,
  updateMovie,
  setMoviesByGenre,
  fetchMoviesSuccess,
} from '../../redux/actions/moviesActions';
import { showEditPage, showAddPage } from '../../redux/actions/windowActions';

const StyledGroup = styled.div`
  label {
    color: #f65261;
    text-transform: uppercase;
  }
`;

const FormInfo = (props) => {
  const {
    dispatch,
    namePage,
    filmEdit,
    movies,
    moviesByCriteria,
    nameButton,
  } = props;

  const initialState = useMemo(
    () => ({
      title: '',
      release_date: '',
      poster_path: '',
      genres: '',
      overview: '',
      runtime: '',
    }),
    []
  );

  const [selectedOption, setSelectedOption] = useState(null);

  const setSelectValue = useCallback(() => {
    const { genres } = filmEdit;

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
  }, [filmEdit]);

  const [dataForm, setData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...dataForm, [name]: value });
  };

  const handleReset = useCallback(() => {
    setData({ ...dataForm, ...initialState });
    setSelectedOption(null);
  }, [dataForm, initialState]);

  const handleClose = useCallback(() => {
    switch (namePage) {
      case 'Edit movie':
        setData(filmEdit);
        setSelectValue();
        dispatch(showEditPage(false));
        break;

      case 'Add movie':
        handleReset();
        dispatch(showAddPage(false));
        break;

      default:
        break;
    }
  }, [namePage, filmEdit, setSelectValue, dispatch, handleReset]);

  const updateFilms = (films, editFilm) => {
    let objMovies = { ...films };

    objMovies.data.forEach((item) => {
      if (item.id === editFilm.id) {
        for (const key in item) {
          if (key !== 'id') {
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
        genres,
        overview: dataForm.overview,
        runtime: Number(dataForm.runtime),
      };

      if (e.target.innerHTML === 'Submit') {
        dispatch(addMovie(newFilm));
        handleClose();
      } else if (e.target.innerHTML === 'Save') {
        let editFilm = {};
        editFilm.id = Number(dataForm.id);
        editFilm.vote_average = filmEdit.vote_average;

        const updateFilm = Object.assign(editFilm, newFilm);

        dispatch(updateMovie(updateFilm));
        dispatch(setMoviesByGenre(updateFilms(moviesByCriteria, editFilm)));
        dispatch(fetchMoviesSuccess(updateFilms(movies, editFilm)));
      }
    },
    [
      selectedOption,
      dataForm,
      handleClose,
      filmEdit,
      dispatch,
      moviesByCriteria,
      movies,
    ]
  );

  useEffect(() => {
    if (namePage === 'Edit movie' && filmEdit) {
      setSelectValue();
      setData(filmEdit);
    }
  }, [namePage, filmEdit, setData, setSelectValue]);

  return (
    <StyledGroup>
      <Form>
        <NamePage namePage={namePage} handleClose={handleClose} />

        <Form.Group className={namePage}>
          {dataForm.id && (
            <>
              <Form.Label>Movie id</Form.Label>
              <Form.Control
                type="title"
                placeholder="Id"
                name="id"
                value={dataForm.id}
                readOnly
              />
            </>
          )}
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="title"
            placeholder="Title"
            name="title"
            value={dataForm.title || ''}
            onChange={handleChange}
          />

          <Form.Label>Release date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Select Date"
            name="release_date"
            value={dataForm.release_date || ''}
            onChange={handleChange}
          />

          <Form.Label>Movie URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="Movie URL here"
            name="poster_path"
            value={dataForm.poster_path || ''}
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
            value={dataForm.overview || ''}
            onChange={handleChange}
          />

          <Form.Label>Runtime</Form.Label>
          <Form.Control
            type="number"
            placeholder="Runtime here"
            name="runtime"
            value={dataForm.runtime || ''}
            onChange={handleChange}
          />
        </Form.Group>
        <ButtonsFormGroup
          nameButton={nameButton}
          handleReset={handleReset}
          handleSave={handleSave}
        />
      </Form>
    </StyledGroup>
  );
};

FormInfo.propTypes = {
  dispatch: PropTypes.func,
  filmEdit: PropTypes.shape({
    vote_average: PropTypes.number,
    genres: PropTypes.array,
  }),
  namePage: PropTypes.string,
  nameButton: PropTypes.string,
  moviesByCriteria: PropTypes.shape({
    data: PropTypes.array,
  }),
  movies: PropTypes.shape({
    data: PropTypes.array,
  }),
};

const mapStateToProps = (state) => ({
  filmEdit: state.movieReducer.filmEdit,
  moviesByCriteria: state.movieReducer.moviesByCriteria,
  movies: state.movieReducer.movies,
});

export default connect(mapStateToProps)(FormInfo);
