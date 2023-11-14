function calculate(){
    const totalPayment = document.getElementById('payment');
    const option = document.getElementById('option').value;
    const kilometer = parseInt(document.getElementById('kilometer').value);
    let total = 0;
    let senior = 20 / 100;
    let student = 10 / 100;
    total = parseInt(kilometer) * 50;
    senior = total * senior;
    student = total * student;
    console.log(option)
    if (option == 'senior'){
        total -= senior;
    }else if (option == 'student'){
        total -= student;
    }
    totalPayment.innerHTML = total;
}