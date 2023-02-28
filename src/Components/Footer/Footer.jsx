import React from 'react'
import style from './Footer.module.css'
import WorkIcon from '@mui/icons-material/Work';
import {MdStars} from 'react-icons/md'
import {ImGift} from 'react-icons/im'
import {HiQuestionMarkCircle} from 'react-icons/hi'
function Footer() {
  return (
    <>
    <div className={style.maincontainer}>
       <div className={style.firstdiv}>
        <h5>ABOUT</h5>
        <p>Contact Us</p>
        <p>About Us</p>
        <p>Carrers</p>
        <p>Flipkart Stories</p>
        <p>Press</p>
        <p>Flipkart Wholesale</p>
        <p>Coporate Information</p>
       </div>
        <div className={style.secdiv}>
         <h5>HELP</h5>
         <p>Payments</p>
         <p>Shipping</p>
         <p>Cancellation & Returns</p>
         <p>FAQ</p>
         <p>Report Infringment</p>
        </div>
        <div className={style.thirddiv}>
          <h5>POLICY</h5>
          <p>Return Policy</p>
          <p>Terms Of Use</p>
          <p>Security</p>
          <p>Privacy</p>
          <p>Sitemap</p>
          <p>Epr Compliance</p>
        </div>
        <div className={style.fourthdiv}>
          <h5>SOCIAL</h5>
          <a href="https://www.facebook.com" target='_blank'>Facebook</a>
          <a href="https://www.twitter.com" target='_blank'>Twitter</a>
          <a href="https://www.youtube.com" target='_blank'>Youtube</a>
        </div>
        <div className={style.line}>
     
        </div>
        <div className={style.fifthdiv}>
         <h5>Mail Us:</h5>
         <p>Flipkart Internet Private Limited,Building ALyssa,Begonia & Clove Embassy Tech Village,Outer Ring Road,Devarabeesanahalli Village,Bengaluru,560103,Karnataka,India</p>
        </div>
        <div className={style.sixthdiv}>
         <h5>Registered Office Address:</h5>
         <p>Flipkart Internet Private Limited,Buildings Alyssa, Begonia &Clove Embassy Tech Village,Outer Ring Road,Devarabeesanahalli Village,Bengaluru, 560103,Karnataka, India CIN : U51109KA2012PTC066107 Telephone:<span style={{color:"blue"}}>044-45614700</span></p>
        </div>
        </div>
        <div className={style.seventhdiv}>
       
          <span ><WorkIcon/></span><h6>Become a Seller</h6>
          <span><MdStars/></span><h6>Advertise</h6>
          <span><ImGift/></span><h6>Gift Cards</h6>
          <span><HiQuestionMarkCircle/></span><h6>Help Center</h6>
          <h5>&#169; 2007-2009 Flipkart.com</h5>
          <img src="https://www.levart.com.au/wp-content/uploads/2021/04/Our-payment-gateway-integrations.png" alt="payment.jpeg" height='5%' width='10%' />
           
        </div>
        </>
  )
}

export default Footer