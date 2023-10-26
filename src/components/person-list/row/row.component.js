const RowComponent = (props) => {
    const person = props.person

    return <tr>
        <td>&nbsp;</td>
        <td>{ person.id }</td>
        <td>{ person.firstname }</td>
        <td>{ person.lastname }</td>
        <td>{ person.email }</td>
    </tr>
}

export default RowComponent