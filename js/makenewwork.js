const addTempBtn = document.getElementById('anotherTemp');
const tempConverter = document.getElementById('tempConverter');
const submitButt = document.getElementById('signButt');
const displayTemp = document.querySelector(".displayTemp p");
const clearButt = document.querySelector(".clearButt input");

const displayLoc = document.querySelector(".displayTemp");
const newDisplay = document.createElement("p");

const xButt = document.getElementById("xButt");

// Add new temperature input box
addTempBtn.addEventListener('click', () => {
    // Get the first tempMenus div
    const firstTempMenus = tempConverter.querySelector('.tempMenus');
    // Clone the div
    const newTempMenus = firstTempMenus.cloneNode(true);
    // Optionally, clear the values or ids of the new clone
    const inputs = newTempMenus.querySelectorAll('input');
    const selects = newTempMenus.querySelectorAll('select');
    inputs.forEach(input => input.value = '');
    selects.forEach(select => select.selectedIndex = 0);
    // Append the cloned div to the container
    tempConverter.appendChild(newTempMenus);
});

xButt.addEventListener('click', () => {
    const tempMenusToRemove = tempConverter.querySelectorAll('.tempMenus');
    if (tempMenusToRemove.length > 1) { 
        tempMenusToRemove[tempMenusToRemove.length - 1].remove();
        displayLoc.innerHTML = "";
    }
})

// Convert temperatures
submitButt.addEventListener("click", () => {
    // Collect all tempMenus
    const tempMenusArray = Array.from(tempConverter.querySelectorAll('.tempMenus'));
    let displayLoc = document.querySelector(".displayTemp");
    let newDisplay = document.createElement("p");

    displayLoc.innerHTML = "";

    tempMenusArray.forEach(tempMenus => {
        const oldTempSelect = tempMenus.querySelector('.tempChoice');
        const newTempSelect = tempMenus.querySelector('.newT');
        const tempInput = tempMenus.querySelector('.ogTemp');

        const oldTempValue = oldTempSelect.value;
        const newTempValue = newTempSelect.value;
        const tempHolder = tempInput.value;

        let displayLoc = document.querySelector(".displayTemp");
        let newDisplay = document.createElement("p");

        let newTempDisplay = 0;
        let error = '';

        if (Number(tempHolder)) {
            if (oldTempValue == "far") {
                if (newTempValue == "cel") {
                    newTempDisplay = (tempHolder - 32) * (5/9);
                    newDisplay.innerHTML = newTempDisplay + " C";
                    displayLoc.append(newDisplay);
                } else if (newTempValue == "kel") {
                    newTempDisplay = (tempHolder + 459.67) * (5/9);
                    newDisplay.innerHTML = newTempDisplay + " K";
                    displayLoc.append(newDisplay);
                } else {
                    error = "エラー: F を F に変換できません";
                }
            } else if (oldTempValue == "cel") {
                if (newTempValue == "far") {
                    newTempDisplay = (tempHolder * 9/5) + 32;
                    newDisplay.innerHTML = newTempDisplay + " F";
                    displayLoc.append(newDisplay);
                } else if (newTempValue == "kel") {
                    newTempDisplay = tempHolder + 273.15;
                    newDisplay.innerHTML = newTempDisplay + " K";
                    displayLoc.append(newDisplay);
                } else {
                    error = "エラー: C を C に変換できません ";
                }
            } else if (oldTempValue == "kel") {
                if (newTempValue == "cel") {
                    newTempDisplay = tempHolder - 273.15;
                    newDisplay.innerHTML = newTempDisplay + " C";
                    displayLoc.append(newDisplay);
                } else if (newTempValue == "far") {
                    newTempDisplay = (tempHolder * 9/5) - 459.67;
                    newDisplay.innerHTML = newTempDisplay + " F";
                    displayLoc.append(newDisplay);
                } else {
                    error = "エラー: K を K に変換できません";
                }
            }
        } else {
            error = "エラー: 値がありません";
        }

        if (error) {
            newDisplay.innerHTML = error;
            displayLoc.append(newDisplay);;
        }
    });

});
clearButt.addEventListener("click", () => {
    displayLoc.innerHTML = "";
    const tempInputs = document.querySelectorAll('.ogTemp');
    tempInputs.forEach(input => input.value = '');
});
