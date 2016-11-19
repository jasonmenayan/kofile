'use strict';

function getOrderItemIndexByType(array, type) {
	for (let i=0; i < array.length; i++) {
		if (array[i].order_item_type === type) return i;
	}
}

module.exports = {
	getOrderItemIndexByType: getOrderItemIndexByType
}
