(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var ProductoSchema = new Schema({
        descripcion: {
            type: String,
            required: true
        },
        valor: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        }        
    });

    module.exports = mongoose.model('productos', ProductoSchema);
})();