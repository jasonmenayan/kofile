'use strict';

const provideOutput = require('./src/helpers/provideoutput').provideOutput;
const computeFees = require('./src/fees').computeFees;
const orders = require('./orders/orders');

provideOutput(computeFees(orders), 'fees');
