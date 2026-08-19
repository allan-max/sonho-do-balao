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
        
        listaMeusPedidos.innerHTML += `
            <div style="background: #fff; border-radius: 12px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
                <img src="${pedido.imagem || 'balao/coracao-vermelho.png'}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 8px; border: 1px solid #eee;">
                <div style="flex: 1; min-width: 200px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <h3 style="margin: 0; color: var(--cor-texto-escuro); font-size: 18px;">Pedido ${pedido.id}</h3>
                        <span class="badge ${badgeClass}" style="padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">${pedido.status}</span>
                    </div>
                    <p style="margin: 0 0 5px 0; color: #666; font-size: 14px;"><strong>Modelo:</strong> ${pedido.modelo}</p>
                    <p style="margin: 0 0 5px 0; color: #666; font-size: 14px;"><strong>Data:</strong> ${pedido.data}</p>
                    <p style="margin: 0; color: var(--cor-primaria); font-weight: bold; font-size: 16px;">Total: R$ ${pedido.valor}</p>
                </div>
            </div>
        `;
    });
}
document.addEventListener('DOMContentLoaded', carregarMeusPedidos);
