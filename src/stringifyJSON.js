// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if(typeof obj === 'number' || typeof obj === 'boolean' || obj === null){
    return '' + obj;
  }
  if(typeof obj === "string"){
    return `"${obj}"`;
  }
  if(Array.isArray(obj)){
    return  `[${obj.map(elem => 
                stringifyJSON(elem))
                .join(',')}]`;
  }
  if(typeof obj === 'object'){
    var pair = [];
    for(var key in obj){
      // var object = [];
      if(typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined'){
        pair.push(`"${key}":${stringifyJSON(obj[key])}`);
        // object.push(`${stringifyJSON(key)}`);
        // object.push(`${stringifyJSON(obj[key])}`);
        // pair.push(object.join(':'));
      }
    }
    return `{${pair.join(',')}}`
  }
}