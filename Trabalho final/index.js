//Coletando um click dos elementos da página com a classe "drum" .

var minhaBateria = document.querySelectorAll(".drum").length;

for (var i = 0; i < minhaBateria; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//Adicionando um ouvinte de evento de tecla ao HTML quando uma tecla for pressionada o som sera acionado.

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "J":
        case "j":
            var leftCrash = new Audio("sounds/leftCrash.mp3");
            leftCrash.play();
            break;
        case "K":
        case "k":
            var tom1 = new Audio("sounds/tom1.mp3");
            tom1.play();
            break;
        case "L":
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "G":
        case "g":
            var kickbass = new Audio("sounds/kickbass.mp3");
            kickbass.play();
            break;
        case "A":
        case "a":
            var tom3 = new Audio("sounds/tom3.mp3");
            tom3.play();
            break;
        case "S":
        case "s":
            var tom2 = new Audio("sounds/tom2.mp3");
            tom2.play();
            break;
        case "D":
        case "d":
            var rightCrash = new Audio("sounds/rightCrash.mp3");
            rightCrash.play();
            break; 
    }
}
