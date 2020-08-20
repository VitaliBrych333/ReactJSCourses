import React, { Component, Fragment } from 'react';
import { Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setSearch, setSort } from '../../redux/actions/criteriaActions';
import { sortRelease, sortRating } from '../../redux/actions/moviesActions';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 150px;
    margin-left: 190px;
    display: flex;
    justify-content: space-between;

    .btn-primary {
        background-color: #232323;
        border-color: #F65261;
        color: #F65261;
    }

    .btn-primary: hover {
        background-color: #F65261;
        color: #FFF;
    }
`;

class ButtonsFormGroup extends Component {
    constructor(props) {
        super(props);
        console.log('hhhhhhhhhhhhhhhhh', props)
    }

    render() {
        return (
            <Fragment>
              <StyledDiv>
                  <Button variant="primary" type="submit">
                      Reset
                  </Button>
                  <Button variant="primary" type="submit">{this.props.nameButton}</Button>
              </StyledDiv>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.movieReducer.movies,
    };
}

export default connect(mapStateToProps)(ButtonsFormGroup);
