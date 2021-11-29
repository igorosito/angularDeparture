let btnContainer = document.querySelector(".container__flex.btnContainer");
let btns = btnContainer.getElementsByClassName("btn__continente");
for (let i = 0; i < btns.length; i++) {
 btns[i].addEventListener("click", function() {
     let current = document.getElementsByClassName("active");
     current[0].className = current[0].className.replace(" active", "");
     this.className += " active";
  });
}


