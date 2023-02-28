import { atom } from "recoil"
export const imgData=atom({
    key:'img',
    default:[
         {  id:0,
            text:"Fashion",
            
            Images:"https://cdn.shopify.com/s/files/1/0156/7467/1152/products/bluepink_700x700.jpg?v=1651402738",
         },
        {   id:1,
            text:"Mobiles",
            
            Images:"https://static.toiimg.com/thumb/resizemode-4,msid-98121408,imgsize-459468,width-400/98121408.jpg",
        },
        {
          id:2,
        text:"Best Of Electronics",
        Images:"https://images.moneycontrol.com/static-mcnews/2021/06/Electronic-appliances-770x433.jpg?impolicy=website&width=770&height=431"
    },
    {   id:3,
        text:"Appliances",
        Images:"https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/08/thomson-home-appliances-1660051015.jpg",
    },
    {   id:4,
        text:"Beauty, Toys & More",
        Images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzH7TiqbTN8d2VyNEnkvKu8Lpb1mjF5St3vw&usqp=CAU",
    }
]
})

export const addCart=atom({
  key:'cartDetails',
  default:[]
})

export const atom1=atom({
    key:'atom',
    default:[
        { id:0,
          image:"https://thumbs.dreamstime.com/b/young-pretty-boy-girl-friends-happy-smiling-together-interior-lifestyle-people-concept-young-pretty-boy-girl-friends-165161513.jpg",
          text:'Fashion'
        },
        { id:1,
          image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204",
          text:'Mobiles'
        },
        { id:2,
          image:"https://img.freepik.com/premium-photo/laptop-two-pairs-wireless-stereo-headphones-red-blue-neon-light_175682-30204.jpg",
          text:'Electronics'
        },
        { id:3,
          image:"https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-78731249/78731249.jpg",
          text:'Appliances'
        },
        { id:4,
          image:"https://rukminim1.flixcart.com/image/416/416/l2rwzgw0/vanity-box/w/f/4/makeup-brush-holder-and-organizer-for-dressing-table-keeps-make-original-imagefhzg42r5f6g.jpeg?q=70",
          text:'Beauty,Toys & More'
        },

]
})

