const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const guests = document.getElementById("guests");
const tipResult = document.getElementById("tip-result");
const totalResult = document.getElementById("total-amount-result");
const tipPersonResult = document.getElementById("tip-person-result");
const totalPersonResult = document.getElementById("total-person-result");
const resultDisplay = document.getElementById("result-container");
const alertBill = document.getElementById("alert-bill");
const alertTip = document.getElementById("alert-tip");
const alertGuests = document.getElementById("alert-guests");

calculate = () =>{
    alertBill.innerHTML = '';
    alertTip.innerHTML = '';
    alertGuests.innerHTML = '';
    if(bill.value == 0){
        alertBill.innerHTML = 'Invalid input. Insert a number.'
    }
    if(tip.value == 0){
        alertTip.innerHTML = 'Invalid input. Insert a number.'
    }
    if(guests.value == 0){
        alertGuests.innerHTML = 'Invalid input. Insert a number.'
    }
    if(bill.value != 0 && tip.value != 0 && guests.value != 0){
    alertBill.innerHTML = '';
    alertTip.innerHTML = '';
    const tipAmount = (Number(bill.value) * Number(tip.value)) / 100
    tipResult.innerHTML = maxDigits(tipAmount) + '$';
    totalResult.innerHTML = maxDigits(Number(bill.value) + tipAmount) + '$';
    tipPersonResult.innerHTML = maxDigits(tipAmount / Number(guests.value)) + '$';
    totalPersonResult.innerHTML = maxDigits((Number(bill.value) + tipAmount) /  Number(guests.value)) + '$';
    resultDisplay.style.display = 'block';
    }
}

cl = () =>{
    bill.value = '';
    tip.value = '';
    guests.value = 1;
    resultDisplay.style.display = 'none';
} 


maxDigits = (number) =>{
    if(String(number).split(".")[1]?.length > 2){
        return number.toFixed(2);
    }else{
        return number;
    }
}
