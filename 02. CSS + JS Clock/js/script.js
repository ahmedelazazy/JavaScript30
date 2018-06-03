(function(){
  //Consts
  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const hourHand = document.querySelector(".hour-hand");

  //Data members
  var timerTicking;

  //Functions
  function main(){
    updateClockUI();
    timerTicking = setInterval(updateClockUI, 1000);
  }

  function updateClockUI(){
    var now = new Date();

    var seconds = now.getSeconds();
    var secondsDegree = 360/60*seconds + 90;
    var secondsDegreeInt = Math.floor(secondsDegree);
    secondHand.style.transition = seconds == 0 ? "" : "transform 0.2s ease-out";
    secondHand.style.transform =  `rotate(${secondsDegreeInt}deg)`;

    var minutes = now.getMinutes();
    var minutesDegree = 360/60*minutes + 360/60/60*seconds + 90;
    var minutesDegreeInt = Math.floor(minutesDegree);
    minuteHand.style.transition = minutes == 0 ? "" : "transform 0.2s ease-out";
    minuteHand.style.transform =  `rotate(${minutesDegreeInt}deg)`;

    var hours = now.getHours();
    var hoursDegree = 360/12*hours + 360/12/60*minutes; //and ignore the seconds effect: 360/12/60/60*seconds + 90
    var hoursDegreeInt = Math.floor(hoursDegree);
    hourHand.style.transition = hours == 0 ? "" : "transform 0.2s ease-out";
    hourHand.style.transform =  `rotate(${hoursDegreeInt}deg)`;
  }

  //Execution
  main();

})();
