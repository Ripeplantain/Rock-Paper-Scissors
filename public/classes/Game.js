export class Console {
    constructor(choice = ['Rock', 'Paper', 'Scissors']) { }
    start() {
        window.addEventListener("click", (e) => {
            const start = document.getElementById("start");
            start.innerHTML = "";
        });
    }
    logic(choices, userChoice, player) {
        const randomNumber = Math.floor(Math.random() * 3);
        const computerChoice = choices[randomNumber];
    }
}
