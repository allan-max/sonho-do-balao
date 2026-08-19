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
                            const rootPathImg = window.location.pathname.includes('baloes-prontos') ? '../../' : '';
                            overlayImg.src = rootPathImg + imgAdicional;
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

if (usuarioLogado && menuLinks) {
    if (usuarioLogado === 'admin') {
        const adminLi = document.createElement('li');
        adminLi.innerHTML = `<a href="admin.html" style="color: var(--cor-primaria);"><i class="fa-solid fa-gear"></i> Painel Admin</a>`;
        menuLinks.appendChild(adminLi);
    }
    
    const btnSair = document.getElementById('btn-sair');
    if (btnSair) {
        btnSair.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('usuarioLogado');
            window.location.reload();
        });
    }

    // Altera o ícone de login no cabeçalho (desktop) para "Sair"
    const headerUserLinks = document.querySelectorAll('.header-actions a[href*="login.html"]');
    headerUserLinks.forEach(link => {
        link.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i>';
        link.title = 'Terminar Sessão';
        link.href = '#';
        link.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('usuarioLogado');
            window.location.href = 'index.html';
        });
    });

    // Altera o link de login no menu mobile para "Terminar Sessão"
    const mobileUserLinks = document.querySelectorAll('.menu-links a[href*="login.html"]');
    mobileUserLinks.forEach(link => {
        link.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i> Terminar Sessão';
        link.title = 'Terminar Sessão';
        link.href = '#';
        link.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('usuarioLogado');
            window.location.href = 'index.html';
        });
    });
}

if (formLogin) {
    formLogin.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailDigitado = formLogin.querySelector('input[type="email"]').value;
        if (emailDigitado === 'admin@admin.com') {
            localStorage.setItem('usuarioLogado', 'admin');
            window.location.href = 'admin.html';
        } else {
            localStorage.setItem('usuarioLogado', 'cliente');
            alert('Login de cliente feito com sucesso!');
            window.location.href = 'index.html';
        }
    });
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



// ==========================================
// CORREÇÃO DEFINITIVA DAS CORES (DELEGAÇÃO ABSOLUTA)
// ==========================================
const containerCoresBalao = document.getElementById('container-cores-balao');
const imgBalaoCor = document.getElementById('imagem-balao');

if (containerCoresBalao) {
    // Fica de olho em QUALQUER clique dentro da caixa de cores
    containerCoresBalao.addEventListener('click', (event) => {
        
        // 1. Procura qual botão de cor está perto de onde o cliente clicou
        // Pode ser o próprio botão, ou um botão que esteja dentro da bolinha clicada, 
        // ou o botão que pertença à mesma "caixa" (parent) da bolinha.
        let inputClicado = event.target;
        
        // Se não clicou direto no input, vamos caçá-lo ao redor!
        if (inputClicado.tagName !== 'INPUT') {
            // Tenta achar dentro do elemento clicado
            let inputInterno = inputClicado.querySelector('input[type="radio"][name="cor-balao"]');
            if (inputInterno) {
                inputClicado = inputInterno;
            } else {
                // Tenta achar na mesma "caixinha" (pai) do elemento clicado
                let inputIrmao = inputClicado.parentElement ? inputClicado.parentElement.querySelector('input[type="radio"][name="cor-balao"]') : null;
                if (inputIrmao) {
                    inputClicado = inputIrmao;
                }
            }
        }

        // 2. Se a caçada foi um sucesso e achamos o botão da cor
        if (inputClicado && inputClicado.tagName === 'INPUT' && inputClicado.name === 'cor-balao') {
            
            // Força a bolinha a ficar marcada (faz o visual de selecionado aparecer!)
            inputClicado.checked = true;
            
            // Para garantir que o navegador atualizou o visual, disparamos um evento falso
            inputClicado.dispatchEvent(new Event('change', { bubbles: true }));
            
            // 3. Pega a cor e atualiza a imagem
            const corSelecionada = inputClicado.value.toLowerCase();
            const urlParamsCor = new URLSearchParams(window.location.search);
            const modeloId = urlParamsCor.get('modelo') || 'bubble';
            
            const dbModelos = JSON.parse(localStorage.getItem('bancoModelos')) || [];
            const modeloAtual = dbModelos.find(m => m.id === modeloId);
            const rootPathImg = window.location.pathname.includes('baloes-prontos') ? '../../' : '';
            const dataImagem = inputClicado.getAttribute('data-imagem');
            
            setTimeout(() => {
                let imgFinal = dataImagem;
                const chkSemConfetes = document.getElementById('chk-adicional-sem-confetes');
                if (chkSemConfetes && chkSemConfetes.checked && imgFinal && !imgFinal.includes('-sem-confetes')) {
                    imgFinal = imgFinal.replace(/(\.png|\.jpg|\.jpeg)$/i, '-sem-confetes$1');
                }

                if (imgFinal && imgFinal.trim() !== '' && imgFinal !== 'undefined' && imgFinal !== 'null') {
                    if (imgBalaoCor) imgBalaoCor.src = rootPathImg + imgFinal;
                }
                else if (['bubble', 'coracao', 'estrela'].includes(modeloId)) {
                    if (imgBalaoCor) imgBalaoCor.src = rootPathImg + `balao/${modeloId}-${corSelecionada}.png`;
                } 
                else if (modeloAtual && modeloAtual.imagem) {
                    if (imgBalaoCor) imgBalaoCor.src = rootPathImg + modeloAtual.imagem;
                }
            }, 50);
        }
    });
}
// ==========================================
// 8. CARRINHO DINÂMICO, CONFIRMAÇÃO E SUCESSO
// ==========================================
const btnComprar = document.getElementById('btn-comprar');

