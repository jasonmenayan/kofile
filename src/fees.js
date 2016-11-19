'use strict';

const fees = require('../fees/fees');
const getOrderItemIndexByType = require('./helpers/getorderitem').getOrderItemIndexByType;

function computeFees(orderArray) {
	let output = [];
	orderArray.forEach(order => {
		let outputArray = [];
		let totalPrice = 0;
		outputArray.push(`Order id: ${order.order_number}`);
		order.order_items.forEach(item => {
			let itemPrice = 0;
			let index = getOrderItemIndexByType(fees, item.type);
			fees[index].fees.forEach(fee => {
				if (fee.type == 'flat') itemPrice += Number(fee.amount);
				else if (fee.type == 'per-page') itemPrice += Number(fee.amount) * (Number(item.pages) - 1);
			});
			outputArray.push(`Order item - ${item.type}: $${itemPrice.toFixed(2)}`);
			totalPrice += itemPrice;
		});
		outputArray.push(`Order total: $${totalPrice.toFixed(2)}`);
		output.push(outputArray.join('\n    '));
		output.push('\n\n');
	});
	return output.join('');
}

module.exports = {
	computeFees: computeFees
}
