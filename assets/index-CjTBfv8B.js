var s=Object.defineProperty;var c=(a,i,t)=>i in a?s(a,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[i]=t;var d=(a,i,t)=>(c(a,typeof i!="symbol"?i+"":i,t),t);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();function l(){class a extends HTMLElement{constructor(){super();d(this,"shadow",this.attachShadow({mode:"open"}));this.render(),this.Botones()}render(){this.shadow.innerHTML=`
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
      `;const o=document.createElement("style");o.textContent=`
      
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
      
      `,this.shadow.appendChild(o)}Botones(){const o=this.shadow.querySelector("#button-open"),e=this.shadow.querySelector("#button-close"),n=this.shadow.querySelector(".nav-barra-de-navegacion-opciones");o.addEventListener("click",()=>{n.style.display="inherit"}),e.addEventListener("click",()=>{n.style.display="none"})}}customElements.define("nav-wiki",a)}function p(){class a extends HTMLElement{constructor(){super();d(this,"shadow",this.attachShadow({mode:"open"}));this.render()}render(){this.shadow.innerHTML=`
      <footer>

      <div>
      
        <h3>About Us</h3>
        <p>Me llamo Ivan Miranda y soy Desarrollador Web, si tienes alguna pregunta o quieres decirme algo, les dejo mis redes sociales y mis contactos.</p>

        <div class="footer-redes-container">
        
        <a href="https://github.com/IvanMiranda1010100"><img></a>
        <a href="https://www.linkedin.com/in/ivan-miranda-146912303/"><img></a>
        <a href="https://www.instagram.com/mirandevv/"><img></a>
          

        </div>

      </div>

      <div>
      
        <h3>Contact Us</h3>
        
        <p class="parrafo-contacto">+54 1168712714</p>
        <p class="parrafo-email">alfa02ruizmiranda@gmail.com</p>
       
      </div>

  </footer>
  <section class="section-copyright">
    <hr>
    <p class="p-derechos-reservados">Copyright © 2024 Ivan Miranda. All Rights Reserved.</p>  
  </section>

      `;const o=document.createElement("style");o.textContent=`footer{
        background-color: #000000;
        padding: 2rem;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-template-rows: auto;
        gap: 20px;
      }
      
      footer h3{
        font-size: 20px;
      }
      
      footer p{
        font-size: 18px;
      }
      
      footer p{
        margin-bottom: 0px;
        margin-top: 0px;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
      }
      
      @media (min-width: 420px) and (max-width: 559px){
        footer h3{
          font-size: 24px;
        }
      
        footer p{
          font-size: 21px;
        }
      }
      
      @media(max-width: 559px){
        footer{
          grid-template-columns: repeat(1,1fr);
          grid-template-rows: repeat(2,auto);
          text-align: center;
          gap: 10px;
          justify-content: center;
        }
      }
      footer>div{
        margin: auto 10px auto 10px;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
      }
      
      footer>div:first-child>p{
        max-width: 70%;
      }
      
      @media(max-width: 559px){
        footer>div:first-child>p{
          margin: 0 auto;
        }
      }
      
      .footer-redes-container{
        display: flex;
        flex-direction:row;
        align-items: center;
        gap: 20px;
        margin-top: 20px;
      }
      
      @media(max-width: 559px){
        .footer-redes-container{
          justify-content: center;
        }
      }
      
      .footer-redes-container img{
        width: 35px; 
        height: 35px; 
        background-size: contain;
        background-repeat: no-repeat; 
        border: none;
      }
      
      .footer-redes-container a{
        border: none;
      }
      
      .footer-redes-container >a:first-child img{
        background-image: url("src/Media/github.svg");
        
      }
      
      .footer-redes-container >a:nth-child(2) img{
        background-image: url("src/Media/linkedin.svg");
        
      }
      .footer-redes-container >a:last-child img{
        background-image: url("src/Media/ig.svg");
        
      }
      
      .parrafo-contacto,.parrafo-email{
        position: relative;
      }
      
      .parrafo-contacto::before,.parrafo-email::before{
        content: "";
        background-size: contain;
        background-repeat: no-repeat;
        height: 30px;
        width: 30px;
        position: absolute;
        left: -30px;
        top: 50%; 
        transform: translateY(-53%); 
      }

      @media (max-width: 372px) {
        .parrafo-contacto::before,.parrafo-email::before {
          left:32px;
        }
      }

      @media (min-width: 373px) and (max-width: 419px){
        .parrafo-contacto::before,.parrafo-email::before {
          left:48px;
        }
      }

      @media (min-width: 420px) and (max-width: 475px) {
        .parrafo-contacto::before,.parrafo-email::before {
          left: 57px;
        }
      }

      @media (min-width: 476px) and (max-width: 559px) {
        .parrafo-contacto::before,.parrafo-email::before {
            left:80px;
            transform: translateY(-51%);
        }
      }
      
      .parrafo-contacto::before{
        background-image: url("src/Media/telefono.svg");
      }
      
      .parrafo-email::before{
        background-image: url("src/Media/email.svg");
        left: -35px;
      }

      @media (max-width: 372px) {
        .parrafo-email::before {
          left:-25px;
        }
      }

      @media (min-width: 373px) and (max-width: 419px){
        .parrafo-email::before {
          left:-11px;
        }
      }

      @media (min-width: 420px) and (max-width: 475px) {
        .parrafo-email::before {
          left:-8px;
        }
      }

      @media (min-width: 476px) and (max-width: 559px) {
        .parrafo-email::before {
            left:10px;
        }
      } 
      
      .section-copyright{
        background-color: #000000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
      
      hr{
        height: 2px;
        width: 100%;
        background-color: #747372;
        margin: 0;
      }
      
      .p-derechos-reservados{
        margin: 0;
        text-align: center;
      }
      
      `,this.shadow.appendChild(o)}}customElements.define("section-footer",a)}function m(){const a=document.createElement("div");return a.innerHTML=`
  <section class="section-welcome">
    <div class="welcome-container"> 
      <header></header>
      <nav-wiki></nav-wiki>

      <section class="Pagina-welcome">

        <article>

          <div class="welcome-title-contenedor">
            <h2>Inicio</h2>
          </div> 

          <div class="welcome-parrafe-contenedor">
            <p>¡Bienvenid@ a Resident Evil Wiki!, una enciclopedia libre dedicada a la saga de Resident Evil, una franquicia creada por Capcom en 1996,
            que recopila toda la información de sus videojuegos, películas, libros y mangas.</p>

            <div>
                <p class="img-stars">Preparense para ir por las calles desoladas de Raccon City...</p>
            </div>
            
          </div>
          
        </article>

        <article>
          <h2>Introduccion</h2>
          <div class="welcome-parrafe2-container">
            <p>Resident Evil —cuyo título original en Japón es Biohazard (バイオハザード Baiohazādo?, «Peligro biológico»)— es un videojuego de terror del subgénero horror de supervivencia desarrollado y publicado por Capcom.
            
            <br><br>
            
            Concebido originalmente por el productor Tokuro Fujiwara como una nueva versión de su anterior juego de terror, llamado Sweet Home (1989), el desarrollo de Resident Evil fue dirigido por Shinji Mikami. Pasó por varios rediseños, inicialmente fue pensado como un juego para la consola Super Nintendo en 1993, luego como un juego en primera persona totalmente en 3D para PlayStation en 1994 y finalmente como un juego en tercera persona con fondos prerrenderizados. El juego consiste en gran medida en acción en tercera persona con énfasis adicional en gestión de inventario, exploración y resolución de acertijos. Resident Evil estableció muchos elementos que se verían más adelante en la serie, incluido el esquema de control de tanque, el sistema de inventario y de guardado y el uso de modelos 3D sobrepuestos sobre fondos prerrenderizados. El juego fue muy bien recibido crítica y comercialmente, y a menudo se le atribuye el concepto del género survival horror. Fuera de los videojuegos, Resident Evil también ha sido destacado por traer de vuelta la popularización de los zombis en la cultura popular de finales de la década de 1990 en adelante (junto con The House of the Dead), lo que generó un renovado interés en las películas de zombis durante la década de 2000.</p>
          </div>
        </article>

        <article class="article-contenido">
            <div class="contenido-title-container">
              <h2>Contenido</h2>
                <div class="contenido-cards">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
            </div>
        </article>

          <article class="article-destacados">
            <div class="destacados-article-container">
              <h2>Destacados</h2>
                <div class="destacados-cards-container">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
            </div>
          </article>

          </section>

          <section-footer></section-footer>
          
      </div>
  </section>
  `,a}const v=[{path:/\/welcome/,component:m}];function u(a){function i(o){history.pushState({},"",o),t(o)}function t(o){console.log("handleRoute recibió una nueva ruta",o);for(const e of v)if(e.path.test(o)){const n=e.component({goTo:i});a.firstChild&&a.firstChild.remove(),a.appendChild(n)}}location.pathname?i("/welcome"):t(location.pathname),window.onpopstate=function(){t(location.pathname)}}(()=>{l(),p();const a=document.getElementById("app");u(a)})();
