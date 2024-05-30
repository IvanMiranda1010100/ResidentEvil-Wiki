export function footer(){

  class Footer extends HTMLElement{
  
    shadow=this.attachShadow({mode:"open"});
  
    constructor(){
      super()
      this.render()
    }
    
  
    render(){
      this.shadow.innerHTML=`
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

      `
  
      const style=document.createElement("style")
      style.textContent=`footer{
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
      
      `

      this.shadow.appendChild(style)
    }
  }
  
  customElements.define("section-footer", Footer)
}