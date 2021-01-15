let cards = ["ciri.png", "geralt.png", "jaskier.png", "jaskier.png", "iorweth.png", "triss.png", "geralt.png", "yen.png", "ciri.png", "triss.png", "yen.png", "iorweth.png"];

let no0 = document.getElementById('no0');
let no1 = document.getElementById('no1');
let no2 = document.getElementById('no2');
let no3 = document.getElementById('no3');

let no4 = document.getElementById('no4');
let no5 = document.getElementById('no5');
let no6 = document.getElementById('no6');
let no7 = document.getElementById('no7');

let no8 = document.getElementById('no8');
let no9 = document.getElementById('no9');
let no10 = document.getElementById('no10');
let no11 = document.getElementById('no11');

no0.addEventListener("click", function() { RevealCard(0) });
no1.addEventListener("click", function() { RevealCard(1) });
no2.addEventListener("click", function() { RevealCard(2) });
no3.addEventListener("click", function() { RevealCard(3) });

no4.addEventListener("click", function() { RevealCard(4) });
no5.addEventListener("click", function() { RevealCard(5) });
no6.addEventListener("click", function() { RevealCard(6) });
no7.addEventListener("click", function() { RevealCard(7) });

no8.addEventListener("click", function() { RevealCard(8) });
no9.addEventListener("click", function() { RevealCard(9) });
no10.addEventListener("click", function() { RevealCard(10) });
no11.addEventListener("click", function() { RevealCard(11) });

let firstVisible = false;
let turnCounter = 0;
let visibleNr;
let block = false;

function RevealCard(nr) {
    let opacityValue = $('no' + nr).css('opacity');
    if (opacityValue !== 0 && block === false) {
        block = true;
        let picture = "url(img/" + cards[nr] + ")";
        $('#no' + nr).css('background-image', picture);
        $('#no' + nr).addClass('cardA');

        if (firstVisible == false) {
            firstVisible = true;
            visibleNr = nr;
            block = false;
        } else {
            if (cards[visibleNr] === cards[nr]) {
                setTimeout(function() {
                    hide2Cards(nr, visibleNr)
                }, 550);
            } else {
                setTimeout(function() {
                    restore2Cards(nr, visibleNr)
                }, 550);
            }

            turnCounter++;
            $('.score').html('Turn Counter: ' + turnCounter);
            firstVisible = false;
        };
    }

}

function hide2Cards(card1, card2) {
    $('#no' + card1).css('opacity', '0');
    $('#no' + card2).css('opacity', '0');

    block = false;
}

function restore2Cards(card1, card2) {
    $('#no' + card1).css('background-image', 'url(img/karta.png');
    $('#no' + card1).removeClass('cardA');
    $('#no' + card1).addClass('card');

    $('#no' + card2).css('background-image', 'url(img/karta.png');
    $('#no' + card2).removeClass('cardA');
    $('#no' + card2).addClass('card');

    block = false;

};