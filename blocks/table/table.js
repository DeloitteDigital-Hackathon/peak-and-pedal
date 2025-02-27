function buildCell(rowIndex) {
  const cell = document.createElement("td")
  if (!rowIndex) cell.setAttribute("scope", "col");
  return cell;
}

export default function decorate(block) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  table.append(thead, tbody);
  const basketList = sessionStorage.getItem("basketList");
  if (basketList) {
    const formattedBasketList = JSON.parse(basketList);
    formattedBasketList.forEach((child, i) => {

      const row = document.createElement("tr");
      if (i) tbody.append(row);
      else thead.append(row);

      const tableCells = [child];
      // this needs dynamic cells adding
      tableCells.forEach((col) => {
        const firstCell = buildCell(i);
        const secondCell = buildCell(i);
        const thirdCell = buildCell(i);
        firstCell.innerHTML = col["name"];
        secondCell.innerHTML = col["quantity"];
        thirdCell.innerHTML = col["price"];
        row.append(firstCell);
        row.append(secondCell);
        row.append(thirdCell);
      });
    });
  }
  block.innerHTML = "";
  block.append(table);
}
