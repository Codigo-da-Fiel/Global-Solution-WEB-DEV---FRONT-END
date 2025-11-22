# 🧠 FutureWork – Plataforma para o Futuro do Trabalho

A FutureWork é uma plataforma digital criada para conectar pessoas, tecnologia e propósito.
Desenvolvida como parte do projeto acadêmico das disciplinas de Front-End e Web Development, a plataforma simula uma rede profissional moderna semelhante ao LinkedIn com foco em competências do futuro, empregabilidade e inclusão digital.

Seu objetivo principal é preparar estudantes e profissionais para as transformações do mercado de trabalho, oferecendo uma experiência visual dinâmica, informativa e intuitiva.

---

## 🎯 Objetivos do Projeto

Desenvolver uma aplicação web interativa utilizando HTML, CSS e JavaScript, que simule uma rede profissional voltada ao
futuro do trabalho, permitindo exibir e explorar perfis de profissionais cadastrados, com informações pessoais, acadêmicas, profissionais e comportamentais.
Os alunos deverão criar uma Landing Page que apresente uma listagem de profissionais 
fictícios (dados simulados em uma Array) e permita visualizar informações completas de 
cada perfil. Deve ser montada utilizando: HTML + CSS + JavaScript

---

## 🗂️ Estrutura do Projeto

A organização do FutureWork segue uma estrutura simples e intuitiva dentro da pasta **`src`**, separando arquivos por função e facilitando a manutenção:

```
src
│
├── assets/
│   └── (imagens, ícones e ilustrações usadas no site)
│
├── css/
│   ├── landing.css      (estilos da página inicial)
│   ├── curriculo.css    (estilos da página de currículo)
│   ├── estilo.css       (estilo geral e componentes principais)
│   └── sobre.css        (estilos da página “sobre”)
│
├── js/
│   ├── landing.js       (interações da Landing Page)
│   ├── curriculo.js     (funções e comportamento da página de currículo)
│   └── script.js        (scripts gerais, efeitos e navegação)
│
├── pages/
│   ├── LandingPage.html
│   ├── curriculo.html
│   └── sobre.html
│
└── equipe.txt           (informações da equipe do projeto)

index.html                (arquivo principal na raiz)

```

---

## 👥 Integrantes do Projeto

* **Alexandre Constantino Furtado Junior** – RM567188
* **Leonardo Batista de Souza** – RM568558
* **Matheus Freitas dos Santos** – RM567337

---

## 🌐 Link para o projeto publicado

👉 **FutureWork – GitHub Pages**


---

## ✨ Efeitos Visuais e Recursos (CSS Avançado)

O site utiliza CSS moderno para reforçar a estética futurista da plataforma e melhorar a experiência do usuário.

### 🔹 Pseudo-classes utilizadas

* `:hover` — anima botões, textos e elementos interativos.
* `:focus` — destaca campos de formulário selecionados.
* `:active` — altera estados clicados em botões e links.
* `:required` — aplicado aos inputs obrigatórios.
* `:valid` / `:invalid` — validação automática do campo de e-mail.
* `:nth-child()` — usado para destacar a página ativa no menu.
* `.active` — ativado via JavaScript para marcar o item atual.

### 🔹 Pseudo-elementos aplicados

* `::before` — adicionado em títulos especiais para criar barra ou ícone decorativo futurista.
* `::after` — cria linhas e detalhes luminosos abaixo dos títulos.
* `::selection` — muda a cor do texto selecionado pelo usuário.

### 🔹 Animações e Transições

* **`@keyframes fade-in`** – animação suave ao carregar a página, com efeito de entrada vertical.
* **`transition`** — suaviza mudanças em botões, cards e textos.
* **`transform: scale()`** — usado em cards e imagens para efeito de zoom.
* **`backdrop-filter`** — aplicado em cards para visual de vidro futurista com blur.

---

## 📁 Arquivo de Efeitos

Todos os efeitos visuais estão organizados na pasta:

```
css

```
