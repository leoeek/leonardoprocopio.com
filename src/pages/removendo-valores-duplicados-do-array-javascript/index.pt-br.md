---
title: Removendo valores duplicados do Array JavaScript
date: '2019-11-03'
spoiler: Removendo valores duplicados do Array Javascript sem muita complicação.
updateDate: '2019-11-03'
---

## Baseado em fatos reais

Recentemente (semana passada) precisei remover valores duplicados de um Array que montei com dados vindo do servidor. Faltava pouco para iniciar o processo de criação de uma função para fazer essa limpeza no meu Array, e resolvi dar uma olhada na documentação.

Lendo um pouco sobre Array, acabei me deparando com algumas funções para lidar com Objeto, e uma em particular me chamou a atenção: Set.

## Mostre o código

```jsx{}
const codigo = [1, 2, 3, 2, 4, 5, 1]
const novo = [...new Set(codigo)]
console.log(novo)
//1, 2, 3, 4, 5
```

## E onde está a bruxaria?

O comando Set permite você armazenar valores únicos de qualquer tipo! 
Então estamos criando um novo Array com valores únicos graças ao Set.

Mais sobre esse comando pode ser visto na documentação da [Mozilla.org](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Set)

---

Se encontrar alguém com essa dúvida, pergunta se ela tem 1 min para ler esse post ;)