const input = document.getElementById("price-counter");
const amount = document.getElementById("range-n");
const m = document.getElementById("multiple");
function change (){
amount.textContent = input.value;
m.textContent = (2001 * input.value) / 100;
}