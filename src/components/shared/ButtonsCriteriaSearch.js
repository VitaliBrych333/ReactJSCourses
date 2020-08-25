import React, { Fragment } from 'react';
import DropdownCustom from './DropdownCustom';

const CriteriaSearch = (props) => {
    return (
        <Fragment>
            <div>
                <p>Sort by</p>
                <DropdownCustom propsValue={props}></DropdownCustom>
            </div>
        </Fragment>
    )
};

export default CriteriaSearch;
