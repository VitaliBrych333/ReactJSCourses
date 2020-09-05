import React from 'react';
import DropdownCustom from './DropdownCustom';

const CriteriaSearch = (props) => {
    return (
        <div>
            <p>Sort by</p>
            <DropdownCustom propsValue={props}></DropdownCustom>
        </div>
    );
};

export default CriteriaSearch;
