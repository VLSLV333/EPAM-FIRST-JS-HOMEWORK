// Your code goes here

let initialDeposit;
while(true){
    let input = prompt("What is your initial deposit?");
    
    if(false || input >= 1000){
        initialDeposit = Number(input) ;
        break;
    }else{
        alert("Invalid input data");
    }
}
// console.log(initialDeposit, "initialDeposit")
// console.log(typeof initialDeposit)
let numberOfYears;
while(true){
    let input = prompt('For how many years do you invest your money?');
    if(false || !(/\D/.test(input)) && input >= 1){
        numberOfYears = Number(input);
        break;
    }else{
        alert("Invalid input data");
    }
}
// console.log(numberOfYears, "numberOfYears")
// console.log(typeof numberOfYears)
let annualRate; 
while(true){
    let input = prompt('Please, provide annual rate');
    
    if(false || input > 0 && input <= 100){
        annualRate = Number(input) ;
        break;
    }else{
        alert("Invalid input data");
    }
}
// console.log(annualRate, "annualRate")
// console.log(typeof annualRate)










































//   Приклад застосованої валідації - валідація на конкретний текс
// while(true){
//     var sport = prompt("What sport do you play? (Baseball, Football, Soccer, or Track)").toLowerCase();
//   console.log(sport)
//     if(!sport || /^(baseball|football|soccer|track)$/.test(sport)){
//         field = "Field " + ("baseball|football|soccer|track".split("|").indexOf(sport)+1);
//         break;
//     }else{
//         alert("Please enter a valid sport");
//     }
// }

//   Приклад застосованої валідації - не пропускає взагалі нічого крім цифр
// while(true){
//     let input = prompt("What is your initial deposit?");
    
//     if(!input || !(/\D/.test(input)) && input >= 1000){
//         initialDeposit = input;
//         break;
//     }else{
//         alert("Invalid input data");
//     }
// }