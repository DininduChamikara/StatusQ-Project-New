import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
    name: "newAlert",
    initialState: {
        isVisible: false,
        title: "",
        message: "",
        severity: "",
    },
    reducers: {
        showAlert: (state, action) => {
            state.message = action.payload.message;
            state.isVisible = action.payload.isVisible;
            state.severity = action.payload.severity;
            state.title = action.payload.title;
        }
    }
})