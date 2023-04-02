export class Player {
    constructor(score) {
        this.score = score;
    }
    reset() {
        const scoreBoard = document.querySelector("#game-score");
        return scoreBoard.innerHTML = this.score.toString();
    }
}
