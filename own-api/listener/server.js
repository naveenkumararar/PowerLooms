"use strict";
const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose')
    // const path = require('path');
const Config = require('../config/config')

async function start(router) {
    try {
        let app = express();
        let http = require('http').Server(app);

        /* configure the express */
        /* parse application/x-www-form-urlencoded */
        app.use(bodyParser.urlencoded({
            extended: false
        }));
        /* parse application/json */
        app.use(bodyParser.json());

        /*
         * CORS middleware
         */
        var allowCrossDomain = function(req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

            next();
        }
        app.use(allowCrossDomain);
        // app.use('/uploads', express.static('uploads'));
        // app.use(authenication)

        /* configure the routes */
        router(app);
        http.listen(3010);
        console.log('Server is running on port ', http.address().port);
        dbInit();

        // /**
        //  * Connect to Redis DB
        //  */
        // global.client = redis.createClient({
        //     db: 0
        // });
        // console.log("Redis Connected...");

        /**
         * Connect to Redis DB
         */
        // global.client = await redisCall()
        // client.on("error", function(err) {
        //     console.error("Error connecting to redis Please Run Redis-server", err.code);
        // });
        // client.on("connect", function(err) {
        //     console.error("Redis Connected...");
        // });

    } catch (err) {
        console.log(err);
    }
}


async function dbInit() {
    try {
        let db = mongoose.connection; // 192.168.2.1
        // mongoose.connect(`mongodb://${Config.database.username}:${Config.database.password}@${Config.database.host}:${Config.database.port}/${Config.database.db}`, { useNewUrlParser: true });
        mongoose.connect(`mongodb://${Config.database.host}:${Config.database.port}/${Config.database.db}`, {
            useNewUrlParser: true
        });
        db.on('open', async function() {
            console.log('Database is connected...');
            // await checkAdminUser();
        });

        db.on('error', function(err) {
            console.log(err);
            console.log('Database connection error ...');
        });
    } catch (err) {
        console.log(err);
    }
}

// exports.dbInit = dbInit;

// exports.start = start;

module.exports = {
    start: start,
    dbInit: dbInit
}