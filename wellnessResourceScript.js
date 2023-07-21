
// Navigation
function openNav() {
document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

let bmiMetricCalc=document.getElementById("bmiMetricCalc").classList
let bmiUsCalc=document.getElementById("bmiUsCalc").classList

document.getElementById("bmiUsBtn").addEventListener("click",function(){

    document.getElementById("bmiMetricBtn").classList.remove("bg-cyan-500")
    document.getElementById("bmiUsBtn").classList.add("bg-cyan-500")
    bmiMetricCalc.remove("block")
    bmiMetricCalc.add("hidden")
    bmiUsCalc.remove("hidden")
    bmiUsCalc.add("block")
})
document.getElementById("bmiMetricBtn").addEventListener("click",function(){

    document.getElementById("bmiUsBtn").classList.remove("bg-cyan-500")
    document.getElementById("bmiMetricBtn").classList.add("bg-cyan-500")
    bmiUsCalc.remove("block")
    bmiUsCalc.add("hidden")
    bmiMetricCalc.add("block")
    bmiMetricCalc.remove("hidden")      
})


    
//BMI calc
document.getElementById("bmiMetricCalcBtn").addEventListener("click", metricCalculateBMI);
function metricCalculateBMI() {
    
    const height = parseInt(document.getElementById("bmiCmHeight").value);
    const weight = parseInt(document.getElementById("bmiKgWeight").value);

    if (isNaN(height) || isNaN(weight)) {
        document.getElementById("metricBmiResult").textContent = "Please enter valid numbers.";
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const bmiRounded = bmi.toFixed(2);

    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    const resultMessage = `Your BMI: ${bmiRounded} (${category})`;
    document.getElementById("metricBmiResult").textContent = resultMessage;
}

document.getElementById("bmiUsCalcBtn").addEventListener("click", usCalculateBMI);
function usCalculateBMI() {
    
    const hfeet = parseInt(document.getElementById("bmiHeightFeet").value);
    const hinch = parseInt(document.getElementById("bmiHeightInch").value);
    const weight = parseInt(document.getElementById("bmiUsWeight").value);

    if ( isNaN(hfeet) || isNaN(hinch) || isNaN(weight)) {
        document.getElementById("usBmiResult").textContent = "Please enter valid numbers.";
        return;
    }
    const heightInInches = hfeet * 12 + hinch;
    const weightInKg = weight * 0.45359237;

    const bmi = weightInKg / ((heightInInches * 0.0254) ** 2);
    const bmiRounded = bmi.toFixed(2);

    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    const resultMessage = `Your BMI: ${bmiRounded} (${category})`;
    document.getElementById("usBmiResult").textContent = resultMessage;
}



let BodyFatmetricCalc=document.getElementById("BodyFatmetricCalc").classList
let BodyFatUsCalc=document.getElementById("BodyFatUsCalc").classList

document.getElementById("usBtnBodyFat").addEventListener("click",function(){

    document.getElementById("metricBtnBodyFat").classList.remove("bg-cyan-500")
    document.getElementById("usBtnBodyFat").classList.add("bg-cyan-500")
    BodyFatmetricCalc.remove("block")
    BodyFatmetricCalc.add("hidden")
    BodyFatUsCalc.remove("hidden")
    BodyFatUsCalc.add("block")
})
document.getElementById("metricBtnBodyFat").addEventListener("click",function(){

    document.getElementById("usBtnBodyFat").classList.remove("bg-cyan-500")
    document.getElementById("metricBtnBodyFat").classList.add("bg-cyan-500")
    BodyFatUsCalc.remove("block")
    BodyFatUsCalc.add("hidden")
    BodyFatmetricCalc.add("block")
    BodyFatmetricCalc.remove("hidden")      
})
document.getElementById("BodyFatMetricCalcBtn").addEventListener("click", metricCalculateBodyf);
function metricCalculateBodyf(){
    const gender = document.getElementById("genderMetric").value;
    const age = parseFloat(document.getElementById("BodyFatAgeM").value);
    const heightCm = parseFloat(document.getElementById("BodyFatCmHeight").value);
    const weightKg = parseFloat(document.getElementById("BodyFatKgWeight").value);
    if (isNaN(heightCm) || isNaN(weightKg)) {
        alert("Please enter valid height and weight.");
    return;
    }
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    let bodyFatPercentage;
    if (gender === "male") {
        bodyFatPercentage = -44.988 + (0.503*age) + (3.172*bmi) - (0.026*bmi*bmi) - (0.02*bmi*age) + (0.00021*bmi*bmi*age)
    } 
    else {
        bodyFatPercentage = -34.299 + (0.503*age) + (3.353*bmi) - (0.031*bmi*bmi) - (0.02*bmi*age) + (0.00021*bmi*bmi*age)
    }

    const formattedBodyFatPercentage = (bodyFatPercentage).toFixed(2);

    const resultElement = document.getElementById("metricBodyFatResult");
    resultElement.innerText = `Your estimated body fat percentage is: ${formattedBodyFatPercentage}%`;
}

document.getElementById("BodyFatUsCalcBtn").addEventListener("click", usCalculateBodyf);
function usCalculateBodyf(){
    
    const gender = document.getElementById("genderUs").value;
    const age = parseFloat(document.getElementById("BodyFatAgeU").value);
    const hFeet = parseFloat(document.getElementById("BodyFatFeetH").value);
    const hInch = parseFloat(document.getElementById("BodyFatInchtH").value);
    const weightLbs= parseFloat(document.getElementById("BodyFatLbsWeight").value);
    if (isNaN(hInch) || isNaN(hFeet) || isNaN(weightLbs)) {
        alert("Please enter valid height and weight.");
    return;
    }
    const heightInInches = hFeet * 12 + hInch;
    const weightInKg = weightLbs * 0.45359237;

    const bmi = weightInKg / ((heightInInches * 0.0254) ** 2);
    

    let bodyFatPercentage;
    if (gender === "male") {
        bodyFatPercentage = -44.988 + (0.503*age) + (3.172*bmi) - (0.026*bmi*bmi) - (0.02*bmi*age) + (0.00021*bmi*bmi*age)
    } 
    else {
        bodyFatPercentage = -34.299 + (0.503*age) + (3.353*bmi) - (0.031*bmi*bmi) - (0.02*bmi*age) + (0.00021*bmi*bmi*age)
    }

    const formattedBodyFatPercentage = (bodyFatPercentage).toFixed(2);

    const resultElement = document.getElementById("usBodyFatResult");
   
    resultElement.innerText = `Your estimated body fat percentage is: ${formattedBodyFatPercentage}%`;
}

