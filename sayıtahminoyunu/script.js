'use strict'//hata yaparsak uyaracak

let secretNumber =  Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore=0;

const displayMessage= function(message){
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click',function(){

    const guess = Number(document.querySelector('.guess').value)
    console.log(guess,typeof guess);
    console.log(secretNumber,typeof secretNumber);
    
    
    //input boş girilirse
    if(!guess){
        displayMessage('Bir sayi giriniz: ')

    }
    //sayilar birbiriyle eşleşirse
    
    else if(guess===secretNumber){
        displayMessage('Doğru Tahmin');

        document.querySelector('.number').textContent = secretNumber;
        
        document.querySelector('body').style.background = '#60b347';
        document.querySelector('.number').style.width = '30rem';

    }
            if(score > highscore)
             {
                highscore = score;
                document.getElementById('1').textContent= highscore; 
             }
    //sayılar brbiriyle eşleşmiyorsa
    else if(guess !== secretNumber)
    {
        if(score>1)
        {
            displayMessage(guess>secretNumber ? ':cok yüksek' : 'cok düsük');
           ;
        }
        
        else {
            displayMessage('game is loosed');
            document.querySelector('.score').textContent = 0;
        }

    }                    

});

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    
    displayMessage('Tahmin ediliyor...');

    /*document.getElementById('5').textContent = score;
    document.getElementById('5').innerText = '?';
    document.getElementById('4').value = ''*/
    

    document.querySelector('.body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    


});