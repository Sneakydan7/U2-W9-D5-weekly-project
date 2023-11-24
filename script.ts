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
FirstUser.azzeraChiamate();
console.log(FirstUser.numberChiamate);
console.log(FirstUser.getNumeroChiamate());

// ESERCIZIO FINITO //

// EXTRA //

let phoneBtn: any = document.getElementById("phone-btn");

phoneBtn.addEventListener("click", function () {
  let home: any = document.getElementById("homepage");
  home.classList.add("d-none");
  let phoneScrn: any = document.getElementById("phone-page");
  phoneScrn.classList.remove("d-none");
});

let key: any = document.querySelectorAll(".num");
console.log(key);

for (let i = 0; i < key.length; i++) {
  key[i].addEventListener(
    "click",

    function () {
      let numBox: any = document.getElementById(
        "telNumber"
      ) as HTMLInputElement;

      numBox.value += key[i].innerText;
    }
  );
}

let callBtn: any = document.getElementById("call");

callBtn.addEventListener("click", function () {
  let numBox: any = document.getElementById("telNumber");

  if (numBox.value === "404") {
    alert(`Hai un credito residuo di ${SecondUser.number404()} $`);
    numBox.value = "";
  } else if (numBox.value === "3313833534") {
    SecondUser.minutiDurata(2);
    alert(`Stai chiamando Daniele Cagnoni...`);
    alert(`Chiamata terminata : Durata 2 minuti`);
    numBox.value = "";
  } else if (numBox.value === "11925") {
    SecondUser.unaRicarica(25);
    alert(`hai ricaricato il credito di 25 $`);
    numBox.value = "";
  } else if (numBox.value === "11950") {
    SecondUser.unaRicarica(50);
    alert(`hai ricaricato il credito di 25 $`);
    numBox.value = "";
  } else if (numBox.value === "111") {
    alert(`${SecondUser.getNumeroChiamate()}`);
    numBox.value = "";
  } else if (numBox.value === "000") {
    SecondUser.azzeraChiamate();
    alert(`Chiamate Cancellate`);
    numBox.value = "";
  }
});
