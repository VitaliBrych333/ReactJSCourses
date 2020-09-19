import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

const StyledDiv = styled.div`
    display: flex;
    padding-top: 10px;

    div {
        border: 2px solid red;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        text-align: center;
        padding: 7px;
        font-size: 20px;
        cursor: default
    }

    h3 {
        margin-right: 15px;
        margin-top: 5px;
        cursor: default;
    }

    & span {
        display: block;
        font-size: 12px;
    }
`;

const Rating = (props) => {
    const filmId = props.filmId;
    return (
        <StyledDiv>
            <h3>{filmId.title} <span>{filmId.tagline}</span></h3>
            <div>{filmId.vote_average}</div>
        </StyledDiv>
    );
};

Rating.propTypes = {
    filmId: PropTypes.object
};

const mapStateToProps = state => ({
    filmId: state.movieReducer.filmId.data,
});

export default connect(mapStateToProps)(Rating);


