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
