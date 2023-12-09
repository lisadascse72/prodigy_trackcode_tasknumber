let timer;
let isRunning = false;
let startTime;
let lapNumber = 1;

function startStopwatch() {
    if (!isRunning) {
        startTime = Date.now() - (lapNumber > 1 ? lapNumber - 1 : 0) * 1000;
        timer = setInterval(updateDisplay, 10);
        isRunning = true;
        document.getElementById("start").disabled = true;
        document.getElementById("pause").disabled = false;
        document.getElementById("lap").disabled = false;
    }
}

function pauseStopwatch() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
    document.getElementById("lap").disabled = true;
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    document.getElementById("milliseconds").textContent = "00";
    lapNumber = 1;
    document.getElementById("lapList").innerHTML = "";
}

function updateDisplay() {
    const elapsedMilliseconds = Date.now() - startTime;
    const minutes = Math.floor((elapsedMilliseconds / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedMilliseconds / 1000) % 60);
    const milliseconds = Math.floor((elapsedMilliseconds % 1000) / 10);

    document.getElementById("minutes").textContent = padTime(minutes);
    document.getElementById("seconds").textContent = padTime(seconds);
    document.getElementById("milliseconds").textContent = padTime(milliseconds);
}

function recordLap() {
    const lapTime = document.getElementById("minutes").textContent + ":" +
                    document.getElementById("seconds").textContent + "." +
                    document.getElementById("milliseconds").textContent;

    const lapListItem = document.createElement("li");
    lapListItem.textContent = "Lap " + lapNumber + ": " + lapTime;
    document.getElementById("lapList").appendChild(lapListItem);

    lapNumber++;
}

function padTime(value) {
    return value < 10 ? "0" + value : value;
}

// Initial state
resetStopwatch();