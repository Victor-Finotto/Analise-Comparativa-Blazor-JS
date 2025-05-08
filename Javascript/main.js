let produtos = [];

window.onload = async () => {
  const inicio = performance.now();

  const res = await fetch("dados.json");
  produtos = await res.json();

  const fimRequisicao = performance.now();
  const tempoRequisicao = Math.round(fimRequisicao - inicio);

  renderizarTabela(produtos);

  const fimRenderizacao = performance.now();
  const tempoRenderizacao = Math.round(fimRenderizacao - fimRequisicao);

  document.getElementById('tempoResposta').textContent = `| Tempo de resposta: ${tempoRequisicao} ms`;
  document.getElementById('tempoRenderizacao').textContent = `| Tempo de renderização: ${tempoRenderizacao} ms`;
  document.getElementById('totalItens').textContent = `Total de itens: ${produtos.length}`;
};

function renderizarTabela(lista) {
  const tbody = document.querySelector("#tabela tbody");
  tbody.innerHTML = "";

  lista.forEach(p => {
    const tr = document.createElement("tr");

    tr.innerHTML = `  
      <td><input type="checkbox" class="chk-produto" data-id="${p.id}"></td>
      <td>${p.id}</td>
      <td>${p.nome}</td>
      <td>${p.categoria}</td>
      <td>R$ ${p.preco.toFixed(2)}</td>
      <td>${p.status}</td>
    `;

    tbody.appendChild(tr);
  });

  document.getElementById("totalItens").textContent = `Total de itens: ${lista.length}`;
}

function aplicarFiltros() {
  const inicioFiltro = performance.now();

  const nome = document.getElementById("filtro-nome").value;
  const categoria = document.getElementById("filtro-categoria").value;
  const status = document.getElementById("filtro-status").value;
  const precoMin = parseFloat(document.getElementById("filtro-preco-min").value);
  const precoMax = parseFloat(document.getElementById("filtro-preco-max").value);

  const filtrado = produtos.filter(p => {
    const nomeProduto = p.nome;
    const categoriaProduto = p.categoria;
    const statusProduto = p.status.toLowerCase();

    return (
      (!nome || nomeProduto.includes(nome)) &&
      (!categoria || categoriaProduto.includes(categoria)) &&
      (!status || statusProduto === status.toLowerCase()) &&
      (isNaN(precoMin) || p.preco >= precoMin) &&
      (isNaN(precoMax) || p.preco <= precoMax)
    );
  });

  renderizarTabela(filtrado);

  const fimFiltro = performance.now();
  const tempoFiltro = Math.round(fimFiltro - inicioFiltro);

  document.getElementById("tempoFiltro").textContent = `| Tempo de filtro: ${tempoFiltro} ms`;
}

document.getElementById("btn-filtrar").addEventListener("click", aplicarFiltros);

function selecionarTodos(checkbox) {
  document.querySelectorAll(".chk-produto").forEach(c => {
    c.checked = checkbox.checked;
  });
}

function atualizarSelecionados() {
  const selecionados = Array.from(document.querySelectorAll(".chk-produto:checked"))
    .map(c => c.dataset.id);

  console.log("IDs selecionados para atualização:", selecionados);
}

function excluirSelecionados() {
  const selecionados = Array.from(document.querySelectorAll(".chk-produto:checked"))
    .map(c => c.dataset.id);

  const inicioExclusao = performance.now();

  produtos = produtos.filter(p => !selecionados.includes(p.id.toString()));
  renderizarTabela(produtos);

  const fimExclusao = performance.now();
  const tempoExclusao = Math.round(fimExclusao - inicioExclusao);

  document.getElementById("tempoExclusao").textContent = `| Tempo de exclusão: ${tempoExclusao} ms`;

  console.log("Produtos excluídos:", selecionados);
}

function excluirProduto(id) {
  const inicioExclusao = performance.now();

  produtos = produtos.filter(p => p.id !== id);
  renderizarTabela(produtos);

  const fimExclusao = performance.now();
  const tempoExclusao = Math.round(fimExclusao - inicioExclusao);

  document.getElementById("tempoExclusao").textContent = `| Tempo de exclusão: ${tempoExclusao} ms`;

  console.log(`Produto com ID ${id} excluído.`);
}

function atualizarSelecionados() {
  const selecionados = Array.from(document.querySelectorAll(".chk-produto:checked"))
    .map(c => c.dataset.id);

  if (selecionados.length > 0) {
    // Exibir o formulário de atualização
    document.getElementById("form-atualizacao-section").style.display = "block";
  } else {
    alert("Por favor, selecione pelo menos um produto para atualizar.");
  }
}

function confirmarAtualizacao() {
  const inicioAtualizacao = performance.now(); // Marca o início da atualização

  const nome = document.getElementById("novo-nome").value;
  const categoria = document.getElementById("nova-categoria").value;
  const preco = parseFloat(document.getElementById("novo-preco").value);
  const status = document.getElementById("novo-status").value;

  const selecionados = Array.from(document.querySelectorAll(".chk-produto:checked"))
    .map(c => c.dataset.id);

  selecionados.forEach(id => {
    const produto = produtos.find(p => p.id == id);
    if (produto) {
      if (nome) produto.nome = nome;
      if (categoria) produto.categoria = categoria;
      if (!isNaN(preco)) produto.preco = preco;
      if (status) produto.status = status;
    }
  });

  // Re-renderizar a tabela
  renderizarTabela(produtos);

  // Marca o fim da atualização
  const fimAtualizacao = performance.now();
  const tempoAtualizacao = Math.round(fimAtualizacao - inicioAtualizacao);

  // Exibir o tempo de atualização
  document.getElementById("tempoExclusao").textContent = ` | Tempo de atualização: ${tempoAtualizacao} ms`;

  // Ocultar o formulário de atualização
  document.getElementById("form-atualizacao-section").style.display = "none";
}

function cancelarAtualizacao() {
  // Ocultar o formulário de atualização
  document.getElementById("form-atualizacao-section").style.display = "none";
}
