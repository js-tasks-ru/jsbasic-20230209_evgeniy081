function highlight(table) {
  function tdKeyCellIndex (name) {
    for (const iterator of table.rows[0].cells) {
      if (iterator.innerHTML == name) {
        return iterator.cellIndex;     
      };
    };
  }
  let tdStatus = table.querySelectorAll(`td:nth-child(${tdKeyCellIndex("Status") + 1})`);
  for (const iterator of tdStatus) {
    //data-available - из-за того, что это не стандартное свойство, нельзя обраться по свойству? Обязательно getAttribute?
    let valueAttr = iterator.getAttribute('data-available');
    if (valueAttr === "true") {
      iterator.parentElement.classList.add("available");
    }
    else {
      iterator.parentElement.classList.add("unavailable");
    }
    if (!valueAttr) {
      iterator.parentElement.hidden = "true";
    }
  }
  let tdGender = table.querySelectorAll(`td:nth-child(${tdKeyCellIndex("Gender") + 1})`);
    console.log("gender", tdGender);
    for (const iterator of tdGender) {
      if(iterator.innerHTML == "m"){
        iterator.parentElement.classList.add("male");
      } else {
        iterator.parentElement.classList.add("female");
      }
    }
  let tdAge = table.querySelectorAll(`td:nth-child(${tdKeyCellIndex("Age") + 1})`);
  for (const iterator of tdAge) {
    if (iterator.innerHTML < 18) {
      iterator.parentElement.style = "text-decoration: line-through";
    }
  } 
}
// Можно пожалуйста приложить решение преподавателя? что-то слишком массивное получилось.
