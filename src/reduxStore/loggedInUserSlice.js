import { createSlice } from "@reduxjs/toolkit";

const loggedInUserSlice = createSlice({
    name:"User",
    initialState:null,
    reducers:{
        addLoggedInUser :(state,action) =>{
            return action.payload;
        },
        removeLoggedInUser:(state,action)=>{
            return null;
        }
    }
})


export const  {removeLoggedInUser,addLoggedInUser}  = loggedInUserSlice.actions;
export default loggedInUserSlice.reducer;