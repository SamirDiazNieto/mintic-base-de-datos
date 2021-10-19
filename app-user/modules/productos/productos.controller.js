(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var ProductosMiddleware = require('./productos.module')().ProductosMiddleware;

    router.post('/',
        ProductosMiddleware.addProducto,
        function (req, res) {
            res.status(201).json(req.response);
        });

    router.get('/',
        ProductosMiddleware.getProducto,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:productoId',
        ProductosMiddleware.getProductoById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:productoId',
        ProductosMiddleware.modifyProducto,
        function (req, res) {
            res.status(200).json(req.response);
        });
    
    router.delete('/:productoId',
        ProductosMiddleware.removeProducto,
        function (req, res) {
            res.status(200).json(req.response);
        });
    module.exports = router;

})();