const form=document.querySelector("form");
const num=document.getElementById("num");
const display=document.querySelector(".display");
const playAgain=document.getElementById("playAgain");
const submit=document.getElementById("submit");
playAgain.style.display="none";

let count; let x;

// random number
function getRandom( ){
    count=1;
    x=Math.ceil(Math.random( )*100);
}

getRandom( );


// event listener 
form.addEventListener('submit',(e)=>{
    e.preventDefault( );

    const N=num.value;

    // conditions 
    if (!(N>=1 && N<=100)){
        display.innerHTML=`<span class="text-rose-500">${N}</span> is out of range`;
    } else{
        if (N==x){
            display.innerHTML=`Yes, it was <span class="text-rose-500">${N}</span>
            <br> <span class="text-amber-800">You took ${count} attempts</span>`;
            playAgain.style.display="block";
            num.readOnly=true;
            submit.disabled=true;
            
        } else if (N>x){
            display.innerHTML=`No, think smaller than <span class="text-rose-500">${N}</span>`;

        } else if (N<x){
            display.innerHTML=`No, think greater than <span class="text-rose-500">${N}</span>`;
        }
    }

    count++;
    num.value=""; 
})


// play again
playAgain.addEventListener('click',( )=>{

    form.reset( );
    getRandom( );

    display.innerHTML="";
    playAgain.style.display="none";

    num.readOnly=false;
    submit.disabled=false;
})

