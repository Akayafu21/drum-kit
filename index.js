var klong = ["crash", "kick", "snare", "tom1", "tom2", "tom3", "tom4"];
var drum = ["crash", "kick", "snare", "tom1", "tom2", "tom3", "tom4"];
var set = ["w", "a", "s", "d", "j", "k", "l"];

for (let i = 0; i < set.length; i++) {
  set[i] = document.getElementsByClassName("set")[0].children[i];
  drum[i] = document.getElementById(drum[i]);
  klong[i] = document.getElementsByClassName("klong")[0].children[i];

  set[i].addEventListener("click", () => {
    playOn(i);
  });
}

remove = () => {
  document.querySelector(".play").classList.remove("play");
};

unactive = ()=>{
  document.querySelector(".active").classList.remove("active");
}

changeStyle = (set) => {
  set.classList.add("play");
  setTimeout(remove, 200);
};

changeStyle2 = (klong) =>{
  klong.classList.add("active");
  setTimeout(unactive,200);
}

playOn = (num) =>{
  drum[num].play();
    changeStyle(set[num]);
    changeStyle2(klong[num]);
} 

window.addEventListener("keypress", (evt) => {
  switch (evt.key) {
    case "w":
      playOn(0);
      break;
    case "a":
      playOn(1);
      break;
    case "s":
      playOn(2);
      break;
    case "d":
      playOn(3);
      break;
    case "j":
      playOn(4);
      break;
    case "k":
      playOn(5);
      break;
    case "l":
      playOn(6);
      break;
  }
});
