'use strict';

const provideOutput = require('./src/helpers/provideoutput').provideOutput;
const computeDistributions = require('./src/distributions').computeDistributions;
const orders = require('./orders/orders');

provideOutput(computeDistributions(orders), 'distributions');