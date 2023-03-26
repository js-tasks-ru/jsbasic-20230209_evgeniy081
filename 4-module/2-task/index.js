function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++) {
    const element = table.rows[i].cells[i];
    element.style.backgroundColor = 'red';
  };
}
