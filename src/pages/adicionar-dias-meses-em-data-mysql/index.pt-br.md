---
title: Adicionar dias ou meses em data no MySQL
date: '2021-05-03'
spoiler: Adicionar dias ou meses em determinadas datas no MySQL é muito mais simples do que você imagina
updateDate: '2021-05-03'
---

## Simplesmente simples

Em um passado não muito distante foi necessário retornar usuários que estavam completando 12 meses de cadastro no sistema. Interessante que existem diversas formas para se alcançar esse resultado, podendo atender a todos os gostos (umas simples, outras complexas, outras direto no código, etc). 

Particularmente eu prefiro realizar esse tratamento direto no banco, e somente retornar os registros que atendem ao solicitado.

## Cenário atual

Tenho uma tabela de usuário, com os campos de ID, NOME e DT_CADASTRO. O SELECT abaixo:

```
SELECT id, nome, dt_cadastro FROM usuario
```

Retorna o seguinte resultado:

```
'917', 'Usuário', '2020-11-19 16:12:09'
'825', 'Usuário', '2020-07-22 09:50:11'
'771', 'Usuário', '2020-06-21 18:03:06'
'766', 'Usuário', '2020-06-20 21:34:06'
'749', 'Usuário', '2020-06-11 10:16:06'
```

Conferindo a documentação do [MySQL](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html) para ver as possibilidades em trabalhar com datas, achei o método [ADDDATA](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_adddate) que resolveu o problema lindamente.

Para entender melhor, fiz uma mudança no SELECT adicionando uma nova coluna com o resultado do método em ação, adicionando 12 meses da data de cadastro:

```
SELECT id, nome, dt_cadastro, 
ADDDATE(dt_cadastro, INTERVAL 12 month) AS dt_cadastro_alterada 
FROM usuario
```
Resultado:

```
--------------------------------------------------------------
'917', 'Usuário', '2020-11-19 16:12:09', '2021-11-19 16:12:09'
'825', 'Usuário', '2020-07-22 09:50:11', '2021-07-22 09:50:11'
'771', 'Usuário', '2020-06-21 18:03:06', '2021-06-21 18:03:06'
'766', 'Usuário', '2020-06-20 21:34:06', '2021-06-20 21:34:06'
'749', 'Usuário', '2020-06-11 10:16:06', '2021-06-11 10:16:06'
--------------------------------------------------------------
```

## O bom mesmo é ter alternativas

Para filtrar o resultado, podemos utilizar um outro comando magnífico do MySQL destinado a formatação de datas, o [DATE_FORMAT](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_date-format), veja o próximo exemplo:

```
SELECT id, nome, dt_cadastro, 
ADDDATE(dt_cadastro, INTERVAL 12 month) AS dt_cadastro_alterada,
DATE_FORMAT(ADDDATE(dt_cadastro, INTERVAL 12 month), '%Y-%m') AS dt_formatada
FROM usuario
```

Resultado:

```
-------------------------------------------------------------------------
'749', 'Usuário', '2020-06-11 10:16:06', '2021-06-11 10:16:06', '2021-06'
'766', 'Usuário', '2020-06-20 21:34:06', '2021-06-20 21:34:06', '2021-06'
'771', 'Usuário', '2020-06-21 18:03:06', '2021-06-21 18:03:06', '2021-06'
'825', 'Usuário', '2020-07-22 09:50:11', '2021-07-22 09:50:11', '2021-07'
'917', 'Usuário', '2020-11-19 16:12:09', '2021-11-19 16:12:09', '2021-11'
-------------------------------------------------------------------------
```


Clareou ai?

## Marcando a task como concluída

Agora então foi só alterar a condição do SELECT para que retorne somente quem está completando no mês atual os 12 meses de cadastro:

```
SELECT id, nome, dt_cadastro, 
ADDDATE(dt_cadastro, INTERVAL 12 month) AS dt_cadastro_alterada,
DATE_FORMAT(ADDDATE(dt_cadastro, INTERVAL 12 month), '%Y-%m') AS dt_formatada
FROM usuario
WHERE 
DATE_FORMAT(ADDDATE(dt_cadastro, INTERVAL 12 month), '%Y-%m') = DATE_FORMAT(CURRENT_DATE(), '%Y-%m')
```

Resultado:

```
-------------------------------------------------------------------------
'749', 'Usuário', '2020-06-11 10:16:06', '2021-06-11 10:16:06', '2021-06'
'766', 'Usuário', '2020-06-20 21:34:06', '2021-06-20 21:34:06', '2021-06'
'771', 'Usuário', '2020-06-21 18:03:06', '2021-06-21 18:03:06', '2021-06'
-------------------------------------------------------------------------
```

O interessante desse método ADDDATE é que você não fica preso a somente Month, você pode adicionar (ou remover) dias, horas, e muito mais:
```
MICROSECOND
SECOND
MINUTE
HOUR
DAY
WEEK
MONTH
QUARTER
YEAR
SECOND_MICROSECOND
MINUTE_MICROSECOND
MINUTE_SECOND
HOUR_MICROSECOND
HOUR_SECOND
HOUR_MINUTE
DAY_MICROSECOND
DAY_SECOND
DAY_MINUTE
DAY_HOUR
YEAR_MONTH
```

Como disse anteriormente, existem diversas formas de alcançar o objetivo, e cada a você testar e escolher qual faz mas sentido para o momento que está passando. E por favor, não se esqueça de compartilhar.


Espero ter ajudado ;)
