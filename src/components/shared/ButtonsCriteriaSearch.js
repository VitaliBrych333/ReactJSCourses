import React, { Component, Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setSort } from '../../redux/actions/criteriaActions';
import { sortRelease } from '../../redux/actions/moviesActions';

class CriteriaSearch extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.dispatch(setSort('release_date'));
        this.props.dispatch(sortRelease(this.props.data));
    }

    render() {
        return (
            <Fragment>
                <div>
                    <p>Sort by</p>
                    <Button variant="danger" onClick={this.handleClick.bind(this)}>{this.props.buttonNames.left} &#9660;</Button>
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.movieReducer.movies,
    };
}

export default connect(mapStateToProps)(CriteriaSearch);
