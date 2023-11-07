import personStore from "../../../reducers/person-reducer"

const RowComponent = ({ person }) => {

    // Set the "ref" effect for buttons
    const onDelete = personStore((state) => state.removePerson)

    // Set the function that handle onClick event
    const onClick = () => {
        onDelete(person)
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