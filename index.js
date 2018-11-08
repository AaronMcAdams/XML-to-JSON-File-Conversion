const fs = require('fs'),
      xml2js = require('xml2js');

let parser = new xml2js.Parser();
var converted ='';
fs.readFile(__dirname + '/conversionFiles/sample.xml', (err, data) =>{
    if(err){
      console.log(err)
    }else{
    parser.parseString(data, (err, result) =>{
      if(err){
        console.log(err)
      }else{
        fs.writeFile(__dirname + '/conversionFiles/sample.JSON', JSON.stringify(result), (err) =>{
          if(err){
            console.log(err)
          }
        });
        // console.dir(JSON.stringify(result));
        converted = JSON.stringify(result);
        console.log('Conversion done');
      }
    });
  }
});

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}


var path = process.argv[2];

fs.readdir(path, function(err, items) {
    console.log(items);

    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
        if(items[i].split('.')[1]=='JSON'){
          console.log('JSON file');
        }else if(items[i].split('.')[1]=='xml'){
          console.log('XML file');
        }
    }
});
