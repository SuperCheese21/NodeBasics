const request = require('request');

// Request options
var options = {
    method: 'GET', // GET, POST, PUT, etc
    url: '', // Request URL
    qs: {}, // URL params
    headers: {}, // Request headers
    'gzip': true // Properly formats response
};

// Make http request
request(options, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log('Success'); // Handle response here
    } else if (error) {
        console.log(error.message);
    } else {
        console.log('Error ' + response.statusCode);
    }
});
