const buttonEl=document.querySelector('.btn');
const url='https://api.quotable.io/random';
const quoteEl=document.querySelector('.quote');
const authorEl=document.querySelector('.poet');



 async function getmyquote(){



    try {
        quoteEl.innerText='Updating...';
        authorEl.innerText='Updating...';
    
    buttonEl.innerText='Loading...'
buttonEl.disabled=true;

    const rawdata= await fetch(url);
    const quoteresult= await rawdata.json();
    quoteEl.innerText=quoteresult.content;
    authorEl.innerText= '~' +  quoteresult.author;
    
    buttonEl.innerText='GET A QUOTE'
    buttonEl.disabled=false;
    } catch (error) {
         quoteEl.innerText='An error happened, try again later';
        authorEl.innerText='An error happened';
        buttonEl.innerText='GET A QUOTE';
        buttonEl.disabled = false;
    }
   


}
















buttonEl.addEventListener('click',()=>{

    getmyquote();
})