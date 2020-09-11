import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import CardFilm from './CardFilm';
import FilmDetails from './FilmDetails';
import EditPage from './EditPage';
import DeleteWindow from './DeleteWindow';
import NotFound from './NotFound';

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
            <EditPage></EditPage>
            <DeleteWindow></DeleteWindow>
            <FilmDetails propsId={{ id }}/>
            {main}
        </Fragment>
    );
};

DetailsPage.propTypes = {
    data: PropTypes.array,
    filmId: PropTypes.shape({
        data: PropTypes.object
    })
};

const mapStateToProps = state => ({
    data: state.movieReducer.movies.data,
    filmId: state.movieReducer.filmId
});

export default connect(mapStateToProps)(DetailsPage);
