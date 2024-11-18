console.log("Házi Feladat")

function koszont(vezeteknev, keresztnev) {
    console.log(`Üdvözlünk, ${vezeteknev} ${keresztnev}! Örülünk, hogy itt vagy!`);
}

koszont("Varga", "Szabolcs");

koszont("Wéber", "István");

function szorzas(szam1, szam2) {
    if (typeof szam1 !== "number") {
        console.log(`Hibás paraméter: ${szam1}`);
        return;
    }
    if (typeof szam2 !== "number") {
        console.log(`Hibás paraméter: ${szam2}`);
        return;
    }
    return szam1 * szam2;
}

let eredmeny = szorzas(5, 10);
console.log(`Az eredmény: ${eredmeny}`);

let eredmeny2 = szorzas(5, 8);
console.log(`Az 5 és 8 szorzata: ${eredmeny2}`);

let eredmeny3 = szorzas(324, 610);
console.log(`A 324 és 610 szorzata: ${eredmeny3}`);

let helyesEredmeny = szorzas(324, 610);
console.log(`A 324 és 610 szorzata: ${helyesEredmeny}`);

let hibasEredmeny1 = szorzas("324", 610);
let hibasEredmeny2 = szorzas(324, "valami");



let szamok = [3, 6, 12, 53, 86, 43, 934, 201, 53, 87];

console.log(szamok[4]);

szamok.forEach(szam => console.log(szam));

szamok.forEach(szam => console.log(szam * 3));

szamok.forEach(szam => console.log(szam * 3 - 1));

szamok.forEach(szam => {
    if (szam % 2 !== 0) {
        console.log(szam);
    }
});