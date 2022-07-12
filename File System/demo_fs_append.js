
var fs = require('fs');
fs.appendFile('mynewfile1.html', 'Hello World!', function (err) {
    if(err)throw err;
    console.log('Saved!')
})