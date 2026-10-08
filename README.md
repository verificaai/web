# VerificaAI — Web

> Interface web do **VerificaAI**, projeto de Trabalho Profissional de Conclusão de Curso (TCC) do Colégio Técnico de Campinas (COTUCA/UNICAMP), voltado à identificação de indícios de geração de vídeos por Inteligência Artificial.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

## Sobre o projeto

O **VerificaAI** é uma proposta de ferramenta acessível para auxiliar usuários na identificação de vídeos que apresentem indícios de geração por Inteligência Artificial Generativa.

A proposta consiste em uma plataforma web na qual o usuário poderá enviar um vídeo para análise. O sistema deverá encaminhar o conteúdo para um modelo de Inteligência Artificial capaz de investigar características e vestígios forenses presentes nos frames e, posteriormente, apresentar o resultado acompanhado de evidências visuais.

O projeto não tem como objetivo avaliar a opinião, o posicionamento ou a veracidade das informações apresentadas no vídeo. O foco está na **origem e nos indícios de geração sintética do conteúdo**.

## Funcionalidades do front-end

O projeto web atualmente disponibiliza:

- **Página inicial** com apresentação do VerificaAI e seus principais diferenciais;
- **Página “Sobre nós”**, com informações sobre o projeto organizadas em tópicos;
- **Página “Verificar”** para seleção de vídeos;
- upload de vídeos por seleção de arquivo.

## Tecnologias

### Front-end

- [React](https://react.dev/) — construção da interface;
- [Vite](https://vite.dev/) — ambiente de desenvolvimento e build;
- [React Router](https://reactrouter.com/) — roteamento da aplicação;
- [Tailwind CSS](https://tailwindcss.com/) — estilização;
- [Lucide React](https://lucide.dev/) — ícones;
- [GSAP](https://gsap.com/) — biblioteca de animações disponível no projeto.

## Estrutura do projeto

```text
web-main/
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── Erro.png
│   │   ├── Logo.svg
│   │   ├── Lupa.png
│   │   ├── VerificaAI-about.svg
│   │   ├── VerificaAI-footer.svg
│   │   └── bliss.png
│   │
│   ├── components/
│   │   ├── BouncingBubble.jsx
│   │   ├── Bubbles.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Homepage.jsx
│   │   └── Upload.jsx
│   │
│   ├── data/
│   │   └── sobreContent.json
│   │
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Error.jsx
│   │   ├── Home.jsx
│   │   └── Verify.jsx
│   │
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Rotas

| Rota | Página | Descrição |
|---|---|---|
| `/` | Home | Apresentação do VerificaAI e diferenciais |
| `/sobre` | Sobre nós | Informações e fundamentação do projeto |
| `/verificar` | Verificar | Interface para seleção e pré-visualização de vídeos |

## Requisitos

Para executar o projeto localmente, é necessário ter instalado:

- **Node.js**;
- **npm**.

A versão recomendada do Node.js deve ser compatível com as versões atuais das dependências definidas no `package.json`.

## Instalação

Clone o repositório e entre na pasta do projeto:

```bash
git clone <URL_DO_REPOSITORIO>
cd web-main
```

Instale as dependências:

```bash
npm install
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação, normalmente:

```text
http://localhost:5173
```

## Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar localmente o build gerado:

```bash
npm run preview
```

## Lint

Para executar a verificação estática do código:

```bash
npm run lint
```

## Arquitetura atual

A aplicação utiliza uma organização simples baseada em **páginas** e **componentes reutilizáveis**.

- `pages/` concentra as páginas acessíveis pelas rotas da aplicação;
- `components/` contém componentes reutilizáveis da interface;
- `data/` concentra conteúdos estáticos utilizados pela aplicação;
- `assets/` contém imagens e elementos gráficos;
- `main.jsx` configura o roteamento e inicializa a aplicação React;
- `index.css` define o sistema visual, variáveis de tema e animações utilizadas pelo front-end.

## Privacidade e segurança

A proposta do projeto considera a privacidade dos vídeos enviados pelo usuário como um requisito importante. O planejamento prevê evitar o armazenamento permanente dos vídeos e utilizar mecanismos de segurança na comunicação entre front-end e back-end.

## Equipe

**VerificaAI — TCC 2026**

- **Davi Oton Pereira Rodrigues**
- **Miguel Henrique Amorim Pereira**
- **Orientadora:** Marcia Maria Tognetti Correa

**Instituição:** Colégio Técnico de Campinas — COTUCA/UNICAMP  
**Departamento:** Computação  
**Ano:** 2026

## Licença

Este projeto está distribuído sob a licença **MIT**. Consulte o arquivo [`LICENSE`](./LICENSE) para os termos completos.

---

<p align="center">
  <strong>VerificaAI</strong><br>
  Identificação de indícios de conteúdo sintético em vídeos por Inteligência Artificial.
</p>
