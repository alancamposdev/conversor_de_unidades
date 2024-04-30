// Selecionando os elementos do DOM
const inputEl = document.querySelector("#input");
const fromEl = document.querySelector("#from");
const toEl = document.querySelector("#to");
const resultEl = document.querySelector("#result");
const convertBtn = document.querySelector("#convert-btn");
const msgEl = document.querySelector("#msg");

// Função para converter
convertBtn.addEventListener("click", () => {
  const input = inputEl.value;
  const from = fromEl.value;
  const to = toEl.value;

  if (from === to) {
    msgEl.textContent = "Selecione medidas diferentes";
    resultEl.textContent = "";
    return;
  }

  let meters;
  switch (from) {
    case "mm":
      meters = input / 1000;
      break;
    case "cm":
      meters = input / 100;
      break;
    case "m":
      meters = input;
      break;
    case "km":
      meters = input * 1000;
      break;
    case "mi":
      meters = input * 1609.34;
      break;
  }

  let result;
  switch (to) {
    case "mm":
      result = meters * 1000;
      break;
    case "cm":
      result = meters * 100;
      break;
    case "m":
      result = meters;
      break;
    case "km":
      result = meters / 1000;
      break;
    case "mi":
      result = meters / 1609.34;
      break;
  }

  resultEl.textContent = result;

  const fromLabel = fromEl.options[fromEl.selectedIndex].textContent;
  const toLabel = toEl.options[toEl.selectedIndex].textContent;
  msgEl.textContent = `
  ${input} ${fromLabel} equivalem a ${result} ${toLabel}`;
});
