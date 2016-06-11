// Create a game Obect to hold controls for the game.
// Contains the rules (All in litteral annon Objects) held in an array.
var gameObj = {


//******** Begin Properties *******************************    
    rules: [
        {
            title: "Double Shot",
            desc: "Roll some dice, Highest number takes a shot",
            img: "imgs/obj_A.jpg"
        },
        
        {
            title: "Straight Shooter",
            desc: "Take a shot straight, as in no chaser",
            img: "imgs/obj_B.jpg"
        },
        
        {
            title: "Santa is Coming!",
            desc: "Roll a dice, <br/>" + 
                    "<span class=\"odd\">Odd</span>: Give two shots</br>" +
                    "<span class=\"even\">Even<span>: Give 1 shot",
            img: "imgs/obj_C.jpg"
        },
        
        {
            title: "",
            desc: "",
            img: ""
        }
    ],
    
    graveyard: [],
        
    
//*********** BEGIN METHODS **********************

    //This function will pick out a random card and push it into the DOM
    shuffle: function () {
        
        window.randNum = Math.floor(Math.random() * gameObj.rules.length);
        
        var rule = gameObj.rules[randNum];
        
        this.current_rule = rule;
        
        if(gameObj.rules.length == 0){
            
            gameObj.current_rule = {
                title: "Sorry!",
                desc: "I guess you've hit the end of tha game. Refresh your window for Round 2.",
                img: "xyz"
            };
            
            window.removeEventListener('keypress', keyfunc);
            nxtBtn.removeEventListener('click', pressStart);
            
        }
    },
    
    pross: function(obj, index){
        gameObj.graveyard.push(obj);
        gameObj.rules.splice(index, 1);
    },

    
}