# 🚀 Revisão de Padrões de Projeto - Técnicas de Programação II

Este repositório contém a resolução de uma atividade de revisão focada nos **Padrões de Projeto Criacionais (GoF)**. O objetivo é consolidar os conceitos teóricos e práticos para a avaliação da disciplina de Desenvolvimento de Software Multiplataforma (FATEC).

## 📌 Sobre os Padrões de Projeto
Padrões de projeto são soluções generalistas para problemas recorrentes no desenvolvimento de software orientado a objetos. Eles ajudam a criar sistemas mais flexíveis, mantíveis e com baixo acoplamento.

---

## 🛠️ Padrões Implementados (Catálogo GoF)

### 1. Factory Method
**Propósito:** Define uma interface para criar um objeto, mas deixa as subclasses decidirem qual classe instanciar.
- **Exercícios inclusos:** Sistema de Logística (Caminhão/Navio/Drone), Sistema Educacional de Provas, Interface Multiplataforma.
- **Vantagem:** Desacopla o código cliente das classes concretas.

### 2. Abstract Factory
**Propósito:** Fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.
- **Exercícios inclusos:** Jogo de RPG (Heróis vs Malvados), E-commerce (Eletrônicos/Moda), Simulador de Veículos.
- **Vantagem:** Garante a compatibilidade entre produtos de uma mesma família.

### 3. Builder
**Propósito:** Separa a construção de um objeto complexo da sua representação, permitindo que o mesmo processo de construção crie diferentes representações.
- **Exercícios inclusos:** Montagem de Pizza, Gerador de Relatórios, Cadastro de Estudantes.
- **Vantagem:** Evita o "construtor telescópico" e permite objetos imutáveis.

### 4. Prototype
**Propósito:** Permite a criação de novos objetos a partir de um modelo original (protótipo) via clonagem.
- **Exercícios inclusos:** Editora de Documentos, Clonagem de Pedidos de Pizza, Sistema CAD.
- **Vantagem:** Eficiência ao evitar processos de inicialização custosos.

### 5. Singleton
**Propósito:** Garante que uma classe tenha apenas uma única instância em todo o sistema, fornecendo um ponto de acesso global.
- **Exercícios inclusos:** Gerenciador de Configurações, Logger do Sistema, Carrinho de Compras.
- **Vantagem:** Controle rígido sobre recursos compartilhados.

---

## 💻 Tecnologias Utilizadas
- **Linguagem:** JavaScript (ES6+)
- **Ambiente:** Node.js / Navegador
- **Paradigma:** Orientação a Objetos (POO)

## 📖 Como estudar por este repositório
Cada pasta ou arquivo contém a explicação teórica da questão seguida da implementação prática.
1. Leia o conceito do padrão.
2. Analise como a estrutura de classes (Interface, Classes Concretas, Criadores/Diretores) foi montada.
3. Tente replicar a lógica para novos cenários.

---
📝 **Nota:** Este material foi desenvolvido como parte das atividades do Prof. Vinicius Heltai na FATEC Diadema.
