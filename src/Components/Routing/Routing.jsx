import { Login } from '@mui/icons-material'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import App from '../../App'
import Cart from '../../Pages/Cart/Cart'
import Product from '../../Pages/Product/Product'
import Section from '../../Pages/Section/Section'
function Routing() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<App/>}></Route>
            <Route exact path='/section/:xyz' element={<Section/>}/>
            <Route exact path='/product/:xyz' element={<Product/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default Routing