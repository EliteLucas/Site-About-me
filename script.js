// Array de mensagens motivacionais
const mensagens = [
    "Ser corajoso não é não ter medo, mas enfrentar e seguir apesar dele.",
    "Cada passo, por menor que seja, te aproxima do seu objetivo.",
    "O impossível só existe até alguém provar o contrário.",
    "Você é mais forte do que imagina e mais capaz do que acredita.",
    "O erro não define quem você é, ele ensina para onde não voltar.",
    "Grandes conquistas começam com pequenas ações diárias.",
    "Nem sempre será fácil, mas sempre valerá a pena.",
    "A disciplina constrói o que a motivação começa.",
    "O medo limita, a coragem liberta.",
    "Você não precisa ser perfeito, só precisa ser constante.",
    "Desistir não acelera, só atrasa quem você pode se tornar.",
    "Confie no processo. Toda semente plantada floresce no tempo certo.",
    "O fracasso só existe quando você escolhe não tentar mais.",
    "A jornada é sua. O ritmo também. Só não pare.",
    "Cada dificuldade carrega dentro dela uma oportunidade disfarçada."
]

// Função para exibir uma nova mensagem
    function exibirMensagem() {
    let ultimaMensagem = null;
    const mensagemElement = document.querySelector('#mensagem');
    const botaoMensagem = document.querySelector('#botao-mensagem');

    return () => {
        let aleatorio;
        do {
            aleatorio = Math.floor(Math.random() * mensagens.length);
        } while (aleatorio === ultimaMensagem);

        ultimaMensagem = aleatorio;
        mensagemElement.textContent = mensagens[aleatorio];

        if (botaoMensagem.textContent === 'Clique para ver uma mensagem!') {
            botaoMensagem.textContent = 'Clique denovo para exibir outra mensagem!';
        }
    };
}

// Função para alternar tema com acessibilidade
function alternarTema() {
    const body = document.querySelector('body');
    const botaoTema = document.querySelector('#trocar-tema');
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    botaoTema.setAttribute('aria-label', `Trocar para modo ${isDark ? 'claro' : 'escuro'}`);
}

// Inicializar eventos
document.addEventListener('DOMContentLoaded', () => {
    const botaoMensagem = document.querySelector('#botao-mensagem');
    const botaoTema = document.querySelector('#trocar-tema');

    // Verificar se os elementos existem
    if (!botaoMensagem || !botaoTema || !document.querySelector('#mensagem')) {
        console.error('Elementos necessários não encontrados no DOM');
        return;
    }

    botaoMensagem.addEventListener('click', exibirMensagem());
    botaoTema.addEventListener('click', alternarTema);
});