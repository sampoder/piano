Tone.start();
const synth = new Tone.Synth().toDestination();
document.onkeydown = function(e){
  e = e || window.event;
  var key = e.which || e.keyCode;
  if(key===83){playNote('C')}
  if(key===68){playNote('D')}
  if(key===70){playNote('E')}
  if(key===71){playNote('F')}
  if(key===72){playNote('G')}
  if(key===74){playNote('A')}
  if(key===75){playNote('B')}
}
function playNote(note) {
  synth.triggerAttackRelease(`${note}4`, "8n");
  document.getElementById(note).style.background = '#33d6a6';
  setTimeout(() => {  document.getElementById(note).style.background = 'white'; }, 200);
}