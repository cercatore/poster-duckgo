var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('movie.data.txt')
  });
let countok=0;
let countno=0;  
async function process() {
    await lineReader.on('line', function (line) {
        console.log('process:', line);
        let res = line.match("\"");
        ( res.length % 2 == 0) ? countok++ : null
        countno++
    });
    
}
await process();
let output = `\npari lines0 :${countok} of ${countno} lines.`;
console.log(`\npari lines0 :${countok} of ${countno} lines.`)

