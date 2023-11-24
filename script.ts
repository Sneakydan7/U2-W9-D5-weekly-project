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
    return this.numberCarica;
  }

  public getNumeroChiamate() {
    return this.numberChiamate;
  }

  public azzeraChiamate(): void {
    this.numberChiamate = 0;
  }
}
