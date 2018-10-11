/*
- get range of source and template
  - F interpolate range 
  - F read specified range
- loop through source range
  - seek for match in template
  - output match/matches into cooherent cell

FUNCTIONS:
interpolateRange(string "AA"|"AA:BB"|"A9:Z1")
  return [[8,0],[0,25]]
readRange("AA"|"AA:BB"|A9:Z1);
  return [n1,n2...n] | [[n1,n2...n],[n1,n2...n]] | [[n1,n2...n],[n1,n2...n]]
seekForMatch(source[], template[])
  return [n1] || [n1,n2...n]
outputRange(startcell(string format: "AA"|"AA:BB"|"A9:Z1"), direction(string format: "(x+|x-) || (y+|y-)"))
  return void
*/

const SeekAndReplace = function(){
  var source, template, result, output/*{startcell : "/wd/",direction : "(x+|x-) || (y+|y-)"}*/;
  const Output = function(src){
    var output;
    if(src){
      this.setValue(src);
    }
    this.isNotValid = function(obj){
      var message = "";
      if(obj.startCell && obj.direction){
        var s = obj.startCell, d = obj.direction;
        if(typeof(s) === "string" && s.length === 2 && s.replace("[a-z,A-Z]+\d+","").length === 0){
          if(direction)
          return undefined;
        }else{
          message = "Wrong input, obj.startCell isn't match [a-z,A-Z]+\d+ , or have an extra simbols! \nobj.startCell: "+ obj.startCell;
      }
      message = "Wrong input for Output object!: " + JSON.stringify(obj).replace(/,/," ,\n");
      return message;
    }
    this.set = function(src){
      var diagnose = this.isNotValid(src);
      if(diagnose){
        throw new Error(diagnose);
      }else{
        output = src;
      }
    }
    this.get = function(){
      return output;
    }
  }

  this.setSource = function(range){
    source = this.interpolateRange(range);
    return this;
  }
  this.setTemplate = function(range){
    template = this.interpolateRange(range);
    return this;
  }
  this.setResultOutput = function(startCell, direction){
    //input startcell(string format: "AA"|"AA:BB"|"A9:Z1"), direction(string format: "(x+|x-) || (y+|y-)")
    output = new Output({startCell, direction})
    output.startCell = interpolateRange(startCell);
    output.direction = direction;
    return this;
  }
  this.getRange = function(range){
    //range or array
    //range converts into: array [-1,0] | [[-1,0],[-1,1]] | [[8,0],[0,25]]
  }
  this.outputRange = function(ra,posi){

  }
  this.seekForMatch = function(){

  }
  this.getResult = function(){

    //return 
  }
  this.run = function(){
    //check for main vars is not undefined
    source = this.getRange(source);
    template = this.getRange(template);
    //compute

    this.outputRange(result, output);
    return this;
  }
  this.interpolateRange = function(range){
    //input: string "AA"|"AA:BB"|"A9:Z1"
    //output: array [-1,0] | [[-1,0],[-1,1]] | [[8,0],[0,25]]
    //undefined for not valid input
    var posi;
    if (typeof(range) === "string") {
      posi = range.toLowerCase().replace(/([a-z])(?:.?)+([0-9])(?:.?)+([a-z])(?:.?)+([0-9])/, "$1,$2,$3,$4").split(",");
      console.log(posi);
    }else{
      throw new Error("wrong input type!");
    }
    return posi;
  //return [[8,0],[0,25]]
  }
  this.readRange = function(range){
    //input: "AA"|"AA:BB"|A9:Z1

    //return [n1,n2...n] | [[n1,n2...n],[n1,n2...n]] | [[n1,n2...n],[n1,n2...n]]
  }
  this.seekForMatch = function(){
    //input: source[], template[]

    //return [n1] || [n1,n2...n]
  }
  this.outputRange = function(startCell, direction){
    //input startcell(string format: "AA"|"AA:BB"|"A9:Z1"), direction(string format: "(x+|x-) || (y+|y-)")
    /*
      multiple matches will output to perpendicular direction from the main direction
    */
    //return void
  }
}

const noPolBras = new SeekAndReplace()
                          .setSource("BB")
                          .setTemplate("AA")
                          .setResultOutput("A1","y-")
                          .run()

function getValidRange(range) {

getValidRange("1234");

function interpolate(range){
  //range is an array 
  //like [a,9,k,1]
  //output [[8,0],[0,14]]
  var message = "Wrong input, can not interpolate";
  try{
      if(range.length === 4){
        return range.map((x,i)=>{
          if(i%2===0){
            //TODO: interpolate properly
            return x.toUpperCase().charAt(0)-65%10
          }else if(x>0){
            return x-1
          }
          throw new Error(message+" wrong value: "+x);
        });
      }
  }
  throw new Error (message);
}

function getRange(range) {
  range = getValidRange(range);
  if (range) {
    var sheet = SpreadsheetApp.getActiveSheet().getDataRange().getValues();
    //A5:z9
    var tmp = [];
    sheet.map((x, i) => {
      if()
      var tmp2 = x.map((y, j) => {

      }
    });
  }
  else {
      throw new Error("Range is not valid!!");
  }
}
