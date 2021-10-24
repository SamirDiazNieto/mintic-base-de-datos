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
            required: false
        },
        estado: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: false
        },

    });

    module.exports = mongoose.model('usuarios', CustomerSchema);
})();