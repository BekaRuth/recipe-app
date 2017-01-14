'use strict';

exports.config = {

    // Capabilities to be passed to the WebDriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:3000',

    specs: ['tmp/e2e/**/*.js'],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 10000
    }
};