import React, { useState } from "react";
import { Nav } from "react-bootstrap";

const NavCustom = () => {
  const [active, setActive] = useState("All");

  const handleSelect = (selectedKey) => {
    setActive(selectedKey);
  };

  return (
    <Nav activeKey="/home" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link
          eventKey="All"
          className={active === "All" ? "active" : ""}
        >
          All
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="Documentary"
          className={active === "Documentary" ? "active" : ""}
        >
          Documentary
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="Comedy"
          className={active === "Comedy" ? "active" : ""}
        >
          Comedy
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="Horror"
          className={active === "Horror" ? "active" : ""}
        >
          Horror
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="Crime"
          className={active === "Crime" ? "active" : ""}
        >
          Crime
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavCustom;
