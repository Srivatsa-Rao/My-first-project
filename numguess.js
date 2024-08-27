const MinNum = 1;
const MaxNum = 10;
const ans = Math.floor(Math.random() * (MaxNum - MinNum + 1)) + MinNum

let Attemptz = 0
let guess
let running = true

while (running) {
    guess = window.prompt(`Guess a number within ${MinNum} - ${MaxNum}`)
    guess = Number(guess)

    if (isNaN(guess)) {
        window.alert("Please enter a valid number")
    }
    else if (guess < MinNum || guess > MaxNum) {
        window.alert(`Please enter a number within the range ${MinNum}-${MaxNum}`)
    } else {
        Attemptz++
        if (guess < ans) {
            window.alert("Too Low! Try Again")
        }
        else if (guess > ans) {
            window.alert("Too High! Try Again")
        }
        else {
            window.alert(`Correct! The answer was ${ans}.It took ${Attemptz} attempts`)
            running = false
        }
    }
}
