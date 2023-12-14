import { useSelector } from 'react-redux'
import './App.css'
// import Error from './components/Error'
import Tours from './components/Tours'
import { Route, Routes } from 'react-router-dom'



function App() {

  const {amount} = useSelector((state) => state.cart) 
  

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
