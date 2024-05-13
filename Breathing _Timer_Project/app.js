let timeLeft;
let timerInterval;
let isRunning = false;

let timerDisplay = document.getElementById("timer");
let startBtn = document.getElementById("start_btn");
let stopBtn = document.getElementById("stopt_btn");

let startTimer = (duration) => {
    let timer = duration;
    
     timerInterval = setInterval(() => {
       let minutes = parseInt(timer / 60, 10);
       let second = parseInt(timer % 60, 10);

       let displayMinuts = minutes < 10 ? "0" + minutes : minutes;
        let displaysecond = second < 10 ? "0" + second : second;

        timerDisplay.innerText = displayMinuts + ":" + displaysecond;

        if (--timer < 0) {
            clearInterval(timerInterval);
            timerDisplay.innerText = "Breath Out 😮‍💨"

            setTimeout(() => {
                timerDisplay.innerText = "Breath In";
                startTimer(timeLeft);
            }, 3000);

        }

    }, 1000);
}

let stopTimer = () => {
    clearInterval(timerInterval);
    timerDisplay.innerText = "Breath In"
    isRunning = false;
}


startBtn.addEventListener("click", () => {
    if(!isRunning){
        timeLeft = 120;
        startTimer(timeLeft);
        isRunning = true;
    }
});

stopBtn.addEventListener("click", () => {
    stopTimer();
});