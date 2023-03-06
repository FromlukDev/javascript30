

function  playSound(e) {
    // to get the audio from the data-key attribute
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    
    // to control the animations on the buttons using also attribute selector $ to get the data-key event.
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); 
    if(!audio) return; // if the key is not playing any audio, make it stop the function from running all together.
    audio.currentTime = 0; // rewind to the start (to make it simultaneous when pressing the keyboard keys).
    audio.play();
    key.classList.add('playing'); // To pull the class in css for the animation fx.
}
// working on the animation for the border.
// making the bellow function to control the event happening in the transform property
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if it's not a tranform property
    // to make the transform animation stop and show the transition effect!    
    this.classList.remove('playing'); // the "this" is whatever it got called with(the function for key in this case)
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);