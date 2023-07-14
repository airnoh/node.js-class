// Read file fileSystem

const file = require('fs');
// file.readFile('text.txt', (error, data) =>{
//     if (error)throw error;
//     console.log(data.toString());
// });

// const file = require('fs');
// file.readFile('text.txt','UTF8', (error, data) =>{
//     if (error)throw error;
//     console.log(data);
// });

// Write file fileSystem
file.writeFile('text.txt','This is StartHub', (error) =>{
    if (error)throw error;
    console.log('Writing')
});