let bill = document.querySelector("#bill");
let tip = document.querySelector("#tip");
let total = document.querySelector("#total");
let amount, toPay;

bill.addEventListener("change", () => {
  amount = bill.value;
  tip.value = amount * 0.2;
  toPay = amount * 1.2;
  total.value = toPay;
});
