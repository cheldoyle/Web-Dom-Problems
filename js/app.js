let oldTemp = document.getElementById('tempChoice');
let newTemp = document.getElementById('newTempChoice');
let oldTempValue = oldTemp.value;
let newTempValue = newTemp.value;
let clearButt = document.querySelector(".clearButt input");
let ogTemp = document.getElementById("ogTemp");
let submitButt = document.getElementById("signButt");
let displayTemp = document.querySelector(".displayTemp p");
let tempHolder = "";

oldTemp.addEventListener("change", () => {
    oldTempValue = oldTemp.value;
});
newTemp.addEventListener("change", () => {
    newTempValue = newTemp.value;
});
clearButt.addEventListener("click", () => {
    displayTemp.innerHTML = "";
})
submitButt.addEventListener("click", () => {
    tempHolder = ogTemp.value;
    if (Number(tempHolder)) {
        displayTemp.style.color = "black";
        let newTempDisplay = 0;
        if (oldTempValue == "far") {
            if (newTempValue == "cel") {
                newTempDisplay = (tempHolder - 32) * (5/9);
                displayTemp.innerHTML = newTempDisplay + "C";
            } else if (newTempValue == "kel") {
                newTempDisplay = (tempHolder + 459.67) * (5/9);
                displayTemp.innerHTML = newTempDisplay + "K";
            } else {
                displayTemp.style.color = "red";
                displayTemp.innerHTML = "Error: Cannot Convert F to F";
            }
        }
        else if (oldTempValue == "cel") {
            if (newTempValue == "far") {
                newTempDisplay = (tempHolder * 9/5) + 32;
                displayTemp.innerHTML = newTempDisplay + "F";
            } else if (newTempValue == "kel") {
                newTempDisplay = tempHolder + 273.15;
                displayTemp.innerHTML = newTempDisplay + "K";
            } else {
                displayTemp.style.color = "red";
                displayTemp.innerHTML = "Error: Cannot Convert C to C";
            }
        }
        else if (oldTempValue == "kel") {
            if (newTempValue == "cel") {
                newTempDisplay = tempHolder - 273.15;
                displayTemp.innerHTML = newTempDisplay + "C";
            } else if (newTempValue == "far") {
                newTempDisplay = (tempHolder * 9/5) - 459.67;
                displayTemp.innerHTML = newTempDisplay + "F";
            } else {
                displayTemp.style.color = "red";
                displayTemp.innerHTML = "Error: Cannot Convert K to K";
            }
        }
    } else {
        displayTemp.style.color = "red";
        displayTemp.innerHTML = "Error: Incorrect Value Type";
    }
});
console.log(oldTempValue);
console.log(newTempValue);