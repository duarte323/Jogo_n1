let palavraChave = "panqueca";

let ganhou = false;

while (!ganhou) {
    let adivinhar = prompt("Adivinha a comida que estou a pensar!");

    if (adivinhar === palavraChave) {
        alert("Certo!");
        ganhou = true;
    } else {
        alert("Errado! Dica: é doce e costuma ser servida ao pequeno-almoço.");
    }
}

