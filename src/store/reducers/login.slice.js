import { createSlice } from "@reduxjs/toolkit";


export const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLoggedIn: false,
        userId: null,
        firstName: "",
        lastName: "",
        email: "",
        userType: "",
        profileImageurl:"",
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.userId = action.payload.userId;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.userType = action.payload.userType;
            state.profileImageurl = action.payload.profileImageurl;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.userId = null;
            state.firstName = "";
            state.lastName = "";
            state.email = "";
            state.userType = "";
            state.profileImageurl = "";
        },   
    },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;