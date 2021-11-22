import profileReducer from "./profile-reducer";
import { createStore, combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form'
import usersReducer from "./users-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    form: formReducer
})

const store = createStore(reducers)

export default store;