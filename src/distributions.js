'use strict';

const fees = require('../fees/fees');
const getOrderItemIndexByType = require('./helpers/getorderitem').getOrderItemIndexByType;

function addToDistributionTotals(name, amount, distributionTotals) {
	if (!distributionTotals[name]) {
		distributionTotals[name] = amount;
	} else {
		let newTotal = distributionTotals[name] + amount;
		distributionTotals[name] = newTotal;
	}
}

function computeDistributions(orderArray) {
	let output = [];
	let distributionTotals = {};
	distributionTotals.Other = 0;

	orderArray.forEach(order => {
		let outputArray = [];
		let distributions = {};
		let totalFees = 0;
		let additionalPageCount = 0;
		outputArray.push(`Order id: ${order.order_number}`);

		order.order_items.forEach(item => {
			additionalPageCount += Number(item.pages) - 1;
			let index = getOrderItemIndexByType(fees, item.type);
			fees[index].fees.forEach(fee => {
				if (fee.type == 'flat') {
					totalFees += Number(fee.amount);
				} else if (fee.type == 'per-page') {
					totalFees += Number(fee.amount) * (Number(item.pages) - 1);
				}
			});
			fees[index].distributions.forEach(distribution => {
				if (!distribution.type || distribution.type == 'flat') {
					let amount = Number(distribution.amount);
					totalFees -= amount;
					if (!distributions[distribution.name]) {
						distributions[distribution.name] = amount;
					} else {
						let newTotal = distributions[distribution.name] + amount;
						distributions[distribution.name] = newTotal;
					}
				} else {
					let amount = Number(distribution.amount) * additionalPageCount;
					totalFees -= amount;
					if (!distributions[distribution.name]) {
						distributions[distribution.name] = amount;
					} else {
						let newTotal = distributions[distribution.name] + amount;
						distributions[distribution.name] = newTotal;
					}
				}
			});
		});

		for (let distributionName in distributions) {
			let amount = distributions[distributionName];
			outputArray.push(`Fund: ${distributionName}: $${amount.toFixed(2)}`);
			addToDistributionTotals(distributionName, amount, distributionTotals);
		}
		outputArray.push(`Fund: Other: $${totalFees.toFixed(2)}`);
		distributionTotals.Other = distributionTotals.Other + totalFees;
		output.push(outputArray.join('\n    '));
		output.push('\n\n');
	});

	output.push(`Total distributions:\n`);
	for (let distributionType in distributionTotals) {
		if (distributionType != 'Other') {
			let total = distributionTotals[distributionType];
			output.push(`    Fund: ${distributionType}: $${total.toFixed(2)}\n`);
		}
	}
	output.push(`    Fund: Other: $${distributionTotals.Other.toFixed(2)}`);
	output.push('\n\n');
	return output.join('');
}

module.exports = {
	computeDistributions: computeDistributions
}
