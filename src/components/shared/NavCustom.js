import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setGenre } from '../../redux/actions/criteriaActions';
import { filterByGenre, setMoviesByGenre } from '../../redux/actions/moviesActions';

class NavCustom extends Component {
    handleClick = (e) => {
        e.target.parentElement.parentElement.childNodes.forEach(item => {
            item.childNodes[0].style.borderBottom = 'none';
        })
        e.target.style.borderBottom = '2px solid red';

        this.props.dispatch(setGenre(e.target.innerHTML));
        this.props.dispatch(setMoviesByGenre(this.props.movies));

        if (e.target.innerHTML !== 'All') {
            this.props.dispatch(filterByGenre(this.props.movies.data, e.target.innerHTML))
        }
    }

    render() {
        return (
            <Nav activeKey="/home"
                onClick={this.handleClick}>
                <Nav.Item>
                    <Nav.Link eventKey="All" style={{borderBottom: "2px solid red"}}>All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Documentary">Documentary</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Comedy">Comedy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Horror">Horror</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Crime">Crime</Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }
}

const mapStateToProps = state => ({
    moviesByCriteria: state.movieReducer.moviesByCriteria.data,
    movies: state.movieReducer.movies,
});

export default connect(mapStateToProps)(NavCustom);

