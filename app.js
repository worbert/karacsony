const szavazatok = {
    telefon: 0,
    zokni: 0,
    gamer_gep: 0,
    kis_teso: 0,
    lego: 0,
    motor: 0,
    tv: 0,
    auto: 0,
    mikro: 0,
    gitar: 0,
    fejhallgato: 0,
    laptop: 0
};

function randomSzavazatok() {
    const ajandekok = Object.keys(szavazatok);

    for (let i = 0; i < 6000; i++) {
        const randomAjandek = ajandekok[Math.floor(Math.random() * ajandekok.length)];
        szavazatok[randomAjandek]++;
    }

    console.log("Szavazatok generálva:", szavazatok);
}

function megjelenitEredmeny() {
    let maxSzavazat = 0;
    let nyertes = "";

    for (let ajandek in szavazatok) {
        if (szavazatok[ajandek] > maxSzavazat) {
            maxSzavazat = szavazatok[ajandek];
            nyertes = ajandek;
        }
    }
    const eredmenyElem = document.getElementById("eredmeny-ajandek");
    eredmenyElem.textContent = ajandekNevek(nyertes);
}

function ajandekNevek(azonosito) {
    const nevek = {
        telefon: "Telefon",
        zokni: "Pár zokni",
        gamer_gep: "Gamer gép",
        kis_teso: "Kis tesó",
        lego: "LEGO",
        motor: "Motor",
        tv: "TV",
        auto: "Autó",
        mikro: "Mikro",
        gitar: "Gitár",
        fejhallgato: "Fejhallgató",
        laptop: "Laptop"
    };
    return nevek[azonosito];
}

function mutatEredmeny() {
    megjelenitEredmeny();
}

window.onload = randomSzavazatok;