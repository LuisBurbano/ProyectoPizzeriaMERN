import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import SingIn from './Views/SingIn.jsx'
import Index from './Views/Index.jsx'
import SingUp from './Views/SingUp.jsx'
import System from './Views/System.jsx'
import Inventory from './components/Inventory.jsx'
import NewProduct from './components/NewProduct.jsx'


function App() {

  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<SingIn />} />
        <Route path="/register" element={<SingUp />} />
        <Route path="/system" element={<System />} />
        <Route path="/system/inventory" element={<Inventory/>} />
        <Route path="/system/new-product" element={<NewProduct/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
