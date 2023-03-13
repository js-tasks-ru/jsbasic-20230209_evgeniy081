function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries){
    // Number.isInteger нет в параграфе. А можно ли решить как-то без этого метода и без || ?
    if (Number.isInteger(salaries[key])){
      sum += salaries[key];
    }
  }
  return sum;
}
