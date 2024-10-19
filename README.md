# Documentação do Projeto: Mdoce_Estoque

## Visão Geral
O projeto **Mdoce_Estoque** é um aplicativo básico de gerenciamento de estoque desenvolvido em React Native com o framework Expo. O principal objetivo é permitir que usuários gerenciem um inventário de itens, adicionando, editando, excluindo e visualizando a quantidade total de cada item em estoque. Além disso, o aplicativo organiza os itens em ordem alfabética automaticamente e exibe uma barra de rolagem quando o número de itens excede a altura da tela.

## Funcionalidades

1. **Adicionar Itens**
   - O usuário pode adicionar novos itens ao estoque.
   - Se um item com o mesmo nome já existir (ignorando maiúsculas e minúsculas), a quantidade será somada ao item existente.

2. **Editar Itens**
   - Ao clicar em um item, o usuário pode editar o nome, a quantidade e a quantidade máxima desejada.
   - Caso o nome do item seja alterado para um nome que já exista, as quantidades serão somadas, evitando duplicação.

3. **Excluir Itens**
   - O usuário pode excluir qualquer item do estoque clicando no item e selecionando a opção de exclusão no alerta de confirmação.

4. **Listagem e Organização**
   - Os itens são organizados automaticamente em ordem alfabética sempre que são adicionados ou modificados.
   - A lista de itens é exibida em uma barra de rolagem, permitindo visualização contínua mesmo que o número de itens seja maior que a altura da tela.

5. **Sumário de Estoque**
   - O aplicativo exibe um resumo com a quantidade total de todos os itens no estoque.

## Estrutura de Diretórios

Mdoce_Estoque/
│
├── src/
│   └── components/
│       ├── AddItem.js          // Componente para adicionar itens ao estoque.
│       ├── ItemList.js         // Componente que exibe a lista de itens.
│       ├── Item.js             // Componente que renderiza individualmente um item.
│       ├── StockSummary.js     // Componente que exibe o resumo do estoque.
│       ├── Header.js           // Componente do cabeçalho do aplicativo.
│       └── Button.js           // Componente personalizado para botões (se houver).
│
├── App.js                       // Arquivo principal do aplicativo.
├── package.json                 // Gerenciamento de dependências e scripts do npm.
├── app.json                     // Configurações do Expo.
└── .gitignore                   // Arquivo para ignorar arquivos desnecessários no Git.

## Componentes Principais

1. **App.js**
   - O componente principal que gerencia o estado do aplicativo, incluindo a lista de itens, item selecionado e a visibilidade do modal de edição.
   - Renderiza os principais componentes, como Header, AddItem, ItemList e StockSummary.
   - **Funções principais**:
     - `addItem`: Adiciona novos itens ao estoque ou atualiza a quantidade de itens existentes.
     - `handleSelectItem`: Seleciona um item e apresenta opções de edição ou exclusão.
     - `handleEditItem`: Edita um item existente e lida com possíveis duplicações.
     - `handleDeleteItem`: Remove um item do estoque.

2. **AddItem.js**
   - Componente responsável por adicionar novos itens ao estoque. Inclui campos para o nome e a quantidade do item.
   - Dispara a função de adicionar itens passada como prop pelo App.js.

3. **ItemList.js**
   - Componente responsável por renderizar a lista de itens dentro de um `ScrollView`.
   - Recebe a lista de itens como prop e renderiza cada item usando o componente Item.js.

4. **Item.js**
   - Renderiza um item individual da lista, com seu nome, quantidade e quantidade máxima.
   - Possui o evento de clique para seleção do item, que exibe as opções de edição ou exclusão.

5. **StockSummary.js**
   - Componente que exibe o resumo do estoque, incluindo a quantidade total de itens.
   - Calcula o somatório das quantidades de todos os itens e exibe no formato de um texto simples.

6. **Header.js**
   - Componente visual que exibe o cabeçalho do aplicativo, com o título.

## Como Funciona

- **Inicialização**: Quando o aplicativo é iniciado, ele exibe o cabeçalho e os componentes principais: AddItem, ItemList e StockSummary.

### Adicionar Itens:
1. O usuário insere o nome e a quantidade do item no componente AddItem.
2. Ao pressionar o botão "Adicionar", o item é adicionado à lista e imediatamente organizado em ordem alfabética.

### Editar e Excluir Itens:
1. Quando o usuário clica em um item na lista, uma caixa de diálogo (alerta) é exibida com as opções "Editar" e "Excluir".
2. Se o usuário selecionar "Editar", um modal será exibido com campos para atualizar o nome, quantidade e a quantidade máxima do item.
3. Se o usuário optar por "Excluir", o item será removido da lista.

### Sumário de Estoque:
- O componente StockSummary soma a quantidade de todos os itens no estoque e exibe um resumo na parte inferior da tela.

## Dependências
O projeto depende das seguintes bibliotecas:

- **React Native**: Framework para desenvolvimento mobile nativo.
- **Expo**: Plataforma para desenvolvimento e deploy de aplicativos React Native.
- **PropTypes** (opcional, caso queira validar as props dos componentes).

No arquivo `package.json`, certifique-se de incluir as versões adequadas das dependências:

```json
{
  "dependencies": {
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-native": "0.72.4",
    "expo": "~48.0.15"
  }
}

## Melhorias Futuras: ##

Implementar persistência de dados para que o estoque seja salvo entre reinicializações do aplicativo, utilizando AsyncStorage ou uma base de dados como Firebase.
Adicionar um sistema de notificações para alertar o usuário quando a quantidade de um item atingir ou exceder a quantidade máxima desejada.
Melhorar a interface visual com componentes personalizados e estilização aprimorada.


## Como Executar o Projeto ##

### Clonar o Repositório: ###

git clone https://github.com/seu-usuario/Mdoce_Estoque.git
cd Mdoce_Estoque

### Instalar as Dependências: ###

npm install

### Rodar o Projeto no Expo: ###

expo start

### Rodar no Emulador ou no Dispositivo Físico: ###

Acesse o app Expo Go no seu dispositivo ou emulador e escaneie o QR code exibido no terminal ou na janela do navegador.
