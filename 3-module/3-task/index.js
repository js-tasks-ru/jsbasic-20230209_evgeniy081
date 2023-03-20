function camelize(str) {
  let formatStr = str.split('-');
  console.log("formatStr:", formatStr);
  let arrStrUpFirst = formatStr.map((item, i) => {
    if (i != 0){
      item = item[0].toUpperCase() + item.slice(1);
    }
    return item;
  });
  console.log(arrStrUpFirst);
  return arrStrUpFirst.join('');
}
