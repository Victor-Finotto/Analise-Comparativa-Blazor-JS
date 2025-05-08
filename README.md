
# 📦 Projetos Unidos - Blazor e JavaScript

Este repositório contém dois projetos distintos que implementam funcionalidades semelhantes, mas utilizando **Blazor WebAssembly** e **JavaScript** para fins de comparação de desempenho.

## 🚀 Estrutura do Repositório

A estrutura do repositório é organizada da seguinte maneira:

```
ProjetosUnidos/
├── BlazorApp/       # Arquivos do projeto Blazor
│   ├── (arquivos Blazor)
├── Javascript/      # Arquivos do projeto JavaScript
│   ├── (arquivos JS)
```

### 1️⃣ **BlazorApp**

Este diretório contém o projeto desenvolvido com **Blazor WebAssembly**. O Blazor permite construir aplicações web utilizando **C#** ao invés de JavaScript.

#### Como rodar o BlazorApp:

1. Abra o projeto **BlazorApp** no **Visual Studio**.
2. Selecione o tipo **Blazor WebAssembly**.
3. Execute o projeto pressionando `F5` ou clicando em **Start**.

O Blazor utiliza o **WebAssembly** para rodar C# diretamente no navegador, oferecendo uma experiência rica de interação com o backend, sem necessidade de JavaScript.

---

### 2️⃣ **Javascript**

Este diretório contém um projeto tradicional de **JavaScript**, com as mesmas funcionalidades implementadas no Blazor, mas utilizando **JavaScript puro**.

#### Como rodar o projeto JavaScript:

1. Navegue até o diretório `Javascript`.
2. Abra o arquivo `index.html` no seu navegador.
3. O código JavaScript será executado diretamente no navegador.

Este projeto serve para comparação de desempenho com o Blazor, utilizando a mesma lógica, mas com **JavaScript**.

---

## ⚙️ Funcionalidades Comuns

Ambos os projetos implementam as seguintes funcionalidades:

- **Exibição de lista de produtos**: Uma tabela de produtos com informações como ID, Nome, Categoria, Preço e Status.
- **Filtros**: Opções de busca para filtrar produtos por nome, categoria, status e preço.
- **Atualização e Exclusão**: Possibilidade de atualizar e excluir produtos diretamente da interface.
- **Medição de Performance**: Comparação de desempenho entre **Blazor WebAssembly** e **JavaScript**.

---

## ⏱️ Métricas de Desempenho

A performance é medida em ambos os projetos para fins de comparação:

- **Tempo de resposta**: Tempo necessário para carregar os dados do servidor.
- **Tempo de renderização**: Tempo necessário para renderizar a interface no navegador.
- **Tempo de filtro**: Tempo necessário para aplicar filtros e exibir os resultados.
- **Tempo de exclusão**: Tempo necessário para excluir produtos da lista.

Essas métricas ajudam a comparar a eficiência de cada framework/language.

---
