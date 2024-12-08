const score=JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };
updateScoreElement();
function playgame(playermove){
    const cm=pickcomputermove();
    let rs='';
    if(playermove=='rock'){
        if(cm=='rock') 
          rs='Tie';
       else if(cm=='paper') 
        rs='You lose';
       else
         rs='You win';
    }
    else if(playermove=='scissor'){
        if(cm=='rock')
         rs='You lose';
       else if(cm=='paper')
        rs='You win';
        else 
        rs='Tie';
    }
    else if(playermove=='paper'){
        if(cm=='rock')
         rs='You win';
       else if(cm=='paper')
        rs='Tie';
        else 
        rs='You lose';
    }
    if(rs=='You win')
    score.wins+=1;
    else if(rs=='You lose')
    score.losses+=1;
    else{
    score.ties+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));
    updateScoreElement();
    document.querySelector('.js-result').innerHTML=rs;
    document.querySelector('.js-moves').innerHTML=`You <img src="images/${playermove}-emoji.png" class="move-icon"> Computer <img src="images/${cm}-emoji.png" class="move-icon">`;
    
    
}
function updateScoreElement(){
    document.querySelector('.js-score').innerHTML=`Wins: ${score.wins} , Losses: ${score.losses},Ties: ${score.ties}`;
}
    function pickcomputermove(){
        const randno=Math.random();let cm='';
if(randno>=0&&randno<1/3)
cm='rock';
else if(randno>=1/3&&randno<2/3)
cm='paper';
else if(randno>=2/3&&randno<1){
cm='scissor';
}
return cm;
}
let isAutoPlaying=false;
let intervalId;
function autoplay(){
if(!isAutoPlaying){
intervalId=setInterval(function(){
        const playermove=pickcomputermove();
        playgame(playermove);
    },100);
    isAutoPlaying=true;
}
else{
    clearInterval(intervalId);
    isAutoPlaying=false;
}
}
document.querySelector('.js-rock-button').addEventListener('click',()=>{
    playgame('rock');
});
document.querySelector('.js-paper-button').addEventListener('click',()=>{
    playgame('paper');
});
document.querySelector('.js-scissor-button').addEventListener('click',()=>{
    playgame('scissor');
});
document.body.addEventListener('keydown',(event)=>{
if(event.key==='r'){
    playgame('rock');
}
if(event.key==='p'){
    playgame('paper');
}
if(event.key==='s'){
    playgame('scissor');
}
});