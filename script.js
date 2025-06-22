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

    document.addEventListener('DOMContentLoaded', function() {
        let ultimaMensagem = null;
        document.querySelector('#botao-mensagem').addEventListener('click', function () {
            let aleatorio = null;

            do {
                aleatorio = Math.floor(Math.random() * mensagens.length);
            } while (aleatorio === ultimaMensagem)

            ultimaMensagem = aleatorio;
            
            let mensagem = document.querySelector('#mensagem');
            mensagem.innerHTML = mensagens[aleatorio];

            let trocarTexto = document.querySelector('#botao-mensagem')
            if (trocarTexto.innerHTML === 'Clique para ver uma mensagem!') {
                trocarTexto.innerHTML = 'Clique denovo para exibir outra mensagem!';
            } 
        })       
    })

    let body = document.querySelector('body');
    document.querySelector('#trocar-tema').addEventListener('click', function () {
        body.classList.toggle('dark');
    })
    