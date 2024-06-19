var gamePattern = [];
var buttons = ["red", "blue", "green", "yellow"] ;


$(document).on("keypress", function(){
    // alert("key board pressed");
    $("h1").text("Level 0");
     playGame() ;
});


function playGame(){
    var randButton = buttons[rand()] ;
    console.log(randButton);
    animate(randButton);
    gamePattern.push(randButton);
}


function rand(){
    return Math.floor(Math.random() * 4 );
}

function animate(color){
    var sound = new Audio("./sounds/"+color+".mp3");
    sound.play();

    // the below is the code for animating using fadein fadeout 

    /*
    setTimeout(function(){
        var button = $("."+color);
        button.fadeOut(100, function(){
            button.fadeIn(100);
        }) ;
    }, 100);

    */



    // animating using opacity

    var button = $("."+color);
    button.css("opacity", "0.2");

    setTimeout(function(){
        button.css("opacity",  "1");
    }, 90);
}


function reset(){
    $(body).css("background-color", "rgb(243, 34, 34)");
    setTimeout(function(){
        $(body).css("background-color", "")
    })
}