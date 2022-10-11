let palavras = ["ALURA", "ORACLE", "FORCA", "HTML", "JAVASCRIPT", "LOGICA"];
let tabuleiro = document.getElementById("forca").getContext("2d");
let palavraSecreta = "";

let letras = [];
let erros = 8;

function escolherPalavraSecreta() {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra;
    console.log(palavraSecreta)
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
}

function letraNaoRapetida(letra) {
    return !letras.includes(letra);
}


function iniciarJogo() {
    document.getElementById("div-desaparece").style.display = "none"
    escolherPalavraSecreta();

    desenharCanvas();
    desenharLinhas();

    document.onkeydown = (e) => {

        let letra = e.key.toUpperCase();

        if (verificarTecla(letra) && letraNaoRapetida(letra)) {
            if (palavraSecreta.includes(letra)) {
                for (let i = 0; i < palavraSecreta.length; i++) {
                    if (palavraSecreta[i] === letra) {
                        escreverLetraCorreta(i);
                    }
                }

            }
            else {
                adicionarLetraIncorreta(letra);
                escreverLetraIncorreta(letra, erros);
            }
            letras.push(letra);

        } else {
            console.log("nao entrou");
        }
    }
}