const input = document.querySelector('input');
const message = document.querySelector('.message');
const submit = document.querySelector('.btn');
const body = document.querySelector('body');
let guessesLeft,
    y,
    tryNumber;

    guessesLeft = 3;
    tryNumber = 0;

const x = Math.floor((Math.random()*10))+1;

submit.addEventListener('click',function(e){
    e.preventDefault();
    
    y = Math.floor(input.value);


    guessesLeft--;
    tryNumber++;
    input.classList.remove('ouline-green');
    input.classList.remove('ouline-red');
   

    
    
        if( y === x){
            message.style.color='green';
            message.innerHTML=`${y} is correct, YOU WIN!`;
            input.classList.add('ouline-green')
            message.style.display='block';
            submit.classList += ' again';
            submit.innerHTML='PLAY AGAIN';
            input.disabled =true;
            console.log(submit);

            }
        else{
            input.classList.add('outline-red');
                if(tryNumber === 1){
                    
                message.innerHTML=`${y} is not correct. you have ${guessesLeft} guesses left`;
                message.style.display='block';
                
                }

                else if(tryNumber === 2){
                    
                message.innerHTML=`${y} is not correct. you have ${guessesLeft} guesses left`;
                }
                else if(tryNumber === 3){
                    
                message.innerHTML=`Sorry game over, the correct answer was ${x}`;
                submit.innerHTML='PLAY AGAIN';
                input.disabled =true;

                submit.classList += ' again';
                }
    }
 
    input.value='';
});

body.addEventListener('mousedown',function(e){
    if(e.target.classList.contains('again')){
        window.location.reload();
    }
});



    // submit.addEventListener('click',function(e){
    //     e.preventDefault();

    //     y = Math.floor(input.value);
    //     console.log(y,x);
    //     if( y === x){
    //         message.style.color='green';
    //         message.innerHTML=`${y} is correct`;
    //         input.classList.add('ouline-green')
    //         message.style.display='block';
    //     }
    //     else{
            
    //             if(i===0){
    //             message.innerHTML=`${y} is not correct. you have ${i+2} guesses left`;
    //             message.style.displa='block';
    //             }
    //             else if(i===1){
    //             message.innerHTML=`${y} is not correct. you have ${i+1} guesses left`;
    //             }
    //             else{
    //             message.innerHTML=`Sorry game over, the correct answer was ${x}`;
    //             }
    //     }
    //     input.value='';
    // })