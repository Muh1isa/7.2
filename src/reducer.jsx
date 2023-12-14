// import { useSelector } from "react-redux"

// export const reducer = (state, action) => {
//     const {items} = useSelector((state) => state.cart) 

//     if(action.type === 'INC') {
//         const increment = items.map((item) => {
//             if(item.id === action.payload) {
//                 return {...item, amount: item.amount + 1}
//             }
//             return item
//         })
//         return {
//             ...state,
//             cart: increment 
//         }
//     }
// }