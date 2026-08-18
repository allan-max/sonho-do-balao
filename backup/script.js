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
const modelosSalvos = JSON.parse(localStorage.getItem('bancoModelos')) || [
    { id: 'bubble', nome: 'Bubble Personalizado', categoria: 'Aniversário', preco: '89,90', imagem: 'balao/bubble-branco.png', status: 'ativo' }
];

if (!localStorage.getItem('bancoModelos')) {
    localStorage.setItem('bancoModelos', JSON.stringify(modelosSalvos));
}

const catalogoBaloes = {
    'bubble': { cores: [{ id: 'branco', corHex: '#ffffff', nome: 'Branco' }, { id: 'preto', corHex: '#1a1a1a', nome: 'Preto' }] }
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
        // 1. MÁGICA DA IMAGEM: Exibe a imagem salva do modelo!
        if (imagemBalao && modeloEncontrado.imagem) {
            imagemBalao.src = modeloEncontrado.imagem;
        }

        containerCores.innerHTML = '';

        // 2. MÁGICA DAS CORES: Normaliza as cores vindas do Admin ou do padrão
        let listaCores = [];

        if (Array.isArray(modeloEncontrado.cores) && modeloEncontrado.cores.length > 0) {
            listaCores = modeloEncontrado.cores;
        } else if (modeloEncontrado.cores && typeof modeloEncontrado.cores === 'object') {
            listaCores = Object.entries(modeloEncontrado.cores).map(([id, hex]) => ({
                id: id,
                nome: id,
                corHex: typeof hex === 'string' ? hex : (hex.corHex || '#ff0000')
            }));
        }

        // Se o modelo não tiver lista de cores arrastadas, usa a cor selecionada no seletor do Admin
        if (listaCores.length === 0) {
            listaCores.push({
                id: 'cor-padrao',
                nome: 'Cor Principal',
                corHex: modeloEncontrado.corHex || '#ff0000'
            });
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
            containerAdicionaisCliente.innerHTML = '';
            const imagemOriginalBalão = modeloEncontrado.imagem;

            modeloEncontrado.adicionais.forEach((adc, idx) => {
                containerAdicionaisCliente.innerHTML += `
                    <label style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; background: #ffffff; padding: 12px 15px; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 2px 4px rgba(0,0,0,0.02); transition: all 0.2s; margin-bottom: 8px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <input type="checkbox" class="chk-adicional-cliente" value="${adc.id}" data-preco="${adc.preco}" data-imagem="${adc.imagem}" style="transform: scale(1.3); accent-color: #ff6b81;">
                            <span style="font-size: 15px; font-weight: 500; color: #334155;">${adc.nome}</span>
                        </div>
                        <span style="font-weight: 700; color: #10b981;">+ R$ ${adc.preco}</span>
                    </label>
                `;
            });

            // ESCUTA O CLIQUE DO CLIENTE PARA TROCAR A FOTO E ATUALIZAR O PREÇO NA TELA
            const chksCliente = document.querySelectorAll('.chk-adicional-cliente');

            function atualizarPrecoDinamicamente() {
                // 1. Pega o preço original do balão
                let precoBase = parseFloat(modeloEncontrado.preco.replace(',', '.')) || 0;
                let imagemParaExibir = imagemOriginalBalão;

                // 2. Soma o valor dos adicionais marcados
                chksCliente.forEach(c => {
                    if (c.checked) {
                        if (c.getAttribute('data-imagem')) {
                            imagemParaExibir = c.getAttribute('data-imagem');
                        }
                        let precoAdicional = parseFloat((c.getAttribute('data-preco') || '0').replace(',', '.'));
                        precoBase += precoAdicional;
                    }
                });

                if (imagemBalao) imagemBalao.src = imagemParaExibir;

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

            // Avisa o navegador para recalcular sempre que clicar num adicional
            chksCliente.forEach(chk => {
                chk.addEventListener('change', atualizarPrecoDinamicamente);
            });

            // Roda a função uma vez logo que abre a página para já exibir o preço base
            atualizarPrecoDinamicamente();
        }
    } else {
        alert('Atenção: Este modelo não foi encontrado!');
        window.location.href = 'modelos.html';
    }
}

// ==========================================
// 4. EVENTOS DE INTERAÇÃO (LISTENERS)
// ==========================================
function adicionarEventosDeCor() {
    const novosBotoesCorBalao = document.querySelectorAll('input[name="cor-balao"]');
    novosBotoesCorBalao.forEach(botao => {
        botao.addEventListener('change', (event) => {
            const corClicada = event.target.value;
            if (imagemBalao && modeloAtual) {
                imagemBalao.src = `balao/${modeloAtual}-${corClicada}.png`;
            }
        });
    });
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
        <li><a href="#">Carrinho</a></li>
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

if (formLogin) {
    formLogin.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailDigitado = formLogin.querySelector('input[type="email"]').value;
        if (emailDigitado === 'admin@admin.com') {
            localStorage.setItem('usuarioLogado', 'admin');
            window.location.href = 'admin.html';
        } else {
            alert('Login de cliente feito com sucesso! (Simulação)');
        }
    });
}

