import React, { Component, Fragment } from 'react';
import SearchHeader from './SearchHeader';
import NotFound from './NotFound';
import styled from 'styled-components'
import { connect } from 'react-redux';
import FormInfo from './shared/FormInfo';

const StyledSection = styled.section`
    padding: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    div {
        margin-bottom: 10px;
    }
`;

class AddPage extends Component {
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
                {/* <SearchHeader count={this.props.total}/>
                {main} */}
                <StyledSection>
                    <FormInfo></FormInfo>
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
