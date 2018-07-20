// VARIAVEIS CONFIGURAVEIS
var quant_likes_antes_pausa = 1; // quantos likes vai dar antes de entrar em uma pausa
var tempo_pausa = 10; // duracao da pausa em segundos
var tempo_entre_funcoes = 3.333; // tempo em segundos entre cada acao de abrir, curtir/seguir e fechar
var seguir_perfis = false;
var curtir_publicacoes = true;
var seguir_ilimitado = true;
var curtir_ilimitado = true;
var max_seguir = 15;
var max_curtidas = 300;
var curtir_explore = false;
var curtir_hastags = true;

// VARIAVEIS DE SISTEMA
var linha = 0; // linhas
var coluna = 0; // colunas
var scrolls = 0; // quantidade de scrolls
var funcao_atual = 0; // variavel pra alternar entre as funcoes abrir, curtir e fechar
var curtidas = 0;
var seguindo = 0;
var tick_timer; // timer pra alternar entre a funcao atual de abrir, curtir e fechar
var aguardar_timer; // timer de espera pra evitar ban
var esperou; // flag booleana
var data_completa_inicio = new Date(); 
var data_inicio_simplificada = data_completa_inicio.getHours() + ":" + data_completa_inicio.getMinutes() + ":" + data_completa_inicio.getSeconds();

console.log("Iniciando...");
console.log("Horario de inicio: " + data_inicio_simplificada);

if(curtir_hastags && !curtir_explore)
    iniciar();
else
    console.log("Escolha OU curtir na aba de hashtags OU na aba explore")

function abrirFoto() { 
    if(curtir_explore)
        document.getElementsByTagName("article")[0].childNodes[0].childNodes[0].childNodes[linha].childNodes[coluna].childNodes[0].click()  //EXPLORE
    if(curtir_hastags)
        document.getElementsByTagName("article")[0].childNodes[3].childNodes[0].childNodes[linha].childNodes[coluna].childNodes[0].childNodes[0].click() //HASHTAGS
}

function curtirFoto() { 
    if(document.getElementsByClassName("coreSpriteHeartOpen")[0].childNodes[0].innerText === "Curtir" && curtir_publicacoes && (curtidas < max_curtidas || curtir_ilimitado)) {
        document.getElementsByClassName("coreSpriteHeartOpen")[0].click(); 
        console.log( "Curtidas: " +  (++curtidas));
    }
}

function fecharFoto() { 
    document.getElementsByTagName("button")[document.getElementsByTagName("button").length-1].click(); 
    coluna = (coluna + 1)%3;
    if(!coluna)
        linha = (linha + 1)%10; // quantas linhas desce antes de recomecar (por causa da forma que o instagram gerencia quantos blocos div de linha de fotos vao ser contidos na page HTML [chunks de imagem])
}

function rolarPagina() {
    if(!((linha+1)%2) && !coluna) { // 2 linhas antes de rolar pra carregar mais
        scrolls++;
        window.scrollTo(0, 3500*scrolls);
    }   
}

function seguir() {
    if(document.getElementsByTagName("article")[1].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[1].innerText === "Seguir" && seguir_perfis && (seguindo < max_seguir || seguir_ilimitado)) {
        document.getElementsByTagName("article")[1].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[1].click();
        seguindo++;
        console.log("Seguindo: " + seguindo);
    }   
}

function switchFunctions() {
    switch(funcao_atual) {
        case 0: {
            rolarPagina();
            abrirFoto();
            break;
        }
        case 1: {
            curtirFoto();
            seguir();
            break;
        }
        case 2: {
            fecharFoto();
            esperou = false;
            var data_atual = new Date();
            console.log("Tempo decorrido desde o inicio do script: " +  Math.floor((data_atual.getTime() - data_completa_inicio.getTime())/60000) + " minutos");
            esperar();
            break;
        }
    }
    funcao_atual = (funcao_atual + 1)%3;
}

function esperar() {
    if (!((curtidas+1)%quant_likes_antes_pausa) && !esperou) { // vai curtir x vezes antes da pausa
        clearInterval(tick_timer);
        var data_aguarde = new Date();
        console.log("Aguardando " + tempo_pausa + " segundos desde " + data_aguarde.getHours() + ":" + data_aguarde.getMinutes() + ":" + data_aguarde.getSeconds());
        esperou = true;
        aguardar_timer = setInterval(iniciar, tempo_pausa*1000); // pause de x seg
    }
}

function iniciar() {
    clearInterval(aguardar_timer);
    tick_timer = setInterval(switchFunctions, tempo_entre_funcoes*1000); // tempo entre abrir foto, curtir foto e fechar foto
}
