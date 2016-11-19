'use strict';

const fs = require('fs');

function provideOutput(string, filenameWithoutExtension) {
	fs.writeFile(`output/${filenameWithoutExtension}.txt`, string, err => {
		if (err) throw err;
		console.log(`Output persisted to output/${filenameWithoutExtension}.txt and in console below.`);
		console.log(string);
	});
}

module.exports = {
	provideOutput: provideOutput
}
