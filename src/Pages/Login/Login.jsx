import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import { TextField ,Box,Typography,styled} from '@mui/material';
function Login({open,setOpen}) {
  const[email,setEmail]=useState('')
  
  function handleClose(){
    setOpen(false)
  }
  const intialValue={
    login:{
      view:'login'
    },
    signup:{
      view:'signup'
    }
  }
  const [istoggle,setIsToggle]=useState(intialValue.login)

const toggleSignup = () =>{
  setIsToggle(intialValue.signup)
}
const toggleLogin = () =>{
  setIsToggle(intialValue.login)
}

function handleSubmit(e){
   e.preventDefault()
  
}
  const Component=styled(Box)`
  height:528px;
  width:45vw;
  `
  const Image=styled(Box)`
  background:#2874F0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) 85% 80% no-repeat;
  height:100%;
  width:40%;
  padding:45px 35px;
  `
  const Wrapper=styled(Box)`
  display:flex;
  flex-direction:column;
  padding:25px 35px;
  flex:1;
  & >div ,& button, & >p{
    margin-top:40px;
  }
  `
  const Loginbtn=styled(Box)`
  text-transform:none;
  background:#FB641B;
  height:48px;
  border-radius:2px;
  width:21.5rem;
  color:white;
  text-align:center;
  padding-top:0.6rem;
  font-weight:bold;
  `
  const Typo=styled(Typography)`
  font-size:14px;
  color:#2874F0;
  font-weight:600;
  cursor:pointer;
  padding-top:10rem ;
  padding-left:4rem;
  `
  const Loginbtn1=styled(Box)`
  background:white;
  height:48px;
  border-radius:2px;
  width:21.5rem;
  color:#2874F0;
  text-align:center;
  padding-top:0.6rem;
  font-weight:bold;
  border:none;
  box-shadow: 0px 0px 5px 1px  lightgrey;
  cursor:pointer;
  `
  return (
    <div>
        <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
          <Component>
            {istoggle.view==='login'?
            <Box style={{display:'flex',height:'100%'}}>
         <Image>
          <Typography variant='h5' style={{color:'white',fontWeight:'600'}}>Login</Typography>
          <Typography style={{marginTop:'20px',width:'10rem',color:'#DBDBDC'}}>Get access to your Orders, Wishlist and Recommendations</Typography>
         </Image>
          <Wrapper>
        <TextField variant='standard' label='Enter Email/Mobile number'
        style={{width:'21.5rem'}}/>
        <Typography style={{width:'23rem',fontSize:'12px',color:'#878787'}}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
        <Loginbtn>LOGIN</Loginbtn>
        <Typo onClick={()=>toggleSignup()}>New to Flipkart? Create an account</Typo>
        </Wrapper>
        </Box>:<Box style={{display:'flex',height:'100%'}}>
         <Image>
          <Typography variant='h5' style={{color:'white',fontWeight:'600'}}>Looks like you're new here!</Typography>
          <Typography style={{marginTop:'20px',width:'10rem',color:'#DBDBDC'}}>Sign up with your mobile number to get started</Typography>
         </Image>
          <Wrapper>
        <TextField  value={email} onChange={(e)=>setEmail(e.target.value)}  variant='standard' label='Enter Email'
        style={{width:'21.5rem'}}/>
        <TextField  variant='standard' label='Enter Mobile number'
        style={{width:'21.5rem'}}/>
        <Typography style={{width:'23rem',fontSize:'12px',color:'#878787'}}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
        <Loginbtn onClick={handleSubmit}>CONTINUE</Loginbtn>
        <Loginbtn1 onClick={()=>toggleLogin()} >Existing User?Log in</Loginbtn1>
        </Wrapper>
        </Box>
        }
        </Component>
        </Dialog>
        
        </div>
  )
}

export default Login