// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// Agrega credenciales
mercadopago.configure({
    access_token: 'PROD_ACCESS_TOKEN'
  });

  // Crea un objeto de preferencia
let preference = {
    items: [
      {
        title: 'Mi producto',
        unit_price: 100,
        quantity: 1,
      }
    ]
  };
  
  mercadopago.preferences.create(preference)
  .then(function(response){
  // Este valor reemplazará el string "<%= global.id %>" en tu HTML
    global.id = response.body.id;
  }).catch(function(error){
    console.log(error);
  });