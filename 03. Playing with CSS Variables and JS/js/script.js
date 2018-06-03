(function(){
  //Consts
  const inputs = document.querySelectorAll(".controls input");

  //Data members

  //Functions
  function main(){
    inputs.forEach(el => el.addEventListener("change", updatePlayground));
    inputs.forEach(el => el.addEventListener("mousemove", updatePlayground));
  }

  function updatePlayground(e){
    var sizing = e.target.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${e.target.name}`, `${e.target.value}${sizing}`)
  }

  //Execution
  main();
})();
