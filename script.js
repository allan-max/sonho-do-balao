// ==========================================
// 1. CAPTURAR ELEMENTOS DO DOM (HTML)
// ==========================================
const inputTexto = document.getElementById('texto-balao');
const previewTexto = document.getElementById('texto-preview');
const contadorTexto = document.getElementById('contador');
const selectFonte = document.getElementById('fonte-balao');
const inputTamanho = document.getElementById('tamanho-texto');
const btnLimpar = document.getElementById('btn-limpar');
const imagemBalao = document.getElementById('imagem-balao');
const containerCores = document.getElementById('container-cores-balao');

const botoesAlinhamento = document.querySelectorAll('.btn-align');
const botoesCorTexto = document.querySelectorAll('input[name="cor-texto"]');

// ==========================================
// 2. BASE DE DADOS DE PRODUTOS E CATÁLOGO
// ==========================================
const modelosSalvosIniciais = [
    { 
        id: 'buque-de-bubble', 
        nome: 'Buquê de Bubble', 
        categoria: 'Balões Prontos', 
        tags: ['bubble', 'bouquet', 'aniversário', 'formatura', 'corporativo', 'outros'], 
        preco: '149,90', 
        imagem: 'baloes-prontos/Buque-de-Bubble/inicial.jpg', 
        status: 'ativo',
        cores: [
            { id: 'padrao', nome: 'Padrão (Azul)', corHex: '#1d4ed8', imagem: 'baloes-prontos/Buque-de-Bubble/pradrao.png' },
            { id: 'branco', nome: 'Branco', corHex: '#ffffff', imagem: 'baloes-prontos/Buque-de-Bubble/branco.png' },
            { id: 'preto', nome: 'Preto', corHex: '#000000', imagem: 'baloes-prontos/Buque-de-Bubble/preto.png' },
            { id: 'vermelho', nome: 'Vermelho', corHex: '#ef4444', imagem: 'baloes-prontos/Buque-de-Bubble/vermelho.png' }
        ],
        adicionais: [
            { id: 'sem-confetes', nome: 'Sem Confetes', preco: '0,00' }
        ]
    },
    { 
        id: 'kit-de-baloes-para-topo-de-bolo', 
        nome: 'Kit de Balões para Topo de Bolo', 
        categoria: 'Balões Prontos', 
        tags: ['bubble', 'látex', 'aniversário', 'maternidade', 'chá de bebê', 'outros'], 
        preco: '89,90', 
        imagem: 'baloes-prontos/Kit-de-baloes-para-topo-de-bolo/Kit-de-baloes-para-topo-de-bolo-inicial.jpg', 
        status: 'ativo',
        cores: [
            { id: 'vermelho', nome: 'Vermelho', corHex: '#ef4444', imagem: 'baloes-prontos/Kit-de-baloes-para-topo-de-bolo/Kit-de-baloes-para-topo-de-bolo-vermelho.jpg' },
            { id: 'branco', nome: 'Branco', corHex: '#ffffff', imagem: 'baloes-prontos/Kit-de-baloes-para-topo-de-bolo/Kit-de-baloes-para-topo-de-bolo-branco.png' },
            { id: 'preto', nome: 'Preto', corHex: '#000000', imagem: 'baloes-prontos/Kit-de-baloes-para-topo-de-bolo/Kit-de-baloes-para-topo-de-bolo-preto.png' }
        ],
        adicionais: [
            { id: 'sem-confetes', nome: 'Sem Confetes', preco: '0,00' }
        ]
    },
    { 
        id: 'buque-celebration-luxo', 
        nome: 'Buquê Celebration Luxo', 
        categoria: 'Balões Prontos', 
        tags: ['bubble', 'metalizado', 'bouquet', 'aniversário', 'formatura'], 
        preco: '189,90', 
        imagem: 'baloes-prontos/Buque-Celebration-Luxo/Buque-Celebration-Luxo-inicial.jpg', 
        status: 'ativo',
        cores: [
            { id: 'azul', nome: 'Azul', corHex: '#1d4ed8', imagem: 'baloes-prontos/Buque-Celebration-Luxo/Buque-Celebration-Luxo-azul.jpg' },
            { id: 'branco', nome: 'Branco', corHex: '#ffffff', imagem: 'baloes-prontos/Buque-Celebration-Luxo/Buque-Celebration-Luxo-branco.jpg' },
            { id: 'dourado', nome: 'Dourado', corHex: '#fbbf24', imagem: 'baloes-prontos/Buque-Celebration-Luxo/Buque-Celebration-Luxo-dourado.jpg' },
            { id: 'preto', nome: 'Preto', corHex: '#000000', imagem: 'baloes-prontos/Buque-Celebration-Luxo/Buque-Celebration-Luxo-preto.jpg' },
            { id: 'vermelho', nome: 'Vermelho', corHex: '#ef4444', imagem: 'baloes-prontos/Buque-Celebration-Luxo/Buque-Celebration-Luxo-vermelho.jpg' }
        ],
        adicionais: []
    },
    { 
        id: 'buque-paixao-flutuante', 
        nome: 'Buquê Paixão Flutuante', 
        categoria: 'Balões Prontos', 
        tags: ['coração', 'metalizado', 'bouquet', 'romântico'], 
        preco: '169,90', 
        imagem: 'baloes-prontos/Buque-Paixao-Flutuante/Buque-Paixao-Flutuante-inicial.jpg', 
        status: 'ativo',
        cores: [
            { id: 'dourado', nome: 'Dourado', corHex: '#fbbf24', imagem: 'baloes-prontos/Buque-Paixao-Flutuante/Buque-Paixao-Flutuante-dourado.jpg' },
            { id: 'preto', nome: 'Preto', corHex: '#000000', imagem: 'baloes-prontos/Buque-Paixao-Flutuante/Buque-Paixao-Flutuante-preto.jpg' },
            { id: 'rosa', nome: 'Rosa', corHex: '#ec4899', imagem: 'baloes-prontos/Buque-Paixao-Flutuante/Buque-Paixao-Flutuante-rosa.jpg' },
            { id: 'vermelho', nome: 'Vermelho', corHex: '#ef4444', imagem: 'baloes-prontos/Buque-Paixao-Flutuante/Buque-Paixao-Flutuante-vermelho.jpg' }
        ],
        adicionais: [
            { id: 'sem-confetes', nome: 'Sem Confetes', preco: '0,00' }
        ]
    },
    { 
        id: 'kit-surpresa-romantica', 
        nome: 'Kit Surpresa Romântica', 
        categoria: 'Balões Prontos', 
        tags: ['coração', 'metalizado', 'látex', 'romântico'], 
        preco: '129,90', 
        imagem: 'baloes-prontos/Kit-Surpresa-Romantica/Kit-Surpresa-Romantica-inicial.jpg', 
        status: 'ativo',
        cores: [
            { id: 'branco', nome: 'Branco', corHex: '#ffffff', imagem: 'baloes-prontos/Kit-Surpresa-Romantica/Kit-Surpresa-Romantica-branco.jpg' },
            { id: 'dourado', nome: 'Dourado', corHex: '#fbbf24', imagem: 'baloes-prontos/Kit-Surpresa-Romantica/Kit-Surpresa-Romantica-dourado.jpg' },
            { id: 'preto', nome: 'Preto', corHex: '#000000', imagem: 'baloes-prontos/Kit-Surpresa-Romantica/Kit-Surpresa-Romantica-preto.jpg' },
            { id: 'rosa', nome: 'Rosa', corHex: '#ec4899', imagem: 'baloes-prontos/Kit-Surpresa-Romantica/Kit-Surpresa-Romantica-rosa.jpg' },
            { id: 'vemelho', nome: 'Vermelho', corHex: '#ef4444', imagem: 'baloes-prontos/Kit-Surpresa-Romantica/Kit-Surpresa-Romantica-vemelho.jpg' }
        ],
        adicionais: []
    },
    { 
        id: 'kit-celebracao-elegance-com-lacinhos', 
        nome: 'Kit Celebração Elegance com Lacinhos', 
        categoria: 'Balões Prontos', 
        tags: ['látex', 'metalizado', 'aniversário', 'romântico', 'outros'], 
        preco: '109,90', 
        imagem: 'baloes-prontos/Kit-Celebracao-Elegance-com-Lacinhos/Kit-Celebracao-Elegance-com-Lacinhos.jpg', 
        status: 'ativo',
        cores: [
            { id: 'branco', nome: 'Branco', corHex: '#ffffff', imagem: 'baloes-prontos/Kit-Celebracao-Elegance-com-Lacinhos/Kit-Celebracao-Elegance-com-Lacinhos-branco.jpg' },
            { id: 'preto', nome: 'Preto', corHex: '#000000', imagem: 'baloes-prontos/Kit-Celebracao-Elegance-com-Lacinhos/Kit-Celebracao-Elegance-com-Lacinhos-preto.jpg' },
            { id: 'rosa', nome: 'Rosa', corHex: '#ec4899', imagem: 'baloes-prontos/Kit-Celebracao-Elegance-com-Lacinhos/Kit-Celebracao-Elegance-com-Lacinhos-rosa.jpg' },
            { id: 'verde', nome: 'Verde', corHex: '#22c55e', imagem: 'baloes-prontos/Kit-Celebracao-Elegance-com-Lacinhos/Kit-Celebracao-Elegance-com-Lacinhos-verde.jpg' },
            { id: 'vermelho', nome: 'Vermelho', corHex: '#ef4444', imagem: 'baloes-prontos/Kit-Celebracao-Elegance-com-Lacinhos/Kit-Celebracao-Elegance-com-Lacinhos-vermelho.jpg' }
        ],
        adicionais: []
    },
    { 
        id: 'kit-estrelado-premium', 
        nome: 'Kit Estrelado Premium', 
        categoria: 'Balões Prontos', 
        tags: ['metalizado', 'látex', 'aniversário', 'formatura'], 
        preco: '159,90', 
        imagem: 'baloes-prontos/Kit-Estrelado-Premium/Kit-Estrelado-Premium-inicial.jpg', 
        status: 'ativo',
        cores: [
            { id: 'branco', nome: 'Branco', corHex: '#ffffff', imagem: 'baloes-prontos/Kit-Estrelado-Premium/Kit-Estrelado-Premium-branco.jpg' },
            { id: 'dourado', nome: 'Dourado', corHex: '#fbbf24', imagem: 'baloes-prontos/Kit-Estrelado-Premium/Kit-Estrelado-Premium-dourado.jpg' },
            { id: 'preto', nome: 'Preto', corHex: '#000000', imagem: 'baloes-prontos/Kit-Estrelado-Premium/Kit-Estrelado-Premium-preto.jpg' },
            { id: 'rosa', nome: 'Rosa', corHex: '#ec4899', imagem: 'baloes-prontos/Kit-Estrelado-Premium/Kit-Estrelado-Premium-rosa.jpg' },
            { id: 'verde', nome: 'Verde', corHex: '#22c55e', imagem: 'baloes-prontos/Kit-Estrelado-Premium/Kit-Estrelado-Premium-verde.jpg' }
        ],
        adicionais: [
            { id: 'sem-confetes', nome: 'Sem Confetes', preco: '0,00' }
        ]
    }
];

