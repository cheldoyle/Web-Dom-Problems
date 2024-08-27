const addTempBtn = document.getElementById('anotherTemp');
const tempConverter = document.getElementById('tempConverter');
const submitButt = document.getElementById('signButt');
const displayTemp = document.querySelector(".displayTemp p");
const clearButt = document.querySelector(".clearButt input");

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

// Convert temperatures
submitButt.addEventListener("click", () => {
    // Collect all tempMenus
    const tempMenusArray = Array.from(tempConverter.querySelectorAll('.tempMenus'));
    let results = [];

    tempMenusArray.forEach(tempMenus => {
        const oldTempSelect = tempMenus.querySelector('.tempChoice');
        const newTempSelect = tempMenus.querySelector('.newT');
        const tempInput = tempMenus.querySelector('.ogTemp');

        const oldTempValue = oldTempSelect.value;
        const newTempValue = newTempSelect.value;
        const tempHolder = tempInput.value;

        let newTempDisplay = 0;
        let error = '';

        if (Number(tempHolder)) {
            if (oldTempValue == "far") {
                if (newTempValue == "cel") {
                    newTempDisplay = (tempHolder - 32) * (5/9);
                    results.push(newTempDisplay.toFixed(2) + " C");
                } else if (newTempValue == "kel") {
                    newTempDisplay = (tempHolder + 459.67) * (5/9);
                    results.push(newTempDisplay.toFixed(2) + " K");
                } else {
                    error = "Error: Cannot Convert F to F";
                }
            } else if (oldTempValue == "cel") {
                if (newTempValue == "far") {
                    newTempDisplay = (tempHolder * 9/5) + 32;
                    results.push(newTempDisplay.toFixed(2) + " F");
                } else if (newTempValue == "kel") {
                    newTempDisplay = tempHolder + 273.15;
                    results.push(newTempDisplay.toFixed(2) + " K");
                } else {
                    error = "Error: Cannot Convert C to C";
                }
            } else if (oldTempValue == "kel") {
                if (newTempValue == "cel") {
                    newTempDisplay = tempHolder - 273.15;
                    results.push(newTempDisplay.toFixed(2) + " C");
                } else if (newTempValue == "far") {
                    newTempDisplay = (tempHolder * 9/5) - 459.67;
                    results.push(newTempDisplay.toFixed(2) + " F");
                } else {
                    error = "Error: Cannot Convert K to K";
                }
            }
        } else {
            error = "Error: No Value";
        }

        if (error) {
            results.push(error);
        }
    });

    displayTemp.innerHTML = results.join(', ');
});
