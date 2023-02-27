/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let lengthUnit = document.getElementById("meter-feet")
let volumeUnit = document.getElementById("liter-gallon")
let weightUnit = document.getElementById("kilo-pounds")
let input= document.getElementById("input")
let btn = document.getElementById("btn")

btn.addEventListener("click" , function(){
    let inputVal = input.value
    let meterVal = inputVal * 3.281
    let feetVal = inputVal / 3.281
    lengthUnit.innerHTML = `<h2>Length (Meter - Feet)</h2>
            <h3 id="metrics-length">${inputVal} Meters = ${meterVal.toFixed(3)} Feet <br>
             ${inputVal} Feet = ${feetVal.toFixed(3)} Meters</h3>`
             
    let literVal = inputVal * 0.264
    let gallonVal = inputVal / 0.264
    volumeUnit.innerHTML = `<h2>Volume (Liters - Gallons)</h2>
            <h3 id="metrics-length">${inputVal} Liters = ${literVal.toFixed(3)} Gallons <br>
             ${inputVal} Gallons = ${gallonVal.toFixed(3)} Liters</h3>`
             
    let kiloVal = inputVal * 2.204
    let poundsVal = inputVal / 2.204
    weightUnit.innerHTML = `<h2>Mass (KiloGram - Pounds)</h2>
            <h3 id="metrics-weight">${inputVal} KiloGram = ${kiloVal.toFixed(3)} Pounds <br>
             ${inputVal} Pounds = ${poundsVal.toFixed(3)} KiloGram</h3>`
})
