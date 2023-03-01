import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Card'
import Navbar from '../../Components/Navbar/Navbar'
import style from './Product.module.css'
import { AiFillThunderbolt } from 'react-icons/ai'
import { IoMdCart } from 'react-icons/io'
import { MdOutlineStarBorderPurple500 } from 'react-icons/md'
import { addCart } from '../../Components/ConstData/Constdata'
import { useRecoilState } from 'recoil'
import { BsTagFill } from 'react-icons/bs'
import Footer from '../../Components/Footer/Footer'
function Product() {
  const [data, setData] = useState({})
  const[addData,setAddData]=useRecoilState(addCart)
  useEffect(() => {
    const mydata = JSON.parse(localStorage.getItem('clickProduct'))
    setData(mydata)
  }, [])
function handleAddCart(){
  setAddData([...addData,data])
}
console.log(addData,'hii')
  return (
    <>

      <div className={style.contnav}>
        <Navbar />
        <Card />
      </div>
      <div className={style.productcard} >
        <div className={style.imgcontainer}>
          {
            <img src={data.image} alt="desktop.jpeg" height='80%' width='40%' />
          }
        </div>
        <div className={style.content}>
          <div className={style.secdiv}>
          <h5>{data.model}</h5>
          <h2>{
            data.title
          }</h2>
          <h4>Special Price</h4>
          <h3>{data.price}</h3></div>
          <div className={style.rating}>
            <span className={style.myicon}><span style={{ color: 'black' }}>4</span><MdOutlineStarBorderPurple500 /></span>
            <span style={{ color: 'grey', fontWeight: '500' }}>5,600 ratings and 614 reviews </span>
           
            <p> <h6>Available Offers</h6></p>
            <p><span style={{ color: 'green' }}><BsTagFill /></span><span style={{ fontWeight: '500' }}>Special Price</span> Get at flat ₹379 <span style={{ color: '#287CF2' }}>T&C</span></p>
            <p><span style={{ color: 'green' }}><BsTagFill /></span><span style={{ fontWeight: '500' }}>Bank Offer</span> 10% instant discount on PNB Credit Card, up to ₹1500, on orders of ₹5,000 and above <span style={{ color: '#287CF2' }}>T&C</span></p>
            <p><span style={{ color: 'green' }}><BsTagFill /></span><span style={{ fontWeight: '500' }}>Bank Offer </span>Flat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm account <span style={{ color: '#287CF2' }}>T&C</span>
            </p>
            <p><span style={{ color: 'green' }}><BsTagFill /></span> <span style={{ fontWeight: '500' }}> Bank Offer </span>5% Cashback on Flipkart Axis Bank Card <span style={{ color: '#287CF2' }}>T&C</span></p>
            <p><span style={{ color: 'green' }}><BsTagFill /></span> Buy this Product and Get Extra ₹500 Off on Bikes & Scooters <span style={{ color: '#287CF2' }}>T&C</span></p>
            <p><span style={{ color: 'green' }}><BsTagFill /></span><span style={{ fontWeight: '500' }}>Partner Offer</span> Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500* <span style={{ color: '#287CF2' }}>KnowMore</span></p>
            <p><span style={{ color: 'green' }}><BsTagFill /></span> <span style={{ fontWeight: '500' }}> Partner Offer</span> Shop With Flipkart Pay Later & stand a chance to win ₹5,000 Gift Card* during the offer period <span style={{ color: '#287CF2' }}>Know More</span ></p>
            <p><span style={{ color: 'green' }}><BsTagFill /></span><span style={{ fontWeight: '500' }}>Partner Offer</span> Purchase now & get a surprise cashback coupon till November 2023 <span style={{ color: '#287CF2' }}>Know More</span></p>
          </div>
        </div>
      </div>
      <div className={style.btncartp}>
      <button onClick={handleAddCart} className={style.btn1}><IoMdCart />ADD TO CART</button>
        <button onClick={() => alert('Buying option Will Be Available Soon')} className={style.btn2}><AiFillThunderbolt />BUY NOW</button>
      </div>
      <div style={{ marginTop: '5rem' }}>
        <Footer />
        
      </div>
    </>
  )
}

export default Product