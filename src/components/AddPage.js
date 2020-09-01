import React, { Component, Fragment } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import FormInfo from './shared/FormInfo';

const StyledSection = styled.section`
    width: 400px;
    padding: 25px;
    margin: 50px auto;
    border: 3px solid black;
    background-color: #424242;
    div {
        margin-bottom: 10px;
    }
`;

class AddPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            namePage: 'Add movie',
            nameButton: 'Submit',
        };
    }

    render() {
        return (
            <Fragment>
                <StyledSection>
                    <FormInfo namePage={this.state.namePage}
                              nameButton={this.state.nameButton}
                              >
                    </FormInfo>
                </StyledSection>
            </Fragment>
        );
    }
};

const mapStateToProps = state => ({
    data: state.movieReducer.movies.data,
    total: state.movieReducer.movies.total,
    loading: state.movieReducer.loading,
    error: state.movieReducer.error,
});

export default connect(mapStateToProps)(AddPage);
