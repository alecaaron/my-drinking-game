// Initialize game by serving a random cards

function pressStart(){
  gameObj.shuffle();
  gameObj.print_rule();
};

/*This function encapsulates a function
for easy removal of event binding when
deck is finished*/
function keyfunc(e){
    if(e.keyCode == 13 || e.keyCode == 32){
        pressStart();
    }
}
pressStart();

//****************** EVENTS / CONTROLS ************


// Capture the shuffle button and
// serve a a game when clicked.
var nxtBtn = document.getElementById('shuffle_button');
nxtBtn.addEventListener('click', pressStart);
//Add keyboard support.
window.addEventListener('keypress', keyfunc);
