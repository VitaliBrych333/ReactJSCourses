import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import FormInfo from './shared/FormInfo';

const StyledSection = styled.section`
    .modal {
        background: rgba(0, 0, 0, 0.6);
    }

    .modal-main {
        position:fixed;
        width: 400px;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
        padding: 25px;
        margin: 50px auto;
        border: 3px solid black;
        background-color: #424242;
    }

    .display-block {
        display: block;
    }

    .display-none {
        display: none;
    }

    button {
        text-transform: uppercase;
    }
`;

const EditPage = (props) => {
    const showHideClassName = props.showEditPage ? "modal display-block" : "modal display-none";

    return (
        <StyledSection>
            <div className={showHideClassName}>
                <section className="modal-main">
                    <FormInfo namePage="Edit movie"
                              nameButton="Save"
                    >
                    </FormInfo>
                </section>
            </div>
        </StyledSection>
    );
};

const mapStateToProps = state => ({
    showEditPage: state.windowReducer.showEditPage,
});

export default connect(mapStateToProps)(EditPage);
