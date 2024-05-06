import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './Routings/NavBar'
import Home from './Components/Home'
import Admin from './Components/Admin'
import Signup from './Components/Signup'
import Login from './Components/Login'


function App() {

  return (
    <>
      <BrowserRouter>
          <NavBar/>

          <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
