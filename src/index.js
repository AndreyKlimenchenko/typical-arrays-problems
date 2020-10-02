
exports.min = function min(array) {
  let a = 0;
  if(!array || array.length === 0){
    a = 0;
    return a;
  }
  array.forEach(element => {
    if(element < a){
      a = element;
    }
  });
  return a;
}

exports.max = function max (array) {
  let a = 0;
  if(!array || array.length === 0){
    a = 0;
    return a;
  }
  array.forEach(element => {
    if(element > a){
      a = element;
    }
  });
  return a;
}

exports.avg = function avg (array) {
  let a = 0;
  if(!array || array.length === 0){
    a = 0;
    return a;
  }
  array.forEach(element => {
    a += element;
  });
  a = a / array.length;
  return a;
}
