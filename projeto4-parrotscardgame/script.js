let quantidade = prompt("Bem vindo ao Parrot Card Game,Por favor escolha de 4-14 cartas. Com quantas cartas deseja jogar?");

quantidade = Number(quantidade);
 //for (quantidade<4 || quantidade>14){
  if(quantidade<4 || quantidade>14 ){
    prompt("Ops,esse número não é valido, digite um número entre 4 e 14 :) ");
  } 

let resto=quantidade%2;
 if(resto===0){
 quantidade=quantidade;
 alert(`muito bem, ${quantidade} cartas`)
 }else{
 quantidade = quantidade+1;
 alert(`Você quis dizer ${quantidade} cartas`);
 }


 let = quanto.length =[quantidade]


 function selecao(elemento){
   let boxvisivel = document.querySelector(".box");
   if(quantidade===2){
   boxvisivel.classList.add("boxescondido");
   

   }
   
}
