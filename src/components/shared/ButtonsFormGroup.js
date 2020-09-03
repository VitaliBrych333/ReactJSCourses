import React, { Component, Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
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

        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleReset(e) {
        console.log('reset', e.target);
    }

    handleClick(e) {
        console.log('click', e.target);
    }

    render() {
        return (
            <Fragment>
              <StyledDiv>
                  <Button variant="primary" onClick={this.handleReset}>
                      Reset
                  </Button>
                  <Button variant="primary" onClick={this.handleClick}>
                      {this.props.nameButton}
                  </Button>
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
