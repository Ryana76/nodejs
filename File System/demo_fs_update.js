var fs = require('fs');
fs.appendFile('mynewfile1.txt',  'This is my text.2', function (err) {
    if(err) throw err;
    console.log('Update!')
})