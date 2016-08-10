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
                    "<span class=\"even\">Even</span>: Give 1 shot",
            img: "imgs/obj_C.jpg"
        },

        {
            title: "Top Up",
            desc: "Take time to fill up your cups.",
            img: "imgs/obj_d.jpg"
        }
    ],

    //Discarded cards
    graveyard: [],

    //Ending & beginning of deck
    edgeOfDeck: [
      {
        title: "ready for this round?",
        desc: "Press the button, or use Shift & Enter on your keyboard",
        img: "deckBegin"
      },

      {
        title: "Sorry!",
        desc: "I guess you've hit the end of the game. Refresh your window for the next round.",
        img: "deckEnd"
      }
    ],

    current_rule: "",

//*********** BEGIN METHODS **********************

    print_rule: function(){
      var $img = document.getElementById('image')
      var $name = document.getElementById('name');
      var $message = document.getElementById('desc');

      //Bind the data to the DOM
      $img.innerHTML = '<img src=' + this.current_rule.img + ' alt=\'gameImg\' >';
      $name.innerHTML = this.current_rule.title;
      $message.innerHTML = this.current_rule.desc;

    },


    /* grab the current rule and push it into the DOM */
    shuffle: function(){
        window.randNum = Math.floor(Math.random() * gameObj.rules.length);
        var rule = gameObj.rules[randNum];
        gameObj.current_rule = rule;

        if(gameObj.rules.length == 0){
          gameObj.current_rule = this.edgeOfDeck[1];
          nxtBtn.setAttribute("value", "Reset");
        }
        else if (gameObj.rules.length != 0) {
          document.getElementById("shuffle_button").setAttribute("value", "Shuffle");
        }


        gameObj.pross(gameObj.current_rule, randNum);



    },

    //Process used cards to move to graveyard
    pross: function(obj,index){
      this.graveyard.push(obj);
      this.rules.splice(index, 1);

      if(obj == gameObj.edgeOfDeck[1]){
        gameObj.graveyard.splice((gameObj.graveyard.length - 1), 1);
        for(var i = 0; i < gameObj.graveyard.length; i++){
          gameObj.rules.push(gameObj.graveyard[i]);
        }
        gameObj.graveyard = [];
      }
    }





}
