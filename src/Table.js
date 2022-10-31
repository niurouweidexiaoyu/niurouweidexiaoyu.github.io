import { Component } from "react";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.job}</td>
                <td>
                    <button onClick={() => props.removeCharacters(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>{rows}</tbody>
    )
}

class Table extends Component {
    render() {
        const { characterData, removeCharacters } = this.props;
        return (
            <table>
                <TableHeader></TableHeader>
                <TableBody characterData={characterData} removeCharacters={removeCharacters}></TableBody>
            </table>
        )
    }
}


export default Table
