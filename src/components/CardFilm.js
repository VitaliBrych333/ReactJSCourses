import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Badge, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchMoviesByGenre, fetchMovieId } from '../redux/actions/moviesActions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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

    img:hover {
        cursor: pointer;
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

    .show {
        display: block;
        border-radius: 50%;
        background-color: gray;
        position: absolute;
        z-index: 2;
        margin: 5px 5px 0 197px;
    }

    .no-show {
        display: none;
    }
`;

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dotsIsVisible: "no-show"
        };

        this.showDots = this.showDots.bind(this);
        this.hideDots = this.hideDots.bind(this);
    }

    handleClick(e) {
        this.props.dispatch(
            fetchMoviesByGenre(this.props.sort, e.target.value));
    }

    handleRequests(e, array) {
        this.props.dispatch(
            fetchMovieId(this.props.info.id));

        // if (array.length) {
        //     this.props.dispatch(
        //       fetchMoviesByGenre(this.props.sort, array));
        // }
    }

    showDots() {
        this.setState({ dotsIsVisible: "show" });
    }

    hideDots() {
        this.setState({ dotsIsVisible: "no-show" });
    }

    render() {
        return (
            <StyledCard>
                <MoreVertIcon className={this.state.dotsIsVisible}/>
                <Card.Img variant="top"
                          src={this.props.info.poster_path}
                          onMouseEnter={this.showDots}
                          onMouseLeave={this.hideDots}
                />
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

Item.propTypes = {
    sort: PropTypes.string,
    info: PropTypes.shape({
        id : PropTypes.number,
        title: PropTypes.string,
        genres: PropTypes.array,
        release_date: PropTypes.string
    })
}

const mapStateToProps = state => ({
    data: state.movieReducer.movies.data,
    sort: state.criteriaReducer.sort
});

export default connect(mapStateToProps)(Item);
