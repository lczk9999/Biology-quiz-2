const perguntas = [
    {
        pergunta: "Qual e a pricipal funçao do nucleo celualar",
        alternativa: [
            "Produzir energia para a celula",
            "Armazenar o material genetico e controlar atividades celualres",
            "Realizar a digestao de substancias"
 ],
 correta: 1
},
{
    pergunta: "O que e o envelope nuclear",
    alternativas: [
        "Uma estrutura formada por duas membranas que envolve o nucleo ",
        "Uma estrutura que produz  energia",
        "Uma camada encontarda apenas em bacterias"
],
correta: 0
},
{
    pergunta: "qual e a funçao dos poros nucleaares",
    alternativas: [
        "Produzir DNA",
        "Controlar a passagem de substancias entre o nucleo e o citoplasma",
        "Produzir energia"
    ],
correta: 1
},
{
pergunta: "o que e o citoplasma",
alternativas: [
    "O liquedo que preenche o interior do nucleo",
    "A menbrana externa da celula",
    "Uma parte do citoplasma"
],
correta: 0
},

{
    pergunta:"Qual e a pricipal funçao do nucleolo",
    alternativas: [
        "PProduzir DNA",
        "Particir da formaçao dos ribossomos",
        "Realizar a Fotossintese"
    ],
    correta: 1 
    ],

    {
        pergunta: "qual molecula armazena a maior parte das informaçao geneticas da celulas",
        alternativas: [
            "DNA",
            "Agua",
            "glicose",
        ],
        correta: 0 
    },
    {
        pergunta: "Quale e a funçaodo do RNA",
        alternativas: [
            "Participar da produçao de proteinas",
            "Formar a membrana celualar",
            "Produzir luz"
        ],
        correta: 0
    },
    {
        pergunta: "O que e um gene",
        alternativa: [
            "Uma organela celular",
            "Uma regiao do DNA que contem informaçao gnetica",
            "Um tipo de proteina"
        ],
        correta: 1 
    },
    {
        pergunta "Qual e a relaçao entre genes e proteinas",
        alternativas: [
            "os genes possuem informaçoes que podem orientar a produçao de proteinas",
            "As proteinas produzem todos os genes",
            "Genes e proteinas nao possuem relaçao"
            ],
            correta: 0 
    },
    {
        pergunta: "O que e o material genetico",
        alternativas: [
            "O conjunto de informaçoes hereditarias de um organismo",
            "Somente a agua presente na celula",
            "A menbrana que envolve a celula"
        ]
        correta: 0
    },
{ pergunta: "O que e a cromatina",
    alternativa: [
        "DNA associado a proteinas",
        "Um tipo de açucar",
        "Uma organela responsavel pela digestaçao"
    ],
    correta: 0
},
{
    pergunta: "Quando a celula esta se dividindo a cromatina se organiza Formando estruturas chamadas:",
    alternativas: [
        "Ribossomos",
        "Cromossomos",
        "Lisossomos"
    ],
    correta: 1 
},
{
    pergunta: "Por que o nucleo e importante para as celulas eucariontes",
    alternativas: [
        "Porque contem e protege grende parte do material genetico",
        "Porque produz todo o alimento da celula",
        "Porque substitui todas as outras organelas"
    ],
    correta: 0 
},
{
    pergunta: "o que e a diferenciaçao celular",
    alternativas: [
        "Processo pelo qual se especializam em determinadas funçoes",
        "Processo de alto criaçao ou destruiçao do DNA",
        "Processo de trasformaçao de celula em gene"
    ],
    correta: 0
},
{
    pergunta: "Como celulas diferentes de um mesmo organismo podem ter funçoes diferentes mesmopossuino o mesmo DNA",
    alternativas: [
        "Porque utilizam diferentes conjuntos de genes",
        "Porque possuem DNA completamnete diferentes",
        "porque nao possuem material genetico"
    ],
    correto: 0
}
];
left perguntaAtual = 0;
left pontos = 0;
left respostaEscolhida = null;

const inicio =
document.getElementById("inicio");
const quiz =
document.getElementById("quiz");
const resultado = document.getElementById("resultado");

const botaoIniciar = document.getElementById("BotaoIniciar");
const proxima = document.getElementById("proxima");

const reniciar = document.getElementById("reniciar");
const pergunta = document.getElementById("pergunta");

const numerosdeperguntas = document.getElementById("numerosdeperguntas");
const alternativas = document.getElementById("alternativas");

const pontuaçao = document.getElementById("pontuaçao");

fucntion mostrarPergunta() {
    
    respostaEscolhida = null;

    const atual = perguntas[perguntaAtual];

    numeroPerguntas.textContent = "pergunta"+
    (perguntaAtual + 1) + " de " + perguntas.length;

    pergunta.textContent = atual.pergunta;

    alternativas.innerHTML = "";

    atual.alternativas.forEach(function(alternativa, index) {
        const botao = document.creatElement("button");
        botao.textContent = 

    String.fromCharCode(65 + index) + ") " + alternativa:
    botao.classList.add("alternativa");
    botao.onclick = function() {
        rspostaEscolhida = index;

        const botoes = document.querySelectorAll(".alternativa");

        botoes.forEach.remove("escolhida)";

        };

        alternativas.appendChild(botao);
    });

}

botaoIniciar.onclick = function() {

    inicio.classList.add("escolhido");

    quiz.classList.remove("escolhido");
    perguntaAtual = 0
    pontos = 0;

    mostrarPergunta();]
};

proxima.onclick = function() {

    if (respostaEsolhida === null) {
        alert("Esolha uma alternativa antes de continuar.");
        return;
    }
    perguntaAtual++;
    
        