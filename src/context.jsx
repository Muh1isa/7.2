import { createContext, useContext, useEffect, useReducer, useState } from "react";
import Loading from "./components/Loading";
import { reducer } from "./reducer";

const url = 'https://course-api.com/react-tours-project'

const initialState = {
    loading: false,
    data: url
}


export const AppContext = createContext()

export const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)


    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([])


    const removeTour = (id) => {
        const newTours = tours.filter((item) => item.id !== id)
        setTours(newTours)
    }

    const fetchTours = async () => {
        setLoading(true)
        try {
            const response = await fetch(url)
            const tours = await response.json()
            setLoading(false)
            setTours(tours)
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTours()
    }, [])

    if(loading) {
        return <Loading />
    }

    if(tours.length === 0) {
        return (
            <div className="title">
                <h2>no tours left</h2>
                <button className="btn" onClick={() => fetchTours()}>refresh</button>
            </div>
        )
    }

    return (
        <AppContext.Provider value={{
            tours,
            removeTour
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}