export const atom2=atom({
  key:'atom2',
  default:[
    {id:0,
      image:"https://www.lg.com/in/images/monitors/md07552490/thumbnail/24GQ50F-B-350-3.jpg",
      title:'Digital Monitors',
      price:`under Rs7069`,
      model:'For All Top Models',
      text:'Fashion'
    },
    {id:0,
      image:'https://www.suryaelectronics.in/img/Product/Main/PhilipsGroomingandPersonalcareTrimmers26.jpg',
      title:'Best Of Shavers',
      price:`Starting From Rs 599`,
      model:'All Model Trimmers',
      text:'Fashion'
    },
    {id:0,
      image:'https://m.media-amazon.com/images/I/71mHh1mCvoL._SY606_.jpg',
      title:'Hair Dryers',
      price:`under Rs999`,
      model:'Vogue & Many More',
      text:'Fashion'
    },
    {id:0,
      image:'https://www.xboom.in/wp-content/uploads/2021/08/Hp-Laserjet-Pro-M126nw-Multifunction-Monochrome-Laser-Printer-1-e1630319701117.jpg',
      title:'Printers',
      price:`under  Rs2999`,
      model:'Hp,Dell,Asus',
      text:'Fashion'
    },
    {id:0,
      image:'https://m.media-amazon.com/images/I/61zne3JPlQS._SX466_.jpg',
      title:'Cameras',
      price:`Starting From Rs50,000`,
      model:'Canon',
      text:'Fashion'
    },
    {id:0,
      image:"https://m.media-amazon.com/images/I/51elA6KM+6L._AC_SL1200_.jpg",
      title:'PowerBanks',
      price:`under Rs1069`,
      model:'From All Top Brands',
      text:'Fashion'
    },
    {id:0,
      image:'https://5.imimg.com/data5/IM/VC/MY-4329046/branded-lcd-projector-500x500.jpg',
      title:'Projectors',
      price:`under Rs7999`,
      model:'For All Top Models',
      text:'Fashion'
    },
    {id:0,
      image:"https://m.media-amazon.com/images/I/51fCmfd8CML._SL1000_.jpg",
      title:'Gamepad',
      price:`From Rs1299`,
      model:'RedGear',
      text:'Fashion'
    },
    {id:1,
      image:"https://m.media-amazon.com/images/I/61gGjlhlPpL._SL1000_.jpg" ,
      title:'Iphone 13Pro',
      price:`From Rs 1,29,000`,
      model:'Apple Brand',
      text:'Mobiles'
    },
    {id:1,
      image:'https://assets.mspimages.in/c/14798-82-1.jpg',
      title:'ROG',
      price:`From 50,999`,
      model:'Asus Mobiles',
      text:'Mobiles'
    },
    {id:1,
      image:'https://www.sathya.in/media/80780/catalog/Sam%2073-1.png',
      title:'Galaxy A73',
      price:`under Rs23,999`,
      model:'From Samsung',
      text:'Mobiles'
    },
    {id:1,
      image:'https://www.oneplus.in/content/dam/oasis/page/2023/in/oneplus-10t/specs/10r-blue.png',
      title:'10T 5G',
      price:`At  Rs45999`,
      model:'oneplus Phones',
      text:'Mobiles'
    },
    {id:1,
      image:'https://www.ispyprice.com/static/nwprd_model/realme-x-spider-man-edition-9113.jpg',
      title:'Realme x',
      price:`Starting From Rs20,000`,
      model:'Realme SmartPhones',
      text:'Mobiles'
    },
    {id:1,
      image:"https://m.media-amazon.com/images/I/61cU9G3nwVL._SL1000_.jpg",
      title:'Iqoo Z6',
      price:`Buy now `,
      model:'Iqoo Powered By Vivo',
      text:'Mobiles'
    },
    {id:1,
      image:'https://i02.appmifile.com/931_operator_in/13/08/2021/6b679e1bbf277a50bcd54518a280bc62!800x800!85.jpg',
      title:'10 Pro Max',
      price:` Buy Now Rs13,999`,
      model:'Canon',
      text:'Mobiles'
    },
    {id:1,
      image:"https://sony.scene7.com/is/image/sonyglobalsolutions/PDX-224_Primary-Image_Green_hyperc?$mediaCarouselSmall$&fmt=png-alpha",
      title:'xperia-pro',
      price:`From Rs70,999`,
      model:'Sony Mobiles',
      text:'Mobiles'
    },
    {id:2,
      image:"https://img.buzzfeed.com/buzzfeed-static/static/2020-08/20/6/asset/274e17366b88/sub-buzz-4149-1597906428-10.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto" ,
      title:'Music Player',
      price:`From Rs699`,
      model:'Tyon Speakears',
      text:'Electronics'
    },
    {id:2,
      image:'https://gsmimpex.in/images/Electronics/Headset%20wholesaler.jpg',
      title:'Headset',
      price:`From Rs999`,
      model:'Ptron Headgear',
      text:'Electronics'
    },
    {id:2,
      image:'https://hdn-1.jioretailer.com/jioretailer/products/pictures/item/free/original/YmA_BfnaB_-kelvinator-kas-x12301b-air-conditioner-581109872-i-1-1200wx1200h.jpeg',
      title:`Ac's`,
      price:`under Rs50,999`,
      model:'Kelvinator',
      text:'Electronics'
    },
    {id:2,
      image:'https://i.ebayimg.com/thumbs/images/g/VbMAAOSw60difRmm/s-l225.jpg',
      title:'CPU Zx-100',
      price:`At  Rs25999`,
      model:'Zebronics',
      text:'Electronics'
    },
    {id:2,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTownzmvP0nla9ojH2azu4sI_ITotNpcJm_2Q&usqp=CAU',
      title:'Mouse RGB',
      price:`At Rs1000`,
      model:'By Zebronics',
      text:'Electronics'
    },
    {id:2,
      image:"https://www.westerndigital.com/content/dam/store/en-us/assets/home-page/product/homepage-mybook-elements.png.thumb.1280.1280.png",
      title:'SSD & HDD',
      price:`Buy now `,
      model:'WD SSD&HDD',
      text:'Electronics'
    },
    {id:2,
      image:'https://m.media-amazon.com/images/I/61Fyu3yapyS._AC_SS450_.jpg' ,
      title:'Microphones',
      price:` Buy Now Rs20,999`,
      model:'Echoo',
      text:'Appliances'
    },
    {id:2,
      image:"https://cdn.shopclues.com/images1/thumbnails/116370/320/320/153077646-116370251-1668507510.jpg",
      title:'Dizo-watch',
      price:`From Rs1,999`,
      model:'Realme Dizo',
      text:'Appliances'
    },
    {id:3,
      image:"https://cdn.staticans.com/image/tr:h-1500,w-1500,cm-pad_resize/data/philips/14-08-2021/HL7777%20Product_777%20x%20826%20pxls.jpg" ,
      title:'Mixer,Grinder',
      price:`From Rs13,000`,
      model:'Philips',
      text:'Appliances'
    },
    {id:3,
      image:'https://d1kivxjtmxnd4.cloudfront.net/filters:format(webp)/images/Bajaj_DX2_2.jpg',
      title:'Iron Dx 2',
      price:`From Rs799`,
      model:'Bajaj Irons',
      text:'Appliances'
    },
    {id:3,
      image:'http://cdn.shopify.com/s/files/1/0608/4988/1306/collections/Home-Appliances.png?v=1643885708',
      title:`Air Coolers`,
      price:`under Rs14,999`,
      model:'Kenstar',
      text:'Appliances'
    },
    {id:3,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTobfo-bqkg-IGDfXyG0UlKfnX2AcBeIKF-KQ&usqp=CAU',
      title:'Microwave Ovens',
      price:`At  Rs18999`,
      model:'Bajaj',
      text:'Appliances'
    },
    {id:3,
      image:'https://www.butterflyindia.com/wp-content/uploads/2021/07/breakfast.png',
      title:'Toaster',
      price:`At Rs6000`,
      model:'Kenster',
      text:'Appliances'
    },
    {id:3,
      image:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664421002/Croma%20Assets/Large%20Appliances/Washers%20and%20Dryers/Images/257199_0_tx35xr.png/mxw_640,f_auto",
      title:'Washing Machine',
      price:`Buy now `,
      model:'samsung,Whirlpool',
      text:'Appliances'
    },
    {id:3,
      image:'https://shop.panasonic.com/sites/default/files/salsify/product/image/8e576d09334e84158c2e192ba960c85b2425f088.jpg',
      title:'Rice Maker',
      price:` Buy Now Rs9,999`,
      model:'Panasonic',
      text:'Electronics'
    },
    {id:3,
      image:"https://d2xamzlzrdbdbn.cloudfront.net/products/9a6e6a23-70d9-4f36-ac57-70047f2d6c1821221330_416x416.jpg",
      title:'Doubledoor Fridge',
      price:`From Rs25,999`,
      model:'L.G.,Samsung,Whirlpool',
      text:'Electronics'
    },
    {id:4,
      image:"https://www.bigbasket.com/media/uploads/p/xxl/286731-2_7-ponds-pure-detox-anti-pollution-purity-face-wash-with-activated-charcoal.jpg" ,
      title:'Facewash',
      price:`From Rs199`,
      model:'PONDS',
      text:'Beauty,Toys & More'
    },
    {id:4,
      image:'http://cdn.shopify.com/s/files/1/1454/5188/products/1_9_7d455ea7-ec34-4025-aa2c-7cdaf61b9233.jpg?v=1662033261',
      title:'Sunscreen',
      price:`From Rs499`,
      model:'mCaffeine',
      text:'Beauty,Toys & More'
    },
    {id:4,
      image:'https://cdn.shopify.com/s/files/1/1188/2592/products/5_72244335-2ea5-48ae-bea2-721a0aa3274a.jpg?v=1666859733',
      title:`Perfumes`,
      price:`under Rs499`,
      model:'Musk Perfumes',
      text:'Beauty,Toys & More'
    },
    {id:4,
      image:'https://cdn.shopify.com/s/files/1/0014/3514/0183/products/24894_H--8901030814891_800x.jpg?v=1606366615',
      title:'EyeLiner',
      price:`At  Rs999`,
      model:'Lakme',
      text:'Beauty,Toys & More'
    },
    {id:4,
      image:'https://cdn.shopify.com/s/files/1/0390/2985/products/Crowd-Faorites-Combo_Set-of-3_Listing-image_01_1024x1024.jpg?v=1634550010',
      title:'NailPolish Combo',
      price:`At Rs600`,
      model:'Plum,Lakme',
      text:'Beauty,Toys & More'
    },
    {id:4,
      image:"https://5.imimg.com/data5/FC/FN/MY-50716692/make-up-kit-500x500.jpg",
      title:'Makeup Kit',
      model:'From Zara Beauty',
      text:'Beauty,Toys & More'
    },
    {id:4,
      image:'https://m.media-amazon.com/images/I/412s6dyeWyL._SX522_.jpg',
      title:'Hair Serum',
      price:` Buy Now Rs199`,
      model:'Streaks',
      text:'Beauty,Toys & More'
    },
    {id:4,
      image:"https://media6.ppl-media.com/mediafiles/ecomm/promo/1596634207_onion_oil_product.jpg",
      title:'Hair Oil',
      price:`From Rs299`,
      model:'Wow Oils',
      text:'Beauty,Toys & More'
    },
  ]
})
