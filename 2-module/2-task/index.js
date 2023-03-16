function isEmpty(obj) {
  let arr = [];
  for(let key in obj){
    arr.push(key);
  }
  return arr.length === 0;
}
