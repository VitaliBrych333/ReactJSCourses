import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
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
        }
    }

    handleClick() {
        this.props.dispatch(
            fetchMovies(this.props.sort, this.props.search, this.myInput.value));
    }

    handleChange() {
        const value = this.myInput.value;

        value ? this.setState({disabled: false})
              : this.setState({disabled: true})
    }

    render() {
        return (
            <Fragment>
                <StyleDiv>
                    <Button className="add-movie" variant="outline-danger">
                        <Link to={{pathname: '/add'}}>+ Add movie</Link>
                    </Button>
                    <h1>Find your movie</h1>
                </StyleDiv>
                <StyledGroup className="mb-3">
                    <FormControl
                        placeholder="Please write the film name"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        ref={value => { this.myInput = value; }}
                        onChange={() => this.handleChange()}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-danger" onClick={this.handleClick.bind(this)} disabled={this.state.disabled}>Search</Button>
                    </InputGroup.Append>
                </StyledGroup>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    search: state.criteriaReducer.search,
    sort: state.criteriaReducer.sort
});

export default connect(mapStateToProps)(SearchFilm);
