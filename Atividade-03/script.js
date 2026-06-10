let nomes = [];
let alturas = [];

let continuar = "S";
let i = 0;

while (continuar === "S") {

    nomes[i] = prompt("Digite o nome:");
    alturas[i] = Number(prompt("Digite a altura:"));

    continuar = prompt("Deseja continuar? (S/N)").toUpperCase();

    i++;
}

let maiorAltura = alturas[0];
let menorAltura = alturas[0];

let nomeMaior = nomes[0];
let nomeMenor = nomes[0];

for (let j = 1; j < i; j++) {

    if (alturas[j] > maiorAltura) {
        maiorAltura = alturas[j];
        nomeMaior = nomes[j];
    }

    if (alturas[j] < menorAltura) {
        menorAltura = alturas[j];
        nomeMenor = nomes[j];
    }
}

alert(
    "Maior altura: " + maiorAltura +
    "\nPessoa: " + nomeMaior +
    "\n\nMenor altura: " + menorAltura +
    "\nPessoa: " + nomeMenor
);