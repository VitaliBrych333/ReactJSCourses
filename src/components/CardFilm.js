import React, { useState, useCallback } from 'react';
import { Badge, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import uuid from 'react-uuid';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
  fetchMoviesByGenre,
  fetchMovieId,
} from '../redux/actions/moviesActions';
import { setEditFilm } from '../redux/actions/windowActions';
import ModalWindow from './shared/ModalWindow';

const StyledCartTitle = styled(Card.Title)`
  display: flex;
  justify-content: space-between;

  a {
    color: #212;
  }
`;

const StyledCard = styled(Card)`
  width: 230px;
  border: none;
  display: flex;
  flex-direction: column;
  margin-right: 10px;

  .card-body {
    padding-bottom: 10px;
    padding-top: 10px;
  }

  .card-text button {
    background: none;
    border: none;
    color: #212529;
    padding: 0;
  }

  img {
    width: 230px;
    height: 300px;
  }

  img:hover {
    cursor: pointer;
  }

  .card-text,
  .card-text p {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }

  span {
    height: 24px;
  }

  button {
    margin-right: 3px;
  }

  button:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .show {
    display: block;
    border-radius: 50%;
    background-color: gray;
    position: absolute;
    z-index: 2;
    margin: 5px 5px 0 197px;
  }

  svg: hover {
    cursor: pointer;
  }
`;

const Item = (props) => {
  const {
    sortType,
    info,
    setEditFilm,
    fetchMoviesByGenre,
    fetchMovieId,
  } = props;

  const [value, setValue] = useState({
    dotsIsVisible: false,
    showModalWindow: false,
  });

  const handleClick = useCallback(
    (e) => {
      fetchMoviesByGenre(sortType, e.target.value);
    },
    [fetchMoviesByGenre, sortType]
  );

  const handleRequests = () => {
    fetchMovieId(info.id);
  };

  const showDots = () => {
    setValue({ dotsIsVisible: true });
  };

  const hideDots = () => {
    setValue({ dotsIsVisible: false });
  };

  const showModal = () => {
    hideDots();
    setValue({ showModalWindow: true });
  };

  const hideModal = () => {
    setValue({ showModalWindow: false });
  };

  const handleClickTag = (e) => {
    hideDots();
    hideModal();
    setEditFilm(info, e.target.innerHTML);
  };

  return (
    <StyledCard>
      {value.dotsIsVisible && (
        <MoreVertIcon
          className="show"
          onMouseEnter={showDots}
          onClick={showModal}
        />
      )}
      {value.showModalWindow && (
        <ModalWindow handleClose={hideModal} onMouseOut={hideModal}>
          <p onClick={handleClickTag} onKeyDown={handleClickTag}>
            Edit
          </p>
          <p onClick={handleClickTag} onKeyDown={handleClickTag}>
            Delete
          </p>
        </ModalWindow>
      )}
      <Card.Img
        variant="top"
        src={info.poster_path}
        onMouseEnter={showDots}
        onMouseLeave={hideDots}
      />

      <Card.Body>
        <StyledCartTitle>
          <Link
            to={{ pathname: `/movies/${info.id}` }}
            onClick={handleRequests}
          >
            {info.title}
          </Link>
          <Badge variant="secondary">
            {info.release_date.trim().slice(0, 4)}
          </Badge>
        </StyledCartTitle>
        <Card.Text>
          {info.genres.map((item) => (
            <button
              type="submit"
              onClick={handleClick}
              value={item}
              href="#"
              key={uuid()}
              info={item}
              variant="secondary"
            >
              {item}
            </button>
          ))}
        </Card.Text>
      </Card.Body>
    </StyledCard>
  );
};

Item.propTypes = {
  fetchMovieId: PropTypes.func,
  fetchMoviesByGenre: PropTypes.func,
  setEditFilm: PropTypes.func,
  sortType: PropTypes.string,
  info: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    genres: PropTypes.array,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  sortType: state.movieReducer.sort,
  movies: state.movieReducer.movies,
});

const mapDispatchToProps = {
  setEditFilm,
  fetchMoviesByGenre,
  fetchMovieId,
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
