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

const szavazatok = {};

// Kezdeti szavazatok nullázása
ajandekok.forEach((ajandek) => {
    szavazatok[ajandek.id] = 0;
});

// Szavazat hozzáadása
function szavaz(ajandekId) {
    szavazatok[ajandekId] += 1;
    const szavazatElem = document.getElementById(`szavazat-${ajandekId}`);
    if (szavazatElem) {
        szavazatElem.textContent = `Szavazatok: ${szavazatok[ajandekId]}`;
    }
    frissitEredmeny();
}

// Nyertes ajándék megjelenítése
function frissitEredmeny() {
    const nyertes = Object.entries(szavazatok).reduce((max, aktualis) => aktualis[1] > max[1] ? aktualis : max);
    const nyertesNev = ajandekok.find((ajandek) => ajandek.id === nyertes[0]).nev;

    document.getElementById("eredmeny-ajandek").textContent = nyertesNev;
}

// Események hozzáadása a szavazáshoz
ajandekok.forEach((ajandek) => {
    const buttonElem = document.getElementById(`button-${ajandek.id}`);
    if (buttonElem) {
        buttonElem.addEventListener("click", () => szavaz(ajandek.id));
    }
});
