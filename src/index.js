import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Routing from './Components/Routing/Routing'
ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <BrowserRouter>
    {/* <App /> */}
    <Routing/>
    </BrowserRouter>
    </RecoilRoot>
)
