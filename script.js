Tone.start();
const synth = new Tone.Synth().toDestination();
document.onkeydown = function(e) {
  e = e || window.event;
  var key = e.which || e.keyCode;
  if (key === 83) {
    playNote("C");
  }
  if (key === 68) {
    playNote("D");
  }
  if (key === 70) {
    playNote("E");
  }
  if (key === 71) {
    playNote("F");
  }
  if (key === 72) {
    playNote("G");
  }
  if (key === 74) {
    playNote("A");
  }
  if (key === 75) {
    playNote("B");
  }
};
function playNote(note) {
  const items = ["C", "D", "E", "F", "G", "A", "B"];
  const colours = [
    "#ec3750",
    "#ff8c37",
    "#f1c40f",
    "#33d6a6",
    "#338eda",
    "#5bc0de",
    "#a633d6"
  ];
  const bullyy = [
    "IM NOT WHAT YOU THINK I AM AHHAHAHAA",
    "OOF, THAT DIDNT SOUND GREAT?",
    "MEEEE HAS THE CONTROL NOT YOOUUUU ... blows raspberry",
    "I AM YOUR FINGERS",
    "IM ALWAYS CONTROLLING",
    "YOU AINT GETTING AWAY WITH THIS!!! MY PIANO MY RULES",
    "YA TAKE THAT"
  ];
  const notee = `${items[Math.floor(Math.random() * items.length)]}`;
  synth.triggerAttackRelease(`${notee}${Math.floor(Math.random() * 10)}`, "8n");
  const color = `${colours[Math.floor(Math.random() * colours.length)]}`;
  document.getElementById(notee).style.background = color;
  document.getElementById("title").innerText =
    bullyy[Math.floor(Math.random() * bullyy.length)];
  document.getElementById(notee).style.color = "white";
  document.getElementById("body").style.background = color;

  setTimeout(() => {
    document.getElementById(notee).style.background = "white";
    document.getElementById(notee).style.color = "black";
    document.getElementById("body").style.background = `${
      colours[Math.floor(Math.random() * colours.length)]
    }`;
  }, 200);
}
