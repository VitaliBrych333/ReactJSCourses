import React, { Component } from 'react';
import { Badge, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchMoviesByGenre, fetchMovieId } from '../redux/actions/moviesActions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCartTitle = styled(Card.Title)`
    display: flex;
    justify-content: space-between;

    a {
        color: #212;
    }
`;

const StyledCard = styled(Card)`
    width: 230px;
    border: none;
    display: flex;
    flex-direction: column;
    margin-right: 10px;

    .card-body {
        padding-bottom: 10px;
        padding-top: 10px;
    }

    .card-text button {
        background: none;
        border: none;
        color: #212529;
        padding: 0;
    }

    img {
        width: 230px;
        height: 300px;
    }

    .card-text, .card-text p {
        margin: 0;
        padding: 0;
        font-size: 14px;
    }

    span {
        height: 24px;
    }

    button {
        margin-right: 3px;
    }

    button:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

class Item extends Component {

    handleClick(e) {
        this.props.dispatch(
            fetchMoviesByGenre(this.props.sort, e.target.value));
    }

    handleRequests(e, array) {
        this.props.dispatch(
            fetchMovieId(this.props.info.id));

        if (array.length) {
            this.props.dispatch(
              fetchMoviesByGenre(this.props.sort, array));
        }
    }

    render() {
        return (
            <StyledCard>
                <Card.Img variant="top" src={this.props.info.poster_path} />
                <Card.Body>
                    <StyledCartTitle>
                        <Link to={{pathname: `/movies/${this.props.info.id}`}} onClick={e => this.handleRequests(e, this.props.info.genres)}>{this.props.info.title}</Link>
                        <Badge variant="secondary">{this.props.info.release_date.trim().slice(0, 4)}</Badge>
                    </StyledCartTitle>
                    <Card.Text>
                        {this.props.info.genres.map((item, index) => <button onClick={e => this.handleClick(e, 'value')} value={item} href='#' key={index} info={item} variant="secondary">{item}</button> )}
                    </Card.Text>
                </Card.Body>
            </StyledCard>
        )
    }
}

const mapStateToProps = state => ({
    data: state.movieReducer.movies.data,
    sort: state.criteriaReducer.sort
});

export default connect(mapStateToProps)(Item);
