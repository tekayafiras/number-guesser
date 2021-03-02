const input = document.querySelector('input');
const message = document.querySelector('.message');
const submit = document.querySelector('.btn');
let y;

submit.addEventListener('click',function(e){
    e.preventDefault();
    const x = Math.floor((Math.random()*10))+1;
    y = Math.floor(input.value);

    console.log(y,x);
    
    for(let i =0;i<3;i++){
        if( y !== x && i===0){
            message.innerHTML='first';
            message.style.displa='block';
        }
        else if( y=== x){
            message.style.color='green';
            message.innerHTML='winner';
            message.style.display='block';
        }
    }
    
    

    input.value='';
})