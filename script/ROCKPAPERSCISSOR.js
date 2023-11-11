let computermove;
let score = JSON.parse(localStorage.getItem(`score`));
if (!score) {
  score = {
    wins: 0,
    loses: 0,
    ties: 0,
  };
}

function pickcomputermove() {
  const randomnumber = Math.random();

  if (randomnumber >= 0 && randomnumber < 1 / 3) {
    computermove = (`Rock`);
  } else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) {
    computermove = (`Paper`);
  } else if (randomnumber >= 2 / 3 && randomnumber < 1) {
    computermove = (`Scissor`);
  }
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
