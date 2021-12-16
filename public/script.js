const API_ROUTE = "/api";

const timestampButton = document.getElementById("generate-timestamp-button");
const timestampInput = document.getElementById("timestamp-input");
let inputValue = "";

timestampButton.addEventListener("click", () => {
  inputValue = timestampInput.value;
  window.location = API_ROUTE + "/" + inputValue;
});
