import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledGroup = styled(Dropdown)`
    display: inline-block;

    button: hover {
        background-color: #F65261;
    }
`;

const DropdownCustom = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <StyledGroup>
            <Dropdown className="drop" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                   {props.propsValue.buttonNames.left}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Earlier than 2020</DropdownItem>
                    <DropdownItem>Earlier than 2019</DropdownItem>
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

export default DropdownCustom;
