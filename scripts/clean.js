const fs = require('fs');

// Directories to clean
var include = [
    'output/',
    'output/word_data/'
];

// Specific directories or files not to clean
var exclude = [
    'word_data'
];

// Loops through each directory
for (var i = 0; i < include.length; i++) {
    var files = fs.readdirSync(include[i]);

    // Loops through each file in the directory
    for (var j = 0; j < files.length; j++) {
        var file = files[j];
        var del = true;

        // Check to see if file matches exclude list
        for (var k = 0; k < exclude.length; k++) {
            if (file == exclude[k]) {
                del = false;
            }
        }

        // Deletes file
        if (del) {
            fs.unlink(include[i] + file, (e) => {
                if (e) {
                    console.log('Error: ' + e.message);
                }
            });
        }
        console.log('Removed ' + file);
    }
}
