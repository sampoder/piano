Tone.start();
const synth = new Tone.Synth().toDestination();
var section = 4
document.onkeydown = function(e){
  e = e || window.event;
  var key = e.which || e.keyCode;
  if(key===83){playNote('C', e.shiftKey)}
  if(key===68){playNote('D', e.shiftKey)}
  if(key===70){playNote('E', e.shiftKey)}
  if(key===71){playNote('F', e.shiftKey)}
  if(key===72){playNote('G', e.shiftKey)}
  if(key===74){playNote('A', e.shiftKey)}
  if(key===75){playNote('B', e.shiftKey)}
  if(key===37){if(section>1){section-=1; document.getElementById('sectionNo').innerText = section}else{alert("The lowest keyboard section is 1.")}}
  if(key===39){if(section<8){section+=1; document.getElementById('sectionNo').innerText = section}else{alert("The highest keyboard section is 8.")}}
}
function playNote(note, shift) {
  console.log(`${note}${(shift) ? '#' : ''}${section}`)
  synth.triggerAttackRelease(`${note}${(shift) ? '#' : ''}4`, "8n");
  document.getElementById(note).style.background = (shift) ? '#338eda' : '#33d6a6';
  setTimeout(() => {  
    document.getElementById(note).style.background = 'white'; 
    }, 200);
}