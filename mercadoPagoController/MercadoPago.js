// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// Agrega credenciales
mercadopago.configure({
    access_token: 'TEST-4573740962365509-121618-2e5b9765ef84c1018ce8e750bbfc72a7-109551422'
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