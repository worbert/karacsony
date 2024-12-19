const gifts = {
    "telefon": 0,
    "zokni": 0,
    "gamer_gep": 0,
    "kis_teso": 0,
    "lego": 0,
    "motor": 0,
    "tv": 0,
    "auto": 0,
    "mikro": 0,
    "gitar": 0,
    "fejhallgato": 0,
    "laptop": 0
};

const updateVotes = (id) => {
    gifts[id]++;
    document.getElementById(`szavazat-${id}`).innerText = `Szavazatok: ${gifts[id]}`;
    updateWinner();
};

const updateWinner = () => {
    const maxVotes = Math.max(...Object.values(gifts));
    const winners = Object.keys(gifts).filter(key => gifts[key] === maxVotes);
    document.getElementById("eredmeny-ajandek").innerText = winners.join(", ");
};

const addGift = () => {
    const giftName = document.getElementById("new-gift-name").value.trim();
    const giftImage = document.getElementById("new-gift-image").value.trim();

    if (giftName === "" || giftImage === "") {
        alert("Kérlek, töltsd ki az ajándék nevét és a kép URL-jét.");
        return;
    }

    const giftId = giftName.toLowerCase().replace(/[^a-z0-9]/g, "_");

    if (gifts[giftId] !== undefined) {
        alert("Ez az ajándék már létezik.");
        return;
    }

    gifts[giftId] = 0;

    const card = document.createElement("div");
    card.className = "card";
    card.id = giftId;

    const img = document.createElement("img");
    img.src = giftImage;
    img.alt = giftName;

    const title = document.createElement("h2");
    title.innerText = giftName;

    const button = document.createElement("button");
    button.id = `button-${giftId}`;
    button.innerText = "Szavazok";
    button.addEventListener("click", () => updateVotes(giftId));

    const votes = document.createElement("p");
    votes.id = `szavazat-${giftId}`;
    votes.innerText = "Szavazatok: 0";

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(button);
    card.appendChild(votes);

    document.getElementById("cards").appendChild(card);

    document.getElementById("new-gift-name").value = "";
    document.getElementById("new-gift-image").value = "";
};

Object.keys(gifts).forEach(id => {
    document.getElementById(`button-${id}`).addEventListener("click", () => updateVotes(id));
});
