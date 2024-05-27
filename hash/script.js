const alvo = 'aa09f32ee454e01dc9322ba0b1d13f8101fac45a68e81c8188383578485b9661a99a7e5643051e01934253f364773de52a1be7dfbdeab93afa651217aae5b71b';
const sal = 'uma frase';

document.getElementById('btn_login').onclick = () => {
    const entrada = document.getElementById('senha').value; 
    const mensagem = document.getElementById('mensagem');

    if (hex_sha512(entrada + sal) === alvo){
        mensagem.innerHTML = '<h1>Senha correta</h1>';
        sessionStorage.setItem('logado', 1);
        window.location.href = 'outra.html';
    } else {
        mensagem.innerHTML = '<h1 style="color: red">Senha incorreta!!!</h1>';
    }
}