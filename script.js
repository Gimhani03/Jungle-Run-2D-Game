var runsound = new Audio("run.mp3");
runsound.loop = true;
runsound.volume = 0.5;

var jumpsound = new Audio("jump.mp3");
jumpsound.volume = 0.7;

var deadsound = new Audio("dead.mp3");
deadsound.volume = 0.8;

var groundLevel;
var jumpHeight;

function initializeResponsiveValues() {
    var viewportHeight = window.innerHeight;
    groundLevel = Math.floor(viewportHeight * 0.45);
    jumpHeight = Math.floor(viewportHeight * 0.075);
}

window.addEventListener('load', initializeResponsiveValues);
window.addEventListener('resize', initializeResponsiveValues);




function key(event) {

    var keycode = event.which;

    if (keycode == 13) {
        if (runWorker == 0) {
            if (!groundLevel) {
                initializeResponsiveValues();
                initializeBoyPosition();
            }
            
            runWorker = setInterval(run, 100);
            runsound.play();
            backgroundWorker = setInterval(background, 100);
            scoreWorker = setInterval(score, 100);
            boxWorker = setInterval(moveBoxes, 100);
        }
    }

    if (keycode == 32) {
        if (jumpWorker == 0 && runWorker > 0) {
            clearInterval(runWorker);
            runsound.pause();
            jumpWorker = setInterval(jump, 100);
            jumpsound.play();
        }

    }

}

var runImage = 1;
var runWorker = 0;


function run() {
    runImage = runImage + 1;


    if (runImage == 9) {
        runImage = 1;
    }

    document.getElementById("boy").src = "Run (" + runImage + ").png";

}

var x = 0;
var backgroundWorker = 0;

function background() {
    var viewportWidth = window.innerWidth;
    var moveSpeed = Math.floor(viewportWidth * 0.025);
    x = x - moveSpeed;
    document.getElementById("main").style.backgroundPositionX = x + "px";
}


var s = 0;
var scoreWorker = 0;

function score() {
    s = s + 10;

    document.getElementById("score").innerHTML = s;


}


var jumpWorker = 0;
var jumpImage = 1;

var boyMarginTop;
var boyMarginLeft = 0;
var originalBoyLeft;

function initializeBoyPosition() {
    if (!groundLevel) initializeResponsiveValues();
    boyMarginTop = groundLevel;
    boyMarginLeft = 0;
    originalBoyLeft = 0;
    document.getElementById("boy").style.marginTop = boyMarginTop + "px";
    document.getElementById("boy").style.marginLeft = boyMarginLeft + "px";
}

function jump() {

    if (jumpImage <= 5) {
        boyMarginTop = boyMarginTop - jumpHeight;
        boyMarginLeft = boyMarginLeft + 15;
        document.getElementById("boy").style.marginTop = boyMarginTop + "px";
        document.getElementById("boy").style.marginLeft = boyMarginLeft + "px";
    }

    if (jumpImage >= 6) {
        boyMarginTop = boyMarginTop + (jumpHeight * 1.3);
        boyMarginLeft = boyMarginLeft + 15;
        document.getElementById("boy").style.marginTop = boyMarginTop + "px";
        document.getElementById("boy").style.marginLeft = boyMarginLeft + "px";
    }

    jumpImage = jumpImage + 1;

    if (jumpImage == 11) {
        jumpImage = 1;
        boyMarginTop = groundLevel;
        boyMarginLeft = originalBoyLeft;
        document.getElementById("boy").style.marginTop = boyMarginTop + "px";
        document.getElementById("boy").style.marginLeft = boyMarginLeft + "px";
        
        clearInterval(jumpWorker);
        jumpWorker = 0;
        
        if (runWorker != -1) {
            runWorker = setInterval(run, 100);
            runsound.play();
        }

        if (backgroundWorker == 0) {
            backgroundWorker = setInterval(background, 100);
        }

        if (scoreWorker == 0) {
            scoreWorker = setInterval(score, 100);
        }

        if (boxWorker == 0) {
            boxWorker = setInterval(moveBoxes, 100);
        }

    }

    document.getElementById("boy").src = "Jump (" + jumpImage + ").png";

}

