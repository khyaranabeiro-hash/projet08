let nomes = [];
let genero = [];
let salario = [];

for (let i = 0; i < 5; i++) {
    nomes[i] = prompt("Digite o nome: ");
    genero[i] = prompt("Digite o Gênero (M/F): ");
    salario[i] = Number(prompt("Digite o Sálario: "));

} for (let i = 0; i < 5; i++) {

    if (genero[i] === "F" && salarios[i] > 5000) {
        alert(
            "Nome: " + nomes[i] +
            "\nGênero: " + genero[i] +
            "\nSalário: R$ " + salarios[i]
        );
    }
}

alert("Nome: " + nomes + "\nGênero: " + genero + "\nSalário: " + salario);