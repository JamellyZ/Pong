function main(){
    desenha()
}

function desenha(){
        var canvas = document.getElementById("mycanvas")
        var ctx = canvas.getContext("2d")
        var teclas = {}
    var bola = {
        x: canvas.width / 2 - 15,
        y: canvas.height/ 2 - 15,
        altura: 30,
        largura: 30,
        dirx: -1,
        diry: 1,
        mod: 0,
        speed: 50
    }

    var barra_esquerda = {
        x: 10,
        y: canvas.height / 2 - 60,
        altura: 120,
        largura: 30,
        score: 0,
        speed: 15
    }
    var barra_direita = {
        x: 560,
        y: canvas.height / 2 - 60,
        altura: 120,
        largura: 30,
        score: 0,
        speed: 15
    }
        ctx.fillStyle = "white"
        ctx.fillRect(barra_esquerda.x, barra_esquerda.y, barra_esquerda.largura, barra_esquerda.altura)
        ctx.fillRect(barra_direita.x, barra_direita.y, barra_direita.largura, barra_direita.altura)
        ctx.fillRect(bola.x, bola.y, bola.largura, bola.altura)
    }

function oi(){

}