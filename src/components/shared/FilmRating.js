import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    }

    h3 {
        margin-right: 15px;
        margin-top: 5px;
    }

    & span {
        display: block;
        font-size: 12px;
    }
`;

const Rating = (props) => {
    return (
        <StyledDiv>
            <h3>{props.propValue.title} <span>{props.propValue.tagline}</span></h3>
            <div>{props.propValue.vote_average}</div>
        </StyledDiv>
    );
};

Rating.propTypes = {
    propValue: PropTypes.shape({
        title: PropTypes.string,
        vote_average: PropTypes.number
    })
}

export default Rating;
