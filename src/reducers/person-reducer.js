import { create } from 'zustand'
import persons from './../datas/persons.data'

const personStore = create((set) => ({
    personList: persons,
    removePerson: (person) => set((state) => {
        return {
                personList: state.personList.filter((personItem) => personItem.id !== person.id)
        }
    })
}))

export default personStore