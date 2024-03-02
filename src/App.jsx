import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import SingIn from './pages/SingIn.jsx'
import Index from './pages/Index.jsx'
import SingUp from './pages/SingUp.jsx'
import System from './pages/System.jsx'
import Ingredients from './pages/Ingredients.jsx'
import Inventory from './pages/Inventory.jsx'
import NewProduct from './pages/NewProduct.jsx'
import NewMenu from './pages/NewMenu.jsx'
import WorkWithUs from './pages/WorkWithUs.jsx'
import Menu from './pages/Menu.jsx'


function App() {

  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
        <Route path="/login" element={<SingIn />} />
        <Route path="/register" element={<SingUp />} />
        <Route path="/system" element={<System />} />
        <Route path="/system/ingredients" element={<Ingredients/>} />
        <Route path="/system/inventory" element={<Inventory/>} />
        <Route path="/system/new-product" element={<NewProduct/>} />
        <Route path="/system/new-menu" element={<NewMenu/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
