import './style.css'
import { Navv } from './Components/nav'
import { footer } from './Components/footer'
import { initRouter } from './router/router'

( ()=>{
  Navv()
  footer()
  const app=document.getElementById("app")
  initRouter(app)
})()