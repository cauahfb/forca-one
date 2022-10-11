let tabuleiro = document.getElementById("forca").getContext("2d");

function desenharCanvas(){
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC"
    tabuleiro.strokeStyle = "#0A3871"

    tabuleiro.fillRect(0,0,1200,800);
    tabuleiro.beginPath();
    tabuleiro.moveTo(580,400)
    tabuleiro.lineTo(950,400)
    tabuleiro.moveTo(670,400)
    tabuleiro.lineTo(670,100)
    tabuleiro.moveTo(670,100)
    tabuleiro.lineTo(900,100)
    tabuleiro.moveTo(900,100)
    tabuleiro.lineTo(900,150)
    tabuleiro.stroke();
    tabuleiro.closePath()
}

function desenharLinhas(){
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.fillStyle = "#F3F5FC"
    tabuleiro.strokeStyle = "#0A3871"

    let largura = 600/palavraSecreta.length
    for(let i = 0; i < palavraSecreta.length; i++){
        tabuleiro.moveTo(500+(largura*i),540)
        tabuleiro.lineTo(550+(largura*i),540)
    }
    tabuleiro.stroke()
    tabuleiro.closePath()
}

function escreverLetraCorreta(index){
    tabuleiro.font = "bold 52px Inter"
    tabuleiro.lineCap = "round"
    tabuleiro.fillStyle = "#0A3871"
    let largura = 600/palavraSecreta.length
    tabuleiro.fillText(palavraSecreta[index],508 + (largura * index),530)
}

function escreverLetraIncorreta(letra){
    tabuleiro.font = "bold 36px Inter"
    tabuleiro.lineCap = "round"
    tabuleiro.fillStyle = "#0A3871"
    tabuleiro.fillText(letra, 820 -(40 * erros), 620, 40)
}

function desenhaCabeca(){
    tabuleiro.beginPath();
    tabuleiro.arc(907, 175, 25, 0, 2 * Math.PI)
    tabuleiro.stroke();
    tabuleiro.closePath()
}

function desenhaCorpo(){
    tabuleiro.beginPath();
    tabuleiro.moveTo(895,200)
    tabuleiro.lineTo(895,300)
    tabuleiro.stroke();
    tabuleiro.closePath()
}

function desenhaBracoDireito(){
    tabuleiro.beginPath();
    tabuleiro.moveTo(895,210)
    tabuleiro.lineTo(910,260)
    tabuleiro.stroke();
    tabuleiro.closePath()

}

function desenhaBracoEsquerdo(){
    tabuleiro.beginPath();
    tabuleiro.moveTo(895,210)
    tabuleiro.lineTo(880,260)
    tabuleiro.stroke();
    tabuleiro.closePath()

}

function desenhaPernaDireita(){
    tabuleiro.beginPath();
    tabuleiro.moveTo(895,300)
    tabuleiro.lineTo(910,340)
    tabuleiro.stroke();
    tabuleiro.closePath()

}

function desenhaPernaEsquerda(){
    tabuleiro.beginPath();
    tabuleiro.moveTo(895,300)
    tabuleiro.lineTo(880,340)
    tabuleiro.stroke();
    tabuleiro.closePath()
}

function desenhaSangue(){
    tabuleiro.lineWidth = 3;
    tabuleiro.strokeStyle = "#FF0000"
    tabuleiro.beginPath();
    tabuleiro.moveTo(930,205)
    tabuleiro.lineTo(935,210)
    tabuleiro.stroke();
    tabuleiro.closePath()

    tabuleiro.beginPath();
    tabuleiro.moveTo(935,195)
    tabuleiro.lineTo(945,205)
    tabuleiro.stroke();
    tabuleiro.closePath()

    tabuleiro.beginPath();
    tabuleiro.moveTo(920,210)
    tabuleiro.lineTo(930,220)
    tabuleiro.stroke();
    tabuleiro.closePath()
}

function ganhouJogo(){
    tabuleiro.font = "bold 52px Inter"
    tabuleiro.lineCap = "round"
    tabuleiro.fillStyle = "#32cd32"
    tabuleiro.fillText("Você venceu !!", 200, 210)
}

function perdeuJogo(){
    tabuleiro.font = "bold 52px Inter"
    tabuleiro.lineCap = "round"
    tabuleiro.fillStyle = "#FF0000"
    tabuleiro.fillText("Você Perdeu :C", 200, 180)
    tabuleiro.font = "bold 40px Inter"
    tabuleiro.fillStyle = "#000000"
    tabuleiro.fillText("A palavra era: ", 100, 230)
    tabuleiro.fillStyle = "#FF0000"
    tabuleiro.fillText(palavraSecreta, 370, 230)

}
