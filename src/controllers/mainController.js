const mercadopago = require("mercadopago");

// Agrega credenciales
mercadopago.configure({
  sandbox: true,
  access_token:
    "TEST-5883773942845862-062518-c2399b9abe29d3c725aa4049dad03364-153866039",
});
let preference = {
  items: [
    {
      title: "Mi producto",
      unit_price: 100,
      quantity: 1,
    },
  ],
};
mercadopago.preferences
  .create(preference)
  .then(function (response) {
    // Este valor reemplazará el string "<%= global.id %>" en tu HTML
    global.id = response.body.id;
  })
  .catch(function (error) {
    console.log(error);
  });

module.exports = {
  root: (req, res) => {
    res.render("index", {
      title: "Integracion Mercado Pago",
    });
  },
};
