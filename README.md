# Atividade de Vetores em JavaScript

## Descrição

Esta atividade foi desenvolvida utilizando JavaScript com o objetivo de praticar o uso de vetores, estruturas de repetição e lógica de programação.

## Tecnologias Utilizadas

* JavaScript
* Visual Studio Code
* Git
* GitHub

---

# Exercício 1 - Maior Idade

O programa lê a idade de 4 pessoas, armazena os valores em um vetor e informa a maior idade digitada e sua posição.

```javascript
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
```

---

# Exercício 2 - Funcionárias com Salário Acima de R$ 5.000

O programa lê o nome, gênero e salário de 5 funcionários e exibe apenas as funcionárias que possuem salário superior a R$ 5.000.

```javascript
let nomes = [];
let genero = [];
let salario = [];

for (let i = 0; i < 5; i++) {
    nomes[i] = prompt("Digite o nome: ");
    genero[i] = prompt("Digite o Gênero (M/F): ");
    salario[i] = Number(prompt("Digite o Sálario: "));
}

for (let i = 0; i < 5; i++) {

    if (genero[i] === "F" && salario[i] > 5000) {
        alert(
            "Nome: " + nomes[i] +
            "\nGênero: " + genero[i] +
            "\nSalário: R$ " + salario[i]
        );
    }
}

alert("Nome: " + nomes + "\nGênero: " + genero + "\nSalário: " + salario);
```

---

# Exercício 3 - Maior e Menor Altura

O programa permite cadastrar várias pessoas e suas respectivas alturas. Ao final, exibe a maior altura, a menor altura e a quem pertencem.

```javascript
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
```

---

## Objetivos da Atividade

* Utilizar vetores para armazenamento de dados.
* Aplicar estruturas de repetição.
* Desenvolver o raciocínio lógico.
* Manipular informações armazenadas em vetores.
* Utilizar Git e GitHub para versionamento de código.

## Autor

Khyara Liz Nabeiro dos Santos

---

<p align="center">
  <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzlhOTJnaGJsZnVjN2EydG1xcnB0YW00MXdicGV4ajNlNWEzcHM0ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xIIrNIuGZrrOSesXZW/giphy.gif" alt="Programador cansado" width="400">
</p>