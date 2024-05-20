const montaCard = (entrada) => {
    const card = document.createElement('article');
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
    divImagem.style.gridArea = 'a1';
    divImagem.style.display = 'flex';
    divImagem.style.justifyContent = 'center';
    divImagem.style.alignItems = 'center';

    const imagem = document.createElement('img');
    imagem.src = entrada.imagem;
    imagem.alt = `Foto de ${entrada.nome}`;
    imagem.style.width = '7rem';
    imagem.style.height = '7rem';
    imagem.style.borderRadius = '50%';
    imagem.style.objectFit = 'cover';
    imagem.style.objectPosition = '20% 20%';

    const pPosicao = document.createElement('p');
    pPosicao.className = 'posicao';
    pPosicao.innerHTML = `Posição: ${entrada.posicao}`;
    pPosicao.style.gridArea = 'a2';
    pPosicao.style.display = 'flex';
    pPosicao.style.justifyContent = 'center';
    pPosicao.style.alignItems = 'center';
    pPosicao.style.textTransform = 'uppercase';
    pPosicao.style.fontWeight = 'bold';

    const pNome = document.createElement('p');
    pNome.className = 'nome';
    pNome.innerHTML = `Nome: ${entrada.nome}`;
    pNome.style.gridArea = 'a3';
    pNome.style.display = 'flex';
    pNome.style.justifyContent = 'center';
    pNome.style.alignItems = 'center';
    pNome.style.textTransform = 'uppercase';
    pNome.style.fontWeight = 'bold';

    const pDescri = document.createElement('p');
    pDescri.className = 'descri';
    pDescri.innerHTML = entrada.descricao;
    pDescri.style.gridArea = 'a4';
   
    const pNascimento = document.createElement('p');
    pNascimento.className = 'nascimento';
    pNascimento.innerHTML = `${entrada.nascimento} | elenco: ${entrada.elencoPelaURL} | altura: ${entrada.alturaPelaURL}`;
    pNascimento.style.gridArea = 'a5';

    card.appendChild(divImagem);
    divImagem.appendChild(imagem);
    card.appendChild(pPosicao);
    card.appendChild(pNome);
    card.appendChild(pDescri);
    card.appendChild(pNascimento);

    return card;
}


const achaCookie = ( chave ) => {
    const arrayCookies = document.cookie.split("; ");
    const procurado = arrayCookies.find(
        ( e ) => e.startsWith(`${chave}=`)
    )
    return procurado?.split('=')[1];
}

let obj = {}
// usando cookies
/*const arrayCookies = document.cookie.split("; ");

for (const par of arrayCookies){
    const partes = par.split('=');
    obj[partes[0]] = partes[1];
}*/

// localStorage item por item
/*let chave;
for (let i = 0; i < localStorage.length; i++){
    chave = localStorage.key(i);
    obj[chave] = localStorage.getItem(chave)
}*/

//localStorage objeto

obj = JSON.parse(localStorage.getItem('atleta'));

const parametros = new URLSearchParams(window.location.search);
obj.alturaPelaURL = parametros.get('altura');
obj.elencoPelaURL = parametros.get('elenco');

document.body.appendChild(montaCard(obj));