if (btnComprar) {
    btnComprar.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o botão de recarregar a página sem querer

        try {
            // Pega o modelo da URL com segurança
            const urlParams = new URLSearchParams(window.location.search);
            const modeloAtualId = urlParams.get('modelo') || 'BALAO';

            // Pega os elementos da tela na hora exata do clique
            const inputCorBalao = document.querySelector('input[name="cor-balao"]:checked');
            const imagemBalao = document.getElementById('imagem-balao');

            // Lê as 3 linhas de texto
            const linhasTexto = [1, 2, 3].map(num => {
                const elTexto = document.getElementById(`texto-linha-${num}`);
                const elFonte = document.getElementById(`fonte-linha-${num}`);
                const elCor = document.getElementById(`cor-linha-${num}`);
                const elTamanho = document.getElementById(`tamanho-linha-${num}`);
                const preview = document.getElementById(`preview-linha-${num}`);
                
                if (!elTexto || !elTexto.value.trim()) return null;
                
                let tamanhoRelativo = 7; // default fallback (approx 28px/400px)
                if (preview && preview.parentElement) {
                    const parentWidth = preview.parentElement.offsetWidth || 400;
                    tamanhoRelativo = ((elTamanho ? parseFloat(elTamanho.value) : 28) / parentWidth) * 100;
                }

                return {
                    texto: elTexto.value,
                    fonte: elFonte ? elFonte.value : 'Inter',
                    cor: elCor ? elCor.value : '#1a1a1a',
                    tamanho: elTamanho ? elTamanho.value : '28',
                    tamanhoRelativo: tamanhoRelativo,
                    top: preview ? preview.style.top : '50%',
                    left: preview ? preview.style.left : '50%'
                };
            }).filter(Boolean);

            // Calcula o valor total e pega adicionais
            const modelosDb = JSON.parse(localStorage.getItem('bancoModelos')) || [];
            const modeloSelecionado = modelosDb.find(m => m.id === modeloAtualId);

            let valorFinalCalculado = 0;
            if (modeloSelecionado && modeloSelecionado.preco) {
                valorFinalCalculado = parseFloat(String(modeloSelecionado.preco).replace(',', '.'));
            }

            const chksMarcados = document.querySelectorAll('.chk-adicional-cliente:checked');
            const adicionaisLista = [];
            chksMarcados.forEach(c => {
                valorFinalCalculado += parseFloat((c.getAttribute('data-preco') || '0').replace(',', '.'));
                const labelElement = c.nextElementSibling;
                const nomeAdc = labelElement ? labelElement.textContent.replace(/R\$.*/, '').trim() : c.value;
                adicionaisLista.push(nomeAdc);
            });

            // Monta a sacola
            const carrinho = {
                modelo: modeloAtualId.toUpperCase(),
                corBalao: inputCorBalao ? (inputCorBalao.nextElementSibling ? inputCorBalao.nextElementSibling.title : inputCorBalao.value) : 'Padrão',
                linhasTexto: linhasTexto,
                texto: linhasTexto.map(l => l.texto).join(' | '),
                corTexto: linhasTexto.length > 0 ? linhasTexto[0].cor : 'N/A',
                fonte: linhasTexto.length > 0 ? linhasTexto[0].fonte : 'N/A',
                adicionais: adicionaisLista,
                imagem: imagemBalao ? imagemBalao.src : 'balao/balao-branco.png',
                escalaImagem: imagemBalao ? imagemBalao.style.transform : 'none',
                valor: valorFinalCalculado.toFixed(2).replace('.', ',')
            };

            // Salva na memória e pula de página!
            localStorage.setItem('carrinhoAtual', JSON.stringify(carrinho));
            const rootPathHref = window.location.pathname.includes('baloes-prontos') ? '../../' : '';
            window.location.href = rootPathHref + 'confirmacao.html';

        } catch (erro) {
            console.error("Ops! O erro que travou o botão foi:", erro);
            alert("Aconteceu um erro ao tentar avançar! Verifique o console (F12).");
        }
    });
}

