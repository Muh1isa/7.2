import './App.css'
import Error from './components/Error'
import Tours from './components/Tours'
import { Route, Routes } from 'react-router-dom'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Tours />} />
        <Route path='*' element={<Error />} />
      </Routes>
      
    </>
  )
}

export default App
