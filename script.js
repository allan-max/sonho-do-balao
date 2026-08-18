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
    if (!gridCliente) return;

    // Limpa a vitrine antes de desenhar
    gridCliente.innerHTML = '';
    
    // Pega o que o cliente digitou e selecionou
    const termoBusca = inputPesquisaModelo ? inputPesquisaModelo.value.toLowerCase().trim() : '';
    const categoriaFiltro = selectFiltroCategoria ? selectFiltroCategoria.value.toLowerCase() : 'todas';

    // Puxa os modelos reais e aplica o filtro cruzado
    const modelosFiltrados = modelosSalvos.filter(modelo => {
        const ativo = modelo.status === 'ativo';
        
        // Verifica o nome do modelo
        const nomeModelo = (modelo.nome || '').toLowerCase();
        const passaBusca = nomeModelo.includes(termoBusca);
        
        // Verifica a categoria (Removendo acentos para garantir precisão)
        const categoriaModelo = (modelo.categoria || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const categoriaFiltroLimpa = categoriaFiltro.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        const passaCategoria = (categoriaFiltro === 'todas') || (categoriaModelo === categoriaFiltroLimpa);

        return ativo && passaBusca && passaCategoria;
    });

    // Se a busca não encontrar nada
    if (modelosFiltrados.length === 0) {
        gridCliente.innerHTML = '<p style="text-align: center; width: 100%; grid-column: 1 / -1; color: var(--cor-texto-medio); padding: 40px;">Poxa, nenhum modelo encontrado com esses filtros. 🎈</p>';
        return;
    }

    // Desenha os balões
    modelosFiltrados.forEach(modelo => {
        let linkPersonalizacao = `personalizacao.html?modelo=${modelo.id}`;
        
        if (modelo.imagem && modelo.imagem.includes('baloes-prontos/')) {
            const pasta = modelo.imagem.split('/')[1];
            linkPersonalizacao = `baloes-prontos/${pasta}/personalizacao.html?modelo=${modelo.id}`;
        }
        
        gridCliente.innerHTML += `
            <a href="${linkPersonalizacao}" class="product-link">
                <div class="product-card">
                    <div class="product-img">
                        <img src="${modelo.imagem}" alt="${modelo.nome}">
                    </div>
                    <h3>${modelo.nome}</h3>
                    <p>A partir de R$ ${modelo.preco}</p>
                </div>
            </a>
        `;
    });
}

// Fica escutando enquanto o cliente digita e muda de categoria
if (inputPesquisaModelo) {
    inputPesquisaModelo.addEventListener('input', renderizarVitrine);
}
if (selectFiltroCategoria) {
    selectFiltroCategoria.addEventListener('change', renderizarVitrine);
}

// Executa a inteligência ao abrir a página
inicializarFiltros();
renderizarVitrine();

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
            <td data-label="Pedido" style="font-weight: 700; color: var(--cor-texto-escuro);">${pedido.id || '#1001'}</td>
            <td data-label="Cliente" style="color: var(--cor-texto-medio);">${pedido.cliente || 'Cliente'}</td>
            <td data-label="Retirada">${pedido.data || '00/00/0000'}</td>
            <td data-label="Status">
                <span class="badge ${badgeClass}">
                    <span class="dot"></span> ${pedido.status || 'Aguardando Análise'}
                </span>
            </td>
            <td data-label="Valor Total" class="preco-stack">
                <span>Total a pagar</span>
                <strong>R$ ${pedido.valor || '0,00'}</strong>
            </td>
        `;

        const trDetalhes = document.createElement('tr');
        trDetalhes.className = 'pedido-detalhes-row';
        
        let imagemHtml = `<div style="position: relative; width: 180px; display: inline-block; flex-shrink: 0; background: #f9fafb; border-radius: 10px; overflow: hidden; border: 1px solid #eee;">
            <img src="${pedido.imagem || 'balao/coracao-vermelho.png'}" style="width: 100%; display: block;">`;

        if (!pedido.imagemProcessada) {
            if (pedido.linhasDetalhes && pedido.linhasDetalhes.length > 0) {
                pedido.linhasDetalhes.forEach(linha => {
                    let topVal = linha.top;
                    let leftVal = linha.left;
                    if (topVal && topVal.includes('px')) topVal = (parseFloat(topVal) / 400 * 100).toFixed(2) + '%';
                    if (leftVal && leftVal.includes('px')) leftVal = (parseFloat(leftVal) / 400 * 100).toFixed(2) + '%';
                    
                    // Usamos transform scale para evitar que o navegador force 10px de tamanho minimo
                    imagemHtml += `<span style="position: absolute; top: ${topVal}; left: ${leftVal}; font-family: ${linha.fonte}; color: ${linha.cor}; font-size: ${linha.tamanho}px; transform: translate(-50%, -50%) scale(0.45); transform-origin: center; white-space: nowrap; font-weight: bold; text-shadow: 1px 1px 3px rgba(255,255,255,0.9);">${linha.texto}</span>`;
                });
            } else if (pedido.texto && pedido.texto !== 'Sem texto') {
                imagemHtml += `<span style="position: absolute; top: 50%; left: 50%; font-family: ${pedido.fonte || 'Inter'}; color: ${pedido.corTexto || '#000'}; font-size: 14px; transform: translate(-50%, -50%) scale(0.8); transform-origin: center; white-space: nowrap; font-weight: bold; text-shadow: 1px 1px 3px rgba(255,255,255,0.9);">${pedido.texto}</span>`;
            }
        }
        
        imagemHtml += `</div>`;

        trDetalhes.innerHTML = `
            <td colspan="5" style="width: 100%;">
                <div class="detalhes-conteudo" style="flex-wrap: wrap; display: flex; gap: 20px;"> 
                    ${imagemHtml}
                    <div style="flex: 1; min-width: 200px;">
                        <h3 style="color: var(--cor-primaria); margin-bottom: 10px;">Detalhes da Encomenda</h3>
                        <p><strong>Telefone:</strong> ${pedido.telefone || '(00) 00000-0000'}</p>
                        <p><strong>Modelo:</strong> ${pedido.modelo || 'Balão'}</p>
                        <p><strong>Cor:</strong> ${pedido.corBalao || 'Padrão'}</p>
                        <p><strong>Frase:</strong> "${pedido.texto || 'Sem texto'}"</p>
                        <p><strong>Observação:</strong> ${pedido.observacao || 'Nenhuma'}</p>
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
// CORREÇÃO DEFINITIVA DAS CORES (DELEGAÇÃO ABSOLUTA)
// ==========================================
const containerCoresBalao = document.getElementById('container-cores-balao');
const imgBalaoCor = document.getElementById('imagem-balao');

