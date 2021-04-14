import React, { Component, Fragment } from 'react';

import Select from 'react-select';

export const objectsOptions = [
    { value: '0', label: 'Рено Логан' },
    { value: '1', label: 'Кот' },
    { value: '2', label: 'Мужчина 38 лет' },
];

function ObjectSelect() {
    return (
        <Fragment>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={objectsOptions[0]}
                isDisabled={false}
                isLoading={false}
                isClearable={true}
                isRtl={false}
                isSearchable={true}
                name="color"
                options={objectsOptions}
            />
        </Fragment>
    )
}

export default ObjectSelect

