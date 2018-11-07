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

console.log('conversion: ', converted);
