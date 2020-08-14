import React, { Component, Fragment } from 'react';
import { Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setSearch, setSort } from '../../redux/actions/criteriaActions';
import { sortRelease, sortRating } from '../../redux/actions/moviesActions';

class CriteriaSearch extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(e) {
        e.preventDefault();
        e.target.className = 'btn btn-danger';
        // e.target.nextSibling ? e.target.nextSibling.className = 'btn btn-secondary'
        //                      : e.target.previousSibling.className = 'btn btn-secondary';

        switch (e.target.innerHTML) {
            case 'Title':
                this.props.dispatch(setSearch('title'));
                break;
            case 'Genre':
                this.props.dispatch(setSearch('genres'));
                break;
            case 'Release date':
                this.props.dispatch(setSort('release_date'));
                this.props.dispatch(sortRelease(this.props.data));
                break;
            case 'Rating':
                this.props.dispatch(setSort('vote_average'));
                this.props.dispatch(sortRating(this.props.data));
                break;
            default:
              break;
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <p>Sort by</p>
                    <Button variant="danger" onClick={this.handleClick.bind(this)}>{this.props.buttonNames.left} &#9660;</Button>
                    {/* <Button variant="secondary" onClick={this.handleClick.bind(this)}>{this.props.buttonNames.right}</Button> */}
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
