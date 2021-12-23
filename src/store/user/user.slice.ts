import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./user.types";
import reducers from "./user.reducers";

const inicialState = {
    data: null
}


const userSlice = createSlice( {
    name: 'user',
    inicialState,
    reducers,
})

export const { reducer: userReducer, actions: userActions }  = userSlice;