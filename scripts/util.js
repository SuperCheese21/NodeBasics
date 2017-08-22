const fs = require('fs');
const AdmZip = require('adm-zip');

// Adds a certain amount of zeros in front of a number based on its length
var checkZeros = function(n, k) {
    for (var i = 0; i < k; i++) {
        if (n < Math.pow(10, i)) n = '0' + n;
    }
    return n;
}

// zips up a directory
var zip = function(targetDir, outputFile) {
    var zip = new AdmZip();
    var files = fs.readdirSync(targetDir);
    for (var i = 0; i < files.length; i++) {
        zip.addLocalFile(targetDir + files[i]);
    }
    zip.writeZip(outputFile);
}

// writes data to a file
var writeFile = function(file, data) {
    fs.writeFile(file, data, (error) => {
        if (error) {
            console.log(error.message);
        } else {
            console.log(' Data written to ' + file);
        }
    });
};

// converts a data array to delimiter separated format
var addDSVLine = function(data, delimiter) {
    var line = '';

    for (var i = 0; i < data.length; i++) {
        line += data[i];
        if (i < data.length - 1) line += delimiter;
    }

    return line + '\n';
};

module.exports = {
    checkZeros: checkZeros,
    zip: zip,
    writeFile: writeFile,
    addDSVLine: addDSVLine
};
