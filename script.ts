interface Smartphone {
  numberCarica: number;
  numberChiamate: number;
}

class User implements Smartphone {
  numberCarica: number = 0;
  numberChiamate: number = 0;

  constructor(_numberCarica: number, _numberChiamate: number) {
    this.numberCarica = _numberCarica;
    this.numberChiamate = _numberChiamate;
  }

  public unaRicarica(e: number): void {
    this.numberCarica = e + this.numberCarica;
  }

  public minutiDurata(durata: number): void {
    let costoAlMin: number = 0.2;
    let costoChiamata: number = durata * costoAlMin;
    this.numberCarica = this.numberCarica - costoChiamata;

    this.numberChiamate++;
  }

  public number404() {
    return this.numberCarica.toFixed(2);
  }

  public getNumeroChiamate() {
    return `${this.numberChiamate} è il numero di chiamate effettuate`;
  }

  public azzeraChiamate(): void {
    this.numberChiamate = 0;
  }
}

let FirstUser = new User(0, 0);
let SecondUser = new User(0, 0);
let ThirdUser = new User(0, 0);

FirstUser.unaRicarica(50), FirstUser.minutiDurata(3);
console.log(FirstUser.numberCarica, FirstUser.numberChiamate);
FirstUser.minutiDurata(6);

console.log(FirstUser.getNumeroChiamate());
console.log(FirstUser.number404());
