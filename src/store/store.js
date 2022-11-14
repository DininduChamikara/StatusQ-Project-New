import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import loginReducer from './reducers/login.slice';
import alertSlice from "./reducers/alert.slice";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    login: loginReducer,
    newAlert: alertSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
})