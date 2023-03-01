import React from 'react'
import { useRecoilState} from 'recoil'
import { addCart } from '../../Components/ConstData/Constdata'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import style from './Cart.module.css'
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
        {
            addDetails.map((x,i)=>
            <div className={style.cartData} key={i} >
            <img src={x.image} alt="cart.jpeg" height='80%' />
            <button onClick={()=>handleDelte(x)}>Delete</button>
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