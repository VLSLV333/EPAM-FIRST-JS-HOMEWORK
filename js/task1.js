// let initialDeposit;
// do {
//     let firstInput = prompt("What is your initial deposit?");
// } while (condition);
// && (/\D/.test(firstInput)) && firstInput != undefined
let initialDeposit;
let firstInput = prompt('What is your initial deposit?');
let firstInputMaximum = 1000;
// console.log(typeof firstInput)
// console.log(firstInput < 1000)
// console.log(firstInput)
while(/\D/.test(firstInput) || firstInput < firstInputMaximum){
    if(firstInput > firstInputMaximum){
        break;
    }
    alert('Invalid input data');
    firstInput = prompt('What is your initial deposit?')
}
initialDeposit = Number(firstInput);
// console.log(initialDeposit, "initialDeposit")
// console.log(typeof initialDeposit)
let numberOfYears;
let secondInput = prompt('For how many years do you want to invest your money?');
while(/\D/.test(secondInput) || secondInput < 1){
    alert('Invalid input data');
    secondInput = prompt('For how many years do you want to invest your money?');
}
// let secondInput = prompt('For how many years do you want to invest your money?');
// while(secondInput < 1){
//     if (!(/\D/.test(secondInput)) && secondInput != 0){
//         break
//     }
//     alert("Invalid input data");
//     secondInput = prompt('For how many years do you want to invest your money?');
// }
numberOfYears = Number(secondInput);
// console.log(numberOfYears, "numberOfYears")
// console.log(typeof numberOfYears)
// let numberOfYears;
// while(true){
//     let input = prompt('For how many years do you invest your money?');
//     if(false || !(/\D/.test(input)) && input >= 1){
//         numberOfYears = Number(input);
//         break;
//     }else{
//         alert("Invalid input data");
//     }
// }
// console.log(numberOfYears, "numberOfYears")
// console.log(typeof numberOfYears)
let annualRate;
let thirdInput = prompt('Please, provide annual rate');
let thirdInputMaximum = 100;
// console.log(thirdInput) 
while(/\D/.test(thirdInput && thirdInput > thirdInputMaximum || thirdInput <= 0 )){
    if(thirdInput > 0 && thirdInput <= thirdInputMaximum){
        break;
    }
    alert('Invalid input data');
    thirdInput = prompt('Please, provide annual rate');
}
annualRate = Number(thirdInput);
// while(true){
//     let input = prompt('Please, provide annual rate');
    
//     if(false || input > 0 && input <= 100){
//         annualRate = Number(input) ;
//         break;
//     }else{
//         alert("Invalid input data");
//     }
// }
// console.log(annualRate, "annualRate")
// console.log(typeof annualRate)

alert(`Initial amount: ${initialDeposit} USD
Number of years: ${numberOfYears}
Percentage of year: ${annualRate}%
`);
// for(let i = 1, profit = initialDeposit * (annualRate / 100), total = 0; i <= numberOfYears; i++){
//         profit += total * (annualRate / 100);
//         // console.log(profit, "profit")
//         total = (initialDeposit + profit);
//         // console.log(total, "total")
//         alert(`${i} Year
//         Total profit: ${profit}
//         Total amount: ${total}`)
//     }
Number.prototype.round = function(n) {
    let powerForFormula = 10;
    const d = Math.pow(powerForFormula, n);
    return Math.round((this + Number.EPSILON) * d) / d;
  }
let getPercentages = 100;
let decimalPlaces = 2;
    for(let i = 1, profit = initialDeposit * (annualRate / getPercentages), total = 0; i <= numberOfYears; i++){
            profit += (total * (annualRate / getPercentages)).round(decimalPlaces);
            // console.log(profit, "profit")
            total = ((initialDeposit + profit)).round(decimalPlaces);
            // console.log(total, "total")
            alert(`${i} Year
            Total profit: ${profit}
            Total amount: ${total}`)
        }
// function roundToTwo(num) {
//         return +(Math.round(num + "e+2")  + "e-2");
// }
// for(let i = 1, profit = initialDeposit * (annualRate / 100), total = 0; i <= numberOfYears; i++){
//         profit += roundToTwo((total) * (annualRate / 100));
//         // console.log(profit, "profit")
//         total = roundToTwo((initialDeposit + profit));
//         // console.log(total, "total")
//         alert(`${i} Year
//         Total profit: ${profit}
//         Total amount: ${total}`)
// }


    // for(let i = 1, profit = initialDeposit * (annualRate / 100), total = 0; i <= numberOfYears; i++){
    //     profit += Math.round((total) * (annualRate / 100) * 100) / 100;
    //     console.log(profit, "profit")
    //     total = Math.round((initialDeposit + profit) * 100) / 100;
    //     console.log(total, "total")
    //     alert(`${i} Year
    //     Total profit: ${profit}
    //     Total amount: ${total}`)
    // }


//     (1.005).toFixed(2) == "1.01" || (function(prototype) {
//         var toFixed = prototype.toFixed
      
//         prototype.toFixed = function(fractionDigits) {
//           var split = this.toString().split('.')
//           var number = +(!split[1] ? split[0] : split.join('.') + '1')
      
//           return toFixed.call(number, fractionDigits)
//         }
//       }(Number.prototype));
// for(let i = 1, profit = initialDeposit * (annualRate / 100), total = 0; i <= numberOfYears; i++){
//         profit += parseFloat(((total) * (annualRate / 100)).toFixed(2));
//         console.log(profit, "profit")
//         total = parseFloat((initialDeposit + profit).toFixed(2));
//         console.log(total, "total")
//         alert(`${i} Year
//         Total profit: ${profit}
//         Total amount: ${total}`)
//     }






































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