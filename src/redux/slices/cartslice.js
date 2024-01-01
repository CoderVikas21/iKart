import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    list:[],
    totalamount:0,
    value:0,
}

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        add:(state,action)=>{
          state.list.push(action.payload)
        },
        remove:(state,action)=>{
            const newstate =  state.list.filter((item)=>item.id !== action.payload)
            state.list = newstate
        },
        increment: (state) =>{
             state.value += 1
        },
        decrement: (state)=>{
            state.value -= 1
        },
        addAmount:(state,action)=>{
            state.totalamount += action.payload
        },
        subAmount:(state,action)=>{
            state.totalamount -= action.payload 
        }
    }
})

export const{increment,decrement,add,remove,addAmount,subAmount} = CartSlice.actions;
export default CartSlice.reducer;