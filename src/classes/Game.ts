import {Game} from '../interfaces/Formatter.js';


export class Console {
    constructor(
        choice: String[] = ['Rock','Paper','Scissors'],
    ){}

    start(){
        window.addEventListener("click",(e)=>{
            const start = document.getElementById("start") as HTMLDivElement;
            start.innerHTML = "";
        })
    }

    logic(choices:String[],userChoice:String,player:Object){
        const randomNumber:number = Math.floor(Math.random() * 3)
        const computerChoice:String = choices[randomNumber]
        
        
    }
}