const sumarioConfirmacao = document.querySelector('.summary-card');
if (sumarioConfirmacao && window.location.pathname.includes('confirmacao.html')) {
    const carrinho = JSON.parse(localStorage.getItem('carrinhoAtual'));
    if (carrinho) {
        const confImagem = document.getElementById('conf-imagem');
        if (confImagem) {
            confImagem.src = carrinho.imagem;
            if (carrinho.escalaImagem && carrinho.escalaImagem !== 'none') {
                confImagem.style.transform = carrinho.escalaImagem;
                confImagem.style.transformOrigin = 'center';
            }
            if (confImagem.parentElement) {
                confImagem.parentElement.style.containerType = 'inline-size';
            }
        }

        // Renderiza as 3 linhas na imagem, se existirem
        if (carrinho.linhasTexto) {
            carrinho.linhasTexto.forEach((linha, i) => {
                const previewTextLine = document.getElementById(`conf-preview-linha-${i+1}`);
                if (previewTextLine) {
                    previewTextLine.textContent = linha.texto;
                    previewTextLine.style.fontFamily = linha.fonte;
                    
                    if (linha.tamanhoRelativo) {
                        previewTextLine.style.fontSize = `${linha.tamanhoRelativo}cqw`;
                    } else {
                        previewTextLine.style.fontSize = `${linha.tamanho}px`;
                    }
                    
                    previewTextLine.style.top = linha.top;
                    previewTextLine.style.left = linha.left;
                    
                    if (linha.cor === 'branco' || linha.cor === '#ffffff') {
                        previewTextLine.style.color = '#ffffff';
                        previewTextLine.style.textShadow = '0px 1px 3px rgba(0,0,0,0.6)';
                    } else {
                        previewTextLine.style.color = linha.cor;
                    }
                }
            });
        }

        const confModelo = document.getElementById('conf-modelo');
        if (confModelo) confModelo.textContent = carrinho.modelo;
        const confCor = document.getElementById('conf-cor');
        if (confCor) confCor.textContent = carrinho.corBalao;
        const confCorTexto = document.getElementById('conf-cor-texto');
        if (confCorTexto) confCorTexto.textContent = carrinho.corTexto;
        const confTexto = document.getElementById('conf-texto');
        if (confTexto) confTexto.textContent = carrinho.texto || 'Sem texto';
        const confFonte = document.getElementById('conf-fonte');
        if (confFonte) confFonte.textContent = carrinho.fonte;
        
        const confAdicionais = document.getElementById('conf-adicionais');
        if (confAdicionais) {
            if (carrinho.adicionais && carrinho.adicionais.length > 0) {
                confAdicionais.textContent = carrinho.adicionais.join(', ');
            } else {
                confAdicionais.textContent = 'Nenhum';
            }
        }
    }
}

const btnFinalizarPedido = document.getElementById('btn-finalizar-pedido');
if (btnFinalizarPedido) {
    btnFinalizarPedido.addEventListener('click', (event) => {
        event.preventDefault();
        const inputNome = document.getElementById('cliente-nome');
        const inputTelefone = document.getElementById('cliente-telefone');

        const carrinho = JSON.parse(localStorage.getItem('carrinhoAtual'));
        if (!carrinho) {
            alert('Ops! O seu carrinho parece estar vazio.');
            return;
        }

        // 1. Puxa a lista da gaveta CORRETA
        let pedidos = JSON.parse(localStorage.getItem('pedidosBaloes')) || [];

        const novoPedido = {
            id: '#' + Math.floor(1000 + Math.random() * 9000),
            cliente: (inputNome && inputNome.value) ? inputNome.value : 'Cliente Especial',
            telefone: (inputTelefone && inputTelefone.value) ? inputTelefone.value : '(00) 00000-0000',
            data: new Date().toLocaleDateString('pt-BR'),
            status: 'Aguardando Análise',
            valor: carrinho.valor,
            imagem: carrinho.imagem,
            escalaImagem: carrinho.escalaImagem || 'none',
            modelo: carrinho.modelo,
            corBalao: carrinho.corBalao,
            texto: carrinho.texto,
            fonte: carrinho.fonte,
            corTexto: carrinho.corTexto,
            linhasTexto: carrinho.linhasTexto || [],
            adicionais: carrinho.adicionais || []
        };

        pedidos.push(novoPedido);

        // 2. A MÁGICA AQUI: Salva na gaveta CORRETA ('pedidosBaloes' com S no final!)
        localStorage.setItem('pedidosBaloes', JSON.stringify(pedidos));

        localStorage.removeItem('carrinhoAtual');
        window.location.href = 'sucesso.html';
    });
}

