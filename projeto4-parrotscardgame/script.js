let quantidade = prompt("escolha de 4-14 cartas");
let cartaspares=[];
let imagens=[ "bobross", "bobross","explody","explody","fiesta","fiesta","metal","metal","revertit","revertit","triplets", "triplets","unicorn", "unicorn"];
let ctotal=1;
let c=0;
let imgsrc1;
let imgsrc2;

quantidade=Number(quantidade);
let resto=quantidade%2;

if(quantidade>= 4 && quantidade <=14 && resto===0){
}while(quantidade>14 || quantidade<4 ||  isNaN(quantidade)==true || resto===1 || quantidade==null){
  quantidade = prompt("Comando inválido, Escolha um número par entre 4-14");
  resto=quantidade%2;
}alert(`muito bem, ${quantidade} cartas`);

function comparador() { 
	return Math.random() - 0.5; }

criarcartas();

function criarcartas(){
  for(let i=0;i<quantidade;i++){
    cartaspares.push(imagens[i]);
  }cartaspares.sort(comparador);
  for(let i=0;i<quantidade;i++){
    let cartastemplate= `<div class="box" onclick="selecao(this)"><img class="frente" src="/projeto4-parrotscardgame/imagens/front.png">
                         <img src="imagens/${cartaspares[i]}parrot.gif" class="verso esconder"></div>`
    document.querySelector(".corpo").innerHTML+=cartastemplate;
}}
let arrcompimg=[];
let cviradas=null;

function selecao(elemento){
let verso = elemento.querySelector(".verso");
let frente = elemento.querySelector(".frente");
let imgsrc= elemento.querySelector(".verso");
  c++;
  if(c<3){
  verso.classList.remove("esconder");
  frente.classList.add("esconder");
  console.log(c);}
  if(c===1){
    imgsrc1=imgsrc;
  }if(c===2){
    imgsrc2=imgsrc;
  }if(imgsrc1.src===imgsrc2.src){
    console.log("é igual");
    cviradas+=2;
    console.log("cartas viradas= "+cviradas);
    c=0;
  }if (c===2 && imgsrc1 !== imgsrc2){ 
    setTimeout(function voltarcartas(){
                let img1=imgsrc1.parentNode;
                let img2=imgsrc2.parentNode;
                imgsrc1.classList.add("esconder");
                img1.querySelector(".frente").classList.remove("esconder");
                imgsrc2.classList.add("esconder");
                img2.querySelector(".frente").classList.remove("esconder");},1000);
    console.log("n é igual");
    c=0;
  }
  ctotal++;
}

//colocar classes pra identificar as imagens dentro do arrau de imagens
//colocar o contador
// comprarar as imagens (ta dando erro fala que as imagens são iguais sem ser)
//(ajeitar o cviradas)
//imprimir na tela como no notion e reininciar o jogo
//a responsividade do nome
//o flip