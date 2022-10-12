let palavras = ["GATO","CACHORRO","UVA","MORANGO"];
let palavraSecreta = "";
const inputTexto = document.querySelector(".input-text");

let letras = [];
let erros = 7;
let quantidadeLetrasRestantes;
let fimDeJogo = false;

function escolherPalavraSecreta() {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra.toUpperCase();
    console.log(palavraSecreta);
    quantidadeLetrasRestantes = palavraSecreta.length;
    return palavra
}

function verificarTecla(tecla) {
    if (tecla.length > 1) return false;
    let key = tecla.charCodeAt(0);

    if (key >= 65 && key <= 90) {
        return true;
    }
    return false;
}

function adicionarLetraIncorreta() {
    erros -= 1
    console.log(erros);
}

function letraNaoRapetida(letra) {
    return !letras.includes(letra);
}


function iniciarJogo() {
    document.getElementById("div-aparece-forca").style.display = ""
    document.getElementById("div-desaparece").style.display = "none"
    document.getElementById("div-aparece").style.display = ""
    console.log(palavras)
    escolherPalavraSecreta();

    desenharCanvas();
    desenharLinhas();

    document.onkeydown = (e) => {

        let letra = e.key.toUpperCase();

        if (verificarTecla(letra) && letraNaoRapetida(letra) && !fimDeJogo) {
            if (erros == 1) { derrota() }
            if (palavraSecreta.includes(letra)) {
                for (let i = 0; i < palavraSecreta.length; i++) {
                    if (palavraSecreta[i] === letra) {
                        quantidadeLetrasRestantes--;
                        escreverLetraCorreta(i)
                    }
                } if (quantidadeLetrasRestantes == 0) {
                    setTimeout(function () { (ganhouJogo()); }, 100);
                    fimDeJogo = true;
                }
            }
            else {
                adicionarLetraIncorreta(letra);
                escreverLetraIncorreta(letra, erros);
                switch (erros) {
                    case 6:
                        desenhaCabeca();
                        break;
                    case 5:
                        desenhaCorpo();
                        break;
                    case 4:
                        desenhaBracoDireito();
                        break;
                    case 3:
                        desenhaBracoEsquerdo();
                        break;
                    case 2:
                        desenhaPernaDireita();
                        break;
                    case 1:
                        desenhaPernaEsquerda();
                        break;
                    case 0:
                        desenhaSangue();
                        break;
                }
            }
            letras.push(letra);
        }
    }
}


function novoJogo() {
    document.location.reload()
}

function derrota() {
    if (fimDeJogo) {
        return
    }
    setTimeout(function () { (perdeuJogo()); }, 100);
    fimDeJogo = true;
}

function adicionaPalavra() {
    document.getElementById("div-desaparece").style.display = "none"
    document.getElementById("div-novaPalavra").style.display = ""
}

function salvarPalavra() {
    if (inputTexto.value != "") {
        if (palavras.includes(inputTexto.value)) {
            alert("Essa palavra é repetida")
        } else {
            palavras.push(inputTexto.value)
            inputTexto.value = '';
        }
    } else { alert("Digite uma palavra !!") }
}