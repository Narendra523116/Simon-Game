var gamePattern = [];
var buttons = ["red", "blue", "green", "yellow"] ;
var is_started = false;
var curr_idx = 0 ;



$(".btn").click(function(event){
    if(is_started){
        var button = event.currentTarget.classList[1];
        animate(button);
        checkAnswer(button) ;
    }
});




$(document).on("keypress", function(){
    if(!is_started){
        is_started = true;
        console.log(gamePattern.length + 1)  ;
        $("h1").text("Level "+(gamePattern.length+1));
        playGame() ;
        
    }
});





function playGame(){
    $("h1").text("Level "+(gamePattern.length+1));
    var randButton = buttons[rand()];
    console.log(randButton);
    animate(randButton);
    gamePattern.push(randButton);
}




function checkAnswer(clickedButton){
    if(gamePattern.length == 0){
        reset();
    }else{
        var checkButton = gamePattern[curr_idx];
        if(checkButton != clickedButton){
            curr_idx = 0;
            gamePattern = [];
            reset();
        }else{
            curr_idx++;
            if(gamePattern.length == curr_idx){
                setTimeout(function(){
                    curr_idx = 0;
                    playGame();
                }, 1000);
            }
        }
    }
}


function rand(){
    return Math.floor(Math.random() * 4 );
}


function animate(color){
    var sound = new Audio("./sounds/"+color+".mp3");
    sound.play();

    var button = $("."+color);
    button.css("opacity", "0.2");

    setTimeout(function(){
        button.css("opacity",  "1");
    }, 90);
}


function reset(){
    var sound = new Audio("./sounds/wrong-buzzer-6268.mp3");
    sound.play();
    $("h1").text("Game Over, Press any Key to Restart");
    $("body").css("background-color", "rgb(243, 34, 34)");
    setTimeout(function(){
        $("body").css("background-color", "rgb(5, 25, 68)");
    },90);

    is_started = false;
}