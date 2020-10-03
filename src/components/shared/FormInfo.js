import React, { Fragment, useState, useEffect, useCallback } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import styled from "styled-components";
import ButtonsFormGroup from "./ButtonsFormGroup";
import NamePage from "./NamePage";
import { setEditFilm } from "../../redux/actions/moviesActions";
import { showEditPage, showAddPage } from "../../redux/actions/windowActions";

const StyledGroup = styled.div`
  label {
    color: #f65261;
  }
`;

const FormInfo = (props) => {
  const initialState = {
    title: "",
    date: "",
    url: "",
    genre: "",
    overview: "",
    time: "",
  };

  const genreState = ["Select Genre", "Horror", "Action", "Comedy"];
  const [dataForm, setData] = useState(initialState);

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setData({ ...dataForm, [field]: value });
  };

  const handleReset = useCallback(() => {
    setData(Object.assign({ ...dataForm }, initialState));
  }, [dataForm]);

  const handleClose = useCallback(() => {
    switch (props.namePage) {
      case "Edit movie":
        setData(props.filmEdit);
        props.dispatch(showEditPage(false));
        break;

      case "Add movie":
        handleReset();
        props.dispatch(showAddPage(false));
        break;

      default:
        break;
    }
  }, [props.namePage, props.filmEdit]);

  useEffect(() => {
    setTimeout(() => {
      const newDate = props.data;
      if (newDate) {
        setData(newDate);
        props.dispatch(setEditFilm(newDate));
      }
    }, 0);
  }, [props.data]);

  return (
    <StyledGroup>
      <Form>
        <NamePage
          namePage={props.namePage}
          handleClose={handleClose}
        ></NamePage>

        <Form.Group className={props.namePage}>
          {dataForm.id && (
            <Fragment>
              <Form.Label>Movie id</Form.Label>
              <Form.Control
                type="title"
                placeholder="Id"
                name="id"
                value={dataForm.id}
                readOnly
              />
            </Fragment>
          )}
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="title"
            placeholder="Title"
            name="title"
            value={dataForm.title}
            onChange={handleChange}
          />

          <Form.Label>Release date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Select Date"
            name="date"
            value={dataForm.date}
            onChange={handleChange}
          />

          <Form.Label>Movie URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="Movie URL here"
            name="url"
            value={dataForm.url}
            onChange={handleChange}
          />

          <Form.Label>Example select</Form.Label>
          <Form.Control
            as="select"
            placeholder="Select Genre"
            name="genre"
            value={dataForm.genre}
            onChange={handleChange}
          >
            {genreState.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Form.Control>

          <Form.Label>Overview</Form.Label>
          <Form.Control
            type="text"
            placeholder="Overview here"
            name="overview"
            value={dataForm.overview}
            onChange={handleChange}
          />

          <Form.Label>Runtime</Form.Label>
          <Form.Control
            type="number"
            placeholder="Runtime here"
            name="time"
            value={dataForm.time}
            onChange={handleChange}
          />
        </Form.Group>
        <ButtonsFormGroup
          nameButton={props.nameButton}
          handleReset={handleReset}
        ></ButtonsFormGroup>
      </Form>
    </StyledGroup>
  );
};

const mapStateToProps = (state) => ({
  showEditPage: state.windowReducer.showEditPage,
  showAddPage: state.windowReducer.showAddPage,
  filmEdit: state.movieReducer.filmEdit,
});

export default connect(mapStateToProps)(FormInfo);
