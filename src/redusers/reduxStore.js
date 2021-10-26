import authReducer from "./authReducer";

const { createStore, combineReducers } = require("redux");

const reducers = combineReducers({
    auth: authReducer
})

let store = createStore(reducers)

window.store = store;

export default store;