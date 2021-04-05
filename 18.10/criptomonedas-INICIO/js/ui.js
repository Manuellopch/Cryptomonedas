class interfaz{
     constructor(){
          this.init();
     }
     init(){
          this.ConstruirSelect();
     }
     ConstruirSelect(){
          API.obtenerMonedasAPI()
           .then(monedas => {

               const cripto = document.getElementById('criptomoneda');

               for(const [key, value] of Object.entries(monedas.monedas.Data)){
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    cripto.appendChild(opcion)
               }
          })
     }
     MostrarMensaje(mensajes, clases){
     const div = document.createElement('div');
     div.classList = clases;
     div.appendChild(document.createTextNode(mensajes));
     //mensaje en la clase mensajes
     const error = document.querySelector('.mensajes');
     error.appendChild(div);  
     setTimeout(()=>{
          document.querySelector('.mensajes div').remove()
     },2500);
     }
     //imprime el resultado de la cotizacion
     mostrarResultado(resultado, moneda, crypto){
          const mensajeAnterior = document.querySelector('#resultado > div');
          if(mensajeAnterior){
               mensajeAnterior.remove();
          }

          const datosMoneda = (resultado[crypto][moneda]);
          console.log(datosMoneda);
          
          let precio = datosMoneda.PRICE.toFixed(2);
          let porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2);
          //formula para sacar la fecha
          let fecha= new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-GT');
          let templateHTML = `
          <div class="card bg-warning">
               <div class="card-body text-light">
               <h2 class="card-title">Resultado:</h2>
               <p>El precio de: ${datosMoneda.FROMSYMBOL} a moneda: ${datosMoneda.TOSYMBOL} es de: ${precio}</p>
               <p>Variacion Ultimo Dia: % ${porcentaje}</p>
               <p>Ultima Actualizacion:${fecha}</p>
               </div>
          </div>
          `
          this.Animacion('block')
          setTimeout(()=>{
               document.querySelector('#resultado').innerHTML = templateHTML;
               this.Animacion('none');
          },2000)
     }
     //Cargar animacion
     Animacion(vista){
          const spinner = document.querySelector('.contenido-spinner');
          spinner.style.display = vista;
     }
}