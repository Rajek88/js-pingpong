var leftbar = document.querySelector('.leftbar');
var rightbar = document.querySelector('.rightbar');
var ball = document.querySelector('.ball');
var leftUp = document.querySelector('#leftUp');
var leftDown = document.querySelector('#leftDown');
var rightUp = document.querySelector('#rightUp');
var rightDown = document.querySelector('#rightDown');

var clickCount = 0;
var leftTop = 0;
var rightTop = 0;

var playGroundPose = document.querySelector('.playground').getBoundingClientRect();
var playGroundBase = playGroundPose.bottom;
var playGroundTop = playGroundPose.top;

// console.log(playGroundPose.height);

rightDown.addEventListener('click', function(){
    // console.log(playGroundBase, rightbar.getBoundingClientRect().bottom);
    if(playGroundBase <= rightbar.getBoundingClientRect().bottom ){
        return;
    }
    rightTop = rightTop + 100;
    rightbar.style.top = rightTop + 'px';
    console.log('rightBar coming down');
});

rightUp.addEventListener('click', function(){
    // console.log(playGroundTop, rightbar.getBoundingClientRect().top);

    if(playGroundTop == rightbar.getBoundingClientRect().top ){
        return;
    }
    rightTop = rightTop - 100;
    rightbar.style.top = rightTop + 'px';
    console.log('rightBar coming Up');
});

leftDown.addEventListener('click', function(){
    if(playGroundBase <= leftbar.getBoundingClientRect().bottom ){
        return;
    }
    leftTop = leftTop + 100;
    leftbar.style.top = leftTop + 'px';
    console.log('leftBar coming down');
});

leftUp.addEventListener('click', function(){
    if(playGroundTop == leftbar.getBoundingClientRect().top ){
        return;
    }
    leftTop = leftTop - 100;
    leftbar.style.top = leftTop + 'px';
    console.log('leftBar coming Up');
});


function playGame(){
    console.log('game started');


}
function pauseGame(){
    console.log('game paused');
}

function clicked(){
    clickCount++;
    console.log('clicked');

    if(clickCount % 2 !== 0 ){
        playGame();
        document.querySelector('.playBtn').innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    }
    else{
        pauseGame();
        document.querySelector('.playBtn').innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
}


