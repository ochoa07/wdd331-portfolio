const weight = document.querySelector("#weight");
const weightSample = document.querySelector("#weight-sample");
const weightValue = document.querySelector("#weight-value");

function updateWeight() {
  weightSample.style.fontWeight = weight.value;
  weightValue.value = weight.value;
}

weight.addEventListener("input", updateWeight);
updateWeight();

const customSample = document.querySelector("#custom-sample");
const customValue = document.querySelector("#custom-value");
const axisButtons = document.querySelectorAll("button[data-settings]");

axisButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const settings = button.dataset.settings;
    customSample.style.fontVariationSettings = settings;
    customValue.textContent = settings;
    axisButtons.forEach((option) => {
      option.setAttribute("aria-pressed", String(option === button));
    });
  });
});
