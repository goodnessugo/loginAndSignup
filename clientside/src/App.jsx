
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../src/assets/Login'


import './App.css'
import Signup from './assets/Signup'
import Home from './assets/Home'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup /> }/>
        <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
