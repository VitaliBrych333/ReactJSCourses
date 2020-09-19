import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import FormInfo from './shared/FormInfo';

const StyledSection = styled.section`
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

    .modal {
        background: rgba(0, 0, 0, 0.6);
    }

    .select div{
        text-transform : none
    }
`;

const AddPage = (props) => {
    const showHideClassName = props.showAddPage ? "modal display-block" : "modal display-none";

    return (
        <StyledSection>
            <div className={showHideClassName}>
                <section className="modal-main">
                    <FormInfo namePage='Add movie'
                              nameButton='Submit'
                    >
                    </FormInfo>
                </section>
            </div>
        </StyledSection>
    );
};

const mapStateToProps = state => ({
    showAddPage: state.windowReducer.showAddPage,
});

export default connect(mapStateToProps)(AddPage);
