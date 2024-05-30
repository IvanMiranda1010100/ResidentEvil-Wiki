export function Navv(){

  class Nav extends HTMLElement{
  
    shadow=this.attachShadow({mode:"open"});
  
    constructor(){
      super()
      this.render()
      this.Botones()
    }
    
  
    render(){
      this.shadow.innerHTML=`
      <nav>
            <img class="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Resident_Evil_logo.png"></img>
  
            <div class="nav-opciones">
                <a href="">Juegos</a>
                <a href="">Trucos</a>
                <a href="">Personajes</a>
                <a href="">Guias</a>
                <a href="">Noticias</a>
                <a href="">Avances</a>
                <a href="">Ramdom</a>
            </div>
  
            <div class="nav-buscador">
              <input type="text">
              <div></div>
            </div>

            <div class="nav-barra-de-navegacion-container">
              <button id="button-open" class="nav-barra-de-navegacion">
                <div></div>
                <div></div>
                <div></div>
              </button>
            </div>

            <div class="nav-barra-de-navegacion-opciones">

                <div class="nav-barra-de-navegacion-container">
                  <button id="button-close" class="nav-barra-de-navegacion">
                    <div></div>
                    <div></div>
                    <div></div>
                  </button>
                </div>

                <div class="nav-opciones-2">
                    <a href="">Juegos</a>
                    <a href="">Trucos</a>
                    <a href="">Personajes</a>
                    <a href="">Guias</a>
                    <a href="">Noticias</a>
                    <a href="">Avances</a>
                    <a href="">Ramdom</a>
                </div>
            </div>

        </nav>
      `
  
      const style=document.createElement("style")
      style.textContent=`
      
      nav {
        background-color: #181A1B;
        height: 5rem;
        padding: 1rem;
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 2fr 1fr;
        align-items: center;
        gap: 10px;
      }
      
      @media(max-width: 475px) {
        nav {
          height: 8rem;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, auto);
        }
      }
      
      @media(min-width: 476px) and (max-width: 1000px) {
        nav {
          grid-template-columns: 1fr 1.5fr 0.5fr;
        }
      }

      @media (min-width: 681px) and (max-width: 830px){
        nav{
          grid-template-columns: 1fr 1fr 1fr
        }
      }
      
      .nav-logo {
        height: 3rem;
        width: 12rem;
      }
      
      @media(max-width: 475px) {
        .nav-logo {
          width: 13rem;
          height: 3rem;
          grid-area: 1 / 1 / 2 / 3; 
        }
      }
      
      @media(min-width: 476px) and (max-width: 560px) {
        .nav-logo {
          width: 9rem;
          height: 2.5rem;
        }
      }
      
      .nav-opciones {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      @media(max-width: 1000px) {
        .nav-opciones {
          display: none;
        }
      }
      
      .nav-opciones a {
        cursor: pointer;
        position: relative;
        transition: all ease 0.5s;
        color:white;
        text-decoration:none;
      }
      
      .nav-opciones a:hover {
        color: red;
      }
      
      .nav-opciones a::after {
        content: "";
        background-color: firebrick;
        height: 2px;
        width: 100%;
        position: absolute;
        left: 0;
        top: 100%;
        opacity: 0;
        transition: all ease 0.5s;
      }
      
      .nav-opciones a:hover::after {
        opacity: 1;
      }
      
      .nav-buscador {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      @media(max-width: 475px) {
        .nav-buscador {
          grid-area: 2 / 1 / 3 / 4;
          justify-content:initial;
        }
      }
      
      .nav-buscador div {
        display: inline-block;
        background-image: url("src/Media/lupaa.png");
        background-repeat: no-repeat;
        height: 30px;
        width: 30px;
        cursor: pointer;
      }
      
      .nav-buscador div:hover {
        background-color: aquamarine;
      }
      
      .nav-buscador input {
        padding: 10px 10px;
        border-radius: 20px;
        font-size: 15px;
      }
      
      @media(max-width: 475px) {
        .nav-buscador input {
          font-size: 17px;
          width: 70%;
        }
      }
      
      @media(min-width: 476px) and (max-width: 560px) {
        .nav-buscador input {
          font-size: 12px;
        }
      }
      
      @media(min-width: 561px) and (max-width: 680px) {
        .nav-buscador input {
          font-size: 12px;
        }
      }
      
      @media(min-width: 681px) and (max-width: 1000px) {
        .nav-buscador input {
          font-size: 18px;
        }
      }
      
      @media(min-width: 1001px) and (max-width: 1150px) {
        .nav-buscador input {
          font-size: 12px;
        }
      }
      
      .nav-barra-de-navegacion-container {
        display: flex;
        justify-content: flex-end;
      }
      
      @media(max-width: 475px) {
        .nav-barra-de-navegacion {
          grid-area: 1 / 3 / 2 / 4;
        }
      }
      
      @media(min-width: 1001px) {
        .nav-barra-de-navegacion-container {
          display: none;
        }
      }
      
      .nav-barra-de-navegacion {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 3rem;
        height: 3rem;
        border: 0;
        background: transparent;
        gap: 0.65rem;
        cursor:pointer;
      }
      
      .nav-barra-de-navegacion div {
        background: white;
        width: 100%;
        height: 2px;
        border-radius: 5px;
        transition: all 0.5s;
        transform-origin: left;
      }
      
      .nav-barra-de-navegacion:hover div:first-child {
        transform: rotate(45deg);
      }
      
      .nav-barra-de-navegacion:hover div:nth-child(2) {
        opacity: 0;
      }
      
      .nav-barra-de-navegacion:hover div:last-child {
        transform: rotate(-45deg);
      }

      .nav-barra-de-navegacion-opciones {
        position: fixed;
        top: 0;
        height: 100%;
        width: 100%;
        background-image: url("src/Media/larpd.webp");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 1000;
        display: grid;
        align-self: center;
        justify-self: center;
        padding-left: 1rem;
        padding-right: 2rem;
        padding-top: 1rem;
        display:none;
      }

      .nav-barra-de-navegacion-opciones>nav-barra-de-navegacion-container{
        display: flex;
        justify-content: flex-end;
        align-items: center; 
      }

      .nav-opciones-2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }
      
      .nav-opciones-2 a {
        color: white;
        font-size: 2rem;
        text-decoration: none;
        transition: color 0.5s;
        position:relative;
        backdrop-filter: blur(15px);
      }
      
      .nav-opciones-2 a:hover {
        color: red;
      }

      .nav-opciones-2 a::after {
        content: "";
        background-color: firebrick;
        height: 2px;
        width: 100%;
        position: absolute;
        left: 0;
        top: 100%;
        opacity: 0;
        transition: all ease 0.5s;
      }
      
      .nav-opciones-2 a:hover::after {
        opacity: 1;
      }
      
      `

      
      this.shadow.appendChild(style)
    }

    Botones(){
      const openButton=this.shadow.querySelector("#button-open")
      const closeButton=this.shadow.querySelector("#button-close")
      const ventanaOpen=this.shadow.querySelector(".nav-barra-de-navegacion-opciones")
    
      openButton.addEventListener("click",()=>{
        ventanaOpen.style.display="inherit";
      });

      closeButton.addEventListener("click",()=>{
        ventanaOpen.style.display="none";
      });

    }
    
  }
  customElements.define("nav-wiki", Nav);
}