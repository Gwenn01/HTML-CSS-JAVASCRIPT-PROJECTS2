//variables
const convert = document.getElementById('convert');
const clear = document.getElementById('clear');
//functionality
convert.addEventListener('click', () => {
    let decimal = document.getElementById('decimal').value;
    const option = document.getElementById('convertOption').value;
    let result = document.getElementById('result');
    if(decimal != ""){
        decimal = parseInt(decimal);
        if(option == "octal"){
            result.value = convertOctal(decimal);
        }else if(option == "hexa"){
            result.value = convertHexa(decimal);
        }else{
            result.value = convertBinary(decimal);
        }
    }
});
clear.addEventListener('click', () => {
    let decimal = document.getElementById('decimal').value = "";
    const option = document.getElementById('convertOption').value = "binary";
    const result = document.getElementById('result').value = "";
});
function convertBinary(decimal){
    answer = [];
    result = "";
    while(decimal != 0){
        rem = decimal % 2;
        answer.push(rem);
        decimal = Math.floor(decimal / 2);
    }
    for(let i = answer.length-1; i >= 0; i--){
        result += answer[i]
    }
    return result;
};
function convertOctal(decimal){
    answer = [];
    result = "";
    while(decimal != 0){
        rem = decimal % 8;
        answer.push(rem);
        decimal = Math.floor(decimal / 8);
    }
    for(let i = answer.length-1; i >= 0; i--){
        result += answer[i]
    }
    return result;
};
function convertHexa(decimal){
    answer = [];
    result = "";
    while(decimal != 0){
        rem = decimal % 16;
        answer.push(rem);
        decimal = Math.floor(decimal / 16);
    }
    for(let i = answer.length-1; i >= 0; i--){
        if(answer[i] < 10){
            result += answer[i];
        }else{
            if (answer[i] == 10){
                result += 'A';
            }else if(answer[i] == 11){
                result += 'B';
            }else if(answer[i] == 12){
                result += 'C';
            }else if(answer[i] == 13){
                result += 'D';
            }else if(answer[i] == 14){
                result += 'E';
            }
            else if(answer[i] == 15){
                result += 'F';
            }
        }
        
    }
    return result;
};