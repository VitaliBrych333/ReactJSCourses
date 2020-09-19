import React, { Fragment, useState, useEffect, useCallback, createRef } from 'react';
import Select from 'react-select'
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';
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
`;

const FormInfo = (props) => {
    let elemInputs = [];
    let saveInputs = [];

    const dataForm = {
        id: '',
        title: null,
        release_date: null,
        poster_path: null,
        overview: null,
        time: null
    };

    const [selectedOption, setSelectedOption] = useState(null);
    const [controlForm] = useState({
        id: createRef(),
        title: createRef(),
        date: createRef(),
        url: createRef(),
        select: createRef(),
        overview: createRef(),
        runtime: createRef()
    });

    const setDataForm = () => {
        controlForm.id.value = props.filmEdit.id;
        controlForm.title.value = props.filmEdit.title;
        controlForm.date.value = props.filmEdit.release_date;
        controlForm.url.value = props.filmEdit.poster_path;
        controlForm.overview.value = props.filmEdit.overview;
        controlForm.runtime.value = props.filmEdit.runtime;
    }

    const handleChange = useCallback(() => {
        setSelectedOption()
        }, []
    );

    const getInputs = () => {
        if (props.showEditPage) {
            elemInputs = document.querySelectorAll('.Edit input');

        } else if (props.showAddPage) {
            elemInputs = document.querySelectorAll('.Add input');
        }
    };

    const handleReset = useCallback(() => {
        getInputs();

        if (elemInputs.length) {
            elemInputs.forEach(input => {
                saveInputs.push(input.value);
                input.value = '';
            });
        }

        setSelectedOption(null);
    });

    const handleClose = useCallback(() => {
        switch (props.namePage) {
            case 'Edit movie':
                setDataForm();
                setSelectValue();
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

    const setSelectValue = () => {
        if (props.filmEdit.genres.length) {
            let selectedValue = [];
            selectOptions.forEach(item => {
                if (props.filmEdit.genres.includes(item.label)) {
                  selectedValue.push(item);
                }
            });

            if (selectedValue.length) {
                setSelectedOption(selectedValue);
            }
        }
    }

    const handleSave = (e) => {
        let genres = [];

        if (controlForm.select.state.value && controlForm.select.state.value.length) {
            controlForm.select.state.value.forEach(item => genres.push(item.label))
        }

        const newFilm = {
            title: controlForm.title.value,
            release_date: controlForm.date.value,
            poster_path: controlForm.url.value,
            overview: controlForm.overview.value,
            runtime: Number(controlForm.runtime.value),
        };

        if (e.target.innerHTML === 'Submit') {
            newFilm.genres = genres;

            props.dispatch(addMovie(newFilm));
            handleClose();

        } else if (e.target.innerHTML === 'Save') {
            let editFilm = {};

            editFilm.genres = props.filmEdit.genres
            editFilm.id = Number(controlForm.id.value);
            editFilm.vote_average =  props.filmEdit.vote_average;

            if (!selectedOption) {
                editFilm.genres = genres;
            }

            const updateFilm = Object.assign(editFilm, newFilm);

            props.dispatch(updateMovie(updateFilm));

            let objMovies = Object.assign({}, props.data);

            objMovies.data.forEach(item => {
                if(item.id === editFilm.id) {
                    for(let key in item) {
                        if(key !== 'id') {
                          item[key] = editFilm[key]
                        }
                    }
                }
            })

            props.dispatch(setMoviesByGenre(objMovies));
            props.dispatch(fetchMoviesSuccess(objMovies));
        }
    }

    useEffect(() => {
        if (props.namePage === 'Edit movie' && props.filmEdit) {
            setSelectValue();
            setDataForm();
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
                                                                 <Form.Control ref={value=> controlForm.id = value} type="number" placeholder="Id" defaultValue={dataForm.id} readOnly/>
                                                             </Fragment>
                    }
                    <Form.Label>Title</Form.Label>
                    <Form.Control ref={value=> controlForm.title = value} type="title" placeholder="Title" defaultValue={dataForm.title}/>

                    <Form.Label>Release date</Form.Label>
                    <Form.Control ref={value=> controlForm.date = value} type="date" placeholder="Select Date" defaultValue={dataForm.release_date} />

                    <Form.Label>Movie URL</Form.Label>
                    <Form.Control ref={value=> controlForm.url = value} type="url" placeholder="Movie URL here" defaultValue={dataForm.poster_path} />

                    <Form.Label>Example select</Form.Label>
                    <Select ref={value=> controlForm.select = value} className="select" options={selectOptions} placeholder="Select Genre" isMulti="true" onChange={handleChange} value={selectedOption} />

                    <Form.Label>Overview</Form.Label>
                    <Form.Control ref={value=> controlForm.overview = value} type="text" placeholder="Overview here" defaultValue={dataForm.overview}/>

                    <Form.Label>Runtime</Form.Label>
                    <Form.Control ref={value=> controlForm.runtime = value} type="number" placeholder="Runtime here" defaultValue={dataForm.time}/>
                </Form.Group>
                <ButtonsFormGroup nameButton={props.nameButton} handleReset={handleReset} handleSave={handleSave}></ButtonsFormGroup>
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
