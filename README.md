# Yomix

Yomix é um aplicativo mobile desenvolvido em React Native com Expo para explorar, favoritar e cadastrar mangás com temática anime.

## Funcionalidades

- Visualizar uma lista de itens
- Acessar os detalhes de um item
- Cadastrar um novo item
- Navegar entre diferentes telas
- Utilizar componentes reutilizáveis
- Trabalhar com imagens
- Utilizar formulários
- Utilizar listas
- Utilizar parâmetros de navegação
- Utilizar useState para gerenciamento dos dados dos formulários
- Utilizar FlatList para apresentação das listas

## Tecnologias utilizadas

- React Native
- Expo
- Expo Router
- JavaScript / TypeScript

## Estrutura principal do projeto

```bash
yomix_app/
├── app/
│   ├── _layout.tsx
│   ├── adicionar_item.tsx
│   ├── detalhes_item.tsx
│   ├── index.tsx
│   └── item_favorito.tsx
├── assets/
│   └── styles/
│       ├── adicionar_item.styles.js
│       ├── detalhes_item.styles.js
│       ├── index.styles.js
│       ├── item_favorito.styles.js
│       ├── layout.styles.js
│       └── MangaCard.styles.js
├── components/
│   └── MangaCard.js
├── App.js
├── app.json
├── index.js
├── package.json
├── tsconfig.json
├── README.md
└── LICENSE
```

## Como executar localmente

1. Acesse a pasta do projeto:

```bash
cd yomix_app
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o aplicativo:

```bash
npx expo start
```

4. Abra no emulador ou no aplicativo Expo Go.

## Observações

O app inclui uma coleção inicial de mangás com imagens, lista dinâmica, cadastro de novos itens e funcionalidade de favoritos. O estado dos dados é gerenciado com React e os itens são exibidos por meio de listas em telas diferentes.

## Requisitos atendidos

Este projeto foi desenvolvido para atender aos requisitos solicitados:

- visualização de lista de itens
- detalhes do item
- cadastro de novos itens
- navegação entre telas
- componentes reutilizáveis
- manipulação de imagens
- formulários com useState
- uso de FlatList
- uso de parâmetros de navegação
