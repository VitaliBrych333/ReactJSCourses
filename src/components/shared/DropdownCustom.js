import React, { useState, useCallback } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledGroup = styled(Dropdown)`
    display: inline-block;

    button: hover {
        background-color: #F65261;
    }
`;

const DropdownCustom = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const [dropdownValue, setValue] = useState(props.propsValue.buttonNames.left);

    const handleClick = useCallback((e) => {
        setValue(() => e.target.textContent);
        }, []
    );

    return (
        <StyledGroup>
            <Dropdown className="drop" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    {dropdownValue}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={handleClick}>{props.propsValue.buttonNames.left}</DropdownItem>
                    <DropdownItem onClick={handleClick}>Earlier than 2020</DropdownItem>
                    <DropdownItem onClick={handleClick}>Earlier than 2019</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </StyledGroup>
    );
}

DropdownCustom.propTypes = {
    propValue: PropTypes.shape({
        buttonNames: PropTypes.string,
    })
}

export default DropdownCustom;
