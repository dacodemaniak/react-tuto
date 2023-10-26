import RowComponent from "../row/row.component"

const BodyComponent = ({ persons, total}) => {
    // Gets persons list from props
    // @see persons attributes from App.js
    //const { persons, total } = props
    console.log(`There's ${total} persons`)
    return <tbody>
       { persons.map((person) => <RowComponent key= {person.id } person={person} />) }
    </tbody>
}

export default BodyComponent