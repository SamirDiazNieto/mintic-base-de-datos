(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var CustomerSchema = new Schema({

        nombreUsuario: {
            type: String,
            required: true
        },
        rol: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },

    });

    module.exports = mongoose.model('usuarios', CustomerSchema);
})();