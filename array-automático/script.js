console.log("Usando o forEach", "--------------------------------------------------------");

dados.forEach(
    (elemento) => {
        console.log(elemento.nome);
    }
);

console.log("Usando o while", "--------------------------------------------------------");

let indice = 0;

while (indice < dados.length){
    console.log("A posicição de", dados[indice].nome, "é", dados[indice].posicao);
    indice++;
}

console.log("Usando o for", "--------------------------------------------------------");

for (let i = 0; i < dados.length ; i++){
    console.log(`A altura de ${dados[i].nome} é ${dados[i].altura}`);
}

console.log("Usando for...of", "--------------------------------------------------------");

for (const atleta of dados){
    console.log(`O nome completo de ${atleta.nome} é ${atleta.nome_completo}`);
}

//const atleta = dados[15];

const container = document.getElementById("conteudo");

dados.forEach(
    (atleta) => {
        container.innerHTML += `
            <div class='card'>
                <div class='imagem'>
                    <img src=${atleta.imagem} alt='foto de ${atleta.nome}'>
                </div>
                <p class='posicao'>${atleta.posicao}</p>
                <p class='nome'>${atleta.nome}</p>
                <p class='descri'>${atleta.descricao}</p>
                <p class='nascimento'>${atleta.nascimento}</p>
            </div>
        `;
    }
)