let modelosSalvos = JSON.parse(localStorage.getItem('bancoModelos'));
let precisaAtualizar = false;

if (!modelosSalvos || !Array.isArray(modelosSalvos) || modelosSalvos.length === 0) {
    modelosSalvos = [];
    precisaAtualizar = true;
}

if (modelosSalvos.find(m => m.id === 'bubble')) {
    modelosSalvos = modelosSalvos.filter(m => m.id !== 'bubble');
    precisaAtualizar = true;
}

modelosSalvosIniciais.forEach(inicial => {
    const index = modelosSalvos.findIndex(m => m.id === inicial.id);
    if (index === -1) {
        modelosSalvos.push(inicial);
        precisaAtualizar = true;
    } else {
        // Atualiza a imagem inicial se estiver errada
        if (modelosSalvos[index].imagem !== inicial.imagem) {
            modelosSalvos[index].imagem = inicial.imagem;
            precisaAtualizar = true;
        }
        // Garante as cores corretas
        if (!modelosSalvos[index].cores || modelosSalvos[index].cores.length < inicial.cores.length) {
            modelosSalvos[index].cores = inicial.cores;
            precisaAtualizar = true;
        }
        // Garante os adicionais (ex: Sem Confetes)
        if (inicial.adicionais && inicial.adicionais.length > 0) {
            inicial.adicionais.forEach(add => {
                if (!modelosSalvos[index].adicionais) modelosSalvos[index].adicionais = [];
                if (!modelosSalvos[index].adicionais.find(a => a.id === add.id)) {
                    modelosSalvos[index].adicionais.push(add);
                    precisaAtualizar = true;
                }
            });
        }
        // Garante as tags
        if (inicial.tags) {
            modelosSalvos[index].tags = inicial.tags;
            precisaAtualizar = true;
        }
    }
});

