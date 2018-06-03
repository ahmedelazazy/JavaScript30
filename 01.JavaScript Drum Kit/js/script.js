(function(){
  //Consts
  const keys = document.querySelectorAll(".key");
  const audios = document.querySelectorAll("audio");

  //Data members


  //Functions
  function main(){
    addEventListeners();
  }

  function addEventListeners(){
    document.addEventListener("keydown", keyUpEvent, false);
    keys.forEach((el) => el.addEventListener("click", keyMouseClick, true));
    keys.forEach((el) => el.addEventListener("transitionend", removeTransition, false));
  }

  function keyMouseClick(e){
    var keyCode = e.target.getAttribute("data-key");
    playKey(keyCode);
  }

  function keyUpEvent(e){
    var keyCode = e.keyCode;
    playKey(keyCode);
  }

  function playKey(code){
    const audio = document.querySelector(`audio[data-key="${code}"]`);

    if (!audio)
      return;

    audio.currentTime  = 0;
    audio.play();

    var currentPlayedKey = document.querySelector(`.key[data-key="${code}"]`);
    currentPlayedKey.classList.add("playing");
  }

  function removeTransition(e){
	//check on a specific property to run this code once for every key
    if (e.propertyName !== 'border-left-color') return;
    e.target.classList.remove("playing");
  }

  //Execution
  main();

})();
