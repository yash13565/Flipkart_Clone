import React from 'react'
import { useEffect } from 'react'
import { atom2 } from '../../Components/ConstData/Constdata'
import { useRecoilValue } from 'recoil'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'
import style from './Section.module.css'
import Footer from '../../Components/Footer/Footer'
function Section() {
  const { xyz } = useParams()
  console.log(xyz,'hii i am xyz')
  const [modelData, setModelData] = useState([])
  const datas = useRecoilValue(atom2)
 
  useEffect(() => {
    let renderData = datas.filter(x => x.text === xyz)
    setModelData(renderData)
    console.log(renderData, 'i am render')
  }, [xyz])
  console.log(modelData, "hii ia mdata1")
  const navigate = useNavigate()
  function handleData(x){
    localStorage.setItem('clickProduct',JSON.stringify(x))
    navigate(`/product/${x.title}`)
  }
  return (

    <div>
      <Navbar />
      <Card/>
      <div className={style.mainsec}>
        {
          modelData.map((x, i) => {
            return (
              <div key={i} onClick={()=>handleData(x)} className={style.maincont}>
                <img src={x.image} alt="prod.jpeg" height='50%' width='90%' />
                <h4>{x.title}</h4>
                <h5> {x.price}</h5>
                <div style={{ color: 'green', fontWeight: 'bolder', marginLeft: '2rem' }}>Hot Deal</div>

              </div>
            )
          })
        }</div>
      <div className={style.footersec}>
        <Footer />
      </div>
    </div>
  )
}

export default Section