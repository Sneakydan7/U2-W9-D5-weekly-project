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
        return this.numberCarica;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numberChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numberChiamate = 0;
    };
    return User;
}());