const containerSucesso = document.getElementById('resumo-pedido-sucesso');
if (containerSucesso) {
    let pedidos = JSON.parse(localStorage.getItem('pedidosBaloes')) || [];
    if (pedidos.length > 0) {
        const ultimoPedido = pedidos[pedidos.length - 1];
        
        let extrasTexto = '';
        if (ultimoPedido.adicionais && ultimoPedido.adicionais.length > 0) {
            extrasTexto = `<div class="success-detail-row"><strong>Adicionais:</strong> <span>${ultimoPedido.adicionais.join(', ')}</span></div>`;
        }

        containerSucesso.innerHTML = `
            <h3 style="color: var(--cor-texto-escuro); border-bottom: 2px solid #fff; padding-bottom: 10px; margin-bottom: 16px; text-align: center;">
                Resumo do seu Sonho ${ultimoPedido.id}
            </h3>
            <div class="success-detail-row"><strong>Cliente:</strong> <span>${ultimoPedido.cliente}</span></div>
            <div class="success-detail-row"><strong>Modelo:</strong> <span>${ultimoPedido.modelo}</span></div>
            <div class="success-detail-row"><strong>Cor:</strong> <span>${ultimoPedido.corBalao}</span></div>
            <div class="success-detail-row"><strong>Frase:</strong> <span>"${ultimoPedido.texto}"</span></div>
            ${extrasTexto}
            <div class="success-detail-row" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 10px;">
                <strong>Total a Pagar:</strong> <span style="color: var(--cor-primaria); font-size: 18px;">R$ ${ultimoPedido.valor}</span>
            </div>
        `;
    }

    const balloonContainer = document.getElementById('balloon-container');
    if (balloonContainer) {
        const simbolos = ['🎈', '✨', '💖', '🎉'];
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const balao = document.createElement('div');
                balao.classList.add('floating-balloon');
                balao.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
                balao.style.left = Math.random() * 100 + 'vw';
                balao.style.fontSize = (Math.random() * 25 + 20) + 'px';
                balao.style.animationDuration = (Math.random() * 4 + 4) + 's';
                balloonContainer.appendChild(balao);
                setTimeout(() => { balao.remove(); }, 8000);
            }, i * 300);
        }
    }
}

// ==========================================
// 9. ÁREA DE UPLOAD DE IMAGEM COM PREVIEW
// ==========================================
const uploadArea = document.getElementById('upload-area');
const inputImagem = document.getElementById('input-imagem');
const previewImagem = document.getElementById('preview-imagem');
const uploadText = document.getElementById('upload-text');

if (uploadArea && inputImagem) {
    uploadArea.addEventListener('click', () => inputImagem.click());
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });
    uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        if (e.dataTransfer.files.length) {
            inputImagem.files = e.dataTransfer.files;
            mostrarPreview(e.dataTransfer.files[0]);
        }
    });

    inputImagem.addEventListener('change', (e) => {
        if (e.target.files.length) mostrarPreview(e.target.files[0]);
    });

    function mostrarPreview(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImagem.src = e.target.result;
            previewImagem.style.display = 'block';
            uploadText.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
}

// ==========================================
// 10. MODAL DE EDIÇÃO DOS MODELOS
// ==========================================
const modalEditar = document.getElementById('modal-editar');
const btnFecharModal = document.getElementById('btn-fechar-modal');
const btnSalvarEdicao = document.getElementById('btn-salvar-edicao');

if (btnFecharModal && modalEditar) {
    btnFecharModal.addEventListener('click', () => modalEditar.classList.remove('open'));
}

function abrirModalEdicao(modelo) {
    document.getElementById('edit-id').value = modelo.id;
    document.getElementById('edit-nome').value = modelo.nome;
    document.getElementById('edit-preco').value = modelo.preco;
    modalEditar.classList.add('open');
}

if (btnSalvarEdicao) {
    btnSalvarEdicao.addEventListener('click', () => {
        const id = document.getElementById('edit-id').value;
        const novoNome = document.getElementById('edit-nome').value;
        const novoPreco = document.getElementById('edit-preco').value;

        let modelos = JSON.parse(localStorage.getItem('bancoModelos')) || [];

        const index = modelos.findIndex(m => m.id == id);
        if (index !== -1) {
            modelos[index].nome = novoNome;
            modelos[index].preco = novoPreco;
            localStorage.setItem('bancoModelos', JSON.stringify(modelos));

            alert('Modelo atualizado com sucesso! ✨');
            modalEditar.classList.remove('open');
            window.location.reload();
        }
    });
}

