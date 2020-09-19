import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { connect } from 'react-redux';
import Duration from './shared/FilmDuration';
import Rating from './shared/FilmRating';
import SignSearch from './shared/SignSearch';
import NavCustom from './shared/NavCustom';
import ButtonsCriteriaSearch from './shared/ButtonsCriteriaSearch';

const StyledWrapper = styled.div`
    display: flex;
    margin: 0 50px 20px;
    background-color: rgb(161,144,144);

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

    p {
        cursor: default;
    }
`;

const StyledHeader = styled.header`
    background-color: rgb(161,144,144);

    .types {
        padding: 10px 50px;
        display: flex;
        margin-top: 50px;
        justify-content: space-between;
        background-color: rgb(90, 70, 70);
        color: beige;
    }

    .count-movie {
        padding-left: 50px;
        display: flex;
        justify-content: flex-end;
        color: beige;
    }

    .count-movie p {
        margin-left: 0;
    }

    .add-movie {
        margin: 40px;
        float: right;
    }

    .add-movie:hover {
        background-color: rgb(90, 70, 70);
    }

    div, button {
        text-transform: uppercase;
    }

    .count-movie {
      text-transform: lowercase;
    }

    .nav-item a:hover {
        border-bottom: 2px solid red;
    }

    h1 {
        padding: 70px 0 20px 50px;
    }

    p {
        display: inline-block;
        margin:  0 20px 0 50px;
        padding-top: 5px;
    }

    .count {
        flex-grow: 1;
    }
`;

const Details = (props) => {
    const value = props.filmId.data;

    return (
        <Fragment>
            <SignSearch/>
                {
                    value && <Fragment>
                                  <StyledHeader>
                                      <StyledWrapper>
                                          <img src={value.poster_path} width="200" height="200" alt="Picture film"/>
                                          <div className="describe">
                                              <Rating />
                                              <Duration />
                                              <p>{value.overview}</p>
                                          </div>
                                      </StyledWrapper>

                                      <div className="types">
                                          <NavCustom></NavCustom>
                                          <ButtonsCriteriaSearch />
                                      </div>
                                          <div className="count-movie">
                                              {props.total > 0 && <p className="count">{props.total} Movies found</p>}
                                          </div>
                                  </StyledHeader>
                              </Fragment>
                }
        </Fragment>
    );
};

Details.propTypes = {
    filmId: PropTypes.shape({
        data: PropTypes.shape({
            poster_path: PropTypes.string,
            overview: PropTypes.string,
            genres: PropTypes.array
        })
    })
};

const mapStateToProps = state => ({
    data: state.movieReducer.moviesByCriteria.data,
    filmId: state.movieReducer.filmId,
    total: state.movieReducer.moviesByCriteria.totalAmount,
});

export default connect(mapStateToProps)(Details);
