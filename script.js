var timer= 60;
var timerlm = document.querySelector('#timerlm');
var hit = document.querySelector('#hit');
var btmpnl = document.querySelector('#btmpnl')
var scorelm = document.querySelector('#scorelm')
var gn; 
var score = 0;

setInterval(function(){
    if(timer>0){
 --timer;
 timerlm.textContent = timer;
    }
    else
    {
        btmpnl.innerHTML = '<H4 id="center" > GAME OVER </H4>'; 
    } 
}, 1000);

function makebuble(){
    for(var i=0; i<153 ; i++)
    {
        var randu= Math.floor(Math.random()*10);
        var templ = `<div class="bubble"> ${randu}</div> `;
        // console.log(templ);
        btmpnl.innerHTML += templ
    }
}

function gng(){
    gn= Math.floor(Math.random()*10); 
    hit.textContent =   gn;
}
 
btmpnl.addEventListener('click', function(detils){
    var clickbubble = detils.target.textContent; 
    if(clickbubble == gn)
    {
        score= score+ 10;
        scorelm.textContent= score;
        gng();
        btmpnl.innerHTML =  '';
        makebuble();
    }
    else{
        console.log('hit shi hi hhua');
    }
})
gng();
makebuble();