// ==========================================
// MÁGICA: 3 LINHAS E ARRASTAR TEXTOS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const linhas = [1, 2, 3];

    linhas.forEach(num => {
        const inputTexto = document.getElementById(`texto-linha-${num}`);
        const selectFonte = document.getElementById(`fonte-linha-${num}`);
        const inputCor = document.getElementById(`cor-linha-${num}`);
        const inputTamanho = document.getElementById(`tamanho-linha-${num}`); // Lendo o Tamanho!
        const preview = document.getElementById(`preview-linha-${num}`);

        if (!inputTexto || !preview) return; // Só roda se estiver na página certa

        // 1. Atualiza o texto na imagem na mesma hora
        function atualizarPreview() {
            preview.innerText = inputTexto.value;
            preview.style.fontFamily = selectFonte.value;
            preview.style.color = inputCor.value;
            if (inputTamanho) {
                preview.style.fontSize = `${inputTamanho.value}px`; // Atualiza o tamanho da fonte!
            }
        }

        // Fica de ouvidos abertos para qualquer mudança que o cliente fizer:
        inputTexto.addEventListener('input', atualizarPreview);
        selectFonte.addEventListener('change', atualizarPreview);
        inputCor.addEventListener('input', atualizarPreview);
        if (inputTamanho) inputTamanho.addEventListener('input', atualizarPreview);

        // 2. Lógica de Arrastar (Mouse e Celular)
        let isDragging = false;
        let startX, startY, initialLeft, initialTop;

        const startDrag = (e) => {
            isDragging = true;
            const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;

            startX = clientX;
            startY = clientY;
            initialLeft = preview.offsetLeft;
            initialTop = preview.offsetTop;

            preview.style.cursor = 'grabbing';
            if (e.cancelable) e.preventDefault();
        };

        const onDrag = (e) => {
            if (!isDragging) return;
            const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
            const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;

            const dx = clientX - startX;
            const dy = clientY - startY;

            preview.style.left = `${initialLeft + dx}px`;
            preview.style.top = `${initialTop + dy}px`;
        };

        const stopDrag = () => {
            if (!isDragging) return;
            isDragging = false;
            preview.style.cursor = 'grab';
            
            // Converte a posição para porcentagem para não sumir nas miniaturas menores!
            const parent = preview.parentElement;
            if (parent) {
                const parentRect = parent.getBoundingClientRect();
                const leftPct = (preview.offsetLeft / parentRect.width) * 100;
                const topPct = (preview.offsetTop / parentRect.height) * 100;
                preview.style.left = `${leftPct}%`;
                preview.style.top = `${topPct}%`;
            }
        };

        preview.addEventListener('mousedown', startDrag);
        document.addEventListener('mousemove', onDrag);
        document.addEventListener('mouseup', stopDrag);

        preview.addEventListener('touchstart', startDrag, { passive: false });
        document.addEventListener('touchmove', onDrag, { passive: false });
        document.addEventListener('touchend', stopDrag);

        // Dá a primeira carregada para o tamanho inicial (28px) ser aplicado
        atualizarPreview();
    });

    // 3. Exibir a caixa de Adicionais
    const containerAdicionaisCliente = document.getElementById('container-adicionais-cliente');
    const boxAdicionais = document.getElementById('box-adicionais-cliente');

    if (containerAdicionaisCliente && containerAdicionaisCliente.innerHTML.trim() !== '') {
        if (boxAdicionais) boxAdicionais.style.display = 'block';
    }
});

// --- ATUALIZAR PREÇO NA TELA DE CONFIRMAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
    const confPreco = document.getElementById('conf-preco');
    const carrinho = JSON.parse(localStorage.getItem('carrinhoAtual'));

    if (confPreco && carrinho && carrinho.valor) {
        confPreco.textContent = `R$ ${carrinho.valor}`;
    }
});
// ==========================================
// 7. SISTEMA DE PEDIDOS (ADMIN)
// ==========================================
if (!localStorage.getItem('pedidosBaloes')) {
    const pedidosTeste = [
        { id: '#1001', cliente: 'Ana Silva', telefone: '(27) 99999-1111', data: '15/10/2023', status: 'Aguardando Análise', valor: 'R$ 85,00', modelo: 'Bubble', cor: 'Transparente', texto: 'Feliz Aniversário', fonte: 'Great Vibes', corTexto: 'Preto' },
        { id: '#1002', cliente: 'Marcos Paulo', telefone: '(27) 99999-2222', data: '16/10/2023', status: 'Em produção', valor: 'R$ 120,00', modelo: 'Coração Metalizado', cor: 'Vermelho', texto: 'Te Amo', fonte: 'Arial', corTexto: 'Branco' }
    ];
    localStorage.setItem('pedidosBaloes', JSON.stringify(pedidosTeste));
}

