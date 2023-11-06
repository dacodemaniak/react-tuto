import { configureStore, createSlice } from "@reduxjs/toolkit";
import persons from "../datas/persons.data";

// Sets the initial state for personList attribute
const initialState = {
    personList: persons
}

// Sets actions (slice)
const personListSlice = createSlice({
    name: 'persons',
    initialState,
    reducers: {
        removePerson: (state, action) => {
            state.personList = state.personList.filter((person => person.id != action.payload))
        }
    }
})

const personsReducer = personListSlice.reducer

const store = configureStore({
    reducer: {
        personList: personsReducer
    }
})

// Actions destructuration
const { removePerson } = personListSlice.actions

export default store
export const remove = removePerson