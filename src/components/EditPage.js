import React, { Component, Fragment } from 'react';
import SearchHeader from './SearchHeader';
import NotFound from './NotFound';
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

class EditPage extends Component {
    state = {
      namePage: 'Edit movie',
      nameButton: 'Save',
      data: {
        id: 1,
        title: 'Moana',
        date: '2018-07-22',
        url: 'www.moana.com',
        genre: 'Comedy',
        overview: 'overview fake',
        time: 180
      }
    }

    render() {
        return (
            <Fragment>
                <StyledSection>
                    <FormInfo namePage={this.state.namePage}
                              nameButton={this.state.nameButton}
                              data={this.state.data}>
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

export default connect(mapStateToProps)(EditPage);
