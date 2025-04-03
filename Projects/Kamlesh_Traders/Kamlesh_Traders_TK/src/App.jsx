import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './Navbar/Header'
import MainHome from './Home/MainHome'
import Home from './Home/Home'
import Inventory from './Inventory/Inventory'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Grocery from './Products/Grocery'
import KitchenItems from './Products/KitchenItems'
import OfficeStationery from './Products/Office_stationery'




function App() {

  return (
    <>



      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/mainhome' element={<MainHome />} />

          <Route path='/producthome' element={<Home />} />


          <Route path='/inventory' element={<Inventory />} />

          <Route path='/grocery' element={<Grocery />} />
          <Route path='/office-stationary' element={<OfficeStationery />} />
          <Route path='/kitchen-items' element={<KitchenItems />} />


        </Routes>




      </BrowserRouter>


    </>
  )
}

export default App
