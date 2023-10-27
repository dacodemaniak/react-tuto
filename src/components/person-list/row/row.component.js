const RowComponent = (props) => {
    const person = props.person

    // Set the function that handle onClick event
    const onClick = () => {
        console.log(`A button was clicked`)
    }

    return <tr>
        <td>&nbsp;</td>
        <td>{ person.id }</td>
        <td>{ person.firstname }</td>
        <td>{ person.lastname }</td>
        <td>{ person.email }</td>
        <td>
            <button type="button"
                onClick={onClick}
            >x</button>
        </td>
    </tr>
}

export default RowComponent