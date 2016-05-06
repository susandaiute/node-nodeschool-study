var fs = require('fs');

var read = fs.readFile(process.argv[2], 'utf8', function(err, data) {
  if (err) {
    return err;
  }
  console.log(data.split('\n').length - 1);
});
