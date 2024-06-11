let [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0];

const timeRef = document.getElementById("time");
const startButton = document.getElementById("start-timer");
const pauseButton = document.getElementById("pause-timer");
const resetButton = document.getElementById("reset-timer");
let int = null;

startButton.addEventListener("click", start);

function start() {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
}

pauseButton.addEventListener("click", pause);

function pause() {
    clearInterval(int);
}

resetButton.addEventListener("click", reset);

function reset() {
    clearInterval(int);
    [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000";
}

function displayTimer() {
    miliseconds += 10;
    if (miliseconds == 1000) {
        miliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms =
        miliseconds < 10
            ? "00" + miliseconds
            : miliseconds < 100
            ? "0" + miliseconds
            : miliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