// ==========================================
// FUNÇÃO PARA DESENHAR A TABELA E UNIFICAR BANCOS
// ==========================================
function carregarTabelaPedidos() {

    const tbody = document.getElementById('tabela-pedidos-body');
    if (!tbody) return;

    tbody.innerHTML = '';

    // 1. SISTEMA ANTI-ENGASGO: Tenta ler; se der erro, ele ignora e cria do zero!
    let banco1 = [];
    let banco2 = [];

    try {
        banco1 = JSON.parse(localStorage.getItem('pedidosBaloes')) || [];
    } catch (e) {
        localStorage.removeItem('pedidosBaloes'); // Memória corrompida! Limpando...
    }

    try {
        banco2 = JSON.parse(localStorage.getItem('pedidosBaloes')) || [];
    } catch (e) {
        localStorage.removeItem('pedidosBaloes');
    }

    // Se tudo estiver vazio (ou recém-limpo), ele recria os pedidos de teste para você não ficar com a tela vazia
    if (banco1.length === 0 && banco2.length === 0) {
        banco1 = [
            { id: '#1001', cliente: 'Ana Silva', telefone: '(27) 99999-1111', data: '15/10/2023', status: 'Aguardando Análise', valor: 'R$ 85,00', modelo: 'Bubble', cor: 'Transparente', texto: 'Feliz Aniversário', fonte: 'Great Vibes', corTexto: 'Preto' },
            { id: '#1002', cliente: 'Marcos Paulo', telefone: '(27) 99999-2222', data: '16/10/2023', status: 'Em produção', valor: 'R$ 120,00', modelo: 'Coração Metalizado', cor: 'Vermelho', texto: 'Te Amo', fonte: 'Arial', corTexto: 'Branco' }
        ];
    }

    // Junta tudo que encontrou
    let todosOsPedidos = [...banco1, ...banco2];

    // Remove duplicatas
    let pedidos = todosOsPedidos.filter((pedido, index, self) =>
        index === self.findIndex((p) => p.id === pedido.id)
    );

    // Salva a versão limpa e corrigida!
    localStorage.setItem('pedidosBaloes', JSON.stringify(pedidos));

    // --- Lógica da Busca e Filtros ---
    const inputPesquisa = document.getElementById('pesquisa-pedido');
    const selectFiltro = document.getElementById('filtro-pedidos');

    const termoBusca = inputPesquisa ? inputPesquisa.value.toLowerCase().trim() : '';
    const statusFiltro = selectFiltro ? selectFiltro.value.toLowerCase() : 'todos';

    let pedidosFiltrados = pedidos.filter(pedido => {
        const statusPedido = (pedido.status || '').toLowerCase();
        const passaStatus = (statusFiltro === 'todos') || (statusPedido === statusFiltro);

        const idTexto = (pedido.id || '').toString().toLowerCase();
        const clienteTexto = (pedido.cliente || '').toLowerCase();
        const valorTexto = (pedido.valor || '').toLowerCase();

        const passaBusca = termoBusca === '' ||
            idTexto.includes(termoBusca) ||
            clienteTexto.includes(termoBusca) ||
            valorTexto.includes(termoBusca);

        return passaStatus && passaBusca;
    });
    // ---------------------------------

    pedidosFiltrados.forEach(pedido => {
        const trResumo = document.createElement('tr');
        trResumo.className = 'pedido-resumo';

        let badgeClass = 'badge-warning';
        const statusFormatado = (pedido.status || '').toLowerCase();
        if (statusFormatado === 'em produção') badgeClass = 'badge-primary';
        if (statusFormatado === 'pronto para retirada') badgeClass = 'badge-teal';
        if (statusFormatado === 'concluído') badgeClass = 'badge-success';
        if (statusFormatado === 'recusado') badgeClass = 'badge-danger';

        trResumo.innerHTML = `
            <td><strong>${pedido.id || '#1001'}</strong></td>
            <td>${pedido.cliente || 'Cliente'}</td>
            <td>${pedido.data || '00/00/0000'}</td>
            <td>
                <span class="badge ${badgeClass}">
                    <span class="dot"></span> ${pedido.status || 'Aguardando Análise'}
                </span>
            </td>
            <td>
                <div class="preco-stack">
                    <span>R$</span>
                    <strong>${pedido.valor || '0,00'}</strong>
                </div>
            </td>
        `;

        const escalaStyle = (pedido.escalaImagem && pedido.escalaImagem !== 'none') ? `transform: ${pedido.escalaImagem}; transform-origin: center;` : '';
        let htmlImagem = `
            <div style="position: relative; width: 120px; border-radius: 10px; overflow: hidden; border: 1px solid #eee; flex-shrink: 0; background-color: #f9f9f9; container-type: inline-size;">
                <img src="${pedido.imagem || 'balao/coracao-vermelho.png'}" style="width: 100%; display: block; ${escalaStyle}">
        `;
        if (pedido.linhasTexto && pedido.linhasTexto.length > 0) {
            pedido.linhasTexto.forEach(linha => {
                const fallbackSize = linha.tamanho ? (parseFloat(linha.tamanho) * (120/400)) : 8;
                let tamanhoStyle = `font-size: ${fallbackSize}px;`; 
                if (linha.tamanhoRelativo) {
                    tamanhoStyle += ` font-size: ${linha.tamanhoRelativo}cqw;`;
                }
                
                const cor = (linha.cor === 'branco' || linha.cor === '#ffffff') ? '#ffffff' : linha.cor;
                const textShadow = cor === '#ffffff' ? 'text-shadow: 0px 1px 2px rgba(0,0,0,0.8);' : '';
                htmlImagem += `
                <div style="position: absolute; transform: translate(-50%, -50%); white-space: nowrap; pointer-events: none; z-index: 10; font-weight: bold;
                    font-family: ${linha.fonte}; ${tamanhoStyle} color: ${cor}; top: ${linha.top}; left: ${linha.left}; ${textShadow}">
                    ${linha.texto}
                </div>`;
            });
        }
        htmlImagem += `</div>`;

        const trDetalhes = document.createElement('tr');
        trDetalhes.className = 'pedido-detalhes-row';
        trDetalhes.innerHTML = `
            <td colspan="5" style="width: 100%;">
                <div class="detalhes-conteudo" style="flex-wrap: wrap;"> 
                    ${htmlImagem}
                    <div style="flex: 1; min-width: 200px;">
                        <h3 style="color: var(--cor-primaria); margin-bottom: 10px;">Detalhes da Encomenda</h3>
                        <p><strong>Telefone:</strong> ${pedido.telefone || '(00) 00000-0000'}</p>
                        <p><strong>Modelo:</strong> ${pedido.modelo || 'Balão'}</p>
                        <p><strong>Cor:</strong> ${pedido.corBalao || 'Padrão'}</p>
                        <p><strong>Frase:</strong> "${pedido.texto || 'Sem texto'}"</p>
                        <p><strong>Adicionais:</strong> ${(pedido.adicionais && pedido.adicionais.length > 0) ? pedido.adicionais.join(', ') : 'Nenhum'}</p>
                    </div>
                    
                    <div style="width: 100%; margin-top: 15px; padding-top: 15px; border-top: 1px dashed #ccc; display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
                        <strong style="font-size: 13px; color: var(--cor-texto-medio);">Gerenciar:</strong>
                        <select class="select-status-${pedido.id}" style="padding: 8px; border-radius: 5px; border: 1px solid #ccc; font-size: 13px; background: #fff; outline: none; cursor: pointer;">
                            <option value="Aguardando Análise" ${statusFormatado === 'aguardando análise' ? 'selected' : ''}>Aguardando Análise</option>
                            <option value="Em produção" ${statusFormatado === 'em produção' ? 'selected' : ''}>Em produção</option>
                            <option value="Pronto para retirada" ${statusFormatado === 'pronto para retirada' ? 'selected' : ''}>Pronto para retirada</option>
                            <option value="Concluído" ${statusFormatado === 'concluído' ? 'selected' : ''}>Concluído</option>
                            <option value="Recusado" ${statusFormatado === 'recusado' ? 'selected' : ''}>Recusado</option>
                        </select>
                        <button class="btn-atualizar btn-outline" style="padding: 8px 15px; font-size: 12px; border-radius: 6px;">Salvar Status</button>
                        <button class="btn-excluir" style="padding: 8px 15px; font-size: 12px; background-color: #ff4d4d; color: white; border: none; border-radius: 6px; cursor: pointer; margin-left: auto;">
                            <i class="fa-solid fa-trash"></i> Excluir
                        </button>
                    </div>
                </div>
            </td>
        `;

        trResumo.addEventListener('click', () => {
            trDetalhes.classList.toggle('open');
        });

        const btnAtualizar = trDetalhes.querySelector('.btn-atualizar');
        const selectStatus = trDetalhes.querySelector('select');
        const btnExcluir = trDetalhes.querySelector('.btn-excluir');

        if (btnAtualizar) {
            btnAtualizar.addEventListener('click', () => mudarStatusPedido(pedido.id, selectStatus.value));
        }
        if (btnExcluir) {
            btnExcluir.addEventListener('click', () => excluirPedido(pedido.id));
        }

        tbody.appendChild(trResumo);
        tbody.appendChild(trDetalhes);
    });
}

