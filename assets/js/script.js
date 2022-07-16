var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber>=0){
        currentNumberWrapper.style.color = 'blue';
        if(currentNumber >= 10){
            currentNumber = currentNumber -1;
        }
    }

}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0){
        currentNumberWrapper.style.color = 'red';
        if(currentNumber <= -10){
            currentNumber = currentNumber + 1;
        }
    }
}


