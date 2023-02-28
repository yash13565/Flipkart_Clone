import React from 'react'
import style from './Carasouel.module.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
function Caraousel1() {
  return (
    <div className={style.maincara}>
            <Carousel >
            <Carousel.Item>
             <img
          className={style.caraimg}
          src='http://res.cloudinary.com/coupondora/image/upload/v1494581876/slider/banner3.jpg'
          alt="First slide"
        />
        </Carousel.Item>
            <Carousel.Item>
             <img
          className={style.caraimg}
          src='https://trak.in/wp-content/uploads/2018/07/Flipkart-Big-Shopping-Days-.jpg'
          alt="second slide"
        />
        </Carousel.Item>
            <Carousel.Item>
             <img
          className={style.caraimg}
          src='https://images.moneycontrol.com/static-mcnews/2019/12/Flipkart_Big_shopping_days.jpg?impolicy=website&width=1600&height=900'
          alt="thied slide"
        />
        </Carousel.Item>
            <Carousel.Item>
             <img
          className={style.caraimg}
          src='https://cdn.flipshope.com/blog/wp-content/uploads/2022/09/Realme-Festive-Days.jpg'
          alt="fourth slide"
        />
        </Carousel.Item>
        </Carousel>
        </div>
  )
}

export default Caraousel1