// ==========================================
// FUNÇÕES DE GERENCIAMENTO (AGORA 100% UNIFICADAS)
// ==========================================
function mudarStatusPedido(idPedido, novoStatus) {
    let pedidos = JSON.parse(localStorage.getItem('pedidosBaloes')) || [];
    const index = pedidos.findIndex(p => p.id == idPedido);

    if (index !== -1) {
        pedidos[index].status = novoStatus;
        localStorage.setItem('pedidosBaloes', JSON.stringify(pedidos));

        alert(`Sucesso! O pedido ${idPedido} agora está: ${novoStatus} ✨`);
        carregarTabelaPedidos();
    }
}

function excluirPedido(idPedido) {
    if (confirm(`⚠️ Tem certeza que deseja APAGAR o pedido ${idPedido}?\nEssa ação não pode ser desfeita!`)) {
        let pedidos = JSON.parse(localStorage.getItem('pedidosBaloes')) || [];

        pedidos = pedidos.filter(p => p.id != idPedido);
        localStorage.setItem('pedidosBaloes', JSON.stringify(pedidos));

        carregarTabelaPedidos();
    }
}

// 2.1 ATIVAR A BUSCA EM TEMPO REAL
const campoBusca = document.getElementById('pesquisa-pedido');
const campoFiltro = document.getElementById('filtro-pedidos');

if (campoBusca) {
    campoBusca.addEventListener('input', carregarTabelaPedidos);
}
if (campoFiltro) {
    campoFiltro.addEventListener('change', carregarTabelaPedidos);
}

// Carrega tudo ao abrir a página
document.addEventListener('DOMContentLoaded', carregarTabelaPedidos);
// Força o carregamento imediato caso o evento acima seja ignorado
if (document.getElementById('tabela-pedidos-body')) {
    carregarTabelaPedidos();
}

