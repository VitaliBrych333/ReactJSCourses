import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledGroup = styled.div`
  .modal {
    display: block;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .modal-main {
    position: absolute;
    background: white;
    border-radius: 5%;
    width: 50%;
    height: auto;
    top: 12%;
    left: 72%;
    background-color: rgb(161, 144, 144);
    transform: translate(-50%, -50%);
  }

  p {
    margin: 10px 2px 2px;
    color: white;
  }

  p: nth-child(2) {
    margin-top: 22px;
  }

  p: hover {
    background-color: #f65261;
    cursor: pointer;
  }

  .close: hover {
    text-decoration: none;
    color: #f65261;
  }
`;

// PATTERN: Destructuring Arguments, Stateless function, Children Types
const ModalWindow = (props) => {
  const { handleClose, children } = props;

  return (
    <StyledGroup>
      <div className="modal">
        <section className="modal-main">
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={handleClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          {children}
        </section>
      </div>
    </StyledGroup>
  );
};

ModalWindow.propTypes = {
  handleClose: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.object),
};

export default memo(ModalWindow);
