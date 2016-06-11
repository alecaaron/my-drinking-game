// Initialize game by serving a random cards
pressStart();

// Capsulize MVC-controler to program for 
// controls
function pressStart(){
    gameObj.shuffle();
    var $img = document.getElementById('image');
    var $name = document.getElementById('name');
    var $message = document.getElementById('desc');
    
    //Bind the data to the DOM
    $img.innerHTML = '<img src=' + gameObj.current_rule.img + ' alt=\'gameImg\' >';
    $name.innerHTML = gameObj.current_rule.title;
    $message.innerHTML = gameObj.current_rule.desc;
    
    //Process your data; Place the current rule into
    //the graveyard & delete it from play
    gameObj.pross(gameObj.current_rule, randNum);
}


//This function encapsulates a function
//for easy removal for event binding
function keyfunc(){
    if(e.keyCode == 13 || e.keyCode == 32){
        pressStart();
    }
}




//****************** EVENTS / CONTROLS ************


// Capture the shuffle button and 
// serve a a game when clicked.
var nxtBtn = document.getElementById('shuffle_button');
nxtBtn.addEventListener('click', pressStart);
//Add keyboard support.
window.addEventListener('keypress', keyfunc);

