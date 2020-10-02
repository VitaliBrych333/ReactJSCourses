import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  h2,
  .close {
    color: #fff;
  }

  h2 {
    text-transform: uppercase;
  }
`;

const NamePage = ({ namePage, handleClose }) => {
  return (
    <Styled>
      <button type="button" className="close" onClick={handleClose}>
        <span>&times;</span>
      </button>
      <h2>{namePage}</h2>
    </Styled>
  );
};

export default NamePage;
