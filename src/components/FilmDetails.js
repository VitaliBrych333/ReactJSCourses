import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Duration from './shared/FilmDuration';
import Rating from './shared/FilmRating';
import SignSearch from './shared/SignSearch';
import styled from 'styled-components'
import { connect } from 'react-redux';

const StyledWrapper = styled.div`
    display: flex;
    margin: 20px;

    img {
        margin-right: 30px;
        width: 150px;
        height: 220px;
    }

    .describe {
        height: 220px;
    }

    & p:nth-child(3) {
        margin: 0;
        width: 100%;
        height: 125px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const StyledDiv = styled.div`
    padding: 10px 50px;
    background-color: rgb(90, 70, 70);
    color: beige;
    height: 45px;
`;

const Details = (props) => {
    const value = props.filmId.data;
    return (
        <Fragment>
            <SignSearch/>
                {
                    value && <Fragment>
                                  <StyledWrapper>
                                      <img src={value.poster_path} width="200" height="200" alt="Picture film"/>
                                      <div className="describe">
                                          <Rating propValue={value}/>
                                          <Duration propValue={value}/>
                                          <p>{value.overview}</p>
                                      </div>
                                  </StyledWrapper>
                                  <StyledDiv>
                                      <p>{value.genres.join(' ')}</p>
                                  </StyledDiv>
                              </Fragment>
                    }
            </Fragment>
        )
};

Details.propTypes = {
    filmId: PropTypes.shape({
        data: PropTypes.shape({
            poster_path: PropTypes.string,
            overview: PropTypes.string,
            genres: PropTypes.array
        })
    })
}

const mapStateToProps = state => ({
    data: state.movieReducer.movies.data,
    filmId: state.movieReducer.filmId
});

export default connect(mapStateToProps)(Details);
