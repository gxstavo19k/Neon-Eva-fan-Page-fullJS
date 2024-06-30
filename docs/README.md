

# Documentação do Projeto Web

## Descrição do Projeto

Este site é um projeto de exercício para o curso SouKick. O tema do site é o anime Neon Genesis Evangelion. O site utiliza um layout moderno e semântico com HTML5. Ele contém várias seções, incluindo uma página inicial, uma seção de histórias e uma seção de rodapé.

### Estrutura de Diretórios

O projeto está estruturado da seguinte maneira:

```
.
└── docs / 1o-projeto-web/
    ├── index.html
    ├── wallpapers.html
    ├── README.md
    ├── .github/. (github assets)
    ├── public/
    │   ├── favico/
    │   │   └── favicon.png
    │   ├── fonts/.
    │   └── images/.
    └── src/
        ├── app.js
        ├── global.css
        ├── components/
        │   ├── header.js
        │   └── header.css
        └── styles/
            ├── app-main.css
            ├── app-sub.css
            ├── app.js
            ├── background.css
            ├── footer.css
            └── mobile.css

```
<br>
A pasta raiz do projeto é chamada `docs` devido às especificações do GitHub Pages. O GitHub Pages é um serviço de hospedagem de sites estáticos do GitHub. De acordo com a seção de configuração do repositório no GitHub, o site deve estar todo na raiz do repositório ou estar dentro de uma pasta chamada `docs`. Isso permite que o GitHub Pages saiba onde encontrar os arquivos do site para hospedagem.






O código fonte do projeto é escrito em HTML5 e JavaScript e segue a estrutura padrão de um documento HTML.

## Documentos HTML

### `index.html`

O documento HTML começa com a declaração do tipo de documento `<!doctype html>`. O idioma do documento é definido como Português do Brasil (`<html lang="pt-BR">`).

#### Cabeçalho (`<head>`)

O cabeçalho do documento contém o título do site, links para os arquivos CSS, o ícone do site (favicon), e várias meta tags. As meta tags incluem informações de codificação de caracteres, configurações de viewport, tags Open Graph para SEO e compartilhamento social, e tags do Twitter Card.

#### Corpo (`<body>`)


O corpo do documento contém a estrutura principal do site, que é dividida em duas seções principais: `app-main` e `app-sub`.

#### Seção `app-main`

Esta seção contém um vídeo de fundo que é reproduzido automaticamente em loop e um contêiner principal que inclui um script para `app.js`, um elemento `main` com informações sobre o anime Neon Genesis Evangelion, e uma imagem do trio principal do anime.


### Módulo `app.js`

Este módulo importa a função `criarHeader` do módulo `header.js` e a chama quando o documento é carregado. Isso garante que o cabeçalho seja criado e adicionado ao documento antes que qualquer outro conteúdo seja renderizado.


#### `header.js`

Este módulo contém a função `criarHeader` que é responsável por criar o cabeçalho do site. A função adiciona dinamicamente o HTML do cabeçalho ao corpo do documento e carrega os arquivos CSS necessários. Além disso, a função adiciona um evento de clique ao botão do menu móvel que alterna a visibilidade do menu de navegação.

A função `carregarEstilo` é uma função auxiliar usada para carregar dinamicamente arquivos CSS no documento. Ela cria um novo elemento `link`, define seus atributos e o adiciona ao cabeçalho do documento.

#### Código JavaScript

O código JavaScript do projeto é organizado em módulos e utiliza a sintaxe ES6.


##

### Seção `app-sub`

Esta seção contém histórias sobre os personagens principais do anime e um rodapé com direitos autorais e links para o perfil do GitHub do autor e para o site do curso SouKick.

### componentes CSS referentes ao index.
Os estilos que devem servir para todo o site se encontram no arquivo global.css. A estilização dos elementos e atributos html foram repartidos em componentes, com cada parte do site tendo seu próprio arquivo de estilo.
O projeto utiliza vários arquivos CSS para estilização, que estão localizados na pasta `src/` e na subpasta `styles/` dentro da pasta `components/`. Os arquivos CSS são linkados no documento HTML através de tags `<link>`.


#

## `wallpapers.html`

Este documento HTML contém a página de papéis de parede do site. Ele começa com a declaração do tipo de documento `<!DOCTYPE html>`. O idioma do documento é definido como Português do Brasil (`<html lang="pt-BR">`).

### Cabeçalho (`<head>`)

O cabeçalho do documento contém links para os arquivos CSS, o ícone do site (favicon), e várias meta tags. As meta tags incluem informações de codificação de caracteres e configurações de viewport. Além disso, o cabeçalho inclui links para o CSS e JavaScript do Bootstrap via CDN.

### Corpo (`<body>`)

O corpo do documento contém a estrutura principal da página de papéis de parede, que inclui um carrossel de imagens para desktop e mobile, e um rodapé.

#### Carrossel de Imagens

O carrossel de imagens é implementado usando o componente Carousel do Bootstrap. Ele contém várias imagens que podem ser percorridas pelo usuário. Cada imagem no carrossel tem um botão de download associado que permite ao usuário baixar a imagem atualmente visível.

### Scripts JavaScript

Os scripts JavaScript na página `wallpapers.html` são responsáveis por atualizar o link de download do botão de download sempre que a imagem ativa no carrossel muda. Eles também implementam a funcionalidade de download da imagem.

#### Código JavaScript

O código JavaScript na página `wallpapers.html` é responsável por atualizar o link de download do botão de download sempre que a imagem ativa no carrossel muda. Ele também implementa a funcionalidade de download da imagem.

Quando o botão de download é clicado, o script impede o comportamento padrão do link, cria uma nova requisição HTTP para obter a imagem, cria uma URL para o arquivo de imagem, cria um novo link com a URL da imagem, define o nome do arquivo para download, e simula um clique no link para iniciar o download.


## Contribuição

Este projeto é para o meu portfólio de exercícios do curso SouKick; não está aberto para contribuições e é de total autoria minha.


<!-- # DESAFIO INDIVIDUAL: PROJETO WEB

###

<p>Este site é um projeto de exercício para o curso SouKick. O tema do site é o anime Neon Genesis Evangelion. O site utiliza um layout moderno e semântico com HTML5. Ele contém várias seções, incluindo uma página inicial, uma seção de histórias e uma seção de rodapé.</p>

## Estrutura do Site

O site foi estruturado de forma semântica, utilizando divs com ids e classes específicas. O estilo foi vinculado no index.html através de um arquivo global.css localizado na pasta styles.

## Estilização
O estilo que deve ser para todo o site se encontra no arquivo `global.css`.
A estilização dos elementos e atributos html foram repartidos em componentes, com cada parte do site tendo seu próprio arquivo de estilo. Dentro da pasta [src](./src/styles), existem arquivos direcionados para o estilo do background dos documentos html, app-main para o container principal do index.html e app-sub para o container sub; componentizei o header do site para poder utilizar em todas os documentos html - o estilo do header se encontra dentro da pasta [components](./src/components), footer, mobile para o estilo do botão hamburger & wallpapers para o estilo do segundo documento; todos esses arquivos estão importados no escopo do global.css.

## Contribuição

Este projeto é  para o meu portifólio de exercícios do curso SouKick; não está aberto para contribuições e é de total autoria minha.

 -->


---
