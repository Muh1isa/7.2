// import { useGlobalContext } from "../context"
import { useDispatch, useSelector } from "react-redux"
import Tour from "./Tour"
import { clearcard } from "../features/cartslice"


export default function Tours() {


    const { items } = useSelector((state) => state.cart)
    const dispatch = useDispatch()


    return (
        <>
            <div className="title">
                <h2>Our tours</h2>
                <div className="urderline"></div>
            </div>
            <div className="wrapper">
                {items.map((item) => {
                    return <Tour key={item.id} {...item} />
                })}
            </div><br />
            <button className="clearcard" onClick={() => dispatch(clearcard())}>Clear cart</button>
        </>
    )
}
