(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var CustomerSchema = new Schema({
        email: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: Number,
            required: true
        },
        // city: String,
        // state: String,
        // zipCode: String,
        // country: String
    });

    module.exports = mongoose.model('customers', CustomerSchema);
})();