if (precisaAtualizar) {
    localStorage.setItem('bancoModelos', JSON.stringify(modelosSalvos));
}

const catalogoBaloes = {
    'buque-de-bubble': { cores: modelosSalvosIniciais[0].cores }
};

modelosSalvos.forEach(modelo => {
    catalogoBaloes[modelo.id] = { cores: modelo.cores || [] };
});

// ==========================================
// 3. INICIALIZAÇÃO DA PÁGINA DE PERSONALIZAÇÃO
// ==========================================
const urlParams = new URLSearchParams(window.location.search);
const modeloAtual = urlParams.get('modelo');

if (modeloAtual && containerCores) {
    // Busca o modelo salvo no banco de dados do localStorage
    const modelosSalvos = JSON.parse(localStorage.getItem('bancoModelos')) || [];
    const modeloEncontrado = modelosSalvos.find(m => m.id === modeloAtual);

    if (modeloEncontrado) {
        containerCores.innerHTML = '';

        // 1. MÁGICA DAS CORES: Normaliza as cores vindas do Admin ou do padrão
        let listaCores = [];

        if (Array.isArray(modeloEncontrado.cores) && modeloEncontrado.cores.length > 0) {
            listaCores = modeloEncontrado.cores;
        } else if (modeloEncontrado.cores && typeof modeloEncontrado.cores === 'object') {
            listaCores = Object.entries(modeloEncontrado.cores).map(([id, hex]) => ({
                id: id,
                nome: id,
                corHex: typeof hex === 'string' ? hex : (hex.corHex || '#ff0000'),
                imagem: (hex && typeof hex === 'object') ? hex.imagem : ''
            }));
        }

        // Se o modelo não tiver lista de cores, exibe um alerta e cria a cor principal
        if (listaCores.length === 0) {
            containerCores.innerHTML = '<span style="color:red; font-size:12px;">Nenhuma cor cadastrada. Adicione no Painel!</span>';
            listaCores.push({
                id: 'cor-padrao',
                nome: 'Cor Principal',
                corHex: modeloEncontrado.corHex || '#ff0000'
            });
        }

        // 2. MÁGICA DA IMAGEM: Exibe a imagem da primeira cor ou do modelo!
        if (imagemBalao) {
            const rootPathImg = window.location.pathname.includes('baloes-prontos') ? '../../' : '';
            if (listaCores.length > 0 && listaCores[0].imagem) {
                imagemBalao.src = rootPathImg + listaCores[0].imagem;
            } else if (modeloEncontrado.imagem) {
                imagemBalao.src = rootPathImg + modeloEncontrado.imagem;
            }
        }

        // 3. Desenha as bolinhas de cores na tela
        listaCores.forEach((corItem, index) => {
            const corId = corItem.id || `cor-${index}`;
            const hex = corItem.corHex || '#ff0000';
            const nomeCor = corItem.nome || 'Cor';

            const inputHtml = `
                <input type="radio" name="cor-balao" id="cor-balao-${corId}" value="${corId}" data-imagem="${corItem.imagem || ''}" ${index === 0 ? 'checked' : ''}>
                <label for="cor-balao-${corId}" style="background-color: ${hex};" title="${nomeCor}"></label>
            `;
            containerCores.innerHTML += inputHtml;
        });

        // 4. Se a cor tiver uma imagem própria associada, troca a foto ao clicar
        adicionarEventosDeCor();
        // ==========================================
        // EXIBIR ADICIONAIS NA TELA DO CLIENTE
        // ==========================================
        let containerAdicionaisCliente = document.getElementById('container-adicionais-cliente');

        // Se a caixinha de adicionais não existir no HTML, cria ela automaticamente na tela
        if (!containerAdicionaisCliente) {
            const painelOpcoes = document.querySelector('.custom-options') || document.querySelector('.options-group');
            if (painelOpcoes) {
                const divBox = document.createElement('div');
                divBox.className = 'option-box';
                divBox.innerHTML = `
                    <h3>Adicionais Opcionais</h3>
                    <div id="container-adicionais-cliente" style="display: flex; flex-direction: column; gap: 10px; margin-top: 10px;"></div>
                `;
                painelOpcoes.appendChild(divBox);
                containerAdicionaisCliente = document.getElementById('container-adicionais-cliente');
            }
        }

        if (containerAdicionaisCliente && modeloEncontrado.adicionais && modeloEncontrado.adicionais.length > 0) {
            const boxAds = document.getElementById('box-adicionais-cliente');
            if (boxAds) boxAds.style.display = 'block';
            
            containerAdicionaisCliente.innerHTML = '';
            const imagemOriginalBalão = modeloEncontrado.imagem;

            modeloEncontrado.adicionais.forEach((adc, idx) => {
                let pNum = parseFloat((adc.preco || '0').replace(',', '.'));
                let sinalStr = pNum < 0 ? '-' : '+';
                let precoStr = Math.abs(pNum).toFixed(2).replace('.', ',');
                
                containerAdicionaisCliente.innerHTML += `
                    <label style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: #ffffff; padding: 12px 15px; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 2px 4px rgba(0,0,0,0.02); transition: all 0.2s; margin-bottom: 8px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <input type="checkbox" id="chk-adicional-${adc.id}" class="chk-adicional-cliente" value="${adc.id}" data-preco="${adc.preco}" data-imagem="${adc.imagem}" data-posicao="${adc.posicao || 'frente'}" style="transform: scale(1.3); accent-color: #ff6b81;">
                            <span style="font-size: 15px; font-weight: 500; color: #334155;">${adc.nome}</span>
                        </div>
                        <span style="font-weight: 700; color: ${pNum < 0 ? '#ef4444' : '#10b981'};">${pNum === 0 ? 'Grátis' : (sinalStr + ' R$ ' + precoStr)}</span>
                    </label>
                `;
            });

            // ESCUTA O CLIQUE DO CLIENTE PARA TROCAR A FOTO E ATUALIZAR O PREÇO NA TELA
            const chksCliente = document.querySelectorAll('.chk-adicional-cliente');

            function atualizarPrecoDinamicamente() {
                // 1. Pega o preço original do balão
                let precoBase = parseFloat(modeloEncontrado.preco.replace(',', '.')) || 0;
                
                // Limpar overlays de adicionais atuais
                const overlaysContainer = document.getElementById('overlays-container');
                const overlaysAtras = document.getElementById('overlays-atras');
                if (overlaysContainer) overlaysContainer.innerHTML = '';
                if (overlaysAtras) overlaysAtras.innerHTML = '';

                // 2. Soma o valor dos adicionais marcados e gera overlays
                chksCliente.forEach(c => {
                    if (c.checked) {
                        const imgAdicional = c.getAttribute('data-imagem');
                        const posicaoAdicional = c.getAttribute('data-posicao') || 'frente';
                        
                        if (imgAdicional && imgAdicional !== 'undefined' && imgAdicional !== 'null' && imgAdicional.trim() !== '') {
                            const overlayImg = document.createElement('img');
                            overlayImg.src = imgAdicional;
                            overlayImg.style.position = 'absolute';
                            overlayImg.style.top = '0';
                            overlayImg.style.left = '0';
                            overlayImg.style.width = '100%';
                            overlayImg.style.height = '100%';
                            overlayImg.style.pointerEvents = 'none';
                            
                            if (posicaoAdicional === 'atras' && overlaysAtras) {
                                overlaysAtras.appendChild(overlayImg);
                            } else if (posicaoAdicional === 'dentro' && overlaysContainer) {
                                overlayImg.style.opacity = '0.85'; // Efeito visual transparente para parecer dentro
                                overlaysContainer.appendChild(overlayImg);
                            } else if (overlaysContainer) {
                                overlaysContainer.appendChild(overlayImg);
                            }
                        }
                        let precoAdicional = parseFloat((c.getAttribute('data-preco') || '0').replace(',', '.'));
                        precoBase += precoAdicional;
                    }
                });

                // 3. Cria ou atualiza o Preço Total em cima do botão Comprar
                let painelPreco = document.getElementById('exibicao-preco-total');
                const btnComprarTela = document.getElementById('btn-comprar');

                if (!painelPreco && btnComprarTela) {
                    painelPreco = document.createElement('div');
                    painelPreco.id = 'exibicao-preco-total';
                    painelPreco.style.fontSize = '22px';
                    painelPreco.style.fontWeight = 'bold';
                    painelPreco.style.color = 'var(--cor-primaria)';
                    painelPreco.style.marginBottom = '15px';
                    painelPreco.style.textAlign = 'center';
                    btnComprarTela.parentNode.insertBefore(painelPreco, btnComprarTela);
                }

                if (painelPreco) {
                    painelPreco.innerHTML = `Total: R$ ${precoBase.toFixed(2).replace('.', ',')}`;
                }
            }

            // Evento para recalcular o preço ao marcar/desmarcar
            const checkboxes = document.querySelectorAll('.chk-adicional-cliente');
            checkboxes.forEach(chk => {
                chk.addEventListener('change', atualizarPrecoDinamicamente);
                
                if (chk.id === 'chk-adicional-sem-confetes') {
                    chk.addEventListener('change', () => {
                        const corSelecionada = document.querySelector('input[name="cor-balao"]:checked');
                        if (corSelecionada) {
                            corSelecionada.click();
                        }
                    });
                }
            });

            // Roda a função uma vez logo que abre a página para já exibir o preço base
            atualizarPrecoDinamicamente();
        }
    } else {
        alert('Atenção: Este modelo não foi encontrado!');
        const rootPath = window.location.pathname.includes('baloes-prontos') ? '../../' : '';
        window.location.href = rootPath + 'modelos.html';
    }
}

