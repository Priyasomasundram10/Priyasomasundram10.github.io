// Define the content to be displayed (numbers or text)
const screenContent = document.getElementById("screen-content");

// A list of random numbers to display, simulating calculations or working data
const numbers = [
    "Loading data...",
    "Analysis in progress...",
    "50% complete...",
    "75% complete...",
    "99% complete...",
    "100% completed!",
    "Data analysis successful."
];

let index = 0;

// Function to change the numbers on the screen every 2 seconds
function displayNumbers() {
    screenContent.innerHTML = numbers[index];
    index++;
    if (index === numbers.length) {
        index = 0; // Reset back to the first number
    }
}

// Call the function every 2 seconds
setInterval(displayNumbers, 2000);
