
  let computermove;



let score = JSON.parse(localStorage.getItem(`score`));



if (!score) {
  score = {
    wins: 0,
    loses: 0,
    ties: 0,
  };
}









function resetScore() {
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  
}











document.body.addEventListener('keydown',()=>{
if(event.key==='a' || event.key==='A'){
  autoplay();

}












});


document.body.addEventListener('keydown',()=>{
  if(event.key==='Backspace'){
    resetScore();

  }
})


document.querySelector('.restscorebutton').addEventListener('click',()=>{
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;
  localStorage.removeItem(`score`);
  

});




document.querySelector('.auto-play-button').addEventListener('click',()=>{
  autoplay();


});

document.querySelector('.rockimage').addEventListener('click',()=>{

play('Rock'); pickcomputermove();
});

document.querySelector('.paperimage').addEventListener('click',()=>{

  pickcomputermove(); play('Paper');

});

document.querySelector('.scissorimage').addEventListener('click',()=>{

  pickcomputermove(); play('Scissor');





});

document.body.addEventListener('keydown',()=>{
if(event.key==='r' || event.key==='R' ){
play('Rock')
}
else if(event.key==='p' || event.key==='P'){

  play('Paper')


}
else if(event.key==='s' || event.key==='S'){


  play('Scissor')
}



  
  }); 


function pickcomputermove() {
  const randomnumber = Math.random();

  if (randomnumber >= 0 && randomnumber < 1 / 3) {
    computermove = `Rock`;
  } else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) {
    computermove = (`Paper`);
  } else if (randomnumber >= 2 / 3 && randomnumber < 1) {
    computermove = (`Scissor`);
  }
}
function autoplay(){
  
    setInterval(()=>{
    const mymove=pickcomputermove();
play(mymove);
    
    
    },1000);
    
    }


function play(mymove) {
  let result = '';
  if (mymove === `Rock`) {
    if (computermove === `Rock`) {
      result = (`tied`);
    } else if (computermove === `Paper`) {
      result = (`you loser`);
    } else if (computermove === `Scissor`) {
      result = (`you win`);
    }
  } else if (mymove === `Paper`) {
    if (computermove === `Rock`) {
      result = (`you win`);
    } else if (computermove === `Paper`) {
      result = (`tied`);
    } else if (computermove === `Scissor`) {
      result = (`you loser`);
    }
  } else if (mymove === `Scissor`) {
    if (computermove === `Rock`) {
      result = (`you loser`);
    } else if (computermove === `Paper`) {
      result = (`you win`);
    } else if (computermove === `Scissor`) {
      result = (`tied`);
    }
  }

  if (result === `you win`) {
    score.wins += 1;
  } else if (result === `you loser`) {
    score.loses += 1;
  } else if (result === `tied`) {
    score.ties += 1;
  }




  localStorage.setItem('score', JSON.stringify(score));

  let yourR = document.querySelector('.youresult');
  yourR.innerHTML = `${result}`;
  yourR.classList.add('Js-result');

  let allres = document.querySelector('.js-paragraph');
  allres.innerHTML = `wins: ${score.wins}, loses: ${score.loses}, tied: ${score.ties}`;
  allres.classList.add('allresu');


  document.querySelector('.imgandmoves')
  .innerHTML= 
  





`   you
<img  src=" images/${mymove}-emoji.png" >

computer
<img src="images/${computermove}-emoji.png">    `


}

   









function showResetConfirmation(){
  document.querySelector('.parayesno')
  .innerHTML=`
  Are you sure you want to reset the score?
  
  <button class="js-reset-confirm-yes">yes</button>
  
  
  <button class="js-reset-confirm-no">No</button>
  
  
  `
  
  };



  
  
  document.querySelector('.restscorebutton').addEventListener('click',()=>{

    showResetConfirmation();
  
  });
  


  function hideResetConfirmation(){
    document.querySelector('.parayesno')
    .innerHTML='';
  
  
    };
  


  
  document.querySelector('.js-reset-confirm-yes').addEventListener('click',()=>{
    resetScore();
    hideResetConfirmation();
  
    
  });
  
  
  document.querySelector('.js-reset-confirm-no').addEventListener('click',()=>{
    hideResetConfirmation();
  
  
  });
  
  
  
  
  
  
  
  

  
   




