const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const calculate_Bmi = document.getElementById("Calculate-btn");
const bmiResult = document.getElementById("result");
const checkStatus = document.getElementById("checkStatus");
const healthTip = document.getElementById("give_Tip");
const reset = document.getElementById("reset");
const heightError = document.getElementById("heightError");
const weightError = document.getElementById("weightError");
const history = document.querySelector(".history");

const form = document.querySelector(".form");

const clrHistory = document.getElementById("clrhistory");

function updateBMIStatus(bmi) {
  const UNDERWEIGHT_LIMIT = 18.5;
  const NORMAL_LIMIT = 25;
  const OVERWEIGHT_LIMIT = 30;

  if (bmi < UNDERWEIGHT_LIMIT) {
    checkStatus.innerText = "Underweight";
    checkStatus.className = "underweight";
    healthTip.innerText = "Increase calorie intake";
  } else if (bmi < NORMAL_LIMIT) {
    checkStatus.innerText = "Normal weight";
    checkStatus.className = "normalweight";
    healthTip.innerText = "Maintain lifestyle";
  } else if (bmi < OVERWEIGHT_LIMIT) {
    checkStatus.innerText = "overweight";
    checkStatus.className = "overweight";
    healthTip.innerText = "Regular exercise";
  } else {
    checkStatus.innerText = "Obese";
    checkStatus.className = "obese";
    healthTip.innerText = "Consult healthcare professional";
  }
}

function bmiCalculate() {
  heightError.innerText = "";
  weightError.innerText = "";

  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);

  if (isNaN(height) || height <= 0) {
    heightError.innerText = "Please Enter a valid height";
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    weightError.innerText = "Please Enter a valid weight";
    return;
  }

  const height_In_Meter = height / 100;

  const bmi = weight / (height_In_Meter * height_In_Meter);
  bmiResult.innerText = bmi.toFixed(2);

  updateBMIStatus(bmi);

  const obj = {
    bmi: bmiResult.innerText,
    status: checkStatus.innerText,
  };
  bmiHistory.push(obj);

  if (bmiHistory.length > 5) {
    bmiHistory.shift();
  }

  localStorage.setItem("bmiHistory", JSON.stringify(bmiHistory));

  renderHistory();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  bmiCalculate();
});

// calculate_Bmi.addEventListener("click", bmiCalculate);

function resetBtn() {
  heightInput.value = "";
  weightInput.value = "";

  bmiResult.innerText = "--";
  checkStatus.innerText = "--";
  healthTip.innerText = "--";

  heightError.innerText = "";
  weightError.innerText = "";

  checkStatus.classList.remove(
    "underweight",
    "normalweight",
    "overweight",
    "obese",
  );
}

reset.addEventListener("click", resetBtn);

const bmiHistory = JSON.parse(localStorage.getItem("bmiHistory")) || [];

function renderHistory() {
  history.innerHTML = "";
  console.log(bmiHistory);
  bmiHistory.forEach((item, index) => {
    const p = document.createElement("p");
    p.innerText = `${index + 1}.BMI: ${item.bmi} | Status: ${item.status}`;

    history.appendChild(p);

    // console.log(item.bmi | item.status);
    // console.log(`${item.bmi} | ${item.status}`);
  });
}

renderHistory();

function clearBMIHistory() {
  bmiHistory.length = 0;
  history.innerText = "";
  localStorage.removeItem("bmiHistory");
  history.innerText = "No history available";
}

clrHistory.addEventListener("click", clearBMIHistory);

const darkButton = document.getElementById("darkbtn");

darkButton.addEventListener("click", loadTheme);

function loadTheme() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkButton.innerText = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    darkButton.innerText = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
}

function initializeTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    darkButton.innerText = "☀️ Light Mode";
  } else {
    darkButton.innerText = "🌙 Dark Mode";
  }
}

initializeTheme();
