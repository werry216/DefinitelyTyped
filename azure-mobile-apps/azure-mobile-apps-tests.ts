

import express = require('express');
import mobileApps = require('azure-mobile-apps');
import logger = require('azure-mobile-apps/src/logger');
import queries = require('azure-mobile-apps/src/query');

var app = express(),
    mobileApp = mobileApps();

// various configuration permutations   
mobileApps({
    debug: true,
    data: {
        provider: 'mssql',
        server: '',
        user: '',
        database: '',
        password: ''
    },
    webhook: { url: 'http://localhost/' }
});

mobileApps({
    data: {
        provider: 'memory'
    }
})

// it would be nice to integrate with winston
mobileApps({ logging: { level: 'silly', transports: [{}] } })

// various custom middleware syntaxes     
mobileApp.use(function (req: any, res: any, next: any) { next(); });
mobileApp.use([function () {}, function () {}]);
mobileApp.use(function () {}, function () {});
mobileApp.use(function () {}).use(function () {});

// basic syntax for tables and api
mobileApp.tables.add('todoitem');
mobileApp.tables.add('todoitem', { authorize: true });
mobileApp.tables.add('todoitem', mobileApps.table());
mobileApp.tables.import('tables');
mobileApp.api.add('api', { authorize: true, get: function () {}, delete: function () {} });
mobileApp.api.import('api');

// ensure the mobile app instance can be correctly mounted as an express router
app.use(mobileApp);

// Express.Table, instantiated from the mobile app
var table = mobileApp.table()
table.use(function (req: Express.Request, res: Express.Response, next: any) {
    next(new Error());
});
table.use([function () {}, function () {}]);
table.read(function (context: Azure.MobileApps.Context) {
    context.query.where({ p1: 'test' });
    return context.execute()
        .then(function (result: any) {
            return result;
        })
        .catch(function (error: any) { })
        .then(function () {});
});
table.insert(function (context: Azure.MobileApps.Context) {
    context.query.id = 'anotherId';
    context.query.single = true;
    context.item.userId = context.user.id;    
    context.push.send('tag', {}, function (error, result) {});
    context.push.gcm.send('tag', {}, function (error, result) {});
    context.push.apns.send('tag', { payload: { } }, function (error, result) {});
    context.push.wns.sendToastText01('tag', '', { headers: { } }, function (error, result) {});
    context.next(new Error());
    context.next('An error occurred');
});
table.read.use(function () {});
table.read.use([function () {}, function () {}]);
table.read.use(function () {}, function () {});
table.use(function () {}).use(function () {}).read(function () {}).use(function () {});

table.access = undefined;
table.access = 'authenticated';
table.read.access = 'anonymous';
table.update.access = 'disabled';
table.delete.access = 'authenticated';
table.insert.access = 'authenticated';

table.filters = [function (query, context) { }];
table.transforms = [function (item, context) { }];
table.hooks = [function (results, context) { }];

table.perUser = true;
table.recordsExpire = { milliseconds: 1, seconds: 1, minutes: 1, hours: 1, days: 1, weeks: 1, months: 1, years: 1 };
table.webhook = { url: 'http://localhost/' }
table.webhook = true;

// Express.Table, instantiated from the static require('azure-mobile-apps').table()
// This is going to be interesting if we ever support more than one provider
var table2 = mobileApps.table();
table2.read(function (context: Azure.MobileApps.Context) {});

// ApiDefinition, from the static require('azure-mobile-apps').api()
var api2 = mobileApps.api({
    get: function (req, res, next) { }
});
api2.post = function (req, res, next) {};

// Logger
logger.silly('test', 'message');
logger.error('Something happened', new Error());
mobileApps.logger.debug('a debug message')

// Query
queries.create('table').where({ x: 10 }).select('col1,col2').includeDeleted().includeTotalCount();
mobileApps.query.create('table');

// Custom SQL query
mobileApp.api.add('query', { authorize: true, get: (req, res, next) => {
    req.azureMobile.data.execute({
        sql: "SELECT * FROM TODOITEM WHERE COMPLETE = :complete",
        parameters: [
            { name: 'complete', value: 1 }
        ]
    }).then(x => {});
}, delete: function () {} });
