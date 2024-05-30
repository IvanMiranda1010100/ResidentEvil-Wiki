export function PageWelcome(){
  const div=document.createElement("div")

  div.innerHTML=`
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
  `

  return div
}