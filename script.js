 let nome = prompt ("Qual Seu lindo Nome?");
const usuario = {name: nome }
const promise = axios.post ('https://mock-api.driven.com.br/api/v6/uol/participants', usuario );

promise.then(Deubom); 

function Deubom (response){
if (response.status === 200){
    /* alert("Deu bom") */
 }
login = response.data;
renderizarlogin();
}

function renderizarlogin(){
const div = document.querySelector(".mensagemstatus");
div.innerHTML = "";
for (let i=0; i < login.length; i++ ) {
    div.innerHTML += ` <div class= "entrou"> <a> ${nome[i].name} </a> </div>`;
    
}
}














function Pegarmensagens (){
const msg = document.querySelector (".msg").value;

const novamsg = {


const promise = axios.post ("https://mock-api.driven.com.br/api/v6/uol/participants", novamsg);



}


}