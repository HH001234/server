const fs = require ( 'fs' );
const file1 = fs.readFileSync('file1.txt')
const file2 = fs.readFileSync('file2.txt')
fs.writeFileSync( 'file3.txt', file1 + ' ' + file2, (err) =>{
    if(err) {throw err;}
})

fs.readFileSync('file3.txt', function(err, data){
    if(err) {throw err;}

console .log(data.toString())
});
