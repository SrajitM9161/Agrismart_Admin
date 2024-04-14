import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './Routings/NavBar'
import Home from './Components/Home'
import Admin from './Components/Admin'


function App() {

  return (
    <>
      <BrowserRouter>
          <NavBar/>

          <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
