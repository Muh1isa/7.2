import { useState } from "react"
import { useGlobalContext } from "../context"


export default function Tour({ id, image, name, info, price }) {

    const { removeTour } = useGlobalContext()
    const [readMore, setReadMore] = useState(false)

    return (
        <div className="wrapper">
            <div className="single-tour">
                <img src={image} alt={name} />
                <div>
                    <div className="tour-info">
                        <h2>{name}</h2>
                        <h3 className="tour-price">${price}</h3>
                    </div>
                    <p>
                        {readMore ? info : `${info.substring(0, 200)}...`}
                        <button onClick={() => setReadMore(!readMore)} className="more-btn">
                            {readMore ? 'show less' : 'read more'}
                        </button>
                    </p>
                    <button className="delete-btn" onClick={() => removeTour(id)}>not interested</button>
                </div>
            </div>
        </div>
    )
}
