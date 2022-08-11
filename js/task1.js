// Your code goes here

let initialDeposit;
while(true){
    var input = prompt("What is your initial deposit?");
    
    if(!input || input >= 1000){
        initialDeposit = Number(input);
        break;
    }else{
        alert("Invalid input data");
    }
}
console.log(typeof initialDeposit)
// let numberOfYears;
// while(true){
//     var input = prompt('For how long do you invest your money?(Years)');
//     if(Number.isInteger(input) && input >= 1){
//         numberOfYears = input;
//         break;
//     }else{
//         alert("Invalid input data");
//     }
// }
// let annualRate = prompt('Please, provide annual rate')


//   Приклад застосованої валідації
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