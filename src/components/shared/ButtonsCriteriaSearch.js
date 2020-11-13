import React, { memo } from 'react';
import DropdownCustom from './DropdownCustom';

// PATTERN: Stateless function
const CriteriaSearch = () => (
  <div>
    <p>Sort by</p>
    <DropdownCustom />
  </div>
);

export default memo(CriteriaSearch);
