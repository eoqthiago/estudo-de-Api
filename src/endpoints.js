


import { Router } from "express";

const server = Router();

import { dobro, somar } from "./services.js"


server.get('/ping', (req, resp) => {

    resp.send('pong');

});

server.get('/dobro/:numero', (req, resp) => {
    let numero = Number(req.params.numero);
    const valor = dobro(numero)

    resp.send({

        dobro: valor

    });

});

server.get('/somar', (req, resp) => {

    let a = Number(req.query.a);
    let b = Number(req.query.b);
    const x = somar(a, b)

    resp.send({
        somar: x
    })

});

server.post('/somar', (req, resp) => {

    try {
        const { valores: { a, b}} = req.body;
        const x = somar(a, b)
    
        resp.send({
            somar: x
        })
    } catch (error) {
        resp.status(404).send({
            error: error.message
        })
    }


});



export default server;