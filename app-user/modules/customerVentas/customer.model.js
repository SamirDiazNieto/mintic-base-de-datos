 

(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var CustomerSchema = new Schema({
        IdProducto: {
            type: String,
            required: false
        },
        cantidad  : {
            type: Number,
            required: false
        },
        precioUnitario : {
            type: Number,
            required: false
        },
        fechaVenta : {
            type: String,
            required: false
        },
        cedulaCliente: {
            type: Number,
            required: false
        },
        nombreCliente: {
            type: String,
            required: false
        },
        idVendedor: {
            type: String,
            required: false
        },
        estado : {
            type: String,
            required: false
        },
        valorTotal : {
            type: Number,
            required: false
        },
        // city: String,
        // state: String,
        // zipCode: String,
        // country: String
    });

    module.exports = mongoose.model('customersVentas', CustomerSchema);
})();