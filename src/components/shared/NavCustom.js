import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setGenre } from '../../redux/actions/moviesActions';

const NavCustom = (props) => {
  const { genre, setGenre } = props;
  const [active, setActive] = useState('All');

  const handleSelect = (selectedKey) => {
    setGenre(selectedKey);
  };

  useEffect(() => {
    setActive(genre);
  }, [genre]);

  return (
    <Nav activeKey="/home" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="All" className={active === 'All' ? 'active' : ''}>
          All
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="Documentary"
          className={active === 'Documentary' ? 'active' : ''}
        >
          Documentary
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="Comedy"
          className={active === 'Comedy' ? 'active' : ''}
        >
          Comedy
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="Horror"
          className={active === 'Horror' ? 'active' : ''}
        >
          Horror
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="Crime"
          className={active === 'Crime' ? 'active' : ''}
        >
          Crime
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

NavCustom.propTypes = {
  genre: PropTypes.string,
  setGenre: PropTypes.func,
};

const mapStateToProps = (state) => ({
  genre: state.movieReducer.genre,
});

const mapDispatchToProps = {
  setGenre,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavCustom);
