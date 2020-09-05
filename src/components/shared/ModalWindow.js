import React from 'react';
import styled from 'styled-components';

const StyledGroup = styled.div`
    .modal {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
    }

    .modal-main {
        position:absolute;
        background: white;
        border-radius: 5%;
        width: 50%;
        height: auto;
        top: 10%;
        left: 72%;
        background-color: rgb(161,144,144);
        transform: translate(-50%,-50%);
    }

    .display-block {
        display: block;
    }

    .display-none {
        display: none;
    }

    p {
        margin: 10px 2px 2px;
        color: white;
    }

    p: nth-child(2) {
        margin-top: 22px;
    }

    p: hover {
        background-color: #F65261;
        cursor: pointer;
    }

    .close: hover {
        text-decoration: none;
        color: #F65261;
    }
`;

const ModalWindow = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <StyledGroup>
            <div className={showHideClassName}>
                <section className="modal-main">
                    <button type="button" className="close" aria-label="Close" onClick={handleClose}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    {children}
                </section>
            </div>
        </StyledGroup>
    );
};

export default ModalWindow;
