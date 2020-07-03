// ------------ Basket Functions
/*basketButton.onclick = function goToBasket() {
    document.querySelector('');
}

let basketScoreSpan = document.querySelector('.basket-score-span');

function displayBasketScore() {
    scoreDisplay.textContent = (score);
    basketScoreSpan.appendChild(scoreDisplay);
}

console.log(score);*/

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

let table = document.querySelector("table");
let data = Object.keys(basket[0]);
generateTableHead(table, data);

//---------//