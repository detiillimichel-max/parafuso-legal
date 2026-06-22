# parafuso-legal
# 🔩 Nut Sort – Ordene os Parafusos

Um jogo de puzzle divertido onde você ordena porcas coloridas nos parafusos certos!

![screenshot](screenshot.png)

## 🎮 Como Jogar

1. Toque em um parafuso para selecionar a porca do topo
2. Toque em outro parafuso para mover a porca
3. Você só pode mover uma porca para cima de outra da **mesma cor**
4. O objetivo é deixar cada parafuso com porcas de **uma única cor**
5. Complete o nível com o menor número de movimentos para ganhar ⭐⭐⭐

## ✨ Funcionalidades

- 🎯 **4 dificuldades**: Fácil, Médio, Difícil e Expert
- 📦 **80 níveis** gerados proceduralmente (20 por dificuldade)
- ↩️ **Desfazer** movimentos a qualquer momento
- 💡 **Sistema de dicas** (3 por nível)
- ➕ **Parafuso extra** quando travar
- ⭐ **Sistema de estrelas** baseado no número de movimentos
- 💾 **Progresso salvo** automaticamente no localStorage
- 📱 **Mobile-first**, funciona no celular e desktop

## 🚀 Como Usar

### Opção 1 – Direto no navegador
Abra o arquivo `index.html` no seu navegador. Nenhuma instalação necessária!

### Opção 2 – GitHub Pages
1. Faça um fork ou clone este repositório
2. Vá em **Settings → Pages**
3. Em **Source**, selecione a branch `main` e a pasta raiz `/`
4. Salve — o jogo estará disponível em `https://seu-usuario.github.io/nome-do-repo/`

## 📁 Estrutura

```
/
└── index.html   # Jogo completo em arquivo único
└── README.md    # Este arquivo
```

## 🛠️ Tecnologias

- HTML5, CSS3, JavaScript puro (Vanilla JS)
- Sem dependências externas
- Canvas não utilizado — tudo em DOM/CSS
- Google Fonts (Nunito) via CDN

## 🎨 Design

- Tema escuro com fundo roxo profundo `#1e1a3a`
- Porcas com gradientes coloridos e efeito hexagonal
- Animações suaves ao mover porcas
- Confete e partículas ao completar nível
- Responsivo: funciona de 320px até desktop

## 🔧 Personalização

Para adicionar mais níveis ou modificar a dificuldade, edite a função `generateLevel` no `index.html`:

```js
const cfg = {
  facil:   { bolts: 4, nutH: 3, colors: 3, extra: 1 },
  medio:   { bolts: 5, nutH: 4, colors: 4, extra: 1 },
  dificil: { bolts: 7, nutH: 4, colors: 5, extra: 2 },
  expert:  { bolts: 9, nutH: 5, colors: 6, extra: 2 },
};
```

- `bolts`: número total de parafusos
- `nutH`: altura da pilha (porcas por cor)
- `colors`: quantidade de cores
- `extra`: parafusos vazios extras

## 📄 Licença

MIT — livre para usar, modificar e distribuir.

---

Feito com ❤️ e muito JavaScript
