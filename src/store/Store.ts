import {createStore} from "redux"
import {reducer} from "./token/TokenReducer"

const store = createStore(reducer);

export default store;