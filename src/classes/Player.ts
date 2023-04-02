import {Formatter} from '../interfaces/Formatter.js';

export class Player implements Formatter {
    constructor(
        public score:number,
    ){}

    reset(){
        const scoreBoard = document.querySelector("#game-score") as HTMLElement;
        return scoreBoard.innerHTML = this.score.toString()
    }
}