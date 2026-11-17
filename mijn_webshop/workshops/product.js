const producten = {
    ultrakill: {
        naam: "Ultrakill Gianni",
        prijs: "€19.99",
        afbeelding: "workshop 3/fotos/foto's 2/ultrakill gianni.png",
        beschrijving: "De beste Gianni's van de markt! Een opvallende keuze voor fans van Ultrakill."
    },
    angry: {
        naam: "Angry Gianni",
        prijs: "€14.99",
        afbeelding: "workshop 3/fotos/foto's 2/angry gianni.png",
        beschrijving: "Deze boze Gianni is boos natuurlijk niet op jou!. Binnenkort niet meer beschikbaar vanwege de hoge vraag."
    },
    "maid-dress": {
        naam: "Maid dress Gianni",
        prijs: "€24.99",
        afbeelding: "workshop 3/fotos/foto's 2/maid dress gianni.png",
        beschrijving: "Een bijzondere Gianni in een maid dress, voor wie iets unieks zoekt."
    },
    sleepy: {
        naam: "Sleepy Gianni",
        prijs: "€9.99",
        afbeelding: "workshop 3/fotos/foto's 2/sleepy gianni.png",
        beschrijving: "Deze slaperige Gianni is een rustige en schattige toevoeging aan je verzameling."
    },
    cookie: {
        naam: "Cookie Gianni",
        prijs: "€12.99",
        afbeelding: "workshop 3/fotos/cookie gianni.png",
        beschrijving: "Deze Cookie Gianni is zoet, vrolijk en perfect voor een speelse toevoeging aan je collectie."
    },
    "jar-gianni": {
        naam: "Jar gianni",
        prijs: "€17.49",
        afbeelding: "workshop 3/fotos/jar janni.png",
        beschrijving: "Deze Jar gianni valt op met een unieke, potachtige uitstraling en een verrassend karakter."
    }
};

const product = producten[new URLSearchParams(window.location.search).get("product")];

if (product) {
    document.title = `${product.naam} | GianniSpotKabloey`;
    document.getElementById("product-afbeelding").src = product.afbeelding;
    document.getElementById("product-afbeelding").alt = product.naam;
    document.getElementById("product-naam").textContent = product.naam;
    document.getElementById("product-prijs").textContent = product.prijs;
    document.getElementById("product-beschrijving").textContent = product.beschrijving;
    document.getElementById("product-detail").hidden = false;
} else {
    document.getElementById("product-fout").hidden = false;
}
