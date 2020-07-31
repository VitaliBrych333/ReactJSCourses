import React, { Component, Fragment } from 'react';
import NotFound from './NotFound';
import styled from 'styled-components';
import CardFilm from './CardFilm';
import { useParams } from "react-router";
import FilmDetails from './FilmDetails';
import { connect } from 'react-redux';

const StyledSection = styled.section`
    padding: 25px;
    background-color:  rgb(209, 189, 189);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    div {
        margin-bottom: 10px;
    }
`;

const DetailsPage = (props) => {
    let main;
    let { id } = useParams();

    if (props.filmId.data) {
        main = <StyledSection>
                  {props.data.map(item => <CardFilm key={item.id} info={item}/> )}
               </StyledSection>
    } else {
        main = <NotFound/>;
    }

    return (
        <Fragment>
            <FilmDetails propsId={{ id }}/>
            {main}
        </Fragment>
    );
};

const mapStateToProps = state => ({
    data: state.movieReducer.movies.data,
    filmId: state.movieReducer.filmId
});

export default connect(mapStateToProps)(DetailsPage);
