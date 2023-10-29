import RowComponent from "../row/row.component"

const BodyComponent = ({ persons}) => {
    // Gets persons list from props
    // @see persons attributes from App.js

    const onDelete = (personId) => {
        console.log(`Delete function was fired on ${personId}`)
    }

    return <tbody>
       { persons.map((person) => <RowComponent key= {person.id } person={person} onDelete={onDelete} />) }
    </tbody>
}

export default BodyComponent