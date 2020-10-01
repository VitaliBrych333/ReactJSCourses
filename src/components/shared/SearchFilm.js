import React, { Fragment, useCallback, useState, createRef } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import AddPage from "../AddPage";
import useLocalStorageState from "./useLocalStorageState";
import { fetchMovies } from "../../redux/actions/moviesActions";
import { showAddPage } from "../../redux/actions/windowActions";

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
  const [controlValue, setValue] = useState({
    disabled: true,
    myRef: createRef(),
  });

  const [defaultValue, setState] = useLocalStorageState(
    "my-app-defaultValueSearch",
    ""
  );

  const handleClick = useCallback(() => {
    props.dispatch(
      fetchMovies(props.sort, props.search, controlValue.myRef.value)
    );
  }, [props.sort, props.search, controlValue.myRef]);

  const handleChange = useCallback(() => {
    setValue({ disabled: !controlValue.myRef.value });
    setState(controlValue.myRef.value);
  }, [controlValue.myRef]);

  const handleAdd = () => {
    props.dispatch(showAddPage(true));
  };

  return (
    <Fragment>
      <StyleDiv>
        {props.showAddPage && <AddPage />}
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
    </Fragment>
  );
};

SearchFilm.propTypes = {
  sort: PropTypes.string,
  search: PropTypes.string,
  myInput: PropTypes.object,
};

const mapStateToProps = (state) => ({
  search: state.criteriaReducer.search,
  sort: state.criteriaReducer.sort,
  showAddPage: state.windowReducer.showAddPage,
});

export default connect(mapStateToProps)(SearchFilm);
