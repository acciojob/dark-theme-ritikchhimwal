//your code here

function swapTheme() {
    const appDiv = document.getElementById("app");
    const swapButton = document.getElementById("swap");

    // Check if current theme is "day" and toggle to "night"
    if (appDiv.classList.contains("day")) {
        appDiv.classList.replace("day", "night");
        swapButton.classList.replace("button_day", "button_night");
    } else {
        // Switch back to "day" theme
        appDiv.classList.replace("night", "day");
        swapButton.classList.replace("button_night", "button_day");
    }
}
