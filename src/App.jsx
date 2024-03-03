import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import SingIn from './pages/SingIn.jsx'
import Index from './pages/Index.jsx'
import SingUp from './pages/SingUp.jsx'
import System from './pages/System/System.jsx'
import Ingredients from './pages/System/Ingredients.jsx'
import Inventory from './pages/System/Inventory.jsx'
import MenuInventory from './pages/System/MenuInventory.jsx'
import NewProduct from './pages/System/NewProduct.jsx'
import NewMenu from './pages/System/NewMenu.jsx'
import WorkWithUs from './pages/WorkWithUs.jsx'
import Menu from './pages/Menu.jsx'
import BranchOffices from './pages/BranchOffices.jsx'
import DeliveryLogin from './pages/DeliverySystem/DeliveryLogin.jsx'
import DeliveryRegister from './pages/DeliverySystem/DeliveryRegister.jsx'
import DeliverySystem from './pages/DeliverySystem/DeliverySystem.jsx'
import DeliveryOrders from './pages/DeliverySystem/DeliveryOrders.jsx'
import DeliveryHistory from './pages/DeliverySystem/DeliveryHistory.jsx'

function App() {

  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
        <Route path="/branch-offices" element={<BranchOffices />} />
        <Route path="/login" element={<SingIn />} />
        <Route path="/register" element={<SingUp />} />
        {/*System*/}
        <Route path="/system" element={<System />} />
        <Route path="/system/ingredients" element={<Ingredients />} />
        <Route path="/system/inventory" element={<Inventory />} />
        <Route path="/system/menu-inventory" element={<MenuInventory />} />
        <Route path="/system/new-product" element={<NewProduct />} />
        <Route path="/system/new-menu" element={<NewMenu />} />
        {/*DeliverySystem*/}
        <Route path="/delivery/login" element={<DeliveryLogin />} />
        <Route path="/delivery/register" element={<DeliveryRegister />} />
        <Route path="/delivery/system" element={<DeliverySystem />} />
        <Route path="/delivery/orders" element={<DeliveryOrders />} />
        <Route path="/delivery/history" element={<DeliveryHistory />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
