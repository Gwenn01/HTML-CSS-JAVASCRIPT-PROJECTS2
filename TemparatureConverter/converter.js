// variables
const celcius = document.getElementById('celcius');
const farenheit = document.getElementById('farenheit');
const kelvin = document.getElementById('kelvin');
//functionality
celcius.addEventListener('input', () =>{
    let value = celcius.value;
    if (value != ""){
        value = parseInt(value);
        farenheit.value = celciusToParenheit(value);
        kelvin.value = celciusToKelvin(value);
    }else{
        farenheit.value = "";
        kelvin.value = "";
    }   
});
farenheit.addEventListener('input', () => {
    let value = farenheit.value;
    if (value != ""){
        value = parseInt(value);
        celcius.value = farenheitToCelcius(value);
        kelvin.value = farenheitToKelvin(value);
    }else{
        celcius.value = "";
        kelvin.value = "";
    }   
});
kelvin.addEventListener('input', () => {
    let value = kelvin.value;
    if (value != ""){
        value = parseInt(value);
        celcius.value = kelvinToCelcius(value);
        farenheit.value = kelvinToFarenheit(value);
    }else{
        celcius.value = "";
        farenheit.value = "";
    }   
});
function celciusToParenheit(celcius){
    return celcius * (9/5) + 32; 
};
function celciusToKelvin(celcius){
    return celcius + 273.15;
};
function farenheitToCelcius(farenheit){
    return (farenheit - 32) * (5/9);
};
function farenheitToKelvin(farenheit){
    return (farenheit-32)*(5/9)+273.15;
};
function kelvinToCelcius(kelvin){
    return kelvin - 273.15;
};
function kelvinToFarenheit(kelvin){
    return kelvin * (9/5) - 459.67;
};
