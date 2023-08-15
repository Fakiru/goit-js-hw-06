const validationInput = document.querySelector("#validation-input");
const expectedLength = parseInt(validationInput.getAttribute("data-length"));

validationInput.addEventListener("blur", () => {
  const inputValue = validationInput.value.length;

  if (inputValue === expectedLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
