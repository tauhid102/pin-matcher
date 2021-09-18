function gnererateRandomNumber(){
    const randomNumber =Math.round((Math.random())*10000); 
    const randomString =randomNumber+'';
    console.log(randomString);
    if(randomString.length==4){
        return randomString;
    }
    else{
        return gnererateRandomNumber();
    }
}

function veryfyPin(){
    const generatePin = document.getElementById('generate-field').value;
    const userPin = document.getElementById('typed-numbers').value;
    const successMassage = document.getElementById('notify-success');
    const failMassage = document.getElementById('notify-fail');
    {
        if(generatePin==userPin){
            successMassage.style.display='block';
            failMassage.style.display='none';
        }
        else{
            successMassage.style.display='none';
            failMassage.style.display='block';
        }
    }
}


document.getElementById('generate-pin').addEventListener('click',function(){
    
    document.getElementById('generate-field').value=gnererateRandomNumber();
});
document.getElementById('key-pad').addEventListener('click',function(event){

    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number=='C'){
            calcInput.value='';
        }
    }
    else{
        const calcPrevious = calcInput.value;
        const calsNew = calcPrevious+number;
        calcInput.value=calsNew;
    }
});