// ==========================================
// 6. GERAR VITRINE DO CLIENTE AUTOMATICAMENTE
// ==========================================
const gridCliente = document.getElementById('grid-catalogo-cliente');
if (gridCliente) {
    gridCliente.innerHTML = '';
    modelosSalvos.forEach(modelo => {
        if (modelo.status === 'ativo') {
            gridCliente.innerHTML += `
                <a href="personalizacao.html?modelo=${modelo.id}" class="product-link">
                    <div class="product-card">
                        <div class="product-img">
                            <img src="${modelo.imagem}" alt="${modelo.nome}">
                        </div>
                        <h3>${modelo.nome}</h3>
                        <p>A partir de R$ ${modelo.preco}</p>
                    </div>
                </a>
            `;
        }
    });
}

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

        const trDetalhes = document.createElement('tr');
        trDetalhes.className = 'pedido-detalhes-row';
        trDetalhes.innerHTML = `
            <td colspan="5" style="width: 100%;">
                <div class="detalhes-conteudo" style="flex-wrap: wrap;"> 
                    <img src="${pedido.imagem || 'balao/coracao-vermelho.png'}" style="max-width: 120px; border-radius: 10px; border: 1px solid #eee;">
                    <div style="flex: 1; min-width: 200px;">
                        <h3 style="color: var(--cor-primaria); margin-bottom: 10px;">Detalhes da Encomenda</h3>
                        <p><strong>Telefone:</strong> ${pedido.telefone || '(00) 00000-0000'}</p>
                        <p><strong>Modelo:</strong> ${pedido.modelo || 'Balão'}</p>
                        <p><strong>Cor:</strong> ${pedido.corBalao || 'Padrão'}</p>
                        <p><strong>Frase:</strong> "${pedido.texto || 'Sem texto'}"</p>
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
            
            setTimeout(() => {
                if (['bubble', 'coracao', 'estrela'].includes(modeloId)) {
                    if (imgBalaoCor) imgBalaoCor.src = `balao/${modeloId}-${corSelecionada}.png`;
                } 
                else if (modeloAtual && modeloAtual.imagem) {
                    if (imgBalaoCor) imgBalaoCor.src = modeloAtual.imagem;
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
            const inputCorTexto = document.querySelector('input[name="cor-texto"]:checked');
            const inputTexto = document.getElementById('texto-balao');
            const selectFonte = document.getElementById('fonte-balao');
            const imagemBalao = document.getElementById('imagem-balao');

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

            // Monta a sacola
            const carrinho = {
                modelo: modeloAtualId.toUpperCase(),
                corBalao: inputCorBalao ? inputCorBalao.value : 'Padrão',
                texto: inputTexto ? inputTexto.value : '',
                fonte: selectFonte ? selectFonte.value : 'Inter',
                corTexto: inputCorTexto ? inputCorTexto.value : 'Preto',
                imagem: imagemBalao ? imagemBalao.src : 'balao/balao-branco.png',
                valor: valorFinalCalculado.toFixed(2).replace('.', ',')
            };

            // Salva na memória e pula de página!
            localStorage.setItem('carrinhoAtual', JSON.stringify(carrinho));
            window.location.href = 'confirmacao.html';

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

        const previewTexto = document.getElementById('conf-preview-texto');
        if (previewTexto) {
            previewTexto.textContent = carrinho.texto;
            previewTexto.style.fontFamily = carrinho.fonte;
            if (carrinho.corTexto === 'branco' || carrinho.corTexto === '#ffffff') {
                previewTexto.style.color = '#ffffff';
                previewTexto.style.textShadow = '0px 1px 3px rgba(0,0,0,0.6)';
            } else {
                previewTexto.style.color = '#1a1a1a';
            }
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
            modelo: carrinho.modelo,
            corBalao: carrinho.corBalao,
            texto: carrinho.texto,
            fonte: carrinho.fonte,
            corTexto: carrinho.corTexto
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
                Resumo do seu Sonho ${ultimoPedido.id}
            </h3>
            <div class="success-detail-row"><strong>Cliente:</strong> <span>${ultimoPedido.cliente}</span></div>
            <div class="success-detail-row"><strong>Modelo:</strong> <span>${ultimoPedido.modelo}</span></div>
            <div class="success-detail-row"><strong>Cor:</strong> <span>${ultimoPedido.corBalao}</span></div>
            <div class="success-detail-row"><strong>Frase:</strong> <span>"${ultimoPedido.texto}"</span></div>
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