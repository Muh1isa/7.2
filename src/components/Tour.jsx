import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../features/cartslice"
// import { useGlobalContext } from "../context"


export default function Tour({ img, title, amount, price }) {

    const dispatch = useDispatch()
    // const { amount } = useSelector((state) => state.cart)

    return (

        <div className="single-tour" >
            {/* <h2>hello</h2> */}
            <img src={img} alt={title} />
            <div>
                <div className="tour-info">
                    <h2>{title}</h2>
                    <h3 className="tour-price">${price}</h3>
                    <div className="amount">
                        <button onClick={() => dispatch(decrement())}>Dec</button>
                        <h3>{amount}</h3>
                        <button onClick={() => dispatch(increment())}>Inc</button>
                    </div>
                </div >
            </div>
        </div>
    )
}
