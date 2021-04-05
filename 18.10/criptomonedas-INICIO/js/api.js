class api{
     constructor(apikey){
          this.apikey = apikey;
     }
     async obtenerMonedasAPI(){
          const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;
          //fetch a la url
          const UrlOmonedas = await fetch(url)
          //respuesta en JSON
          const monedas = await UrlOmonedas.json();
       
          return{
               monedas
          }
     }
     async obtenerValores(moneda,criptomoneda){
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apikey}`;

          const urlCon = await fetch(url);
          const resultado = await urlCon.json();
          return{
               resultado
          } 
     }
}