if (containerCoresBalao) {
    // Fica de olho em QUALQUER clique dentro da caixa de cores
    containerCoresBalao.addEventListener('click', (event) => {
        
        // 1. Procura qual botão de cor está perto de onde o cliente clicou
        let inputClicado = event.target;
        
        // 2. Se a caçada foi um sucesso e achamos o botão da cor
        if (inputClicado && inputClicado.tagName === 'INPUT' && inputClicado.name === 'cor-balao') {
            
            // Força a bolinha a ficar marcada (faz o visual de selecionado aparecer!)
            inputClicado.checked = true;
            
            // Para garantir que o navegador atualizou o visual, disparamos um evento falso
            inputClicado.dispatchEvent(new Event('change', { bubbles: true }));
            
            // 3. Pega a cor e a imagem ESPECÍFICA que foi salva para ela no admin
            const corSelecionada = inputClicado.value.toLowerCase();
            const imagemEspecificaDaCor = inputClicado.getAttribute('data-imagem');
            
            const urlParamsCor = new URLSearchParams(window.location.search);
            const modeloId = urlParamsCor.get('modelo') || 'bubble';
            
            const dbModelos = JSON.parse(localStorage.getItem('bancoModelos')) || [];
            const modeloAtual = dbModelos.find(m => m.id === modeloId);
            
            setTimeout(() => {
                const rootPathImg = window.location.pathname.includes('baloes-prontos') ? '../../' : '';
                const chkSemConfetes = document.getElementById('chk-adicional-sem-confetes');
                const isSemConfetes = chkSemConfetes && chkSemConfetes.checked;

                // 1. MÁGICA NOVA: Se essa cor tem uma foto própria cadastrada, usa ela imediatamente!
                if (imagemEspecificaDaCor && imagemEspecificaDaCor !== 'undefined' && imagemEspecificaDaCor !== '') {
                    let imagemFinal = imagemEspecificaDaCor;
                    if (isSemConfetes) {
                        if (imagemFinal.endsWith('.jpg')) {
                            imagemFinal = imagemFinal.replace('.jpg', '-sem-confetes.jpg');
                        } else {
                            imagemFinal = imagemFinal.replace('.png', '-sem-confetes.png');
                        }
                    }
                    if (imgBalaoCor) imgBalaoCor.src = rootPathImg + imagemFinal;
                }
                // 2. Se for um modelo antigo de fábrica (bubble, coracao...)
                else if (['bubble', 'coracao', 'estrela'].includes(modeloId)) {
                    if (imgBalaoCor) imgBalaoCor.src = rootPathImg + `balao/${modeloId}-${corSelecionada}.png`;
                } 
                // 3. Sistema de Segurança: Volta para a foto principal se não achar a foto da cor
                else if (modeloAtual && modeloAtual.imagem) {
                    let imagemFinal = modeloAtual.imagem;
                    if (isSemConfetes) {
                        if (imagemFinal.endsWith('.jpg')) {
                            imagemFinal = imagemFinal.replace('.jpg', '-sem-confetes.jpg');
                        } else {
                            imagemFinal = imagemFinal.replace('.png', '-sem-confetes.png');
                        }
                    }
                    if (imgBalaoCor) imgBalaoCor.src = rootPathImg + imagemFinal;
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
            // Verifica se o usuário está logado
            const usuarioLogadoStr = localStorage.getItem('usuarioLogado');
            let isLogado = false;
            if (usuarioLogadoStr) {
                try {
                    const u = JSON.parse(usuarioLogadoStr);
                    if (u && u.email) isLogado = true;
                } catch(e) {}
            }
            
            if (!isLogado) {
                let overlay = document.getElementById('modal-login-aviso');
                if (!overlay) {
                    overlay = document.createElement('div');
                    overlay.id = 'modal-login-aviso';
                    overlay.style.position = 'fixed';
                    overlay.style.top = '0';
                    overlay.style.left = '0';
                    overlay.style.width = '100vw';
                    overlay.style.height = '100vh';
                    overlay.style.backgroundColor = 'rgba(0,0,0,0.6)';
                    overlay.style.display = 'flex';
                    overlay.style.justifyContent = 'center';
                    overlay.style.alignItems = 'center';
                    overlay.style.zIndex = '9999';
                    
                    overlay.innerHTML = `
                        <div style="background: white; padding: 30px; border-radius: 15px; max-width: 400px; width: 90%; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.2);">
                            <i class="fa-solid fa-lock" style="font-size: 45px; color: var(--cor-primaria); margin-bottom: 20px;"></i>
                            <h2 style="margin-bottom: 10px; color: var(--cor-texto-escuro); font-size: 22px;">Acesso Necessário</h2>
                            <p style="color: var(--cor-texto-medio); margin-bottom: 25px; line-height: 1.5;">Para avançar com a personalização e poder acompanhar seu pedido depois, você precisa fazer login.</p>
                            <div style="display: flex; gap: 10px; justify-content: center;">
                                <button id="btn-fechar-aviso" style="flex: 1; padding: 12px; border: 1px solid #ccc; background: transparent; border-radius: 8px; cursor: pointer; color: #666; font-weight: bold;">Cancelar</button>
                                <a href="#" id="btn-ir-login" style="flex: 1; padding: 12px; background: var(--cor-primaria); color: white; border-radius: 8px; text-decoration: none; font-weight: bold;">Fazer Login</a>
                            </div>
                        </div>
                    `;
                    document.body.appendChild(overlay);
                    
                    document.getElementById('btn-fechar-aviso').addEventListener('click', () => {
                        overlay.style.display = 'none';
                    });
                    document.getElementById('btn-ir-login').addEventListener('click', (e) => {
                        e.preventDefault();
                        const rootPath = window.location.pathname.includes('baloes-prontos') ? '../../' : '';
                        window.location.href = rootPath + 'login.html';
                    });
                }
                overlay.style.display = 'flex';
                return;
            }

            // Pega o modelo da URL com segurança
            const urlParams = new URLSearchParams(window.location.search);
            const modeloAtualId = urlParams.get('modelo') || 'BALAO';

            // Pega os elementos da tela na hora exata do clique
            const inputCorBalao = document.querySelector('input[name="cor-balao"]:checked');
            const imagemBalao = document.getElementById('imagem-balao');
            const inputObservacao = document.getElementById('observacao-pedido');

            // --- NOVA MÁGICA: Capturar as 3 linhas de texto com posição e estilos! ---
            const linhasTextos = [];
            for (let i = 1; i <= 3; i++) {
                const previewElement = document.getElementById(`preview-linha-${i}`);
                const inputElement = document.getElementById(`texto-linha-${i}`);
                const fonteElement = document.getElementById(`fonte-linha-${i}`);
                const corElement = document.getElementById(`cor-linha-${i}`);
                const tamanhoElement = document.getElementById(`tamanho-linha-${i}`);
                
                if (previewElement && inputElement && inputElement.value.trim() !== '') {
                    // Converter para % para caber em qualquer tamanho de tela depois (admin/meus pedidos)
                    const areaBalao = document.getElementById('area-balao');
                    let topValue = previewElement.style.top || '50%';
                    let leftValue = previewElement.style.left || '50%';
                    
                    if (areaBalao) {
                        const topPx = parseFloat(topValue);
                        const leftPx = parseFloat(leftValue);
                        
                        if (topValue.includes('px')) {
                            topValue = ((topPx / areaBalao.offsetHeight) * 100).toFixed(2) + '%';
                        }
                        if (leftValue.includes('px')) {
                            leftValue = ((leftPx / areaBalao.offsetWidth) * 100).toFixed(2) + '%';
                        }
                    }

                    linhasTextos.push({
                        texto: inputElement.value,
                        fonte: fonteElement.value,
                        cor: corElement.value,
                        tamanho: tamanhoElement ? tamanhoElement.value : '28',
                        top: topValue,
                        left: leftValue
                    });
                }
            }

            // Calcula o valor total
            const modelosDb = JSON.parse(localStorage.getItem('bancoModelos')) || [];
            const modeloSelecionado = modelosDb.find(m => m.id === modeloAtualId);

            let valorFinalCalculado = 0;
            if (modeloSelecionado && modeloSelecionado.preco) {
                valorFinalCalculado = parseFloat(String(modeloSelecionado.preco).replace(',', '.'));
            }

            const chksMarcados = document.querySelectorAll('.chk-adicional-cliente:checked');
            chksMarcados.forEach(c => {
                valorFinalCalculado += parseFloat((c.getAttribute('data-preco') || '0').replace(',', '.'));
            });

            // GERAÇÃO DE IMAGEM ACHATADA VIA CANVAS (FIM DOS PROBLEMAS DE POSIÇÃO)
            let imageToSave = imagemBalao ? imagemBalao.src : 'balao/balao-branco.png';
            const areaBalao = document.getElementById('area-balao');
            
            if (imagemBalao && areaBalao) {
                try {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    
                    // Cria o canvas exatamente no tamanho que o cliente está vendo na tela
                    canvas.width = areaBalao.offsetWidth;
                    canvas.height = areaBalao.offsetHeight;
                    
                    // 1. Pinta o fundo com a mesma cor do preview (para poder usar JPEG sem ficar preto)
                    ctx.fillStyle = '#f8fafc';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    
                    // 1.5 Desenha os overlays DE TRÁS (Ex: Bastão)
                    const overlaysAtras = document.querySelectorAll('#overlays-atras img');
                    overlaysAtras.forEach(imgOverlay => {
                        try {
                            ctx.drawImage(imgOverlay, 0, 0, canvas.width, canvas.height);
                        } catch(e) {
                            console.error("Erro ao desenhar overlay atras", e);
                        }
                    });
                    
                    // 2. Desenha o balão base
                    const imgScale = parseFloat(imagemBalao.getAttribute('data-scale') || '1');
                    if (imgScale !== 1) {
                        const dw = canvas.width * imgScale;
                        const dh = canvas.height * imgScale;
                        const dx = (canvas.width - dw) / 2;
                        const dy = (canvas.height - dh) / 2;
                        ctx.drawImage(imagemBalao, dx, dy, dw, dh);
                    } else {
                        ctx.drawImage(imagemBalao, 0, 0, canvas.width, canvas.height);
                    }
                    
                    // 2.5 Desenha os overlays transparentes NA FRENTE e DENTRO (Adicionais)
                    const overlaysFrente = document.querySelectorAll('#overlays-container img');
                    overlaysFrente.forEach(imgOverlay => {
                        try {
                            // Se for "dentro do balão", aplica a opacidade para misturar com a cor
                            if (imgOverlay.style.opacity) {
                                ctx.globalAlpha = parseFloat(imgOverlay.style.opacity);
                            }
                            ctx.drawImage(imgOverlay, 0, 0, canvas.width, canvas.height);
                            ctx.globalAlpha = 1.0; // Restaura opacidade 100% para os próximos elementos
                        } catch(e) {
                            console.error("Erro ao desenhar overlay", e);
                        }
                    });
                    
                    // 3. Desenha os textos
                    linhasTextos.forEach(linha => {
                        let topPx = 0;
                        let leftPx = 0;
                        
                        // Descobre se a posição original estava em px ou %
                        if (linha.top.includes('%')) {
                            topPx = (parseFloat(linha.top) / 100) * canvas.height;
                        } else {
                            topPx = parseFloat(linha.top);
                        }
                        
                        if (linha.left.includes('%')) {
                            leftPx = (parseFloat(linha.left) / 100) * canvas.width;
                        } else {
                            leftPx = parseFloat(linha.left);
                        }
                        
                        // Configura a fonte e a cor para o Canvas
                        // Remove as aspas do nome da fonte (ex: "'Inter', sans-serif" -> "Inter, sans-serif")
                        const fontFamily = linha.fonte.replace(/'/g, '');
                        ctx.font = `bold ${linha.tamanho}px ${fontFamily}`;
                        ctx.fillStyle = linha.cor;
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        
                        // Adiciona aquela sombra branca para destacar o texto
                        ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';
                        ctx.shadowBlur = 4;
                        ctx.shadowOffsetX = 1;
                        ctx.shadowOffsetY = 1;
                        
                        // Escreve na imagem
                        ctx.fillText(linha.texto, leftPx, topPx);
                        
                        // Remove a sombra para os próximos desenhos se necessário
                        ctx.shadowBlur = 0;
                    });
                    
                    // 4. Se a tela for muito grande (ex: PC com 400px), reduzimos pra economizar localStorage
                    const MAX_WIDTH = 300;
                    if (canvas.width > MAX_WIDTH) {
                        const miniCanvas = document.createElement('canvas');
                        const miniCtx = miniCanvas.getContext('2d');
                        const scale = MAX_WIDTH / canvas.width;
                        miniCanvas.width = MAX_WIDTH;
                        miniCanvas.height = canvas.height * scale;
                        miniCtx.drawImage(canvas, 0, 0, miniCanvas.width, miniCanvas.height);
                        imageToSave = miniCanvas.toDataURL('image/jpeg', 0.8);
                    } else {
                        imageToSave = canvas.toDataURL('image/jpeg', 0.8);
                    }
                } catch(e) {
                    console.log("Falha ao gerar o canvas do pedido:", e);
                }
            }

            // Monta a sacola
            const carrinho = {
                modelo: modeloAtualId.toUpperCase(),
                corBalao: inputCorBalao ? inputCorBalao.value : 'Padrão',
                texto: linhasTextos.map(l => l.texto).join(' | '),
                linhasDetalhes: linhasTextos, // Guarda as posições por garantia
                imagem: imageToSave,
                imagemProcessada: true, // Indica que o texto já está "queimado" na foto
                valor: valorFinalCalculado.toFixed(2).replace('.', ','),
                observacao: inputObservacao ? inputObservacao.value : ''
            };

            // Salva na memória e pula de página!
            localStorage.setItem('carrinhoAtual', JSON.stringify(carrinho));
            const rootPath = window.location.pathname.includes('baloes-prontos') ? '../../' : '';
            window.location.href = rootPath + 'confirmacao.html';

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
        if (confImagem) confImagem.src = carrinho.imagem;

        // --- NOVA MÁGICA: Desenhar as 3 linhas em cima do balão de confirmação! ---
        if (carrinho.linhasDetalhes && carrinho.linhasDetalhes.length > 0) {
            carrinho.linhasDetalhes.forEach((linha, index) => {
                const confPreview = document.getElementById(`conf-preview-linha-${index + 1}`);
                if (confPreview) {
                    confPreview.textContent = linha.texto;
                    confPreview.style.fontFamily = linha.fonte;
                    confPreview.style.color = linha.cor;
                    confPreview.style.fontSize = `${linha.tamanho}px`;
                    confPreview.style.top = linha.top;
                    confPreview.style.left = linha.left;
                }
            });
        }

        const confModelo = document.getElementById('conf-modelo');
        if (confModelo) confModelo.textContent = carrinho.modelo;
        
        const confCor = document.getElementById('conf-cor');
        if (confCor) confCor.textContent = carrinho.corBalao;
        
        const confCorTexto = document.getElementById('conf-cor-texto');
        if (confCorTexto) {
            confCorTexto.textContent = (carrinho.linhasDetalhes && carrinho.linhasDetalhes.length > 0) ? carrinho.linhasDetalhes[0].cor : 'Padrão';
        }
        
        const confTexto = document.getElementById('conf-texto');
        if (confTexto) confTexto.textContent = carrinho.texto || 'Sem texto';
        
        const confFonte = document.getElementById('conf-fonte');
        if (confFonte) {
            confFonte.textContent = (carrinho.linhasDetalhes && carrinho.linhasDetalhes.length > 0) ? carrinho.linhasDetalhes[0].fonte.split(',')[0].replace(/'/g, "") : 'Padrão';
        }
        
        const confObservacao = document.getElementById('conf-observacao');
        if (confObservacao) {
            confObservacao.textContent = carrinho.observacao || 'Nenhuma';
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

        // Puxa informações do usuário logado
        const usuarioLogadoStr = localStorage.getItem('usuarioLogado');
        let emailUsuario = 'anonimo';
        if (usuarioLogadoStr) {
            try {
                const usuarioData = JSON.parse(usuarioLogadoStr);
                if (usuarioData && usuarioData.email) emailUsuario = usuarioData.email;
            } catch (e) {
                if (typeof usuarioLogadoStr === 'string' && usuarioLogadoStr !== 'admin') {
                    // fallback para dados antigos caso tenha
                }
            }
        }

        // 1. Puxa a lista da gaveta CORRETA
        let pedidos = JSON.parse(localStorage.getItem('pedidosBaloes')) || [];

        const novoPedido = {
            id: '#' + Math.floor(1000 + Math.random() * 9000),
            cliente: (inputNome && inputNome.value) ? inputNome.value : 'Cliente Especial',
            emailCliente: emailUsuario,
            telefone: (inputTelefone && inputTelefone.value) ? inputTelefone.value : '(00) 00000-0000',
            data: new Date().toLocaleDateString('pt-BR'),
            status: 'Aguardando Análise',
            valor: carrinho.valor,
            imagem: carrinho.imagem,
            imagemProcessada: carrinho.imagemProcessada, // Passa a flag
            modelo: carrinho.modelo,
            corBalao: carrinho.corBalao,
            texto: carrinho.texto,
            linhasDetalhes: carrinho.linhasDetalhes,
            fonte: carrinho.fonte,
            corTexto: carrinho.corTexto,
            observacao: carrinho.observacao || ''
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
        containerSucesso.innerHTML = `
            <h3 style="color: var(--cor-texto-escuro); border-bottom: 2px solid #fff; padding-bottom: 10px; margin-bottom: 16px; text-align: center;">
                Resumo do seu pedido ${ultimoPedido.id}
            </h3>
            <div class="success-detail-row"><strong>Cliente:</strong> <span>${ultimoPedido.cliente}</span></div>
            <div class="success-detail-row"><strong>Modelo:</strong> <span>${ultimoPedido.modelo}</span></div>
            <div class="success-detail-row"><strong>Cor:</strong> <span>${ultimoPedido.corBalao}</span></div>
            <div class="success-detail-row"><strong>Frase:</strong> <span>"${ultimoPedido.texto}"</span></div>
            <div class="success-detail-row"><strong>Obs:</strong> <span>${ultimoPedido.observacao || 'Nenhuma'}</span></div>
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
            isDragging = false;
            preview.style.cursor = 'grab';
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

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. MÁGICA DAS ABAS, MENSAGENS E FOGOS
    // ==========================================
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');
    const formLogin = document.getElementById('form-login');
    const formRegister = document.getElementById('form-register');
    const msgBox = document.getElementById('msg-box');
    const loadingSpinner = document.getElementById('loading-spinner');

    // Função para mostrar mensagem na tela sem alert()
    function mostrarMensagem(texto, tipo) {
        if(!msgBox) return;
        msgBox.textContent = texto;
        msgBox.className = `msg-box ${tipo}`;
        // Esconde depois de 4 segundos se for erro
        if (tipo === 'error') {
            setTimeout(() => { msgBox.style.display = 'none'; }, 4000);
        }
    }

    // Função dos Fogos de Artifício 🎆
    function soltarFogos() {
        const fwContainer = document.getElementById('fireworks-container');
        if(!fwContainer) return;
        const cores = ['#f45b96', '#ffeb3b', '#4caf50', '#00bcd4', '#ff9800', '#ffffff'];

        // Cria 40 mini bolinhas coloridas
        for(let i = 0; i < 40; i++) {
            const particula = document.createElement('div');
            particula.classList.add('fw-particle');
            particula.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
            
            // Posição inicial no centro da tela
            particula.style.left = '50%';
            particula.style.top = '40%';

            // Direção da explosão aleatória
            const tx = (Math.random() * 300 - 150) + 'px';
            const ty = (Math.random() * 300 - 150) + 'px';
            particula.style.setProperty('--tx', tx);
            particula.style.setProperty('--ty', ty);

            fwContainer.appendChild(particula);
            
            // Some com a partícula depois de 1 segundo
            setTimeout(() => particula.remove(), 1000);
        }
    }

    // Alternar as abas (Esconde a mensagem e spinner ao trocar)
    if (tabLogin && tabRegister) {
        tabLogin.addEventListener('click', (e) => {
            e.preventDefault(); // <-- O SEGREDO AQUI: Impede a tela de pular!
            
            // Força a troca de telas ignorando o HTML antigo
            formRegister.style.display = 'none';
            formLogin.style.display = 'block';
            
            if(msgBox) msgBox.style.display = 'none'; 
            if(loadingSpinner) loadingSpinner.style.display = 'none';
        });

        tabRegister.addEventListener('click', (e) => {
            e.preventDefault(); // <-- O SEGREDO AQUI
            
            // Força a troca de telas
            formLogin.style.display = 'none';
            formRegister.style.display = 'block';
            
            if(msgBox) msgBox.style.display = 'none';
            if(loadingSpinner) loadingSpinner.style.display = 'none';
        });
    }

    // ==========================================
    // 2. SISTEMA DE CRIAR CONTA (REGISTRO)
    // ==========================================
    if (formRegister) {
        formRegister.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nome = formRegister.querySelector('input[type="text"]').value;
            const email = formRegister.querySelector('input[type="email"]').value;
            const senha = formRegister.querySelector('input[type="password"]').value;

            let usuarios = JSON.parse(localStorage.getItem('usuariosLoja')) || [];
            
            if (usuarios.find(u => u.email === email)) {
                mostrarMensagem('Esse email já existe ou já está cadastrado', 'error');
                return;
            }

            usuarios.push({ nome, email, senha });
            localStorage.setItem('usuariosLoja', JSON.stringify(usuarios));
            
            // Sucesso! Solta os fogos e limpa a tela
            mostrarMensagem('Conta criada com sucesso! 🎈', 'success');
            soltarFogos();
            formRegister.reset();
            formRegister.style.display = 'none';
            
            // Pula pra aba de login automaticamente depois de 3s
            setTimeout(() => { 
                tabLogin.click(); 
                formRegister.style.display = ''; // Volta ao normal
            }, 3000);
        });
    }

    // ==========================================
    // 3. SISTEMA DE ENTRAR (LOGIN)
    // ==========================================
    if (formLogin) {
        formLogin.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = formLogin.querySelector('input[type="email"]').value;
            const senha = formLogin.querySelector('input[type="password"]').value;

            // Admin
            if (email === 'admin@admin.com') {
                 localStorage.setItem('usuarioLogado', JSON.stringify({ nome: 'Admin', email: email, tipo: 'admin' }));
                 window.location.href = 'admin.html';
                 return;
            }

            let usuarios = JSON.parse(localStorage.getItem('usuariosLoja')) || [];
            let usuario = usuarios.find(u => u.email === email && u.senha === senha);

            if (usuario) {
                localStorage.setItem('usuarioLogado', JSON.stringify({ nome: usuario.nome, email: usuario.email, tipo: 'cliente' }));
                
                // Esconde o form e mostra o spinner verde
                formLogin.style.display = 'none';
                if(msgBox) msgBox.style.display = 'none';
                if(loadingSpinner) loadingSpinner.style.display = 'flex';
                document.getElementById('spinner-text').textContent = 'Login feito com sucesso! 🎉';
                
                // Redireciona para a página inicial após animação
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);
            } else {
                mostrarMensagem('E-mail ou senha incorretos! Tente novamente.', 'error');
            }
        });
    }

    // ==========================================
    // 4. MUDAR O MENU PARA "TERMINAR SESSÃO"
    // ==========================================
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    
    if (usuarioLogado) {
        const linksLogin = document.querySelectorAll('a[href="login.html"]');
        
        linksLogin.forEach(link => {
            link.innerHTML = '<i class="fa-solid fa-arrow-right-from-bracket"></i> Terminar Sessão';
            link.href = '#'; 
            
            link.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('usuarioLogado'); 
                window.location.reload(); 
            });
        });
    }
});

// ==========================================
// 5. TELA DE MEUS PEDIDOS (CLIENTE)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const listaMeusPedidos = document.getElementById('lista-meus-pedidos');
    
    if (listaMeusPedidos) {
        const usuarioLogadoStr = localStorage.getItem('usuarioLogado');
        
        if (!usuarioLogadoStr) {
            listaMeusPedidos.innerHTML = '<p style="text-align:center; grid-column: 1/-1; padding: 40px; color: var(--cor-texto-medio);">Você precisa estar logado para ver seus pedidos. <br><br> <a href="login.html" class="btn-primario" style="text-decoration:none; display:inline-block; padding: 10px 20px;">Fazer login</a></p>';
            return;
        }

        let usuarioLogado;
        try {
            usuarioLogado = JSON.parse(usuarioLogadoStr);
        } catch(e) {
            usuarioLogado = { email: '' };
        }
        
        const emailLogado = usuarioLogado.email;

        if (!emailLogado) {
             listaMeusPedidos.innerHTML = '<p style="text-align:center; grid-column: 1/-1; padding: 40px; color: var(--cor-texto-medio);">Você precisa estar logado para ver seus pedidos. <br><br> <a href="login.html" class="btn-primario" style="text-decoration:none; display:inline-block; padding: 10px 20px;">Fazer login</a></p>';
             return;
        }

        let pedidos = JSON.parse(localStorage.getItem('pedidosBaloes')) || [];
        
        // Filtra os pedidos do cliente logado
        let meusPedidos = pedidos.filter(p => p.emailCliente === emailLogado);

        // Se o cliente não tiver pedidos
        if (meusPedidos.length === 0) {
            listaMeusPedidos.innerHTML = '<p style="text-align:center; grid-column: 1/-1; padding: 40px; color: var(--cor-texto-medio); font-size: 1.2rem;">Você ainda não fez nenhum pedido conosco. 🎈<br><br><a href="index.html" class="btn-primario" style="text-decoration:none; display:inline-block; padding: 10px 20px; margin-top: 10px;">Ver modelos</a></p>';
            return;
        }

        listaMeusPedidos.innerHTML = '';
        
        // Inverte a ordem para mostrar os mais recentes primeiro
        meusPedidos.reverse().forEach(pedido => {
            let badgeClass = 'badge-warning';
            const statusFormatado = (pedido.status || '').toLowerCase();
            if (statusFormatado === 'em produção') badgeClass = 'badge-primary';
            if (statusFormatado === 'pronto para retirada') badgeClass = 'badge-teal';
            if (statusFormatado === 'concluído') badgeClass = 'badge-success';
            if (statusFormatado === 'recusado') badgeClass = 'badge-danger';

            let imagemHtmlCliente = `<div style="position: relative; width: 130px; display: inline-block; flex-shrink: 0; background: #f9fafb; border-radius: 8px; overflow: hidden; border: 1px solid #eee;">
                <img src="${pedido.imagem || 'balao/coracao-vermelho.png'}" alt="Imagem do Pedido" class="pedido-img-cliente" style="width: 100%; display: block;">`;

            if (!pedido.imagemProcessada) {
                if (pedido.linhasDetalhes && pedido.linhasDetalhes.length > 0) {
                    pedido.linhasDetalhes.forEach(linha => {
                        let topVal = linha.top;
                        let leftVal = linha.left;
                        if (topVal && topVal.includes('px')) topVal = (parseFloat(topVal) / 400 * 100).toFixed(2) + '%';
                        if (leftVal && leftVal.includes('px')) leftVal = (parseFloat(leftVal) / 400 * 100).toFixed(2) + '%';
                        
                        imagemHtmlCliente += `<span style="position: absolute; top: ${topVal}; left: ${leftVal}; font-family: ${linha.fonte}; color: ${linha.cor}; font-size: ${linha.tamanho}px; transform: translate(-50%, -50%) scale(0.35); transform-origin: center; white-space: nowrap; font-weight: bold; text-shadow: 1px 1px 3px rgba(255,255,255,0.9);">${linha.texto}</span>`;
                    });
                } else if (pedido.texto && pedido.texto !== 'Sem texto') {
                    imagemHtmlCliente += `<span style="position: absolute; top: 50%; left: 50%; font-family: ${pedido.fonte || 'Inter'}; color: ${pedido.corTexto || '#000'}; font-size: 14px; transform: translate(-50%, -50%) scale(0.8); transform-origin: center; white-space: nowrap; font-weight: bold; text-shadow: 1px 1px 3px rgba(255,255,255,0.9);">${pedido.texto}</span>`;
                }
            }
            imagemHtmlCliente += `</div>`;

            listaMeusPedidos.innerHTML += `
                <div class="pedido-card-cliente" style="background: white; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); padding: 20px; display: flex; flex-direction: column; gap: 15px; border: 1px solid #eee;">
                    <div class="pedido-card-header" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eee; padding-bottom: 10px;">
                        <span class="pedido-id" style="font-weight: bold; color: var(--cor-primaria); font-size: 1.1rem;">${pedido.id}</span>
                        <span class="pedido-data" style="color: var(--cor-texto-medio); font-size: 0.9rem;">${pedido.data || ''}</span>
                    </div>
                    <div class="pedido-card-body" style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
                        ${imagemHtmlCliente}
                        <div class="pedido-info-cliente" style="flex: 1; min-width: 200px;">
                            <h3 class="pedido-modelo" style="margin-bottom: 8px; color: var(--cor-texto-escuro);">${pedido.modelo}</h3>
                            <p class="pedido-cor" style="margin-bottom: 4px; font-size: 0.95rem;"><strong>Cor:</strong> ${pedido.corBalao}</p>
                            <p class="pedido-frase" style="margin-bottom: 4px; font-size: 0.95rem;"><strong>Frase:</strong> "${pedido.texto}"</p>
                            <p class="pedido-observacao" style="margin-bottom: 4px; font-size: 0.95rem;"><strong>Obs:</strong> ${pedido.observacao || 'Nenhuma'}</p>
                            <p class="pedido-valor" style="margin-top: 8px; font-size: 1.1rem; color: var(--cor-texto-escuro);"><strong>Total:</strong> R$ ${pedido.valor}</p>
                        </div>
                    </div>
                    <div class="pedido-card-footer" style="display: flex; justify-content: flex-end; padding-top: 10px; border-top: 1px solid #eee;">
                        <span class="badge ${badgeClass}" style="padding: 8px 12px; border-radius: 20px; font-weight: 600; font-size: 0.9rem;"><span class="dot" style="display:inline-block; width:8px; height:8px; border-radius:50%; background:currentColor; margin-right:5px;"></span> ${pedido.status || 'Aguardando Análise'}</span>
                    </div>
                </div>
            `;
            tabelaModelos.innerHTML += `
                <tr class="pedido-resumo" style="background: white;">
                    <td data-label="Imagem" style="text-align: center; padding: 12px;"><img src="${modelo.imagem}" style="width: 45px; height: 45px; object-fit: contain; border-radius: 8px; background: #f9f9f9; padding: 5px;"></td>
                    <td data-label="ID" style="font-weight: 600; color: #333; padding: 12px;">#${modelo.id}</td>
                    <td data-label="Nome" style="color: #555; padding: 12px;">${modelo.nome}</td>
                    <td data-label="Preço" style="font-weight: bold; padding: 12px;">R$ ${modelo.preco}</td>
                    <td data-label="Status" style="text-align: center; padding: 12px;"><span class="status-badge ${modelo.status === 'ativo' ? 'status-concluido' : 'status-aguardando'}">${modelo.status}</span></td>
                    <td data-label="Ações" style="text-align: center; padding: 12px;">
                        <i class="fa-solid fa-pen-to-square" style="color: #42a5f5; cursor: pointer; margin-right: 12px;" onclick="editarModelo(${index})"></i>
                        <i class="fa-solid fa-trash" style="color: #ff6b6b; cursor: pointer;" onclick="deletarModelo(${index})"></i>
                    </td>
                </tr>
            `;
        });
    }
});