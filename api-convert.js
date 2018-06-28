const express = require('express'),
        Router = express.Router;


Router.get('/:amount/:from/:to', (req, res) => {
        let amount = req.params['amount'],
            source = req.params['from'],
            dest = req.params['to'];

        
        return res.send({
                timestamp: 0,
                rate: 0,
                value: 0
            });
});