import React, { Component, Fragment } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMovies } from '../../redux/actions/moviesActions';
import styled from 'styled-components';

const StyledGroup = styled(InputGroup)`
    padding: 0 50px;
    margin: 0 auto;
    max-width: 700px;

    .input-group-append {
        background-color: bisque;
    }
`;

class SearchFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kind: 'Search',
            left: 'Title',
            right: 'Genre',
            disabled: true
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        this.props.dispatch(
            fetchMovies(this.props.sort, this.props.search, this.myInput.value));
    }

    handleChange() {
        const value = this.myInput.value;

        this.setState({ disabled: !value });
    }

    render() {
        return (
            <Fragment>
                <Button className="add-movie" variant="outline-danger" onClick={this.handleClick} disabled={this.state.disabled}>+ Add movie</Button>
                <h1>Find your movie</h1>
                <StyledGroup className="mb-3">
                    <FormControl
                        placeholder="Please write the film name"
                        ref={value => { this.myInput = value; }}
                        onChange={this.handleChange}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-danger" onClick={this.handleClick} disabled={this.state.disabled}>Search</Button>
                    </InputGroup.Append>
                </StyledGroup>
            </Fragment>
        )
    }
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
