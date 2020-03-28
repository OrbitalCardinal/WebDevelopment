const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) throw err;
    console.log('Folder created');
});
// There's and async version

// Create and write to file
fs.writeFile(path.join(__dirname, '/test','hello.txt'),'Hello world', err => {
    if(err) throw err;
    console.log('File written');
    
// File append
//As it is async we can make this append in the callback
fs.appendFile(path.join(__dirname, '/test','hello.txt'),
    ' I love node js', 
    err => {
        if(err) throw err;
        console.log('File written');
    });
});


// Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err,data) => {
    if(err) throw err;
    console.log(data);
});

// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), err => {
    if(err) throw err;
    console.log('File renamed');
})
