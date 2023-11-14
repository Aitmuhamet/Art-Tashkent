function nextmove() {
    let elem = document.querySelector("#box_1");

    elem.classList.remove("col-12");
    elem.classList.add("col-5");

    console.log(elem.classList);
}

setTimeout(nextmove, 1000);

let box_1 = document.querySelector("#box_1");
let box_2 = document.querySelector("#box_2");
let box_3 = document.querySelector("#box_3");
let box_4 = document.querySelector("#box_4");

let box_2Text = document.querySelector("#box_addressText");

let box_cardCentre = document.querySelector(".box_cardCentre");
let box_card_logo = document.querySelector(".box_card_logo");
let box_card_logo__img = document.querySelector(".box_card_logo > img");

box_cardCentre.onclick = function () {
    console.log("Logo!");
}

box_1.onclick = function () {
    console.log("Первый блок!");
    box_1.classList.remove("col-5", "col-2");
    box_1.classList.add("col-5");

    box_2.classList.remove("col-3", "col-7", "col-9");
    box_2.classList.add("col-7");

    box_3.classList.remove("col-5", "col-9", "col-10", "col-11");
    box_3.classList.add("col-9");

    box_2Text.style.display = 'none';
    document.getElementById("box_address__alignment").style.WebkitJustifyContent = "end"; // Код для Safari 6.1+
    document.getElementById("box_address__alignment").style.justifyContent = "end";

    box_cardCentre.style.flexDireciton = 'row';
    box_cardCentre.style.justifyContent = 'center';
    box_cardCentre.style.WebkitJustifyContent = 'center';
    box_cardCentre.style = 'padding: 20px 0';
    box_card_logo.style = 'width: inherit';
    box_card_logo__img.style = 'width: inherit';

    document.querySelector(".box_cardCentre > .social").style = "display: none";
    document.getElementById("box_card_logo__id").classList.remove("mx-0");

    document.getElementById("box_cardCentre__id").classList.remove("justify-content-center", "justify-content-between");
    document.getElementById("box_cardCentre__id").classList.add("justify-content-center");

    document.querySelector(".box_card1__background").style = "background: white";
    document.querySelector(".box_card2__background").style = "background: #EBF2E8";
    document.querySelector(".box_card3__background").style = "background: #BDCFB5";
    document.querySelector(".box_card4__background").style = "background: #EBF2E8";
}
box_2.onclick = function () {
    console.log("Второй блок");
    box_1.classList.remove("col-5", "col-2");
    box_1.classList.add("col-2");

    box_2.classList.remove("col-3", "col-7", "col-9");
    box_2.classList.add("col-9");

    box_3.classList.remove("col-5", "col-9", "col-10", "col-11");
    box_3.classList.add("col-11");

    box_2Text.style.display = 'flex';
    document.getElementById("box_address__alignment").style.WebkitJustifyContent = "space-between"; // Код для Safari 6.1+
    document.getElementById("box_address__alignment").style.justifyContent = "space-between";

    box_cardCentre.style.flexDirection = 'column';
    box_cardCentre.style.justifyContent = 'space-between';
    box_cardCentre.style.WebkitJustifyContent = 'space-between';
    
    document.getElementById("box_cardCentre__id").classList.remove("justify-content-center", "justify-content-between");
    document.getElementById("box_cardCentre__id").classList.add("justify-content-between");


    document.querySelector(".box_cardCentre > .social").style = "display: block";
    document.getElementById("box_card_logo__id").classList.add("mx-0");
    box_cardCentre.style = 'padding: 20px 0';
    box_card_logo.style = 'width: 70%';
    box_card_logo__img.style = 'width: 100%';

    document.querySelector(".box_card1__background").style = "background: #E8E3D1";
    document.querySelector(".box_card2__background").style = "background: white";
    document.querySelector(".box_card3__background").style = "background: #BDCFB5";
    document.querySelector(".box_card4__background").style = "background: #EBF2E8";
}
box_3.onclick = function () {
    console.log("Третий блок");
    box_1.classList.remove("col-5", "col-2");
    box_1.classList.add("col-2");

    box_2.classList.remove("col-3", "col-7", "col-9");
    box_2.classList.add("col-3");

    box_3.classList.remove("col-5", "col-9", "col-10", "col-11");
    box_3.classList.add("col-10");

    box_2Text.style.display = 'none';
    document.getElementById("box_address__alignment").style.WebkitJustifyContent = "end"; // Код для Safari 6.1+
    document.getElementById("box_address__alignment").style.justifyContent = "end";

    document.getElementById("box_cardCentre__id").classList.remove("justify-content-center", "justify-content-between");
    document.getElementById("box_cardCentre__id").classList.add("justify-content-between");

    document.querySelector(".box_cardCentre > .social").style = "display: block";
    document.getElementById("box_card_logo__id").classList.add("mx-0");

    box_cardCentre.style.flexDireciton = 'column';
    box_cardCentre.style.justifyContent = 'space-between';
    box_cardCentre.style.WebkitJustifyContent = 'space-between';
    box_cardCentre.style = 'padding: 20px 0';
    box_card_logo.style = 'width: 70%';
    box_card_logo__img.style = 'width: 100%';

    document.querySelector(".box_card1__background").style = "background: #E8E3D1";
    document.querySelector(".box_card2__background").style = "background: #EBF2E8";
    document.querySelector(".box_card3__background").style = "background: white";
    document.querySelector(".box_card4__background").style = "background: #EBF2E8";
}
box_4.onclick = function () {
    console.log("Четвертый блок");
    box_1.classList.remove("col-5", "col-2");
    box_1.classList.add("col-2");

    box_2.classList.remove("col-3", "col-7", "col-9");
    box_2.classList.add("col-3");

    box_3.classList.remove("col-5", "col-9", "col-10", "col-11");
    box_3.classList.add("col-5");

    box_2Text.style.display = 'none';
    document.getElementById("box_address__alignment").style.WebkitJustifyContent = "end"; // Код для Safari 6.1+
    document.getElementById("box_address__alignment").style.justifyContent = "end";
    
    document.getElementById("box_cardCentre__id").classList.add("justify-content-between");

    document.querySelector(".box_cardCentre > .social").style = "display: block";
    document.getElementById("box_card_logo__id").classList.add("mx-0");

    box_cardCentre.style.flexDireciton = 'column';
    box_cardCentre.style.justifyContent = 'space-between';
    box_cardCentre.style.WebkitJustifyContent = 'space-between';
    box_cardCentre.style = 'padding: 20px 0';
    box_card_logo.style = 'width: 70%';
    box_card_logo__img.style = 'width: 100%';

    document.querySelector(".box_card1__background").style = "background: #E8E3D1";
    document.querySelector(".box_card2__background").style = "background: #EBF2E8";
    document.querySelector(".box_card3__background").style = "background: #BDCFB5";
    document.querySelector(".box_card4__background").style = "background: white";
}