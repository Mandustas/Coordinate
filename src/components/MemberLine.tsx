
export interface MemberLineProps{
    key: number;
    id: number;
    tableIndex: number;
    firstName: string;
    secondName: string;

}

function MemberLine({tableIndex, firstName,secondName}:MemberLineProps) {
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
