let grupo = [];
let random = Math.floor(Math.random() * grupo.length );
function adicionarAmigo()
{

   let nomes = document.getElementById ('amigo').value;
   let listaAmigos = document.getElementById ('listaAmigos');
   

  
  
   if (nomes){
       grupo.push (nomes);
       const listItem = document.createElement('li');
       
       listItem.textContent = nomes; 
       listaAmigos.appendChild(listItem); 
        document.getElementById ('amigo').value ='';
   } else {
     
    alert('Por favor, digite um nome válido.');
   }

   
   
   

} 
   
function sortearAmigo (){

let resultado = document.getElementById('resultado');
const listasorteado = document.createElement('li');

embaralha(grupo);

let random = Math.floor(Math.random() * grupo.length );
let posicao = grupo[random];

if (resultado.textContent === ''){
    listasorteado.textContent = "0 amigo sorteado é "+ posicao;
resultado.appendChild(listasorteado);
listaAmigos.textContent= '';
}

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

      
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}