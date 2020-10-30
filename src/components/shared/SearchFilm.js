import React, { useState, createRef } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AddPage from '../AddPage';
import useLocalStorageState from './useLocalStorageState';
import { showAddPage } from '../../redux/actions/windowActions';

const StyledGroup = styled(InputGroup)`
  padding: 0 50px;
  margin: 0 auto;
  max-width: 700px;

  .input-group-append {
    background-color: bisque;
  }
`;

const StyleDiv = styled.div`
  a {
    color: #f65261;
  }

  a:hover {
    text-decoration: none;
  }

  button:hover > a {
    color: #fff;
  }
`;

const SearchFilm = (props) => {
  const { sortType, isShowAddPage, showAddPage } = props;
  const history = useHistory();

  const [controlValue, setValue] = useState({
    disabled: true,
    myRef: createRef(),
  });

  const [defaultValue, setState] = useLocalStorageState(
    'my-app-defaultValueSearch',
    ''
  );

  const handleClick = () => {
    history.push(
      `/search/movies?sortBy=${sortType}&sortOrder=desc&search=${controlValue.myRef.value}&searchBy=title`
    );
  };

  const handleChange = () => {
    setValue({ disabled: !controlValue.myRef.value });
    setState(controlValue.myRef.value);
  };

  const handleAdd = () => {
    showAddPage(true);
  };

  return (
    <>
      <StyleDiv>
        {isShowAddPage && <AddPage />}
        <Button
          className="add-movie"
          variant="outline-danger"
          onClick={handleAdd}
        >
          + Add movie
        </Button>
        <h1>Find your movie</h1>
      </StyleDiv>
      <StyledGroup className="mb-3">
        <FormControl
          placeholder="Please write the film name"
          ref={(controlInput) => (controlValue.myRef = controlInput)}
          onChange={handleChange}
          defaultValue={defaultValue}
        />
        <InputGroup.Append>
          <Button
            variant="outline-danger"
            onClick={handleClick}
            disabled={controlValue.disabled && !defaultValue}
          >
            Search
          </Button>
        </InputGroup.Append>
      </StyledGroup>
    </>
  );
};

SearchFilm.propTypes = {
  showAddPage: PropTypes.func,
  sortType: PropTypes.string,
  isShowAddPage: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  sortType: state.movieReducer.sort,
  isShowAddPage: state.windowReducer.isShowAddPage,
});

const mapDispatchToProps = {
  showAddPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilm);
