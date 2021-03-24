import React from 'react';

import Select from 'react-select';
// import { colourOptions } from './docs/data';

export const usersOptions = [
  { value: '0', label: 'Андрей Подоляко' },
  { value: '1', label: 'Андрей Подоляко' },
  { value: '2', label: 'Андрей Подоляко' },
  { value: '3', label: 'Андрей Подоляко' },
  { value: '4', label: 'Андрей Подоляко' },
  { value: '5', label: 'Андрей Подоляко' },
];

const customStyles = {
  option: (provided: any, state: { isSelected: any; }) => ({
    ...provided,
    zIindex: 1000
  }),
}


const MemberAddMultiselect = () => (

  <Select
    styles={customStyles}

    defaultValue={[usersOptions[2], usersOptions[3]]}
    isMulti
    name="colors"
    options={usersOptions}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);

export default MemberAddMultiselect