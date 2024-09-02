const perguntas = [
    {
        pergunta: "Qual é a capital do Brasil?",
        respostas: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual é o maior planeta do sistema solar?",
        respostas: ["Terra", "Júpiter", "Marte", "Saturno"],
        respostaCorreta: 1
    }
    
    
    
    
    // Adicione mais perguntas aqui
];

let perguntaAtual = 0;

function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    document.getElementById("question").innerText = pergunta.pergunta;
    
    const respostasDiv = document.getElementById("answers");
    respostasDiv.innerHTML = "";
    
    pergunta.respostas.forEach((resposta, index) => {
        const button = document.createElement("button");
        button.innerText = resposta;
        button.onclick = () => verificarResposta(index);
        respostasDiv.appendChild(button);
    });
}

function verificarResposta(index) {
    const pergunta = perguntas[perguntaAtual];
    if (index === pergunta.respostaCorreta) {
        alert("Correto!");
    } else {
        alert("Incorreto. Tente novamente.");
    }
}

function nextQuestion() {
    perguntaAtual = (perguntaAtual + 1) % perguntas.length;
    mostrarPergunta();
}

// Inicializar o quiz
mostrarPergunta();
