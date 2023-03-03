const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m



const form = document.querySelector('form')
const displayBMI = document.querySelector('.bmi-value')
const displayDescription = document.querySelector('.description')
const result = document.querySelector('.description');

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(e){
  e.preventDefault();
  const inputs = document.querySelectorAll('input');
  const height = inputs[0]
  const weight = inputs[1]

// Validation du formulaire 
   if(!height.value || !weight.value || height.value <= 0 || weight.value <= 0) {
     handleError()
     return
    } else {
      console.log(height.value, weight.value);
  }

  // Calcul BMI

  const bmi = (weight.value / Math.pow((height.value / 100), 2)).toFixed(1)
  console.log(bmi);
  showResult(bmi)
}

// function showResult(bmi) {
//   displayBMI.textContent = bmi
// }

function handleError() {
  displayBMI.textContent = "Echec"
  displayDescription.textContent = 'Remplissez correctement le formulaire'
  alert('Une erreur est survenue')
}

function showResult(BMI) {
  let rank;
  for (let i = 0; i < BMIData.length; i++) {
    const data = BMIData[i];
    if (BMI > data.range[0] && BMI <= data.range[1]) {
      rank = data;
      break;
    } else if (typeof data.range === 'number' && data.range >= 40) {
      rank = data;
      break;
    }
  }
  displayBMI.textContent = BMI;
  displayBMI.style.color = rank.color;
  result.textContent = rank.name

}


// const weight = document.querySelector('#weight');
// const height = document.querySelector('#height');
// console.log(weight, height);

// ((height.value / 100) ** 2).toFixed(1)