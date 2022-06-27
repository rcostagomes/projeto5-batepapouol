
let mensagem;
let nome;
BuscarMSG();

function BuscarMSG(){
const promessa = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
promessa.then(dadosVoltou);
}
function dadosVoltou(resposta){
console.log("Os dados chegaram!");
console.log(resposta);
mensagem = resposta.data;
renderizarMensagens(resposta);
}

function login() {
   nome = prompt("Qual o seu lindo nome? ");
   const Usuario = {
      name: `${nome}`
   };
   const promise = axios.post(
      "https://mock-api.driven.com.br/api/v6/uol/participants",
      Usuario
   );
   promise.then(VerifcarOstatus);
   promise.catch(alertaerro);

}
login();



function renderizarMensagens(resposta){
const ulchat = document.querySelector(".conteiner ");   
ulchat.innerHTML = "";
console.log(resposta);
const msg = resposta.data.length;
for(let i=0; msg>i; i++){
const from = (resposta.data[i].from);
const text = (resposta.data[i].text);
const time = (resposta.data[i].time);
const to = (resposta.data[i].to);
const type = (resposta.data[i].type);
if (type == "status"){
let mensagem = `<li class= "tipo login">
<div class="hora"><span>(${time})</span></div>
<div class="texto"><span><strong>${from}</strong></span>${text}</div>
</li>`;
 ulchat.innerHTML = ulchat.innerHTML + mensagem;
}
if (type == "message"){
    let mensagem = `<li class= "tipo mensagem">
    <div class="hora"><span>(${time})</span></div>
    <div class="texto"><span><strong>${from}</strong></span> para <span><strong>${to}</strong>:</span><span>${text}</span></div>
    </li>`;
     ulchat.innerHTML = ulchat.innerHTML + mensagem;
    }

 if(type == "private_message"&&(to === nome||from === nome)){
    let mensagem = `<li class= "tipo private">
    <div class="hora"><span>(${time})</span></div>
    <div class="texto"><span><strong>${from}</strong></span> reservadamente para <span><strong>${to}</strong>:</span><span>${text}</span></div>
    </li>`;
     ulchat.innerHTML = ulchat.innerHTML + mensagem;
    }

}
 const Mensagens = document.querySelector(".tipo");
 Mensagens.scrollIntoView(alignTobottom);
}

 setInterval(BuscarMSG, 3000);




function VerifcarOstatus() {
   nome;
   statususuario = {
       name: `${nome}`
   }
   const promisse = axios.post(`https://mock-api.driven.com.br/api/v6/uol/status`, statususuario);

}

setInterval(VerifcarOstatus,5000);

function alertaerro(error) {
   if (error.response.status === 400) {
     nome = prompt("Digite um nome válido");
   }
   EnviarMsg();
}
    
function EnviarMsg() {
   input = document.querySelector(`textarea`);
   const promisse = axios.post(`https://mock-api.driven.com.br/api/v6/uol/messages`, {
       from: nome,
       to: "Todos",
       text: input.value,
       type: "message",
   });
   input.value= "";
   promisse.then(() => {
       const promisse = axios.get(`https://mock-api.driven.com.br/api/v6/uol/messages`);
   })
   promisse.catch(() => {
       window.location.reload();
   })
}
