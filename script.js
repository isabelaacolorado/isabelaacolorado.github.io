let secretNum;
let attempts;

function startGame() {
    secretNum = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("feedback").textContent="";
    document.getElementById("play-adain").style.display = "none";
    document.getElementById("guess").value = "";
    document.getElementById("guess").disabled = false;
}

function launchConfetti() {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x:1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

function checkGuess() {
    const guessInput = document.getElementById("guess");
    const guess = Number(guessInput.value);
    const feedback = document.getElementById("feedback");
    attempts++;

    if(!guess || guess < 1 || guess > 100) {
        feedback.textContent = "Oppsie! Please enter a number between 1 and 100 🌸"
        return;
    }

    if(guess == secretNum) {
        feedback.textContent = 'Yay! You got it💕 The number was ${secretNum}. It only took you ${attempts} tries!🌟';
        guessInput.disables = true;
        document.getEelementById("play-again").style.display = "inline-block";
    } else if (guess < secretNum) {
        feedback.textContent = "Uh oh :( too low. Try a bigger number💖";
    } else {
        feedback.textContent = "Oh no :( too high. Try a smaller number💖";
    }
}

window.onload = startGame;