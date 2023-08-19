const phonePrice = 100;
const taxRate = 0.5;
const accessoryPrice = 10;
const spendingThreshold = 200;
let bankBalance = 2000;
let totalSpent = 0;
let totalPhones = 0;

while (totalSpent < bankBalance) {
  totalSpent += phonePrice;
  if (totalSpent < spendingThreshold) {
    totalSpent += accessoryPrice;
  }
  totalPhones++;
}

function calculateTax() {
  return totalSpent * taxRate;
}

function formatPrice() {
  return "$" + totalSpent.toFixed(2);
}

totalSpent = totalSpent + calculateTax();
console.log(totalSpent);

console.log("Your purchase " + formatPrice());

if (totalSpent > bankBalance) {
  console.log("You can't afford this!");
}