// ==========================================
// 4. EVENTOS DE INTERAÇÃO (LISTENERS)
// ==========================================
function adicionarEventosDeCor() {
    // A lógica de cores agora é feita pelo listener global 'CORREÇÃO DEFINITIVA DAS CORES' 
    // na linha 700 para evitar conflitos de caminhos de imagem.
}

if (!modeloAtual) adicionarEventosDeCor();

if (inputTexto) {
    inputTexto.addEventListener('input', (event) => {
        const textoDigitado = event.target.value;
        previewTexto.textContent = textoDigitado;
        contadorTexto.textContent = `${textoDigitado.length}/30`;
    });
}

if (selectFonte) {
    selectFonte.addEventListener('change', (event) => {
        previewTexto.style.fontFamily = event.target.value;
    });
}

if (inputTamanho) {
    inputTamanho.addEventListener('input', (event) => {
        previewTexto.style.fontSize = `${event.target.value}px`;
    });
}

botoesAlinhamento.forEach(botao => {
    botao.addEventListener('click', (event) => {
        botoesAlinhamento.forEach(b => b.classList.remove('active'));
        const botaoClicado = event.currentTarget;
        botaoClicado.classList.add('active');
        previewTexto.style.textAlign = botaoClicado.getAttribute('data-align');
    });
});

