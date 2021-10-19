(function () {
    'use strict';

    module.exports = {
        addProducto: addProducto,
        getProducto: getProducto,
        getProductoById: getProductoById,
        modifyProducto: modifyProducto,
        removeProducto: removeProducto
    };

    var ProductoService = require('./productos.module')().ProductosService;

    function addProducto(req, res, next) {

        ProductoService.createProducto(req.body)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(error) {
            next(error);
        }

    }

    function getProducto(req, res, next) {

        ProductoService.fetchProductos()
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function getProductoById(req, res, next) {

        ProductoService.fetchProductoById(req.params.productoId)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function modifyProducto(req, res, next) {
        ProductoService.updateProducto(req.params.productoId, req.body)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }
    }

    function removeProducto(req, res, next) {

        ProductoService.deleteProducto(req.params.productoId)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }

    }

})();
