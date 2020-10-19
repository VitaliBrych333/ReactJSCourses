/* eslint-disable no-use-before-define */
import React, { useEffect, useCallback } from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ButtonsFormGroup from './ButtonsFormGroup';
import NamePage from './NamePage';
import selectOptions from './SelectOptions';
import { addMovie, updateMovie } from '../../redux/actions/moviesActions';
import { showEditPage, showAddPage } from '../../redux/actions/windowActions';

const FormSchema = Yup.object({
  id: Yup.number().integer('Invalid format'),
  title: Yup.string().required('Required'),
  date: Yup.date().required('Required'),
  url: Yup.string().url('Invalid format').required('Required'),
  genre: Yup.string().nullable().required('Required'),
  overview: Yup.string().required('Required'),
  runtime: Yup.number()
    .integer('Invalid format')
    .positive('Invalid format')
    .required('Required'),
});

const updateFilms = (films, editFilm) => {
  let objMovies = JSON.parse(JSON.stringify(films));

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

const StyledGroup = styled.div`
  label {
    color: #f65261;
    text-transform: uppercase;
  }

  .error {
    color: green;
    text-transform: uppercase;
  }
`;

const FormInfo = (props) => {
  const {
    namePage,
    filmEdit,
    movies,
    moviesByCriteria,
    nameButton,
    updateAllFilms,
    addFilm,
    showEdit,
    showAdd,
  } = props;

  const initialValues = {
    id: '',
    title: '',
    date: '',
    url: '',
    genre: '',
    overview: '',
    runtime: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: FormSchema,

    onSubmit: useCallback(
      (values) => {
        let newFilm = {
          title: values.title,
          genres: Array.from(values.genre, (item) => item.label),
          release_date: values.date,
          poster_path: values.url,
          overview: values.overview,
          runtime: values.runtime,
        };

        if (nameButton === 'Submit') {
          addFilm(newFilm);
          handleClose();
        } else if (nameButton === 'Save') {
          newFilm.id = values.id;
          newFilm.vote_average = filmEdit.vote_average;

          const newMoviesByCriteria = updateFilms(moviesByCriteria, newFilm);
          const newMovies = updateFilms(movies, newFilm);

          updateAllFilms(newFilm, newMoviesByCriteria, newMovies);
        }
      },
      [
        addFilm,
        filmEdit,
        handleClose,
        movies,
        moviesByCriteria,
        nameButton,
        updateAllFilms,
      ]
    ),
  });

  const handleChange = (values) => {
    formik.setFieldValue('genre', values);
  };

  const handleReset = useCallback(() => {
    formik.resetForm();

    if (namePage === 'Edit movie') {
      formik.setFieldValue('id', filmEdit.id);
    }
  }, [formik, namePage, filmEdit]);

  const setEditValues = useCallback(() => {
    formik.setValues({
      id: filmEdit.id,
      title: filmEdit.title || '',
      date: filmEdit.release_date || '',
      url: filmEdit.poster_path || '',
      genre: filmEdit.genres.flatMap(
        (item) => new Object({ value: item.toLowerCase(), label: item })
      ),
      overview: filmEdit.overview || '',
      runtime: filmEdit.runtime || '',
    });
  }, [filmEdit, formik]);

  const handleClose = useCallback(() => {
    switch (namePage) {
      case 'Edit movie':
        setEditValues();
        showEdit(false);
        break;

      case 'Add movie':
        handleReset();
        showAdd(false);
        break;

      default:
        break;
    }
  }, [handleReset, namePage, setEditValues, showAdd, showEdit]);

  const handleMenuClose = () => {
    formik.setTouched({ genre: true });
  };

  useEffect(() => {
    if (namePage === 'Edit movie' && filmEdit && !formik.values.id) {
      setEditValues();
    }
  }, [filmEdit, namePage, setEditValues, formik]);

  return (
    <StyledGroup>
      <Form>
        <NamePage namePage={namePage} handleClose={handleClose} />

        <Form.Group className={namePage} data-testid="form">
          {namePage === 'Edit movie' && (
            <>
              <Form.Label>Movie id</Form.Label>
              <Form.Control
                type="number"
                value={formik.values.id}
                name="id"
                onChange={formik.handleChange}
                placeholder="Id"
                readOnly
              />
            </>
          )}

          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            value={formik.values.title}
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="error">{formik.errors.title}</div>
          ) : null}

          <Form.Label>Release date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Select Date"
            value={formik.values.date}
            name="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.date && formik.errors.date ? (
            <div className="error">{formik.errors.date}</div>
          ) : null}

          <Form.Label>Movie URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="Movie URL here"
            value={formik.values.url}
            name="url"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.url && formik.errors.url ? (
            <div className="error">{formik.errors.url}</div>
          ) : null}

          <Form.Label>Example select</Form.Label>
          <Select
            className="select"
            name="select"
            options={selectOptions}
            placeholder="Select Genre"
            value={formik.values.genre}
            isMulti="true"
            onChange={handleChange}
            onMenuClose={handleMenuClose}
          />
          {formik.touched.genre && formik.errors.genre ? (
            <div className="error">{formik.errors.genre}</div>
          ) : null}

          <Form.Label>Overview</Form.Label>
          <Form.Control
            type="text"
            placeholder="Overview here"
            value={formik.values.overview}
            name="overview"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.overview && formik.errors.overview ? (
            <div className="error">{formik.errors.overview}</div>
          ) : null}

          <Form.Label>Runtime</Form.Label>
          <Form.Control
            type="number"
            placeholder="Runtime here"
            value={formik.values.runtime}
            name="runtime"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.runtime && formik.errors.runtime ? (
            <div className="error">{formik.errors.runtime}</div>
          ) : null}
        </Form.Group>
        <ButtonsFormGroup
          nameButton={nameButton}
          handleReset={handleReset}
          handleSave={formik.submitForm}
          disabledSave={!(formik.dirty && formik.isValid)}
        />
      </Form>
    </StyledGroup>
  );
};

FormInfo.propTypes = {
  filmEdit: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.array,
    overview: PropTypes.string,
    runtime: PropTypes.number,
  }),
  namePage: PropTypes.string,
  nameButton: PropTypes.string,
  moviesByCriteria: PropTypes.shape({
    data: PropTypes.array,
  }),
  movies: PropTypes.shape({
    data: PropTypes.array,
  }),
  updateAllFilms: PropTypes.func,
  addFilm: PropTypes.func,
  showEdit: PropTypes.func,
  showAdd: PropTypes.func,
};

const mapStateToProps = (state) => ({
  filmEdit: state.windowReducer.filmEdit,
  moviesByCriteria: state.movieReducer.moviesByCriteria,
  movies: state.movieReducer.movies,
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateAllFilms: (newFilm, newMoviesByCriteria, newMovies) =>
      dispatch(updateMovie(newFilm, newMoviesByCriteria, newMovies)),
    addFilm: (value) => dispatch(addMovie(value)),
    showEdit: (value) => dispatch(showEditPage(value)),
    showAdd: (value) => dispatch(showAddPage(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormInfo);