if (btnLimpar) {
    btnLimpar.addEventListener('click', () => {
        inputTexto.value = '';
        previewTexto.textContent = '';
        contadorTexto.textContent = '0/30';
    });
}

// ==========================================
// 5. LÓGICA DO MENU HAMBÚRGUER (MOBILE) E LOGIN
// ==========================================
const btnAbrirMenu = document.getElementById('open-menu-btn');
const btnFecharMenu = document.getElementById('close-menu-btn');
const menuOverlay = document.getElementById('menu-overlay');
const mobileMenu = document.getElementById('mobile-menu');

if (btnAbrirMenu && btnFecharMenu && menuOverlay && mobileMenu) {
    btnAbrirMenu.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    function fecharMenu() {
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    btnFecharMenu.addEventListener('click', fecharMenu);
    menuOverlay.addEventListener('click', fecharMenu);
}

const formLogin = document.getElementById('form-login');
const menuLinks = document.querySelector('.menu-links');
const usuarioLogado = localStorage.getItem('usuarioLogado');

if (usuarioLogado === 'admin' && menuLinks) {
    menuLinks.innerHTML = `
        <li><a href="index.html">Início</a></li>
        <li><a href="modelos.html">Modelos de Balões</a></li>
        <li><a href="meus-pedidos.html">Carrinho</a></li>
        <li><a href="admin.html" style="color: var(--cor-primaria);">Painel Admin ⚙️</a></li>
        <li><a href="#" id="btn-sair">Sair</a></li>
    `;
    const btnSair = document.getElementById('btn-sair');
    if (btnSair) {
        btnSair.addEventListener('click', () => {
            localStorage.removeItem('usuarioLogado');
            window.location.reload();
        });
    }
}

// ==========================================
// 6. GERAR VITRINE DO CLIENTE AUTOMATICAMENTE
// ==========================================
const gridCliente = document.getElementById('grid-catalogo-cliente');
const inputPesquisaModelo = document.getElementById('pesquisa-modelo');
const selectFiltroCategoria = document.getElementById('filtro-categoria');
const areaFiltrosCatalogo = document.getElementById('area-filtros-catalogo');

function inicializarFiltros() {
    if (!selectFiltroCategoria) return;

    // 1. Pega apenas os balões que estão marcados como 'ativo'
    const modelosAtivos = modelosSalvos.filter(m => m.status === 'ativo');
    
    // 2. Se não houver nenhum modelo ativo, esconde a barra de busca e filtros inteira
    if (modelosAtivos.length === 0) {
        if (areaFiltrosCatalogo) areaFiltrosCatalogo.style.display = 'none';
        return;
    } else {
        if (areaFiltrosCatalogo) areaFiltrosCatalogo.style.display = 'flex';
    }

    // 3. Mágica para pegar as categorias: Extrai todas, remove repetidas e remove as vazias
    const categoriasUnicas = [...new Set(modelosAtivos.map(m => m.categoria))].filter(Boolean);

    // 4. Limpa o select e coloca a opção padrão de volta
    selectFiltroCategoria.innerHTML = '<option value="todas">Todas as categorias</option>';
    
    // 5. Cria uma nova opção (<option>) para cada categoria real que o sistema encontrou
    categoriasUnicas.forEach(categoria => {
        const option = document.createElement('option');
        // Limpa a categoria para o value (sem acentos e minúscula)
        option.value = categoria.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        option.textContent = categoria;
        selectFiltroCategoria.appendChild(option);
    });
}


function renderizarVitrine() {
    // A função antiga não fará nada, pois usaremos a nova lógica abaixo.
}


// ==========================================
// NOVA LÓGICA DE FILTROS DO CATÁLOGO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const inputPesquisa = document.getElementById('pesquisa-modelo');
    const categoryItems = document.querySelectorAll('.category-item');
    const filterGroups = document.querySelectorAll('.filter-group');
    const checkboxesTipo = filterGroups[0] ? filterGroups[0].querySelectorAll('input[type="checkbox"]') : [];
    const checkboxesOcasiao = filterGroups[2] ? filterGroups[2].querySelectorAll('input[type="checkbox"]') : [];
    const colorDots = document.querySelectorAll('.color-dot');
    const btnLimparFiltros = document.querySelector('.btn-clear-filters');
    const selectSort = document.querySelector('.sort-box select');
    const gridClient = document.getElementById('grid-catalogo-cliente');
    
    let currentCategory = 'Todos';
    let selectedColors = [];

    function runFilters() {
        if (!gridClient) return;

        gridClient.innerHTML = '';

        const termoBusca = inputPesquisa ? inputPesquisa.value.toLowerCase().trim() : '';
        const tiposMarcados = Array.from(checkboxesTipo).filter(cb => cb.checked).map(cb => cb.parentElement.textContent.trim().toLowerCase());
        const ocasioesMarcadas = Array.from(checkboxesOcasiao).filter(cb => cb.checked).map(cb => cb.parentElement.textContent.trim().toLowerCase());
        const sortValue = selectSort ? selectSort.value : 'Mais procurados';

        let modelosFiltrados = modelosSalvos.filter(modelo => {
            const ativo = modelo.status === 'ativo';
            const nomeModelo = (modelo.nome || '').toLowerCase();
            const categoriaModelo = (modelo.categoria || '').toLowerCase();
            const tagsModelo = (modelo.tags || []).map(t => t.toLowerCase());
            
            const passaBusca = nomeModelo.includes(termoBusca) || tagsModelo.some(t => t.includes(termoBusca));
            
            let passaCategoriaPrincipal = true;
            if (currentCategory !== 'Todos') {
                const catBusca = currentCategory.toLowerCase();
                const stemCat = catBusca.replace(/ões$/, 'ão').replace(/s$/, '');
                passaCategoriaPrincipal = nomeModelo.includes(catBusca) || categoriaModelo.includes(catBusca) || tagsModelo.some(t => t.includes(stemCat) || stemCat.includes(t));
            }

            let passaTipo = true;
            if (tiposMarcados.length > 0) {
                passaTipo = tiposMarcados.some(tipo => {
                    const stemTipo = tipo.replace(/ões$/, 'ão').replace(/s$/, '');
                    return nomeModelo.includes(tipo) || tagsModelo.some(t => t.includes(stemTipo) || stemTipo.includes(t));
                });
            }

            let passaOcasiao = true;
            if (ocasioesMarcadas.length > 0) {
                passaOcasiao = ocasioesMarcadas.some(ocas => {
                    const stemOcas = ocas.replace(/ões$/, 'ão').replace(/s$/, '');
                    return nomeModelo.includes(ocas) || tagsModelo.some(t => t.includes(stemOcas) || stemOcas.includes(t));
                });
            }

            let passaCor = true;
            if (selectedColors.length > 0) {
                if (modelo.cores && modelo.cores.length > 0) {
                    passaCor = selectedColors.some(selColor => modelo.cores.some(c => c.nome.toLowerCase().includes(selColor)));
                } else {
                    passaCor = false; // Se escolheu cor, mas modelo nao tem cor, falha
                }
            }

            return ativo && passaBusca && passaCategoriaPrincipal && passaTipo && passaCor;
        });

        if (sortValue === 'Menor preço') {
            modelosFiltrados.sort((a, b) => parseFloat(a.preco.replace(',','.')) - parseFloat(b.preco.replace(',','.')));
        } else if (sortValue === 'Maior preço') {
            modelosFiltrados.sort((a, b) => parseFloat(b.preco.replace(',','.')) - parseFloat(a.preco.replace(',','.')));
        }

        if (modelosFiltrados.length === 0) {
            gridClient.innerHTML = '<p style="text-align: center; width: 100%; grid-column: 1 / -1; color: var(--cor-texto-medio); padding: 40px;">Poxa, nenhum modelo encontrado com esses filtros. 🎈</p>';
            return;
        }

        modelosFiltrados.forEach(modelo => {
            let linkPersonalizacao = `personalizacao.html?modelo=${modelo.id}`;
            if (modelo.imagem && modelo.imagem.includes('baloes-prontos/')) {
                const pasta = modelo.imagem.split('/')[1];
                linkPersonalizacao = `baloes-prontos/${pasta}/personalizacao.html?modelo=${modelo.id}`;
            }
            
            let dotsHTML = '';
            if (modelo.cores && modelo.cores.length > 0) {
                modelo.cores.slice(0, 5).forEach(cor => {
                    dotsHTML += `<span class="color-dot-small" style="background: ${cor.corHex};" title="${cor.nome}"></span>`;
                });
            }

            gridClient.innerHTML += `
                <a href="${linkPersonalizacao}" class="product-link" style="text-decoration: none;">
                    <div class="product-card-new">
                        <div class="favorite-icon"><i class="fa-regular fa-heart"></i></div>
                        <img src="${modelo.imagem}" alt="${modelo.nome}">
                        <h3>${modelo.nome}</h3>
                        <div class="product-colors">
                            ${dotsHTML}
                        </div>
                        <button class="btn-details">Ver detalhes <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </a>
            `;
        });
    }

    runFilters();

    if (inputPesquisa) inputPesquisa.addEventListener('input', runFilters);
    if (selectSort) selectSort.addEventListener('change', runFilters);
    
    checkboxesTipo.forEach(cb => cb.addEventListener('change', runFilters));
    checkboxesOcasiao.forEach(cb => cb.addEventListener('change', runFilters));

    colorDots.forEach(dot => {
        dot.addEventListener('click', () => {
            dot.classList.toggle('active-color');
            if (dot.classList.contains('active-color')) {
                dot.style.transform = 'scale(1.2)';
                dot.style.boxShadow = '0 0 0 2px #c48f82';
                selectedColors.push(dot.getAttribute('data-color'));
            } else {
                dot.style.transform = 'scale(1)';
                dot.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
                if (dot.style.background.includes('fff')) dot.style.border = '1px solid #ccc';
                selectedColors = selectedColors.filter(c => c !== dot.getAttribute('data-color'));
            }
            runFilters();
        });
    });

    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            categoryItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            currentCategory = item.querySelector('span').textContent.trim();
            runFilters();
        });
    });

    if (btnLimparFiltros) {
        btnLimparFiltros.addEventListener('click', () => {
            if (inputPesquisa) inputPesquisa.value = '';
            checkboxesTipo.forEach(cb => cb.checked = false);
            checkboxesOcasiao.forEach(cb => cb.checked = false);
            categoryItems.forEach(i => i.classList.remove('active'));
            if(categoryItems[0]) categoryItems[0].classList.add('active');
            currentCategory = 'Todos';
            colorDots.forEach(dot => {
                dot.classList.remove('active-color');
                dot.style.transform = 'scale(1)';
                dot.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            });
            selectedColors = [];
            if (selectSort) selectSort.value = 'Mais procurados';
            runFilters();
        });
    }
});


