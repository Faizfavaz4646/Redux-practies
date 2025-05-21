import { createSlice } from "@reduxjs/toolkit";

export const countSlice=createSlice({
    name:'count',
    initialState:{
        value:0
    },
    reducers:{
        increase_count: (state)=>{
            state.value +=1
        },
        decrease_count:(state)=>{
            console.log("hello");
            
state.value>0?state.value=state.value-1:value        }
    }
})
export const {increase_count,decrease_count}=countSlice.actions
export default countSlice.reducer