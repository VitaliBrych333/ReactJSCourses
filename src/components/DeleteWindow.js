import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { connect } from "react-redux";
import NamePage from "./shared/NamePage";
import { showDeletePage } from "../redux/actions/windowActions";

const StyledSection = styled.section`
  .modal {
    background: rgba(0, 0, 0, 0.6);
    display: block;
  }

  .modal-main {
    position: fixed;
    width: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 25px;
    margin: 50px auto;
    border: 3px solid black;
    background-color: #424242;
  }

  p {
    color: #fff;
  }

  .btn-primary {
    background-color: #232323;
    border-color: #f65261;
    color: #f65261;
    text-transform: uppercase;
    margin-left: 250px;
  }

  .btn-primary: hover {
    background-color: #f65261;
    color: #fff;
  }
`;

const DeleteWindow = (props) => {
  const handleClick = (e) => console.log("delete", e.target);
  const handleClose = () => props.dispatch(showDeletePage(false));

  return (
    <StyledSection>
      <div className="modal">
        <section className="modal-main">
          <NamePage namePage="Delete Movie" handleClose={handleClose} />
          <p>Are you sure you want to delete this movie?</p>
          <Button variant="primary" onClick={handleClick}>
            Confirm
          </Button>
        </section>
      </div>
    </StyledSection>
  );
};

const mapStateToProps = (state) => ({
  showDeletePage: state.windowReducer.showDeletePage,
});

export default connect(mapStateToProps)(DeleteWindow);
