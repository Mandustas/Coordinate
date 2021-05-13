import React from 'react'
import { MembersTableProps } from './MembersTable'

export interface MemberLine{
    key: number;
    id: number;
    tableIndex: number;
    firstName: string;
    secondName: string;

}

function MemberLine({tableIndex, firstName,secondName}:MemberLine) {
    return (
        <tbody>
            <tr>
                <th scope="row">{tableIndex}</th>
                <td>{firstName}</td>
                <td>{secondName}</td>
            </tr>
        </tbody>
    )
}

export default MemberLine
