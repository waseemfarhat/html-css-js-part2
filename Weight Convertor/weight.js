const inputEl=document.getElementById('input');
const ErrorEl=document.querySelector('.error');
const ResultEl=document.getElementById('result');
inputEl.addEventListener('input',()=>{
    updateresult();
})

let errortime;

function updateresult(){
    if(inputEl.value<=0  || isNaN(inputEl.value)){
ErrorEl.innerText='Please enter a valid number!';
clearTimeout(errortime);
errortime=setTimeout(()=>{
ErrorEl.innerText='';
inputEl.value='';

},2000)

    }
else{
    let timeresult;
    ResultEl.innerText=(+inputEl.value/2.2).toFixed(2);
 clearTimeout(timeresult);
timeresult= setTimeout(()=>{
        inputEl.value='';
    ResultEl.innerText='';
    },10000)
}
    


}