var boxMarginLeft = 100;

function boxes() {
    var viewportWidth = window.innerWidth;
    var baseSpacing = Math.floor(viewportWidth * 0.65);
    var closeSpacing = Math.floor(viewportWidth * 0.45);
    
    boxMarginLeft = Math.floor(viewportWidth * 0.1);
    
    for (var i = 0; i < 21; i++) {
        var box = document.createElement("div");
        box.className = "box";
        box.id = "box" + i;

        if (i <= 10) {
            boxMarginLeft = boxMarginLeft + baseSpacing;
        }

        if (i >= 11) {
            boxMarginLeft = boxMarginLeft + closeSpacing;
        }
        
        box.style.marginLeft = boxMarginLeft + "px";
        document.getElementById("main").appendChild(box);
    }
}

var boxWorker = 0;

function moveBoxes() {
    var viewportWidth = window.innerWidth;
    var moveSpeed = Math.floor(viewportWidth * 0.02);
    var jumpThreshold = groundLevel - (jumpHeight * 1.2);
    
    for (var i = 0; i < 21; i++) {
        var boxm = document.getElementById("box" + i);
        
        if (boxm) {
            var newboxm = getComputedStyle(boxm).marginLeft;
            var currentbox = parseInt(newboxm) - moveSpeed;
            boxm.style.marginLeft = currentbox + "px";

            if (currentbox > -200 && currentbox < viewportWidth * 0.3) {
                var characterLeft = viewportWidth * 0.05 + boyMarginLeft;
                var characterRight = characterLeft + (viewportWidth * 0.1);
                var trunkLeft = currentbox;
                var trunkRight = currentbox + (viewportWidth * 0.04);

                var horizontalHit = (characterRight > trunkLeft + 50) && (characterLeft < trunkRight - 50);
                var characterTooLow = boyMarginTop >= jumpThreshold;

                if (horizontalHit && characterTooLow) {
                    console.log("DEATH! Char: " + Math.round(characterLeft) + "-" + Math.round(characterRight) + 
                               " Trunk: " + Math.round(trunkLeft) + "-" + Math.round(trunkRight) + 
                               " Height: " + Math.round(boyMarginTop) + "/" + Math.round(jumpThreshold));
                    
                    clearInterval(runWorker);
                    runsound.pause();
                    runWorker = -1;
                    
                    clearInterval(jumpWorker);
                    jumpsound.pause();
                    jumpWorker = -1;

                    clearInterval(scoreWorker);
                    clearInterval(backgroundWorker);
                    clearInterval(boxWorker);
                    deadWorker = setInterval(dead, 100);
                    deadsound.play();
                    break;
                }
            }
        }
    }
}

var deadWorker = 0;
var deadImage = 0;

function dead() {
    deadImage = deadImage + 1;

    if (deadImage == 11) {
        deadImage = 10;
        var deadPosition = Math.floor(window.innerHeight * 0.47);
        document.getElementById("boy").style.marginTop = deadPosition + "px";
        document.getElementById("end").style.visibility = "visible";
        document.getElementById("endscore").innerHTML = s;
    }

    document.getElementById("boy").src = "Dead (" + deadImage + ").png";
}

function reload() {
    runsound.pause();
    jumpsound.pause();
    deadsound.pause();
    
    clearInterval(runWorker);
    clearInterval(jumpWorker);
    clearInterval(scoreWorker);
    clearInterval(backgroundWorker);
    clearInterval(boxWorker);
    clearInterval(deadWorker);
    
    groundLevel = null;
    jumpHeight = null;
    boyMarginTop = null;
    
    location.reload();
}









