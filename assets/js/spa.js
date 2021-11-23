window.addEventListener('hashchange', router);
//document.addEventListener('DOMContentLoaded', router);
document.querySelector('#inicio').addEventListener('click', e=>{
    e.preventDefault();
    location.hash = "";
    router();
})

const HomeComponent = {
    render(){
        return `
        <section id="hero" class="d-flex align-items-center">
    <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">
      <div class="row justify-content-center">
        <div class="col-xl-7 col-lg-9 text-center pruebajs">
          <h1>Somos Holly Days</h1>
          <h2>Viajá sin preocupaciones</h2>
          

          

 
        </div>
      </div>
      <div class="text-center">
        <a href="#contact" class="btn-get-started scrollto btnPrimario">Buscar seguro</a>
      </div>

      <div class="row icon-boxes">
        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="200">
          <div class="icon-box">
            <div class="icon"><i class="bi bi-file-lock2"></i></div>
            <h4 class="title"><a href="">Seguro</a></h4>
            <p class="description">Te brindamos seguridad y trabajamos con las mejores compañías</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="300">
          <div class="icon-box">
            <div class="icon"><i class="bi bi-clock-history"></i></div>
            <h4 class="title"><a href="">Rápido</a></h4>
            <p class="description">En cuestión de pocos minutos vas a poder tener asegurado tu viaje</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="400">
          <div class="icon-box">
            <div class="icon"><i class="bi bi-currency-dollar"></i></div>
            <h4 class="title"><a href="">Económico</a></h4>
            <p class="description">Encontrá los mejores precios que se ajustan a tu bolsillo</p>
          </div>
        </div>

        <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in" data-aos-delay="500">
          <div class="icon-box">
            <div class="icon"><i class="bi bi-check-all"></i></div>
            <h4 class="title"><a href="">Fácil  </a></h4>
            <p class="description">Contamos con un equipo de soporte para atender a tus consultas</p>
          </div>
        </div>

      </div>
    </div>
  </section><!-- End Hero -->

  <main id="main">

    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_ba1mvckj.json" background="transparent" speed="1" style="width: 450px; height: 450px" loop  autoplay class="mx-auto  lottie"></lottie-player>
        </div>


      </div>
    </div>

        <!-- ======= About Video Section ======= -->
        <section id="about-video" class="about-video">
          <div class="container" data-aos="fade-up">
    
            <div class="row">
    
              <div class="col-lg-6 video-box align-self-baseline" data-aos="fade-right" data-aos-delay="100">
                <img src="assets/img/video-about.jpg" class="img-fluid" alt="">
                <a href="https://www.youtube.com/watch?v=nhEkH-jKp2g" class="glightbox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
              </div>
    
              <div class="col-lg-6 pt-3 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
                <h3>La importancia de contar con un seguro de Viaje.</h3>
                <p class="fst-italic">
                  Las coberturas más importantes son el seguro por accidente o enfermedad, pero es mucho más que un servicio médico en el exterior, ya que los planes de asistencia ofrecen coberturas que contemplan otros eventos no médicos como:
                </p>
                <ul>
                  <li><i class="bx bx-check-double"></i> Pérdida o cancelación de vuelo</li>
                  <li><i class="bx bx-check-double"></i> Pérdida o robo de equipaje</li>
                  <li><i class="bx bx-check-double"></i> Problemas que requieran asistencia legal</li>
                  <li><i class="bx bx-check-double"></i>  Regreso anticipado</li>
                  <li><i class="bx bx-check-double"></i>  Repatriación</li>
                </ul>
                <p>
                  Recordá antes de contratar tu plan saber los siguientes datos: destino, días de viaje, pasajeros y estado de salud e itinerario, ya que hay coberturas especiales según el tipo de viaje que realizas. Si tienes más consultas sobre la importancia o los tipos de planes que hay, no dudes en contactar a nuestros asesores.
                </p>
              </div>
    
            </div>
    
          </div>
        </section><!-- End About Video Section -->



            <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2 class="cotizatitle">Cotiza tu seguro al instante</h2>
          <p>Sabemos lo importante que es que viajes con tranquilidad. Encontrá en Holly Days los mejores precios para tu próximo viaje.</p>
        </div>

         <div>





        <div class="container">
          <div class="row" >
            <!-- col form -->
            <div class="col mt-3">
              <div class="col-lg-12 mt-8 mt-lg-0">

                <form action="forms/contact.php" method="post" role="form" class="php-email-form m-0">
                  <div class="row">
    
                    <!-- Nombre -->
                    <div class="col form-group">
                      <label for="nombre">Nombre</label>
                      <input type="text" name="nombre" class="form-control" id="input-nombre" required>
                    </div>
  
                    <!-- Email -->
                    <div class=" col form-group">
                      <label for="email">Correo electrónico</label>
                      <input type="email" class="form-control" name="email" id="input-email" required>
                    </div>
                  </div>
    
  
                   <!-- Destino -->
  
  
                  <div class="row mt-3">
                    <div class="col form-group mt-12 mt-md-12">
                      <label for="destino">Destino</label><br>
                      <select id="input-destino" required>
                        <option value="Norteamérica">Norteamérica</option>
                        <option value="Europa" selected>Europa</option>
                        <option value="Latinoamérica">Latinoamérica</option>
                        <option value="Asia/Oceanía">Ásia/Oceanía</option>
                        <option value="África">África</option>
                      </select>
                    </div>
  
                     <div class="col">
                      <label for="edad">Edad</label>
                      <input type="number" class="form-control" name="edad" id="input-edad"required>
                     </div>
  
                     <div class="col">
                      <label for="cantidadDias">Días</label>
                      <input type="number" class="form-control" name="cantidadDias" id="input-cantidadDias" required>
                      </div>

                      
                   </div><!-- cierra row -->
        
  
    


                  </div>
                  
                  <div class="text-center mt-4"><button type="submit" id="btn-cotizar" class="btn btn-primary" >Cotizar</button></div>
              </form>
    
              </div>

              
            </div>
            <!-- col resultado -->
            <div id="contenedorRender" class="col ocultar">
              <div id="render-container" class="container">
                
                <table class="table" id="tabla">
                  <thead class="thead-inverse">
                    <tr class="table-dark">
                      <th>Nombre</th>
                      <th>Destino</th>
                      <th>Cantidad de días</th>
                      <th>Precio</th>
                    </tr>

                    <tbody><td></td><td></td><td></td><td></td></tbody>
                  </thead>
                </table>

              </div> <!-- cierra render container -->

              <form class="row g-3 mt-3 d-flex justify-content-center">
                <div class="col-auto">
                  <label for="inputCupon" class="visually-hidden">Cupón</label>
                  <input type="text" class="form-control" id="inputCupon" >
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary mb-3" id="btnDescuento">Aplicar descuento</button>
                </div>
              </form>
            </div>
          </div>
        </div>



        </div>

      </div>
    </section><!-- End Contact Section -->




         <!-- ======= Counts Section ======= -->
    <section id="counts" class="counts section-bg">
      <div class="container">

        <div class="row justify-content-end">

          <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
              <span data-purecounter-start="0" data-purecounter-end="1646" data-purecounter-duration="2" class="purecounter"></span>
              <p>Clientes felices</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
              <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="2" class="purecounter"></span>
              <p>Destinos</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
              <span data-purecounter-start="0" data-purecounter-end="3" data-purecounter-duration="2" class="purecounter"></span>
              <p>Años de experiencia</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
              <span data-purecounter-start="0" data-purecounter-end="5" data-purecounter-duration="2" class="purecounter"></span>
              <p>Reconocimientos</p>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Counts Section -->

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Sobre nosotros</h2>
          <p>Somos un grupo de especialistas en turismo y nuestra misión es brindarte la mejor experiencia a la hora de contratar un seguro. </p>
        </div>

        <div class="row content">
          <div class="col-lg-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
              <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
              <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
            </ul>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#" class="btn-learn-more">Contactanos</a>
          </div>
        </div>

      </div>

      
    </section><!-- End About Section -->

    <!-- <button id="btnVuelos">Ver vuelos</button> -->


    <div class="vuelosContainer">
      <ul id="lista-vuelos"></ul>
    </div>


 

    <!-- ======= Cta Section ======= -->
    <section id="cta" class="cta">
      <div class="container" data-aos="zoom-in">
        <div class="text-center">
          <h3>¡No esperes más!</h3>
          <p>Asegurá tu próximo viaje con nosotros y ocupate sólo de pasarla bien.</p>

          <button type="button" class="btn btn-light btnDesc" onclick="obtenerDescuento()">
            Obtener descuento
          </button>



        </div>
      </div>
    </section><!-- End Cta Section -->


  




    <div class="cuponContainer">
      <div class="container cupon-content">
        <button type="button" class="btn-close btnPrimario" aria-label="Close" id="btnClose"></button>
        <div class="row">
          <div class="col text-center"><p>Tu cupón de descuento:</p></div>
        </div>
  
        <div id="cupon" class="row text-center">

        </div>
      </div>
    </div>


  </main><!-- End #main -->


  <div id="vuelosContainer" class="container mt-5 mb-5">
    <div class="section-title">
      <h2>Busca tu próximo destino</h2>
      <!-- <p>Somos un grupo de especialistas en turismo y nuestra misión es brindarte la mejor experiencia a la hora de contratar un seguro. </p> -->
    </div>
    <div class="row">
      
      <div class="col">
        <input type="text" class="form-control" placeholder="Ingresa tu destino" aria-label="Destino">
      </div>
      <div class="col">
        <button type="submit" class="btn btn-primary" id="btnVuelos">Buscar</button>
      </div>
    </div>

    <div class="row">
      <div class="lista-vuelos">
        <ul id="lista-vuelos"></ul>
      </div>
    </div>
  </div>

        `

    }
}


const ContactoComponent = {
    render(){
        return
        
    }
}

const ErrorComponent = {
    render(){
        return `
        <h2>Error 404</h2>
        <div class="container">
            <h2>La página no existe</h2>
        </div>
        `
    }
}




const routes = [
    {path: '/', component: HomeComponent},
    {path: '/contacto', component: ContactoComponent}
]

// Extraigo el path de la URL
function parseLocation(){ 
    return location.hash.slice(1) || '/';
}

// Encuentra el path que el usuario necesita
function findComponent(userPath){
    return routes.find(route => route.path === userPath);
}


function router(){
    const userPath = parseLocation();
    const { component = ErrorComponent } = findComponent(userPath) || {};

    const app = document.querySelector('#app');
    app.innerHTML = component.render();
}


