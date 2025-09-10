// Dados para os modais
const modalContent = {
    card1: {
        title: "Entendendo as Propagandas Enganosas",
        text: "• <b>Golpes de phishing</b>: Mensagens que parecem legítimas, mas que solicitam informações pessoais ou financeiras.<br>&emsp;<i>Exemplo: Como e-mails ou mensagens falsas para roubar dados/ Boletos falsos, que imitam cobranças reais.</i><br>• <b>Golpes de investimento</b>: Esquemas que prometem retornos financeiros altos, mas são na verdade golpes.<br>&emsp;<i>Exemplo: Como a Pirâmide Financeira, onde o dinheiro dos novos investidores é usado para pagar os mais antigos.</i>"
    },
    card2: {
        title: "Identificando uma Propaganda Enganosa",
        text: "• <b>Seja cético</b>: Sempre desconfie de mensagens ou anúncios que pareçam bons demais para ser verdade.<br> • <b>Verifique a fonte</b>: Certifique-se de que a mensagem ou anúncio vem de uma fonte legítima.<br> • <b>Não forneça informações pessoais</b>: Nunca forneça informações pessoais e financeiras a alguém que você não conhece.<br> • <b>Pesquise antes de investir</b>: Faça uma pesquisa cuidadosa antes de investir em qualquer coisa.<br> • <b>Mantenha suas contas seguras</b>: Use senhas fortes para manter suas contas seguras."
    },
    card3: {
        title: "Reagir Corretamente a Golpes e Fraudes",
        text: "• <b>Não se culpe</b>: É fácil cair em um golpe, principalmente se não souberem formas de prevenção, então não se culpem.<br> • <b>Interrompa qualquer pagamento</b>: Se você perceber que seu banco foi comprometido, contate-o imediatamente.<br> • <b>Informe a polícia</b>: Assim que notar que foi vítima de um golpe, contate a polícia e registre o caso ocorrido.<br> • <b>Alerte outras pessoas</b>: Compartilhe sobre golpe em redes sociais ou em grupos de amigos e familiares, para evitar que outras pessoas sejam vítimas."
    },
    card4: {
        title: "Impactos",
        text: "• <b>Depressão</b>: Transtorno de saúde mental, que causa alterações emocionais, físicas e cognitivas.<br> • <b>Ansiedade</b>: Sensação de apreensão e nervosismo. Com seus sintomas físicos ( coração acelerado, falta de ar, suor excessivo, insônia e etc.) E emocionais (preocupação constante, dificuldade para relaxar, medo exagerado e etc.)<br> • <b>Problemas financeiros</b>: Dificuldade para organizar, pagar ou equilibrar suas contas e despesas com o dinheiro disponível.<br> • <b>Sensação de insuficiência</b>: A crença de não se sentir bom o bastante, mesmo com fatos desmentindo tal pensamento.<br> • <b>Frustração</b>: Sensação de decepção quando algo não acontece da maneira que era esperado."
    },
};

// Elementos do modal
const modal = document.getElementById('info-modal');
const modalTitle = document.querySelector('.modal-title');
const modalText = document.querySelector('.modal-text');
const closeModal = document.querySelector('.close-modal');

// Abrir modal ao clicar nos cards ou trabalhos
document.querySelectorAll('[data-modal]').forEach(item => {
    item.addEventListener('click', () => {
        const contentKey = item.getAttribute('data-modal');
        if (modalContent[contentKey]) {
            modalTitle.textContent = modalContent[contentKey].title;
            modalText.innerHTML = modalContent[contentKey].text;
            modal.style.display = 'flex';
        }
    });
});

// Fechar modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fechar modal clicando fora dele
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});