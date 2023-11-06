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
        removePerson: (state) => {
            console.log(`Person has to be remove`)
        }
    }
})

// Actions destructuration
const { removePerson } = personListSlice.actions

const personsReducer = personListSlice.reducer

const store = configureStore({
    reducer: {
        personList: personsReducer
    }
})

export default store