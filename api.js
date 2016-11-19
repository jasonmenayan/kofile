'use strict';

const express = require('express');
const app = express();

const computeFees = require('./src/fees').computeFees;
const computeDistributions = require('./src/distributions').computeDistributions;

const port = 8080;

// Endpoint /fees: returns computed list of fees from array of orders
// Input [JSON Array]: array of orders
// Output [String]: list of fees and totals for each order
app.get('/fees', (req,res) => {
	let orders = JSON.parse(req.query.orders);
	let fees = computeFees(orders);
	res.send(fees);
});

// Endpoint /distributions: returns computed list of distributions from array of orders
// Input [JSON Array]: array of orders
// Output [String]: list of distributions and totals across orders
app.get('/distributions', (req,res) => {
	let orders = JSON.parse(req.query.orders);
	let fees = computeDistributions(orders);
	res.send(fees);
});

app.listen(port, () => {
	console.log(`API listening on port ${port}`);
});