import React, { Component, Fragment } from 'react';
import { Nav } from 'react-bootstrap';
import { Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import SearchFilm from './shared/SearchFilm';
import ButtonsCriteriaSearch from './shared/ButtonsCriteriaSearch';
import styled from 'styled-components'

const StyledHeader = styled.header`
    height: 333px;
    background-color: rgb(161, 144, 144);

    .types {
        padding: 10px 50px;
        display: flex;
        margin-top: 50px;
        justify-content: space-between;
        background-color: rgb(90, 70, 70);
        color: beige;
    }

    .count-movie {
        padding-left: 50px;
        display: flex;
        justify-content: flex-end;
        color: beige;
    }

    .count-movie p {
        margin-left: 0;
    }

    .add-movie {
        margin: 40px;
        float: right;
    }

    .add-movie:hover {
        background-color: rgb(90, 70, 70);
    }

    div, button {
        text-transform: uppercase;
    }

    .count-movie {
      text-transform: lowercase;
    }

    .nav-item a:hover {
        border-bottom: 2px solid red;
    }

    h1 {
        padding: 70px 0 20px 50px;
    }

    p {
        display: inline-block;
        margin:  0 20px 0 50px;
        padding-top: 5px;
    }

    .count {
        flex-grow: 1;
    }
`;

class SearchHeader extends Component {

    state = {
        kind: 'Sort',
        left: 'Release date',
    }

    render() {
        return (
            <Fragment>
                <StyledHeader>
                    <SearchFilm/>
                    <div className="types">
                        <Nav activeKey="/home"
                            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
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
                        <ButtonsCriteriaSearch buttonNames={this.state}/>
                    </div>
                    <div className="count-movie">
                        {this.props.count > 0 && <p className="count">{this.props.count} Movies found</p>}
                    </div>
                </StyledHeader>
            </Fragment>
        );
    }
}

export default SearchHeader;
