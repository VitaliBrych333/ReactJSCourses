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
  const state = {
    data: {
      id: 1,
      title: "Moana",
      date: "2018-07-22",
      url: "www.moana.com",
      genre: "Comedy",
      overview: "overview fake",
      time: 180,
    },
  };

  return (
    <StyledSection>
      <div className="modal">
        <section className="modal-main">
          <FormInfo
            namePage="Edit movie"
            nameButton="Save"
            data={state.data}
          ></FormInfo>
        </section>
      </div>
    </StyledSection>
  );
};

export default EditPage;
