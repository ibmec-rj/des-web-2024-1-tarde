const container = document.createElement('div');

document.body.appendChild(container);

const montaCard = (entrada) => {
    const card = document.createElement('div');
    card.style.cssText = `
        width: 30rem;
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-areas: 
        "a1 a2"
        "a1 a3"
        "a4 a4"
        "a5 a5";
        border: solid;
        padding: .3rem;
    `

    const divImagem = document.createElement('div');
    divImagem.className = 'imagem';

    const imagem = document.createElement('img');
    imagem.src = entrada.imagem;
    imagem.alt = `Foto de ${entrada.nome}`;

    const pPosicao = document.createElement('p');
    pPosicao.className = 'posicao';
    pPosicao.innerHTML = entrada.posicao;

    const pNome = document.createElement('p');
    pNome.className = 'nome';
    pNome.innerHTML = entrada.nome;

    const pDescri = document.createElement('p');
    pDescri.className = 'descri';
    pDescri.innerHTML = entrada.descricao;

    const pNascimento = document.createElement('p');
    pNascimento.className = 'nascimento';
    pNascimento.innerHTML = entrada.nascimento;

    card.appendChild(divImagem);
    divImagem.appendChild(imagem);
    card.appendChild(pPosicao);
    card.appendChild(pNome);
    card.appendChild(pDescri);
    card.appendChild(pNascimento);

    return card;
}

dados.forEach(
    (atleta) => {
        container.appendChild(montaCard(atleta));
    }
)



