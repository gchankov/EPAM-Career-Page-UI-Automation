'use strict';

const { Before, After, setDefaultTimeout } = require('cucumber');
const fs = require('fs');

setDefaultTimeout(GLOBAL_TIMEOUT + 5000);

Before(async () => {
    global.expectedData = {};
    await resetScrollView();
});

After(async (scenario) => {
    if (scenario.result.status === 'failed') {
        const png = await browser.takeScreenshot();
        fs.writeFile(__dirname + '/../results/' + scenario.pickle.name + '.png', new Buffer(png, 'base64'), (error) => {
            if (error) {
                console.error(error.message);
            }
        });
    }
});
