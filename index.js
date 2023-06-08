// document.getElementById("count-el").innerText = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  let entry = count + " - ";
  saveEl.innerText += " " + entry;
  countEl.innerText = 0;
  count = 0;
  console.log(entry);
}
