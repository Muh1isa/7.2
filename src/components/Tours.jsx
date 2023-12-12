import { useGlobalContext } from "../context"
import Tour from "./Tour"


export default function Tours() {

    const { tours } = useGlobalContext()


    return (
        <>
            <div className="title">
                <h2>Our tours</h2>
                <div className="urderline"></div>
                {tours.map((item) => {
                    return <Tour key={item.id} {...item} />
                })}
            </div>
        </>
    )
}
