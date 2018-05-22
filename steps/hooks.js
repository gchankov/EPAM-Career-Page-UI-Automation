'use strict';

const { Before, After, setDefaultTimeout } = require('cucumber');
const fs = require('fs');

setDefaultTimeout(GLOBAL_TIMEOUT + 5000);

Before(() => {
    global.expectedData = {};
});

After((scenario) => {
    if (scenario.result.status === 'failed') {
        return browser.takeScreenshot().then((png) => {
    	    fs.writeFile(__dirname + '/../../results/' + scenario.pickle.name + '.png', new Buffer(png, 'base64'), (error) => {
                if (error) {
                    console.error(error.message);
                }
            });
        });
    }
});
