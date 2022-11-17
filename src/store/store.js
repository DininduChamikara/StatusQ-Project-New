import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import loginReducer from './reducers/login.slice';
import alertSlice from "./reducers/alert.slice";
import thunk from "redux-thunk";
import loaderSlice from "./reducers/loader.slice";
import savePromoterSlice from "./reducers/savePromoter";
import activeStepSlice from "./reducers/activeStep.slice";


const rootReducer = combineReducers({
    login: loginReducer,
    newAlert: alertSlice,
    Custom_API_Loader: loaderSlice,
    savePromoter: savePromoterSlice,
    activeStep: activeStepSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
})