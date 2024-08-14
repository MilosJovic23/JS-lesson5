//

var naslov = "Hello World";
document.getElementById("naslov").innerHTML = naslov;
document.getElementById("knjige").innerHTML = "Hari Poter i kamen mudrosti";
document.getElementById("knjige").innerHTML += "Hari Poter red finiksa";
//
var ime = "Milos";
var prezime = "Jovic";

var recenica = "ja se zovem " + ime + " a prezivam " + prezime;

document.getElementById("ime").innerHTML = recenica;
//
let ime1 = "Milos";
let prezime1 = "Jovic";
console.log("ja se zovem " + ime1 + " a prezivam " + prezime1);

console.log(`Pozdrav ja se zovem ${ime1} a perzivam se ${prezime1}`);
let brojevi = [1, 5, 6];
console.log(`dobitni brojevi su ${brojevi[0]}${brojevi[2]}`);

//

const imeSajta = "PolovniProgrameri.com";
console.log(imeSajta);

//Objekti

let automobil = {
	marka: "Audi",
	model: "A4",
	boja: "plava",
	dodatna_oprema: ["perbeg", "Led svetla"],
};
automobil.dodatna_oprema.push = "nesto";
console.log(
	automobil.marka,
	automobil.model,
	automobil.boja,
	automobil.dodatna_oprema[1]
);

//

let automobili = {
	audi: ["A4", "A3", "A6"],
	bmw: ["m5", "m3"],
	mercedes: ["S200", "E400", "L122"],
};
console.log(automobili.audi[2], automobili.bmw[1], automobili.mercedes[2]);

// napraviti objekat proizvodi mlecni , voce, povrce -> po 5 vrednosti svaki key

let proizvodi = {
	mlecni: ["mleko", "jogurt", "sir", "pavlaka", "kefir"],
	voce: ["jabuka", "bananana", "kruska", "pomorandza", "nar"],
	povrce: ["Beli luk", "Crni luk", "paradajz", "krompir", "lubenica"],
};

console.log(proizvodi.mlecni);

// for petlja
let korpa = ["hleb", "mleko", "jogurt", "cvarci", "med", "parizer"];

// zelimo da ispisemo brojeve od 0 do 100
// i++ povecaj i za 1
for (let i = 0; i < 100; i++) {
	console.log("trenutni broj je broj " + i);
}

// while
let godine = 0;
while (godine < 18) {
	godine++;
	console.log("Imate trenutno " + godine);
}
// napraviti korpu sa 0 prozivoda ,
// dok kgod korpa ima mamnje od 10 proizvoda dodaj proizvod
let korpa2 = [];
while (korpa2 < 10) {
	korpa2++;
	console.log(korpa2);
}
