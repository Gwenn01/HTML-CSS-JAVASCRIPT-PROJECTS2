// variables 
const loanTotal = document.getElementById('loanAmount');
const interestRate = document.getElementById('interestRate');
const monthToPay = document.getElementById('monthToPay');
const totalPayment = document.getElementById('totalPayment');
const btnCalculate = document.getElementById('calculate');

// functionality
btnCalculate.addEventListener('click', () => {
    let totalAmount;
    if (loanTotal.value != " " && interestRate.value != " " && monthToPay.value != " "){
        let interest = interestRate.value / 100;
        totalAmount = (loanTotal.value * interest) * monthToPay.value;
        totalPayment.innerHTML = `Total Payment ${totalAmount}`;
    }
});