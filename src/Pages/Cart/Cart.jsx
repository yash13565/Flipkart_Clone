import React from 'react'
import { useRecoilState} from 'recoil'
import { addCart } from '../../Components/ConstData/Constdata'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import style from './Cart.module.css'
import { Link } from 'react-router-dom'
function Cart() {
    
    const[addDetails,setAddDetails]=useRecoilState(addCart)
    function handleDelte(x){
       const delData= addDetails.filter((e)=>e.title!==x.title)
       setAddDetails([...delData])

    }
  return (
    <>
    <div>
        <div className={style.navbar}>
            <Navbar/>
        </div>
        <div className={style.back}>
        <Link style={{textDecoration:'none'}} to='/product/:xyz'> 👈Goback</Link> 
        </div>
        {
            addDetails.map((x,i)=>
            <div className={style.cartData} key={i} >
            <img src={x.image} alt="cart.jpeg" height='80%' />
            <button className={style.btn} onClick={()=>handleDelte(x)}>Delete</button>
            <div className={style.cartitems}>
            <h6>{x.title}</h6>
            <h6>{x.price}</h6> 
            <button className={style.btn1}>Add More </button>
            </div>
            </div>  
            )
        }
        </div>
        <div className={style.myfooter}>
    <Footer />
</div>

        </>
  )
}

export default Cart