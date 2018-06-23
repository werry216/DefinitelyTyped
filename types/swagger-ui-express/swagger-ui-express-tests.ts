/**
 * Tests are taken from the module's repository at https://github.com/scottie1984/swagger-ui-express/blob/master/test/testapp/app.js
 */

import swaggerUi from "swagger-ui-express";

const express = require('express');
const app = express();
const swaggerDocument = require('./swagger.json');
const swaggerDocumentSplit = require('./swagger-split.json');

const options = {
	validatorUrl: null,
	oauth: {
		clientId: "your-client-id1",
		clientSecret: "your-client-secret-if-required1",
		realm: "your-realms1",
		appName: "your-app-name1",
		scopeSeparator: ",",
		additionalQueryStringParams: {}
	},
	docExpansion: 'full',
};

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument, false, options, '.swagger-ui .topbar { background-color: red }'));

app.use('/api-docs-from-url', swaggerUi.serve);
app.get('/api-docs-from-url', swaggerUi.setup(null, false, options, '.swagger-ui .topbar { background-color: red }', null, '/swagger.json'));

const swaggerUiOpts = {
	explorer: false,
	swaggerOptions: options,
	customCss: '.swagger-ui .topbar { background-color: blue }'
};

app.use('/api-docs-using-object', swaggerUi.serve);
app.get('/api-docs-using-object', swaggerUi.setup(swaggerDocument, swaggerUiOpts));

const swaggerUiOpts2 = {
	explorer: false,
	swaggerOptions: options,
	customCss: '.swagger-ui .topbar { background-color: pink }',
	swaggerUrl: '/swagger.json',
	customJs: '/my-custom.js',
	operationsSorter: 'alpha'
};

app.use('/api-docs-from-url-using-object', swaggerUi.serve);
app.get('/api-docs-from-url-using-object', swaggerUi.setup(null, swaggerUiOpts2));

app.use('/api-docs-with-null', swaggerUi.serve);
app.get('/api-docs-with-null', swaggerUi.setup(swaggerDocument, null, options, '.swagger-ui .topbar { background-color: orange }'));

app.use('/api-docs-split', swaggerUi.serve);
app.get('/api-docs-split', swaggerUi.setup(swaggerDocumentSplit, null, options, '.swagger-ui .topbar { background-color: orange }'));

app.use('/api-docs-with-opts/', swaggerUi.serveWithOptions({ redirect: false }));
app.get('/api-docs-with-opts/', swaggerUi.setup(swaggerDocumentSplit, null, options, '.swagger-ui .topbar { background-color: orange }'));

const swaggerHtml = swaggerUi.generateHTML(swaggerDocument, swaggerUiOpts);

app.use('/api-docs-html1', swaggerUi.serveFiles(swaggerDocument, swaggerUiOpts));
