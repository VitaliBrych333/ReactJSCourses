import React, { Component, Fragment } from 'react';
import SearchHeader from './SearchHeader';
import NotFound from './NotFound';
import styled from 'styled-components'
import { connect } from 'react-redux';
import CardFilm from './CardFilm';

const StyledSection = styled.section`
    padding: 25px;
    background-color:  rgb(209, 189, 189);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    div {
        margin-bottom: 10px;
    }
`;

class StartPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { error, loading, data } = this.props;
        let main;

        if (this.props.data.length) {
            main =  <StyledSection>
                        {data.map(item => <CardFilm key={item.id} info={item}/> )}
                    </StyledSection>
        } else {
            main = <NotFound/>;
        }

        return (
            <Fragment>
                <SearchHeader count={this.props.total}/>
                {main}
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

export default connect(mapStateToProps)(StartPage);
