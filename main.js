import { data } from "./getData.js";

const container = document.querySelector(".container");
const searchBtn = document.getElementsByTagName("button");
const input = document.querySelector("input");
const drinksData = data();

function showDrinksOnUI(arr) {
  for (let drink of arr) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const drinkName = document.createElement("h3");
    drinkName.innerHTML = drink.strDrink;
    img.src = drink.strDrinkThumb;
    div.appendChild(drinkName);
    div.appendChild(img);
    container.appendChild(div);
  }
}

function searchFilter(inputVal) {
  const filteredDrinks = [];
  for (let el of drinksData) {
    let nameOfDrinks = el.strDrink.toLowerCase();
    if (nameOfDrinks.includes(inputVal.toLowerCase())) {
      filteredDrinks.push(el);
    }
  }
  return filteredDrinks;
}
function clear() {
  while (container.firstchild) {
    container.removeChild(container.firstChild);
  }
}

function clickEvent() {
  if (input.value === "") {
    //console.log('input value is empty' )
    clear();
    showDrinksOnUI(drinksData);
  } else {
    const inputValue = input.value;
    const drinks = searchFilter(inputValue);
    console.log(drinks, "<<<drinks");
    clear();
    showDrinksOnUI(drinks);
  }
}
input.addEventListener("keyup", clickEvent);

showDrinksOnUI(drinksData);
