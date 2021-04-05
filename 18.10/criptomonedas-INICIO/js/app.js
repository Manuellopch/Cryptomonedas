const API = new api('38d540cc90900e93ef5d91814ab47a34b722eda1bae50dce7d6cae88e50bbf44');
const ui = new interfaz();

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
     e.preventDefault();
     //moneda
     const Smoneda = document.getElementById('moneda');
     const monedaSe = Smoneda.options[Smoneda.selectedIndex].value;
     //Cripto 
     const Cmoneda = document.getElementById('criptomoneda');
     const monedaCr = Cmoneda.options[Cmoneda.selectedIndex].value;
     
     //Comprobar que ambos campos esten seleccionados
     if(monedaSe === '' || monedaCr === ''){
          ui.MostrarMensaje('LLene todos los campos', 'alert bg-danger text-center')
     }else{
          API.obtenerValores(monedaSe,monedaCr)
          .then(data =>{
               ui.mostrarResultado(data.resultado.RAW,monedaSe,monedaCr)
          })
     }
})