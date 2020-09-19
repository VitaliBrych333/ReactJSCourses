import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 173px;
    margin-left: 170px;
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
    render() {
        return (
            <StyledDiv>
                <Button variant="primary" onClick={this.props.handleReset}>
                    Reset
                </Button>
                <Button variant="primary" onClick={this.props.handleSave}>
                    {this.props.nameButton}
                </Button>
            </StyledDiv>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.movieReducer.moviesByCriteria,
    };
}

export default connect(mapStateToProps)(ButtonsFormGroup);
