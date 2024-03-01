import { createSlice } from "@reduxjs/toolkit";


//defined initial state of auth service

const initialState = {
    status: false,
    userData: null,

}

//slice creation and reducers added

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: (state,  action) =>{
            state.status = true;
            state.userData= action.payload.userData;

        },
        logout: (state) =>{
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login, logout}= authSlice.actions

export default authSlice.reducer