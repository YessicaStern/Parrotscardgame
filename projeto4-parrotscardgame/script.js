
let quantidade = prompt("escolha de 4-14 cartas");
let cartaspares=[];
let imagens=[ "papagaio-um", "papagaio-um","papagaio-dois","papagaio-dois","papagaio-tres","papagaio-tres","papagaio-quatro","papagaio-quatro","papagaio-cinco","papagaio-cinco","papagaio-seis", "papagaio-seis","papagaio-sete", "papagaio-sete"];
let c=0;
let imgsrc1;
let imgsrc2;
let arraycomprimento=[];
let arraycontador=[];
let carta1;
let carta2;
let cviradas=null;
let img1;
let img2;
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
                         <img src="imagens/${cartaspares[i]}.gif" class="verso esconder"></div>`
    document.querySelector(".corpo").innerHTML+=cartastemplate;
}}



function selecao(elemento){
  let verso = elemento.querySelector(".verso");
  let frente = elemento.querySelector(".frente");
  c++;
  if(c===1){
    verso.classList.remove("esconder");
    frente.classList.add("esconder");
    img1=verso;
    imgsrc1=verso.src;
    carta1=elemento;
    arraycomprimento.push(imgsrc1);}
  if(c===2 && carta1 !== elemento){
    verso.classList.remove("esconder");
    frente.classList.add("esconder");
    img2=verso;
    imgsrc2=verso.src;
    carta2=elemento;
    arraycomprimento.push(imgsrc1);  
    restodafuncao();
  }else if(c===2 && carta1===elemento){
     img2=null;
     imgsrc2=null;
     c=1;
  }}

function restodafuncao(){
  while(c===2){
  if(imgsrc1===imgsrc2){
    cviradas+=2;
    c=0;
    carta2.removeAttribute("onclick");
    carta1.removeAttribute("onclick");
    arraycontador.push(img1);
    arraycontador.push(img2);
    break;
  }else{
    setTimeout(function voltarcartas(){
               img1.parentNode.querySelector(".frente").classList.remove("esconder");
               img2.parentNode.querySelector(".frente").classList.remove("esconder");
               img1.classList.add("esconder");
               img2.classList.add("esconder");},1000)
               c=0;}
  break; }
console.log("contador = "+arraycontador.length);
console.log("arraycomprimento = "+ arraycomprimento.length);
while(arraycontador.length===quantidade){
 setTimeout( function alertar(){alert(`fim de jogo, Ganhou em ${arraycomprimento.length} Jogadas`);
  }, 500);
  
  setTimeout(function reininciar(){ for(let z=0;z<arraycontador.length;z++){
    arraycontador[z].classList.add("esconder");
    arraycontador[z].parentNode.querySelector(".frente").classList.remove("esconder");
    //arraycontador[z].setAttribute("onclick", selecao);
  }},1500); 
    break;}
 if(arraycontador.length===quantidade){
  setTimeout( function reininciarp2(){c=0; arraycontador=[]; arraycomprimento=[];},2000);}

}