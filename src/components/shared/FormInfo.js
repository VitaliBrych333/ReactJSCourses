import React, { Fragment, useEffect, useCallback } from 'react';
import Select from 'react-select'
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ButtonsFormGroup from './ButtonsFormGroup';
import NamePage from './NamePage';
import selectOptions from './SelectOptions';
import { addMovie, updateMovie, setMoviesByGenre, fetchMoviesSuccess } from '../../redux/actions/moviesActions';
import { showEditPage, showAddPage } from '../../redux/actions/windowActions';

const StyledGroup = styled.div`
    label {
        color: #F65261;
        text-transform: uppercase;
    }

    .error {
        color: green;
    }
`;

const FormInfo = (props) => {
    const initialValues = {
        id: '',
        title: '',
        date: '',
        url: '',
        genre: '',
        overview: '',
        runtime: ''
    };

    const FormSchema = Yup.object({
        id: Yup.number()
            .integer('Invalid format'),
        title: Yup.string()
            .required('Required'),
        date: Yup.date()
            .required('Required'),
        url: Yup.string()
            .url('Invalid format')
            .required('Required'),
        genre: Yup.string()
            .nullable()
            .required('Required'),
        overview: Yup.string()
            .required('Required'),
        runtime: Yup.number()
            .integer('Invalid format')
            .required('Required')
    });

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: FormSchema,
        onSubmit: values => {
            let newFilm = {
                title: values.title,
                genres: Array.from(values.genre, item => item['label']),
                release_date: values.date,
                poster_path: values.url,
                overview: values.overview,
                runtime: values.runtime,
            };

            if (props.nameButton === 'Submit') {
                props.dispatch(addMovie(newFilm));
                handleClose();

            } else if (props.nameButton === 'Save') {
                newFilm.id = values.id;
                newFilm.vote_average = props.filmEdit.vote_average;

                props.dispatch(updateMovie(newFilm));

                let objMovies = Object.assign({}, props.data);

                objMovies.data.forEach(item => {
                    if(item.id === newFilm.id) {
                        for(let key in item) {
                            if(key !== 'id') {
                              item[key] = newFilm[key]
                            }
                        }
                    }
                })

                props.dispatch(setMoviesByGenre(objMovies));
                props.dispatch(fetchMoviesSuccess(objMovies));
            }
        },
    });

    const handleChange = useCallback((values) => {
        formik.setFieldValue('genre', values);
        }, []
    );

    const handleReset = useCallback(() => {
        formik.resetForm();
        if (props.namePage === 'Edit movie') {
            formik.setFieldValue('id', props.filmEdit.id);
        }
    });

    const setEditValues = () => {
        formik.setValues({
            id: props.filmEdit.id,
            title: props.filmEdit.title || '',
            date: props.filmEdit.release_date || '',
            url: props.filmEdit.poster_path || '',
            genre: props.filmEdit.genres.flatMap(item => new Object({ value: item.toLowerCase(), label: item })),
            overview: props.filmEdit.overview || '',
            runtime: props.filmEdit.runtime || ''
        });
    };

    const handleClose = useCallback(() => {
        switch (props.namePage) {
            case 'Edit movie':
                setEditValues();
                props.dispatch(showEditPage(false));
                break;

            case 'Add movie':
                handleReset();
                props.dispatch(showAddPage(false));
                break;

            default:
                break;
        }
    });

    const handleMenuClose = () => {
        formik.setTouched({ genre: true });
    }

    useEffect(() => {
        if (props.namePage === 'Edit movie' && props.filmEdit) {
            setEditValues()
        }
    }, [props.filmEdit]);

    return (
        <StyledGroup>
            <Form>
                <NamePage namePage={props.namePage} handleClose={handleClose}></NamePage>

                <Form.Group className={props.namePage}>
                    {
                        (props.namePage === 'Edit movie') && <Fragment>
                                                                 <Form.Label>Movie id</Form.Label>
                                                                 <Form.Control type="number" value={formik.values.id} name="id" onChange={formik.handleChange} placeholder="Id" readOnly />
                                                             </Fragment>
                    }

                    <Form.Label>Title</Form.Label>
                    <Form.Control type="title" placeholder="Title" value={formik.values.title} name="title" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    { formik.touched.title && formik.errors.title ? <div className="error">{formik.errors.title}</div> : null }

                    <Form.Label>Release date</Form.Label>
                    <Form.Control type="date" placeholder="Select Date" value={formik.values.date} name="date" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    { formik.touched.date && formik.errors.date ? <div className="error">{formik.errors.date}</div> : null }


                    <Form.Label>Movie URL</Form.Label>
                    <Form.Control type="url" placeholder="Movie URL here" value={formik.values.url} name="url" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    { formik.touched.url && formik.errors.url ? <div className="error">{formik.errors.url}</div> : null }

                    <Form.Label>Example select</Form.Label>
                    <Select className="select" options={selectOptions} placeholder="Select Genre" value={formik.values.genre} isMulti="true" onChange={handleChange} onMenuClose={handleMenuClose}/>
                    { formik.touched.genre && formik.errors.genre ? <div className="error">{formik.errors.genre}</div> : null }


                    <Form.Label>Overview</Form.Label>
                    <Form.Control type="text" placeholder="Overview here" value={formik.values.overview} name="overview" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    { formik.touched.overview && formik.errors.overview ? <div className="error">{formik.errors.overview}</div> : null }


                    <Form.Label>Runtime</Form.Label>
                    <Form.Control type="number" placeholder="Runtime here" value={formik.values.runtime} name="runtime" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    { formik.touched.runtime && formik.errors.runtime ? <div className="error">{formik.errors.runtime}</div> : null }
                </Form.Group>
                <ButtonsFormGroup nameButton={props.nameButton} handleReset={handleReset} handleSave={formik.submitForm} disabledSave={!(formik.dirty && formik.isValid)}></ButtonsFormGroup>
            </Form>
      </StyledGroup>
    );
};

const mapStateToProps = state => ({
    showEditPage: state.windowReducer.showEditPage,
    showAddPage: state.windowReducer.showAddPage,
    filmEdit: state.movieReducer.filmEdit,
    data: state.movieReducer.moviesByCriteria,
});

export default connect(mapStateToProps)(FormInfo);
