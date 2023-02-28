import React from 'react'
import style from './Card1.module.css'
import {useRecoilValue} from 'recoil'
import { imgData} from '../ConstData/Constdata'
import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Card1() {
  const navigate=useNavigate()
    let data=useRecoilValue(imgData)
  function handleData(x){
   console.log(x,'hii')
   localStorage.setItem('clickSection',JSON.stringify(x))
   navigate(`/section/${x.text}`)
  }
  return (
    <div className={style.mainContainer}>
        {
        data.map((x,id)=>{
            return(
                <div key={id} className={style.cards}>
                    <h1>{x.text}</h1>
                     <button onClick={()=>handleData(x)}>View All</button>
                     <img src={x.Images} alt="card.jpeg" height='100rem' width='100rem'/>
                    
                </div>
            )
        })
        }
       
    </div>
  )
}

export default Card1