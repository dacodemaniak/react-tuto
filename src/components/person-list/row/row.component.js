import { useRef } from "react"
import { connect } from "react-redux"
import { remove } from './../../../reducers/persons-reducer'

const RowComponent = ({person, remove}) => {

    // Set the "ref" effect for buttons
    const buttonRef = useRef(null)

    // Set the function that handle onClick event
    const onClick = () => {
        remove(person.id)
    }

    return <tr>
        <td>&nbsp;</td>
        <td>{ person.id }</td>
        <td>{ person.firstname }</td>
        <td>{ person.lastname }</td>
        <td>{ person.email }</td>
        <td>
            <button type="button" ref={buttonRef} id={`person-${person.id}`}
                onClick={onClick}
            >x</button>
        </td>
    </tr>
}

export default connect(
    null,
    { remove }
)(RowComponent)