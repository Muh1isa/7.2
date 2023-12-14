import { createSlice } from "@reduxjs/toolkit"
import data from "../data"

const initialState = {
    amount: 0,
    items: data
}



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearcard: (state) => {
            state.items = []
        },
        increment: (state) => {
            state.items.map((item) => {
                    item.amount += 1
            })
        },
        decrement: (state) => {
            state.items.map((item) => {
                if(item.amount > 0) {
                    item.amount -= 1
                }
            })
        }
    }
})

export const {clearcard, increment, decrement} = cartSlice.actions
export default cartSlice.reducer