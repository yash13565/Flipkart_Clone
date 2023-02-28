import React from 'react'
import { useRecoilValue } from 'recoil'
import { atom2 } from '../ConstData/Constdata'
import style from '../Caraousel2/Caraousel2.module.css'
import Carousel from 'better-react-carousel'
import {useNavigate} from 'react-router-dom'

function Caraousel3() {
  let data1=useRecoilValue(atom2).filter((e)=>e.id==1)
  const navigate=useNavigate()
  function handleData(e){
    localStorage.setItem('clickProduct',JSON.stringify(e))
    navigate(`/product/${e.title}`)
  }
  return (
    <div className={style.maincont} >
    <Carousel  cols={4} rows={1} gap={199} loop>
    {data1.map((e,id)=>
    
     <Carousel.Item key={id}>
    
       <div  onClick={()=>handleData(e)}  >
       <img className={style.caraimg} width="120px" src={e.image} />
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

export default Caraousel3