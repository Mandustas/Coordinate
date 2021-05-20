import { Fragment } from 'react';

import Select from 'react-select';

export const usersOptions = [
    { value: '0', label: 'Андрей Подоляко' },
    { value: '1', label: 'Андрей Подоляко' },
    { value: '2', label: 'Андрей Подоляко' },
    { value: '3', label: 'Андрей Подоляко' },
    { value: '4', label: 'Андрей Подоляко' },
    { value: '5', label: 'Андрей Подоляко' },
];

function MemberSelect() {
    return (
        <Fragment>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={usersOptions[0]}
                isDisabled={false}
                isLoading={false}
                isClearable={true}
                isRtl={false}
                isSearchable={true}
                name="color"
                options={usersOptions}
            />
        </Fragment>
    )
}

export default MemberSelect
