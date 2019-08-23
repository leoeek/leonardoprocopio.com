---
title: Recarregar a página com JavaScript
date: '2019-08-23'
spoiler: Aquele que nunca precisou não sabe o valor de um reload
# updateDate: '2019-08-23'
---

## Vamos lá!

Já precisou executar aquela montueira de código e logo em seguida dependendo da situação recarregar a página? Lógico que você poderia pedir ao usuário usar o F5, mas ninguém gostou da sua ideia? 
Fique tranquilo e utilize o seguinte comando JavaScript:

```jsx{}
location.reload()
```

## Atenção para a dica do tio!

O método reload() é usado para recarregar o documento atual, ou seja, ele faz a mesma coisa que apertar o botão Recarregar do seu navegador. E por padrão ele recarrega a página do seu cache. Caso queria recarregar a página do servidor e não a do seu cache, utilize:

```jsx{}
location.reload(true)
```

Só vamos?!

---

Se encontrar alguém com essa dúvida, pergunta se ela tem 1 min para ler esse post ;)