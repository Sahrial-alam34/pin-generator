function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

function getPin(){
    const randomNumber = generatePin();
    const randomNumberString = randomNumber + '';
    if(randomNumberString.length === 4 ){
        return randomNumberString;
    }
    else{
        return getPin();
       
    }
}

function setNumberInString(preNumber, newNumber){
    const numbers = preNumber + newNumber;
    return numbers;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const showPinField = document.getElementById('display-pin');
    const pinNumber = getPin();
    
    showPinField.value = pinNumber;
    
})

document.getElementById('calculator').addEventListener('click',function(){
    
    const newButtonNumber = event.target.innerText;
    const typedNumbers = document.getElementById('typed-numbers');
    const preNumber = typedNumbers.value;
    
    if(isNaN(newButtonNumber)){
        if(newButtonNumber ==='C'){
            typedNumbers.value='';
        }
        else if(newButtonNumber ==='<'){
           const getNumbers =  preNumber.split('');
           getNumbers.pop();
           const remainingNumbers = getNumbers.join('');
           typedNumbers.value = remainingNumbers;
        }
    }
    else{
        const buttonNumberCollection = setNumberInString(preNumber , newButtonNumber);
        typedNumbers.value = buttonNumberCollection;
    }

   
})

document.getElementById('verify-pin').addEventListener('click',function(){
    const generatePin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');
    if(generatePin === typedPin){
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else{
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})