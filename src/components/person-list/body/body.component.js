import personStore from "../../../reducers/person-reducer"
import RowComponent from "../row/row.component"

const BodyComponent = () => {
    const persons = personStore((state) => state.personList)

    return <tbody>
       { persons.map((person) => <RowComponent key= {person.id } person={person} />) }
    </tbody>
}

export default BodyComponent