import {createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name : 'auth',
    initialState : {
        isLoggedIn : false,
        user : '',
        id : '',
    },
    reducers : {
        login : (state)=>{
            state.isLoggedIn = true
        },
        logout : (state)=>{
            state.isLoggedIn = false;
            state.id = '';
        },
        setId : (state , action)=>{
            state.id = action.payload;
        }

    }
})

export const {login , logout , setId} = authSlice.actions

export default authSlice.reducer;