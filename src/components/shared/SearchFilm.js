import React, { Fragment, useCallback, useState, createRef } from 'react';
import { Link } from 'react-router-dom';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMovies } from '../../redux/actions/moviesActions';
import useLocalStorageState from './useLocalStorageState';
import styled from 'styled-components';

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
        kind: 'Search',
        left: 'Title',
        right: 'Genre',
        disabled: true,
        myRef: createRef()
    });

    const [defaultValue, setState] = useLocalStorageState('my-app-defaultValueSearch', '');

    const handleClick = useCallback(() => {
        props.dispatch(
            fetchMovies(props.sort, props.search, controlValue.myRef.value));
    });

    const handleChange = useCallback(() => {
        setValue({ disabled: !controlValue.myRef.value });
        setState(controlValue.myRef.value);
    });

    return (
        <Fragment>
            <StyleDiv>
                <Button className="add-movie" variant="outline-danger">
                    <Link to={{pathname: '/add'}}>+ Add movie</Link>
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
    )
}

SearchFilm.propTypes = {
    sort:  PropTypes.string,
    search: PropTypes.string,
    myInput: PropTypes.object,
}

const mapStateToProps = state => ({
    search: state.criteriaReducer.search,
    sort: state.criteriaReducer.sort
});

export default connect(mapStateToProps)(SearchFilm);
