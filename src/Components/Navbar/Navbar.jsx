import React,{useState} from 'react'
import style from './Navbar.module.css'
import {GiSharpShuriken} from 'react-icons/gi'
import {IoSearchSharp} from 'react-icons/io5'
import {BiChevronDown} from 'react-icons/bi'
import {HiShoppingCart} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import Login from '../../Pages/Login/Login'
import { addCart } from '../ConstData/Constdata'
import { useRecoilValue } from 'recoil'

function Navbar() {
    const[open,setOpen]=useState(false)
    function handleDialog(){
        setOpen(true)
    }
    let myCartdata=useRecoilValue(addCart)
    return (
        <>
        <div className={style.mainnav}>
            <div className={style.logoflip}>
         <Link style={{color:'white',textDecoration:'none'}} to='/'>  <h2>Flipkart </h2></Link>
           <h4>Explore <span className={style.plus}> plus<GiSharpShuriken/></span></h4>
           </div>
           <div className={style.inputfield}>
            <input type="text" className={style.icon} placeholder='Search for products,brands and more' />
            <div className={style.searchicons}><IoSearchSharp/></div>
           </div>
           <div className={style.btn}>
            <button onClick={handleDialog} >Login</button>
           </div>
           <div className={style.sell}>
            <h3>Become a Seller</h3>
           </div>
           <div id='app-title' className={style.moreee}>
            <h3>More<BiChevronDown/></h3>
           </div>
           <div className={style.cart}>
           <Link to='/cart'> <h3><sub><HiShoppingCart className={style.cartlogo}/></sub>Cart {myCartdata.length}</h3></Link>
           </div>
       <Login open={open} setOpen={setOpen}/>
       
        </div>
      
       </>
    )
}

export default Navbar