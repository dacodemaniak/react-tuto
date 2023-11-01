import RowComponent from "../row/row.component"

const BodyComponent = ({ persons, deletePerson }) => {
    // Gets persons list from props
    // @see persons attributes from App.js

    const onDelete = (personId) => {
        deletePerson(personId)
    }

    return <tbody>
       { persons.map((person) => <RowComponent key= {person.id } person={person} onDelete={onDelete} />) }
    </tbody>
}

export default BodyComponent