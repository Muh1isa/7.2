import { useDispatch, useSelector } from 'react-redux'
import './App.css'
// import Error from './components/Error'
import Tours from './components/Tours'
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { calctotal } from './features/cartslice'



function App() {

  const {amount, items} = useSelector((state) => state.cart) 
  
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(calctotal())
  }, [items, amount])

  return (
    <>
    <h2>{amount}</h2>
      <Routes>
        <Route path='/' element={<Tours />} />
        {/* <Route path='*' element={<Error />} /> */}
      </Routes>
      
    </>
  )
}

export default App
