import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

class NavCustom extends Component {
    handleClick = (e) => {
        e.target.parentElement.parentElement.childNodes.forEach(item => {
            item.childNodes[0].style.borderBottom = 'none';
        })
        e.target.style.borderBottom = '2px solid red'
    }

    render() {
        return (
            <Nav activeKey="/home"
                onClick={this.handleClick}>
                <Nav.Item>
                    <Nav.Link eventKey="All" style={{borderBottom: "2px solid red"}}>All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Documentary">Documentary</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Comedy">Comedy</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Horror">Horror</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Crime">Crime</Nav.Link>
                </Nav.Item>
            </Nav>
        );
    };
};

export default NavCustom;
