var fs = require('fs');
fs.writeFileSync('mynewfile3.txt', 'Hello World!', function (err) {
    if(err) throw err;
    console.log('Saved3!');
})