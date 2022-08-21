let initialDeposit;
let firstInput = prompt('What is your initial deposit?');
let firstInputMaximum = 1000;
while(/\D/.test(firstInput) || firstInput < firstInputMaximum){
    if(firstInput > firstInputMaximum){
        break;
    }
    alert('Invalid input data');
    firstInput = prompt('What is your initial deposit?')
}
initialDeposit = Number(firstInput);
let numberOfYears;
let secondInput = prompt('For how many years do you want to invest your money?');
while(/\D/.test(secondInput) || secondInput < 1){
    alert('Invalid input data');
    secondInput = prompt('For how many years do you want to invest your money?');
}
numberOfYears = Number(secondInput);
let annualRate;
let thirdInput = prompt('Please, provide annual rate');
let thirdInputMaximum = 100;
while(/\D/.test(thirdInput && thirdInput > thirdInputMaximum || thirdInput <= 0 )){
    if(thirdInput > 0 && thirdInput <= thirdInputMaximum){
        break;
    }
    alert('Invalid input data');
    thirdInput = prompt('Please, provide annual rate');
}
annualRate = Number(thirdInput);
alert(`Initial amount: ${initialDeposit} USD
Number of years: ${numberOfYears}
Percentage per year: ${annualRate}%
`);
let getPercentages = 100;
let decimalPlaces = 2;
for(let i = 1, profit = initialDeposit * (annualRate / getPercentages), total = 0; i <= numberOfYears; i++){
        profit += total * (annualRate / getPercentages);
        total = initialDeposit + profit;
        alert(`${i} Year
        Total profit: ${profit.toFixed(decimalPlaces)}
        Total amount: ${total.toFixed(decimalPlaces)}`)
    }