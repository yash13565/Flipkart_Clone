import React from 'react'
import style from './Card.module.css'
import {BiChevronDown} from 'react-icons/bi'
import { useRecoilValue } from 'recoil'
import { atom1 } from '../../Components/ConstData/Constdata'
import {useNavigate} from 'react-router-dom'
function Card() {
  let data=useRecoilValue(atom1)
   const navigate=useNavigate()
   function handleClick(x){
    localStorage.setItem('clickSection',JSON.stringify(x))
    navigate(`/section/${x.text}`)
    console.log(x,'i am x')
   }
   
  return (
    
      
      <div className={style.mainCard}>
     {
      data.map((x,i)=>{
        return(
          <div onClick={()=>handleClick(x)} key={i} className={style.fash}>
            <img src={x.image} alt="fashion.jpeg"  height='50rem' width='60rem' />
            <h3>{x.text}<BiChevronDown/></h3>
          </div>
        )
      })
     }
      </div>
        
  )
}

export default Card