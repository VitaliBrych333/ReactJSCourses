import React, { Component, Fragment } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AddPage from '../AddPage';
import { fetchMovies } from '../../redux/actions/moviesActions';
import { showAddPage } from '../../redux/actions/windowActions';

const StyledGroup = styled(InputGroup)`
    padding: 0 50px;
    margin: 0 auto;
    max-width: 700px;

    .input-group-append {
        background-color: bisque;
    }
`;

const StyleDiv = styled.div`
    a {
        color: #F65261;
    }

    a:hover {
        text-decoration: none;
    }

    button:hover > a {
        color: #FFF;
  }
`

class SearchFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kind: 'Search',
            left: 'Title',
            right: 'Genre',
            disabled: true
        };
    }

    handleClick = () => {
        this.props.dispatch(
            fetchMovies(this.props.sort, this.props.search, this.myInput.value));
    }

    handleChange = () => {
        const value = this.myInput.value;

        this.setState({ disabled: !value });
    }

    handleAdd = () => {
        this.props.dispatch(showAddPage(true));
    }

    render() {
        return (
            <Fragment>
                <StyleDiv>
                    <AddPage></AddPage>
                    <Button className="add-movie"
                            variant="outline-danger"
                            onClick={this.handleAdd}>
                        + Add movie
                    </Button>
                    <h1>Find your movie</h1>
                </StyleDiv>
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
        );
    };
};

SearchFilm.propTypes = {
    sort:  PropTypes.string,
    search: PropTypes.string,
    myInput: PropTypes.object,
};

const mapStateToProps = state => ({
    search: state.criteriaReducer.search,
    sort: state.criteriaReducer.sort
});

export default connect(mapStateToProps)(SearchFilm);
