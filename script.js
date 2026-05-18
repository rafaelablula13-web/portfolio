const NOME = "Rafael Andrade";

let tituloProfissional = "Desenvolvedor Full Stack";
let minhaBio =
    "Sou um cara esforçado e dedicado aos estudos. " +
    "Hoje busco evoluir na programação e construir grandes projetos.";

let anoFormatura = 2026;
let mesFormatura = 12;
let diaFormatura = 31;

const DATAATUAL = new Date();

let anoAtual = DATAATUAL.getFullYear();
let mesAtual = DATAATUAL.getMonth() + 1;
let diaAtual = DATAATUAL.getDate();

let curso = {
    nome: "Sistemas de Informação",
    semestre: 3,
    disciplinaAtual: "Design focado no usuário"
};

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio;

document.getElementById("anoFormatura").innerText =
    "Ano de formatura: " + anoFormatura;

document.getElementById("diaFormatura").innerText =
    `Data prevista: ${diaFormatura}/${mesFormatura}/${anoFormatura}`;

let anosRestantes = anoFormatura - anoAtual;

if (anosRestantes <= 0) {
    document.getElementById("tempoRestanteParaFormatura").innerText =
        "🎓 Curso concluído!";
} else if (anosRestantes === 1) {
    document.getElementById("tempoRestanteParaFormatura").innerText =
        "⏳ Falta 1 ano para concluir.";
} else {
    document.getElementById("tempoRestanteParaFormatura").innerText =
        `⏳ Faltam ${anosRestantes} anos para concluir.`;
}

document.getElementById("cursoInfo").innerHTML = `
  <p><strong>Curso:</strong> ${curso.nome}</p>
  <p><strong>Semestre:</strong> ${curso.semestre}</p>
  <p><strong>Disciplina Atual:</strong> ${curso.disciplinaAtual}</p>
`;

let nota = 8;
let aprovado = nota >= 6 ? "Aprovado" : "Reprovado";

console.log(`Nota: ${nota} - ${aprovado}`);

let diaSemana = DATAATUAL.getDay();

let dias = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

console.log("Hoje é:", dias[diaSemana]);

const btnVisual = document.getElementById("btn-visual");
const btnLogica = document.getElementById("btn-logica");
const resultadoQuiz = document.getElementById("resultado-quiz");

let pontosFront = 0;
let pontosBack = 0;

btnVisual.addEventListener("click", () => {
    pontosFront++;
    exibirPerfil();
});

btnLogica.addEventListener("click", () => {
    pontosBack++;
    exibirPerfil();
});

function exibirPerfil() {
    if (pontosFront > pontosBack) {
        resultadoQuiz.innerHTML =
            "🎨 <strong>Perfil Front-End!</strong><br>Você gosta de interfaces e design.";
    } else if (pontosBack > pontosFront) {
        resultadoQuiz.innerHTML =
            "⚙️ <strong>Perfil Back-End!</strong><br>Você gosta de lógica e sistemas.";
    } else {
        resultadoQuiz.innerHTML =
            "🚀 <strong>Perfil Full Stack!</strong><br>Você combina criatividade e lógica.";
    }
}

let coisasSobreMim = [
    "Sou esforçado e dedicado aos meus estudos.",
    "Adoro aprender novas tecnologias.",
    "Tenho interesse em Front-End e Back-End."
];

const listaCoisas = document.getElementById("listaCoisas");

coisasSobreMim.forEach((coisa, index) => {
    listaCoisas.innerHTML += `
    <p>✔️ ${coisa}</p>
  `;
});

let projetos = [
    {
        nome: "Aplicação de Estacionamento",
        tecnologias: ["Python", "Tkinter", "FPDF"],
        conhecimento: "VS Code, GitHub, Pip, PyInstaller",
        descricao:
            "Aplicação desktop para gerenciamento de estacionamento."
    },

    {
        nome: "Aplicação de Loja de Motos",
        tecnologias: ["Python", "Tkinter", "FPDF"],
        conhecimento: "VS Code, GitHub, Pip, PyInstaller",
        descricao:
            "Sistema desktop para gerenciamento de loja de motos."
    }
];

const containerProjetos =
    document.getElementById("containerProjetos");

projetos.forEach((projeto) => {
    containerProjetos.innerHTML += `
    <div class="cardProjeto">
      <h3>${projeto.nome}</h3>

      <p><strong>Tecnologias:</strong>
      ${projeto.tecnologias.join(", ")}</p>

      <p><strong>Conhecimentos:</strong>
      ${projeto.conhecimento}</p>

      <p>${projeto.descricao}</p>
    </div>
  `;
});

const caixa = document.getElementById("caixa");
const botao = document.getElementById("mudaTexto");
const input = document.getElementById("nome");
const botaoEnviar = document.getElementById("enviar");

// Texto inicial
caixa.innerText = "Esse texto foi mudado pelo JS";

// Estilo inicial da caixa
caixa.style.padding = "20px";
caixa.style.borderRadius = "12px";
caixa.style.transition = "0.4s";
caixa.style.textAlign = "center";
caixa.style.fontFamily = "Arial";
caixa.style.color = "#fff";
caixa.style.backgroundColor = "#333";
caixa.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";

// Evento do botão mudar texto
botao.addEventListener("click", function () {
    caixa.innerText = "Você mudou o texto clicando no botão!";
    caixa.style.backgroundColor = "#ff00aa";
    caixa.style.transform = "scale(1.05)";

    setTimeout(() => {
        caixa.style.transform = "scale(1)";
    }, 200);
});

// Evento do botão enviar
botaoEnviar.addEventListener("click", function () {
    let texto = input.value.trim();

    if (texto === "") {
        caixa.innerText = "Digite seu nome primeiro!";
        caixa.style.backgroundColor = "#ff4444";
        return;
    }

    console.log(texto);

    caixa.innerText = `Olá, ${texto}! Bem-vindo ao meu portfólio! 🚀`;
    caixa.style.backgroundColor = "#0099ff";
    caixa.style.transform = "translateY(-5px)";

    setTimeout(() => {
        caixa.style.transform = "translateY(0)";
    }, 200);

    input.value = "";
});
