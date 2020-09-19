import React, { Fragment, useCallback, useState, createRef } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AddPage from '../AddPage';
import useLocalStorageState from './useLocalStorageState';
import { fetchMovies } from '../../redux/actions/moviesActions';
import { showAddPage } from '../../redux/actions/windowActions';
import { setGenre } from '../../redux/actions/criteriaActions';

const StyledGroup = styled(InputGroup)`
    padding: 0 50px;
    margin: 0 auto;
    max-width: 700px;

    .input-group-append {
        background-color: bisque;
    }
`;

const StyleDiv = styled.div`
    a {
        color: #F65261;
    }

    a:hover {
        text-decoration: none;
    }

    button:hover > a {
        color: #FFF;
  }
`
const SearchFilm = (props) => {

    const [controlValue, setValue] = useState({
        disabled: true,
        myRef: createRef()
    });

    const [defaultValue, setState] = useLocalStorageState('my-app-defaultValueSearch', '');

    const handleClick = useCallback(() => {
        document.querySelectorAll('.nav a').forEach(link => {
            link.style.borderBottom = 'none';
        });
        document.querySelector('.nav a').style.borderBottom = '2px solid red';

        props.dispatch(setGenre('All'));
        props.dispatch(
            fetchMovies(props.sort, controlValue.myRef.value));
    });

    const handleChange = useCallback(() => {
        setValue({ disabled: !controlValue.myRef.value });
        setState(controlValue.myRef.value);
    });

    const handleAdd = useCallback(() => {
        props.dispatch(showAddPage(true));
    });

    return (
        <Fragment>
            <StyleDiv>
                <AddPage />
                <Button className="add-movie"
                        variant="outline-danger"
                        onClick={handleAdd}>
                        + Add movie
                </Button>
                <h1>Find your movie</h1>
            </StyleDiv>
            <StyledGroup className="mb-3">
                <FormControl
                    placeholder="Please write the film name"
                    ref={controlInput => controlValue.myRef = controlInput}
                    onChange={handleChange}
                    defaultValue={defaultValue}
                />
                <InputGroup.Append>
                    <Button variant="outline-danger" onClick={handleClick} disabled={controlValue.disabled && !defaultValue}>Search</Button>
                </InputGroup.Append>
            </StyledGroup>
        </Fragment>
    );
};

SearchFilm.propTypes = {
    sort:  PropTypes.string,
    myInput: PropTypes.object,
};

const mapStateToProps = state => ({
    sort: state.criteriaReducer.sort
});

export default connect(mapStateToProps)(SearchFilm);
