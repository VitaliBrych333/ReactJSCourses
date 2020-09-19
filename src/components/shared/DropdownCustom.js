import React, { useState, useCallback } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { setSort } from '../../redux/actions/criteriaActions';
import { sortRelease, sortRating } from '../../redux/actions/moviesActions';

const StyledGroup = styled(Dropdown)`
    display: inline-block;

    button: hover {
        background-color: #F65261;
    }
`;

const DropdownCustom = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const [dropdownValue, setValue] = useState(props.sort === 'release_date' ? 'Release date'
                                                                             : 'Rating');
    const handleClick = useCallback((e) => {

        setValue(() => e.target.textContent);

        switch (e.target.textContent) {
            case 'Release date':
                props.dispatch(setSort('release_date'));
                props.dispatch(sortRelease(props.moviesByCriteria));
                break;
            case 'Rating':
                props.dispatch(setSort('vote_average'));
                props.dispatch(sortRating(props.moviesByCriteria));
                break;
            default:
              break;
        }

    }, []);

    return (
        <StyledGroup>
            <Dropdown className="drop" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    {dropdownValue}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={handleClick}>Release date</DropdownItem>
                    <DropdownItem onClick={handleClick}>Rating</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </StyledGroup>
    );
};

DropdownCustom.propTypes = {
    propValue: PropTypes.shape({
        buttonNames: PropTypes.string,
    })
};

const mapStateToProps = state => ({
    sort: state.criteriaReducer.sort,
    moviesByCriteria: state.movieReducer.moviesByCriteria.data,
});

export default connect(mapStateToProps)(DropdownCustom);

