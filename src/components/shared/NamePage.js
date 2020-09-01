import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Styled = styled.div`
    h2, .close, a {
        color: #FFF;
    }

    h2 {
        text-transform: uppercase;
    }

    a:hover {
        text-decoration: none;
    }
`;

const NamePage = (props) => {
    return (
        <Fragment>
            <Styled>
                <button type="button" className="close" aria-label="Close">
                    <Link to={{pathname: '/'}}><span aria-hidden="true">&times;</span></Link>
                </button>
                <h2>{props.namePage}</h2>
          </Styled>
        </Fragment>
    );
};

export default NamePage;
