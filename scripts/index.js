window.addEventListener("keydown",function(e){
  play(e, e.keyCode);
})
window.addEventListener("keyup",function(e){
  stop(e, e.keyCode);
})
window.addEventListener("mousedown",function(e){
  if(e.target.className!=="key") return;
  play(e, e.target.getAttribute("data-key"));
})
window.addEventListener("mouseup",function(e){
  if(e.target.className!=="key pressed") return;
  stop(e, e.target.getAttribute("data-key"));
})

function play(e, keyCode){
  const audio= document.querySelector(`audio[data-key="${keyCode}"]`);
  const key= document.querySelector(`.key[data-key="${keyCode}"]`)
  if(!audio) return;
  audio.currentTime=0;
  audio.play();
  key.classList.add("pressed");
}
function stop(e, keyCode){
  const key= document.querySelector(`.key[data-key="${keyCode}"]`);
  if(!key) return;
  key.classList.remove("pressed");
}