// ==========================================
// RENDERIZAR MEUS PEDIDOS (CLIENTE)
// ==========================================
function carregarMeusPedidos() {
    const listaMeusPedidos = document.getElementById('lista-meus-pedidos');
    if (!listaMeusPedidos) return;

    let pedidos = JSON.parse(localStorage.getItem('pedidosBaloes')) || [];
    listaMeusPedidos.innerHTML = '';
    
    if (pedidos.length === 0) {
        listaMeusPedidos.innerHTML = '<p style="text-align: center; color: #666;">Você ainda não possui pedidos.</p>';
        return;
    }
    
    // Mostra os mais recentes primeiro
    pedidos.slice().reverse().forEach(pedido => {
        let badgeClass = 'badge-warning';
        const statusFormatado = (pedido.status || '').toLowerCase();
        if (statusFormatado === 'em produção') badgeClass = 'badge-primary';
        if (statusFormatado === 'pronto para retirada') badgeClass = 'badge-teal';
        if (statusFormatado === 'concluído') badgeClass = 'badge-success';
        if (statusFormatado === 'recusado') badgeClass = 'badge-danger';
        
        const escalaStyle = (pedido.escalaImagem && pedido.escalaImagem !== 'none') ? `transform: ${pedido.escalaImagem}; transform-origin: center;` : '';
        let htmlImagem = `
            <div style="position: relative; width: 100px; border-radius: 8px; overflow: hidden; border: 1px solid #eee; flex-shrink: 0; background-color: #f9f9f9; container-type: inline-size;">
                <img src="${pedido.imagem || 'balao/coracao-vermelho.png'}" style="width: 100%; display: block; ${escalaStyle}">
        `;
        if (pedido.linhasTexto && pedido.linhasTexto.length > 0) {
            pedido.linhasTexto.forEach(linha => {
                const fallbackSize = linha.tamanho ? (parseFloat(linha.tamanho) * (100/400)) : 7;
                let tamanhoStyle = `font-size: ${fallbackSize}px;`; 
                if (linha.tamanhoRelativo) {
                    tamanhoStyle += ` font-size: ${linha.tamanhoRelativo}cqw;`;
                }
                
                const cor = (linha.cor === 'branco' || linha.cor === '#ffffff') ? '#ffffff' : linha.cor;
                const textShadow = cor === '#ffffff' ? 'text-shadow: 0px 1px 2px rgba(0,0,0,0.8);' : '';
                htmlImagem += `
                <div style="position: absolute; transform: translate(-50%, -50%); white-space: nowrap; pointer-events: none; z-index: 10; font-weight: bold;
                    font-family: ${linha.fonte}; ${tamanhoStyle} color: ${cor}; top: ${linha.top}; left: ${linha.left}; ${textShadow}">
                    ${linha.texto}
                </div>`;
            });
        }
        htmlImagem += `</div>`;

        listaMeusPedidos.innerHTML += `
            <div style="background: #fff; border-radius: 12px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
                ${htmlImagem}
                <div style="flex: 1; min-width: 200px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <h3 style="margin: 0; color: var(--cor-texto-escuro); font-size: 18px;">Pedido ${pedido.id}</h3>
                        <span class="badge ${badgeClass}" style="padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">${pedido.status}</span>
                    </div>
                    <p style="margin: 0 0 5px 0; color: #666; font-size: 14px;"><strong>Modelo:</strong> ${pedido.modelo}</p>
                    <p style="margin: 0 0 5px 0; color: #666; font-size: 14px;"><strong>Data:</strong> ${pedido.data}</p>
                    <p style="margin: 0 0 5px 0; color: #666; font-size: 14px;"><strong>Frase:</strong> "${pedido.texto || 'Sem texto'}"</p>
                    <p style="margin: 0 0 5px 0; color: #666; font-size: 14px;"><strong>Adicionais:</strong> ${(pedido.adicionais && pedido.adicionais.length > 0) ? pedido.adicionais.join(', ') : 'Nenhum'}</p>
                    <p style="margin: 0; color: var(--cor-primaria); font-weight: bold; font-size: 16px;">Total: R$ ${pedido.valor}</p>
                </div>
            </div>
        `;
    });
}
document.addEventListener('DOMContentLoaded', () => {
    carregarMeusPedidos();
    initTestimonialCarousel();
});

function initTestimonialCarousel() {
    const testimonialContainer = document.querySelector('.testimonial-banner');
    if (!testimonialContainer) return;

    const h2 = testimonialContainer.querySelector('h2');
    if (!h2) return;

    const testimonials = [
        '"Cada detalhe foi pensado com amor e cuidado. Superaram todas as nossas expectativas!"',
        '"Os balões deixaram nossa festa ainda mais mágica. Recomendo de olhos fechados!"',
        '"Trabalho impecável e atendimento maravilhoso. Transformaram nosso sonho em realidade."',
        '"Uma decoração de tirar o fôlego! Todos os convidados elogiaram muito."'
    ];
    let currentIndex = 0;

    setInterval(() => {
        // Slide out to left
        h2.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
        h2.style.transform = 'translateX(-50px)';
        h2.style.opacity = '0';

        setTimeout(() => {
            // Change text and move to right invisibly
            currentIndex = (currentIndex + 1) % testimonials.length;
            h2.innerText = testimonials[currentIndex];
            
            h2.style.transition = 'none';
            h2.style.transform = 'translateX(50px)';
            
            // Force reflow
            void h2.offsetWidth;

            // Slide in from right
            h2.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
            h2.style.transform = 'translateX(0)';
            h2.style.opacity = '1';
        }, 500);
    }, 6000);
}
