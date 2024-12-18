const ajandekok = [
    { id: "telefon", nev: "Telefon" },
    { id: "zokni", nev: "Pár zokni" },
    { id: "gamer_gep", nev: "Gamer gép" },
    { id: "kis_teso", nev: "Kis tesó" },
    { id: "lego", nev: "LEGO" },
    { id: "motor", nev: "Motor" },
    { id: "tv", nev: "TV" },
    { id: "auto", nev: "Autó" },
    { id: "mikro", nev: "Mikro" },
    { id: "gitar", nev: "Gitár" },
    { id: "fejhallgato", nev: "Fejhallgató" },
    { id: "laptop", nev: "Laptop" },
];

const osszesSzavazat = 6000;
let szavazatok = {};

function generalRandomSzavazatok() {
    const szavazatok = {};
    let maradekSzavazat = osszesSzavazat;
    ajandekok.forEach((ajandek, index) => {
        const maxSzavazat = index === ajandekok.length - 1 ? maradekSzavazat : Math.floor(Math.random() * (maradekSzavazat / 2)) + 1;
        szavazatok[ajandek.id] = maxSzavazat;
        maradekSzavazat -= maxSzavazat;
    });

    return szavazatok;
}

function frissitSzavazatokat(szavazatok) {
    ajandekok.forEach((ajandek) => {
        const szavazatElem = document.getElementById(`szavazat-${ajandek.id}`);
        if (szavazatElem) {
            szavazatElem.textContent = `Szavazatok: ${szavazatok[ajandek.id]}`;
        }
    });
}

function mutatEredmeny() {
    const nyertes = Object.entries(szavazatok).reduce((max, aktualis) => aktualis[1] > max[1] ? aktualis : max);
    const nyertesNev = ajandekok.find((ajandek) => ajandek.id === nyertes[0]).nev;
    document.getElementById("eredmeny-ajandek").textContent = nyertesNev;
    frissitSzavazatokat(szavazatok);
}

szavazatok = generalRandomSzavazatok();