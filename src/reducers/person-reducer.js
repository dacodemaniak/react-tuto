import { create } from 'zustand'

const personStore = create((set) => ({
    personList: [], // Empty array will be populated later
    // Add a setter to populate personList
    setPersonList: (data) => set({ personList: data}),
    removePerson: (person) => set((state) => {
        return {
            personList: state.personList.filter((personItem) => personItem.id !== person.id)
        }
    })
}))

export default personStore