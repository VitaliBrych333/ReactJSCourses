import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import DropdownCustom from './DropdownCustom';

class CriteriaSearch extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        e.target.className = 'btn btn-danger';
    }

    render() {
        return (
            <Fragment>
                <div>
                    <p>Sort by</p>
                    <DropdownCustom propsValue={this.props}></DropdownCustom>
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
