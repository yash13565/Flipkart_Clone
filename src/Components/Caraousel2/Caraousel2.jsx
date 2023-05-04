import React from 'react'
import { useRecoilValue } from 'recoil'
import { atom2 } from '../ConstData/Constdata'
import style from './Caraousel2.module.css'
import Carousel from 'better-react-carousel'
import {useNavigate} from 'react-router-dom'

function Caraousel2() {
  let data=useRecoilValue(atom2).filter((e)=>e.id===0)
  console.log(data)
  const navigate=useNavigate()
  function handleData(e){
    localStorage.setItem('clickProduct',JSON.stringify(e))
    navigate(`/product/${e.title}`)
  }
  return (
    <div className={style.maincont} >
    <Carousel  cols={4} rows={1} gap={199} loop>
    {data.map((e,i)=>
    
     <Carousel.Item key={i}>
       <div  onClick={()=>handleData(e)} key={i} >
       <img className={style.caraimg}  src={e.image} alt='yash.jpeg'/>
       <h2>{e.title}</h2>
        <h3>{e.price}</h3>
        <h4>{e.model}</h4>
       </div>
     </Carousel.Item>
     )}
   </Carousel>
   </div>
  )
}

export default Caraousel2