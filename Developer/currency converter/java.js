const base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";
const dropdowns = document.querySelectorAll(".dropdown select");
const button = document.querySelector("button");
const fromCurr = document.querySelector("select[name = 'from']");
const toCurr = document.querySelector("select[name = 'to']");


const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];

    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};


for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
});

}



button.addEventListener("click", async (evt) => {
  evt.preventDefault();

  let amount = document.querySelector(".amount input");
  let amountval = amount.value;

  if (amountval === "" || amountval < 1) {
    amountval = 1;
    amount.value = "1";
  }

  let from = fromCurr.value.toLowerCase();
  let to = toCurr.value.toLowerCase();

  const URL = `${base_url}${from}.json`;

  let response = await fetch(URL);
  let data = await response.json();

  let rate = data[from][to]; 
  console.log("Rate =", rate);

  let finalAmount = (amountval * rate).toFixed(2);

  document.querySelector("#detail").innerText =
    `${amountval} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
});
