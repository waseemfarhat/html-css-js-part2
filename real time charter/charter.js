const TotaltextAreaEl=document.querySelector('.textarea');
const Totalcounter=document.querySelector('.Total-counter');
const RemainingCounterEl=document.querySelector('.Remaining-counter');
TotaltextAreaEl.addEventListener('keyup',()=>{

    updatecounter();

    
})


function updatecounter(){
Totalcounter.innerText=TotaltextAreaEl.value.length;
RemainingCounterEl.innerText=TotaltextAreaEl.getAttribute('maxlength')-TotaltextAreaEl.value.length;

}