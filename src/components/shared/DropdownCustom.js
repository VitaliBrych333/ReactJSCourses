import React, { useState, useCallback } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import styled from "styled-components";

const StyledGroup = styled(Dropdown)`
  display: inline-block;

  button: hover {
    background-color: #f65261;
  }
`;

const DropdownCustom = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = useCallback(() => {
    setDropdownOpen((prevState) => !prevState);
  }, [dropdownOpen]);

  const [dropdownValue, setValue] = useState("Release date");

  const handleClick = (e) => {
    setValue(() => e.target.textContent);
  };

  return (
    <StyledGroup>
      <Dropdown className="drop" isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>{dropdownValue}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={handleClick}>Release date</DropdownItem>
          <DropdownItem onClick={handleClick}>Earlier than 2020</DropdownItem>
          <DropdownItem onClick={handleClick}>Earlier than 2019</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </StyledGroup>
  );
};

export default DropdownCustom;
