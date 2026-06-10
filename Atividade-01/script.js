let idades = [];
let MaiorIdade;
let posicao = 0;

for (let i = 0; i < 4; i++) {
    idades[i] = Number(prompt("Digite sua idade: "));

    if (i === 0) {
        MaiorIdade = idades[i];
    } else if (idades[i] > MaiorIdade) {
        MaiorIdade = idades[i];
        posicao = i;
    }
}

alert("A maior idade digitada foi: " + MaiorIdade + "\nPosição: " + posicao);