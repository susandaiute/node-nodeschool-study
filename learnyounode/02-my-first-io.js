  var fs = require('fs');

 var read = fs.readFileSync(process.argv[2]);
 var splitLines = read.toString().split('\n');
 console.log(splitLines.length - 1);
