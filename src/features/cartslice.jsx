import { createSlice } from "@reduxjs/toolkit"
import data from "../data"

const initialState = {
    amount: 0,
    total: 0,
    items: data
}



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearcard: (state) => {
            state.items = []
        },
        increment: (state, {payload}) => {
            let tmpItem = state.items.find((item) => item.id === payload.id)
            tmpItem.amount = tmpItem.amount + 1
        },
        decrement: (state, {payload}) => {
            let tmpItem = state.items.find((item) => item.id === payload.id)
            // if(tmpItem.amount > 0) {
                tmpItem.amount = tmpItem.amount - 1
            // }
        },
        removeitem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        calctotal: (state) => {
            let amount = 0;
            let total = 0;
            state.items.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price
            })

        }
    }
})

export const {clearcard, increment, decrement, removeitem, calctotal} = cartSlice.actions
export default cartSlice.reducer