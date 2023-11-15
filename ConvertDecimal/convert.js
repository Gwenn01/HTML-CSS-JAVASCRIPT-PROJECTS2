//variables
const convert = document.getElementById('convert');
const clear = document.getElementById('clear');

// functionality
convert.addEventListener('click', () => {
    const input = document.getElementById('input').value;
    const option = document.getElementById('option').value;
    const result = document.getElementById('result');
    if (input != ""){
        if(option == "binary"){
            result.value = convertBinaryToDecimal(input);
        }else if(option == "octal"){
            result.value = convertOctalToDecimal(input);
        }else if(option == "hexa"){
            result.value = convertHexaToDecimal(input);
        }
    }
});
clear.addEventListener('click', () => {
    const input = document.getElementById('input').value = "";
    const option = document.getElementById('option').value = "binary";
    const result = document.getElementById('result').value = "";
});
function convertBinaryToDecimal(binary){
    let result = 0;
    let index = binary.length-1;
    for(let i = 0; i < binary.length; i++){
        if (binary[i] != '0'){
           result += 2 ** index;
        }
        index--;
    }
    return result;
};
function convertOctalToDecimal(octal){
    let result = 0;
    let index = octal.length - 1;
    for(let i = 0; i < octal.length; i++){
        if (octal[i] != '0'){
           result += (8 ** index) * parseInt(octal[i]);
        }
        index--;
    }
    return result;
}
function convertHexaToDecimal(hexa){
    let result = 0;
    let index = hexa.length - 1;
    for(let i = 0; i < hexa.length; i++){
        if (hexa[i] != '0'){
            if (hexa[i] == 'A'){
                result += (16 ** index) * 10;
            }else if(hexa[i] == 'B'){
                result += (16 ** index) * 11;
            }else if(hexa[i] == 'C'){
                result += (16 ** index) * 12;
            }else if(hexa[i] == 'D'){
                result += (16 ** index) * 13;
            }else if(hexa[i] == 'E'){
                result += (16 ** index) * 14;
            }else if(hexa[i] == 'F'){
                result += (16 ** index) * 15;
            }else{
                result += (16 ** index) * parseInt(hexa[i]);
            }       
        }
        index--;
    }
    return result;
};