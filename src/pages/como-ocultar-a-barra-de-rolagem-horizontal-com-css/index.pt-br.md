---
title: Como ocultar a barra de rolagem horizontal com CSS
date: '2019-08-23'
spoiler: Se me perguntam duas vezes merece o post. Vai dizer que você quando estava começando sabia dessa?
# updateDate: '2019-08-23'
---

## Vamos lá!

Hoje me perguntaram como fazer para ocultar a barra de rolagem horizontal da página. Expliquei uma vez, e depois me perguntaram novamente.
Então vamos lá:

```jsx{}
body { overflow-x: hidden }
```

Caso queira remover a vertical:

```jsx{}
body { overflow-y: hidden }
```

E se for preciso remover todas:

```jsx{}
body { overflow: hidden }
```
---

Se encontrar alguém com essa dúvida, pergunta se ela tem 1 min para ler esse post ;)