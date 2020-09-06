import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ButtonsFormGroup from './ButtonsFormGroup';
import NamePage from './NamePage';
import { setEditFilm } from '../../redux/actions/moviesActions';
import { showEditPage, showAddPage } from '../../redux/actions/windowActions';

const StyledGroup = styled.div`
    label {
        color: #F65261;
    }
`;

const FormInfo = (props) => {
    let elemInputs = [];
    let saveInputs = [];

    const initialState = {
        id: '',
        title: null,
        date: null,
        url: null,
        overview: null,
        time: null
    };

    const [genreState] = useState(['Select Genre', 'Horror', 'Action', 'Comedy']);
    const [valueState, setValue] = useState(genreState[0]);
    const [dataForm, setData] = useState(initialState);

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
        }, []
    );

    const getInputs = () => {
        if (props.showEditPage) {
            elemInputs = document.querySelectorAll('.Edit input');

        } else if (props.showAddPage) {
            elemInputs = document.querySelectorAll('.Add input');
        }
    };

    const handleReset =  useCallback(() => {
        getInputs();

        if (elemInputs.length) {
            elemInputs.forEach(input => {
                saveInputs.push(input.value);
                input.value = '';
            });
        }

        setValue(genreState[0]);
    });

    const handleClose = useCallback(() => {
        switch (props.namePage) {
            case 'Edit movie':
                getInputs();

                // need for mock data and recovery Reset function
                elemInputs.forEach((input, index) => {
                    input.value = props.filmEdit[index];
                });
                setValue(props.filmEdit[props.filmEdit.length - 1])

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

    useEffect(() => {
        let isMounted = true;

        setTimeout(() => {
            const newDate = props.data;
            if (isMounted && newDate) {
                setValue(newDate.genre);
                setData(newDate);

                // need for mock data and recovery Reset function
                elemInputs = document.querySelectorAll('.Edit input')
                elemInputs.forEach(input => {
                    saveInputs.push(input.value);
                });
                saveInputs.push(newDate.genre);

                props.dispatch(setEditFilm(saveInputs));
            }
        }, 500);

        return () => { isMounted = false };
    }, []);

    return (
        <StyledGroup>
            <Form>
                <NamePage namePage={props.namePage} handleClose={handleClose}></NamePage>

                <Form.Group className={props.namePage}>
                    {
                        dataForm.id && <Fragment>
                                           <Form.Label>Movie id</Form.Label>
                                           <Form.Control type="title" placeholder="Id" defaultValue={dataForm.id}/>
                                       </Fragment>
                    }
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="title" placeholder="Title" defaultValue={dataForm.title}/>

                    <Form.Label>Release date</Form.Label>
                    <Form.Control type="date" placeholder="Select Date" defaultValue={dataForm.date} />

                    <Form.Label>Movie URL</Form.Label>
                    <Form.Control type="url" placeholder="Movie URL here" defaultValue={dataForm.url} />

                    <Form.Label>Example select</Form.Label>
                    <Form.Control as="select" placeholder="Select Genre" value={valueState} onChange={handleChange}>
                        {genreState.map((item, index) => <option key={index} value={item}>{item}</option> )}
                    </Form.Control>

                    <Form.Label>Overview</Form.Label>
                    <Form.Control type="text" placeholder="Overview here" defaultValue={dataForm.overview}/>

                    <Form.Label>Runtime</Form.Label>
                    <Form.Control type="number" placeholder="Runtime here" defaultValue={dataForm.time}/>
                </Form.Group>
                <ButtonsFormGroup nameButton={props.nameButton} handleReset={handleReset}></ButtonsFormGroup>
            </Form>
      </StyledGroup>
    );
};

const mapStateToProps = state => ({
    showEditPage: state.windowReducer.showEditPage,
    showAddPage: state.windowReducer.showAddPage,
    filmEdit: state.movieReducer.filmEdit
});

export default connect(mapStateToProps)(FormInfo);
