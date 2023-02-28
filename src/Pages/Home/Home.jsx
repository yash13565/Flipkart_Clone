import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Card from '../../Components/Card/Card'
import style from './Home.module.css'
import Caraousel1 from '../../Components/Caraousel/Caraousel'
import Card1 from '../../Components/Card1/Card1'
import Caraousel2 from '../../Components/Caraousel2/Caraousel2'
import Caraousel3 from '../../Components/Caraousel3/Caraousel3'
import Caraousel4 from '../../Components/Caraousel4/Caraousel4'
import Caraousel5 from '../../Components/Caraousel5/Caraousel5'
import Caraousel6 from '../../Components/Caraousel6/Caraousel6'
import Footer from '../../Components/Footer/Footer'
function Home() {
  
  return (
    <>
    <div>
      <Navbar/></div>
      <div className={style.mainCard}>
     <Card/>
      </div>
    
      <Caraousel1/>

<div className={style.caraContainer}>
        <Card1/>
        <div className={style.caramid}>
      <Caraousel2/>
      <Caraousel3/>
      <Caraousel4/>
      <Caraousel5/>
      <Caraousel6/>
      </div>
        </div>
        <div className={style.footer}>
        <Footer/>
        </div>
    </>
  )
}

export default Home