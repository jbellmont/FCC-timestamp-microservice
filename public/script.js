const API_ROUTE = "/api";

const timestampButton = document.getElementById("generate-timestamp-button");
const timestampInput = document.getElementById("timestamp-input");

timestampButton.addEventListener("click", () => {
  const inputValue = timestampInput.value;
  window.location = API_ROUTE + "/" + inputValue;
});
