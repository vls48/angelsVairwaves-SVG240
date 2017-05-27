//document.getElementById("button").onclick=newPage(){
//	window.location.href = "http://vlstewart.com/idm240/final/content.html"
//};


var audioPlayer = document.getElementById('audioplayer');
var isPlaying = false;

/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}


function fade2Content() {
  console.log('fade2Content called');
  document.body.classList.remove('blackScreen');
}


function audioToggle(msg) {

    if (isPlaying) {
        audioPlayer.pause()
        isPlaying = false
        document.getElementById('soundicon').classList.add('hide');
        
    } else {
        audioPlayer.play()
        isPlaying = true
        document.getElementById('soundicon').classList.remove('hide');
    }

    //audioPlayer.pause()
}