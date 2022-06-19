let quantidade = prompt("escolha de 4-14 cartas");
let arraycartaspares=[];
let puxarcartas;
let arrayimagens=[ "bobross","explody","fiesta","metal","revertit","triplets", "unicorn",];

quantidade=Number(quantidade);
let resto=quantidade%2;


if(quantidade>= 4 && quantidade <=14 && resto===0){
}
while(quantidade>14 || quantidade<4 ||  isNaN(quantidade)==true || resto===1 || quantidade==null){
  quantidade = prompt("Comando inválido, Escolha um número par entre 4-14");
  resto=quantidade%2;
}
alert(`muito bem, ${quantidade} cartas`);


criarcartas();
function criarcartas(){
  for(let i=0;i<quantidade;i++){
    let x=0
    q=quantidade/2  
  let cartastemplate= `<div class="box" onclick="selecao(this)">
                      <img src="/projeto4-parrotscardgame/imagens/front.png">
                      <img src="imagens/unicornparrot.gif" class="imgverso esconder"></div>`
                      
  document.querySelector(".corpo").innerHTML+=cartastemplate;
/*  arraycartaspares.push(puxarcartas);
  arraycartaspares.push(puxarcartas);*/
}}

/*box.sort(comparador);
function comparador() { 
	return Math.random() - 0.5; 
}*/

function selecao(elemento){
  elemento.classList.toggle("verso");
}
