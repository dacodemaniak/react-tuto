import { useSelector } from 'react-redux'

import RowComponent from "../row/row.component"

const BodyComponent = () => {
    const persons = useSelector((state) => {
        return state.personList.personList
    })

    return <tbody>
       { persons.map((person) => <RowComponent key={ person.id } person={person} />) }
    </tbody>
}

export default BodyComponent