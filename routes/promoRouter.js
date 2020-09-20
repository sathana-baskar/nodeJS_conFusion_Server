var express = require('express');
const bodyParser =require('body-parser');

var promoRouter = express.Router();
promoRouter.use(bodyParser.json());
promoRouter.route('/')
    .all((req,res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        next();
    })
   .get((req,res,next) => {
        res.send("Will send all the promotions to you!");
    })
    .post((req,res,next) => {
        res.send('Will add the promotion: '+req.body.name+ ' with details: ' +req.body.description); 
    })
    .put((req,res,next) => {
        res.statusCode = 403;
        res.send('PUT operation not supported on /promotions'); 
    })
    .delete((req,res,next) => {
        res.send("Deleting all the promotions!");
    });



    promoRouter.route('/:promoId')//route
    .all((req,res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type','text/html');
        next();
    })
    .get((req,res,next) => {
        console.log(req.params.promoId);
        res.send('Will send details of the promotion: ' + req.params.promoId +' to you!');
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.send('POST operation not supported on /promotions/'+ req.params.promoId);
    })

    .put((req, res, next) => {
        res.write('Updating the promotion: ' + req.params.promoId + '\n');
        res.send('Will update the promotion: ' + req.body.name + ' with details: ' + req.body.description);
    })

    .delete((req, res, next) => {
        res.end('Deleting promotion: ' + req.params.promoId);
    });



    module.exports =promoRouter;
