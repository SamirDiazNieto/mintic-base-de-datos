(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            ProductosController: require('./productos.controller'),
            ProductosMiddleware: require('./productos.middleware'),
            ProductosService: require('./productos.service'),
            ProductosModel: require('./productos.model')
        }
    }

})();