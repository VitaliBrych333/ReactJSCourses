import React from "react";
import styled from "styled-components";
import FormInfo from "./shared/FormInfo";

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

  label {
    text-transform: uppercase;
  }
`;

const EditPage = () => {
  return (
    <StyledSection>
      <div className="modal">
        <section className="modal-main">
          <FormInfo namePage="Edit movie" nameButton="Save"></FormInfo>
        </section>
      </div>
    </StyledSection>
  );
};

export default EditPage;
