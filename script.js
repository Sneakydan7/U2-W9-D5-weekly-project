var User = /** @class */ (function () {
    function User(_numberCarica, _numberChiamate) {
        this.numberCarica = 0;
        this.numberChiamate = 0;
        this.numberCarica = _numberCarica;
        this.numberChiamate = _numberChiamate;
    }
    User.prototype.unaRicarica = function (e) {
        this.numberCarica = e + this.numberCarica;
    };
    User.prototype.minutiDurata = function (durata) {
        var costoAlMin = 0.2;
        var costoChiamata = durata * costoAlMin;
        this.numberCarica = this.numberCarica - costoChiamata;
        this.numberChiamate++;
    };
    User.prototype.number404 = function () {
        return this.numberCarica.toFixed(2);
    };
    User.prototype.getNumeroChiamate = function () {
        return "".concat(this.numberChiamate, " \u00E8 il numero di chiamate effettuate");
    };
    User.prototype.azzeraChiamate = function () {
        this.numberChiamate = 0;
    };
    return User;
}());
var FirstUser = new User(0, 0);
var SecondUser = new User(0, 0);
var ThirdUser = new User(0, 0);
FirstUser.unaRicarica(50), FirstUser.minutiDurata(3);
console.log(FirstUser.numberCarica, FirstUser.numberChiamate);
FirstUser.minutiDurata(6);
console.log(FirstUser.getNumeroChiamate());
console.log(FirstUser.number404());
FirstUser.azzeraChiamate();
console.log(FirstUser.numberChiamate);
console.log(FirstUser.getNumeroChiamate());
// ESERCIZIO FINITO //
// EXTRA //
var phoneBtn = document.getElementById("phone-btn");
phoneBtn.addEventListener("click", function () {
    var home = document.getElementById("homepage");
    home.classList.add("d-none");
    var phoneScrn = document.getElementById("phone-page");
    phoneScrn.classList.remove("d-none");
});
var key = document.querySelectorAll(".num");
var _loop_1 = function (i) {
    key[i].addEventListener("click", function () {
        var numBox = document.getElementById("telNumber");
        numBox.value += key[i].innerText;
    });
};
for (var i = 0; i < key.length; i++) {
    _loop_1(i);
}
var callBtn = document.getElementById("call");
callBtn.addEventListener("click", function () {
    var numBox = document.getElementById("telNumber");
    if (numBox.value === "404") {
        alert("Hai un credito residuo di ".concat(SecondUser.number404(), " $"));
        numBox.value = "";
    }
    else if (numBox.value === "3313833534") {
        SecondUser.minutiDurata(2);
        alert("Stai chiamando Daniele Cagnoni...");
        alert("Chiamata terminata : Durata 2 minuti");
        numBox.value = "";
    }
    else if (numBox.value === "11925") {
        SecondUser.unaRicarica(25);
        alert("hai ricaricato il credito di 25 $");
        numBox.value = "";
    }
    else if (numBox.value === "11950") {
        SecondUser.unaRicarica(50);
        alert("hai ricaricato il credito di 25 $");
        numBox.value = "";
    }
    else if (numBox.value === "111") {
        alert("".concat(SecondUser.getNumeroChiamate()));
        numBox.value = "";
    }
    else if (numBox.value === "000") {
        SecondUser.azzeraChiamate();
        alert("Chiamate Cancellate");
        numBox.value = "";
    }
});
