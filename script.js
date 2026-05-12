const NOME = "rafael andrade";
let tituloProfissional = "Garoto de Programa / Faço de tudo";
let minhaBio = "Sou um cara esforçado" +
    " Antes eu não era nada";
let anoFormatura = 2026;

let mesFormatura = 12;
let diaFormatura = 31;
let anoIngresso = 2025;
let mesIngresso = 1;
let diaIngresso = 1;

const DATAATUAL = new Date(); // Data atual, data completa, biblioteca de data do JavaScript
let mesAtual = DATAATUAL.getMonth() + 1; // Mês atual (0-11, por isso +1)
let anoAtual = DATAATUAL.getFullYear(); // Ano atual
let diaAtual = DATAATUAL.getDate(); // Dia atual

let indefinido;
let nulo = null;

let curso = {
    nome: "Sistemas de Informação",
    semestre: 3,
    disciplinaAtual: "Design focado no usuário"
};

console.log(typeof nulo); 
console.log(typeof indefinido);
console.log(typeof anoFormatura);
console.log(typeof minhaBio);
console.log(typeof tituloProfissional);
console.log(typeof NOME);    
console.log(typeof curso);

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = "Ano de formatura: " + anoFormatura;
document.getElementById("tempoRestanteParaFormatura").innerText = `Tempo restante para formatura: ${anoFormatura - anoAtual} anos`;
document.getElementById("diaFormatura").innerText = "Dia de formatura: " + diaFormatura;

if (diasRestantes <= 0 && mesesRestantes <= 0 && anosRestantes <= 0) {
    document.getElementById("tempoRestanteParaFormatura").innerText = `Curso Concluído!`;
};
   
if (anoFormatura - anoAtual <= 0) {
    document.getElementById("tempoRestanteParaFormatura").innerText = `-`;
} else if (anoFormatura - anoAtual === 1) {
    document.getElementById("tempoRestanteParaFormatura")
    .innerText = `Tempo restante para formatura: ${anoFormatura - anoAtual} ano`;
} else {
    document.getElementById("tempoRestanteParaFormatura")
    .innerText = `Tempo restante para formatura: ${anoFormatura - anoAtual} anos`;
}

let diasRestantes = diaFormatura - diaAtual;
let mesesRestantes = mesFormatura - mesAtual;
let anosRestantes = anoFormatura - anoAtual;

if (diasRestantes <= 0 && mesesRestantes <= 0 && anosRestantes <= 0) {
    document.getElementById("tempoRestanteParaFormatura").innerText = `Curso Concluído!`;
};

let nota = 8; 
let aprovado = (nota >= 6)? "Aprovado" : "Reprovado";

document.write(`<p> Nota: ${nota} - ${aprovado} </p>`);

let diaSemana = DATAATUAL.getDay() + 1; 

let diaEscrito;

switch (diaSemana) {
    case 1: diaEscrito = "Domingo"; break;
    case 2: diaEscrito = "Segunda-feira"; break;
    case 3: diaEscrito = "Terça-feira"; break;
    case 4: diaEscrito = "Quarta-feira"; break;
    case 5: diaEscrito = "Quinta-feira"; break;
    case 6: diaEscrito = "Sexta-feira"; break;
    case 7: diaEscrito = "Sábado"; break;
    default: diaEscrito = "Dia inválido";
}

document.write(`<p> Hoje é: ${diaEscrito} </p>`);

const btnVisual      = document.getElementById("btn-visual");
const btnLogica      = document.getElementById("btn-logica");
const resultadoQuiz  = document.getElementById("resultado-quiz");

btnVisual.addEventListener("click", function() {
  
  resultadoQuiz.innerHTML = `
    <strong>🎨 Você tem perfil Front-End!</strong><br>
    Você curte criar interfaces, trabalhar com cores, layouts e a experiência do usuário.
    Tecnologias pra você: HTML, CSS, React, Vue.
  `;
  resultadoQuiz.style.backgroundColor = "#e8f4fd";
  resultadoQuiz.style.padding          = "12px";
  resultadoQuiz.style.borderRadius     = "8px";
  resultadoQuiz.style.marginTop        = "10px";
});

btnLogica.addEventListener("click", function() {
  
  resultadoQuiz.innerHTML = `
    <strong>⚙️ Você tem perfil Back-End!</strong><br>
    Você curte resolver problemas complexos, trabalhar com dados e fazer a mágica acontecer nos bastidores.
    Tecnologias pra você: Node.js, Python, bancos de dados.
  `;
  resultadoQuiz.style.backgroundColor = "#e8f8f0";
  resultadoQuiz.style.padding          = "12px";
  resultadoQuiz.style.borderRadius     = "8px";
  resultadoQuiz.style.marginTop        = "10px";
});


let pontosFront  = 0;
let pontosBack   = 0;

btnVisual.addEventListener("click", function() {
  pontosFront++;
  exibirPerfil();
});

btnLogica.addEventListener("click", function() {
  pontosBack++;
  exibirPerfil();
});

function exibirPerfil() {
  if (pontosFront > pontosBack) {
    resultadoQuiz.textContent = "🎨 Perfil Front-End!";
  } else if (pontosBack > pontosFront) {
    resultadoQuiz.textContent = "⚙️ Perfil Back-End!";
  } else {
    resultadoQuiz.textContent = "🔄 Perfil Full Stack — você é dos dois!";
  }
}
let coisasSobreMim = [
    "Sou esforçado e dedicado aos meus estudos.",
    "Adoro aprender coisas novas sobre tecnologia.",
    "Tenho interesse em desenvolvimento Front-End e Back-End."
];

// Usando um laço para mostrar cada item
for (let i = 0; i < coisasSobreMim.length; i++) {
    console.log(`Coisa ${i + 1} sobre mim: ${coisasSobreMim[i]}`);
    // Se quiser exibir na página, use:
    document.write(`<p>Coisa ${i + 1} sobre mim: ${coisasSobreMim[i]}</p>`);
}
