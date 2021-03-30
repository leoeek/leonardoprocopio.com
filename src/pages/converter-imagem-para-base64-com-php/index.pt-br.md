---
title: Converter imagem para Base64 com PHP
date: '2021-03-30'
spoiler: Já precisou converter uma imagem em Base64 para enviar a uma API ou salvar no BD?
updateDate: '2021-03-30'
---

## Simples e Simples

Recentemente estava trabalhando em uma integração com o e-commerce [Magento](https://magento.com/pt), e precisava cadastrar produtos e fotos através da API que ele oferece.
Olhando a documentação, percebi que seria necessário enviar a imagem convertida em Base64.

##  PHP ajuda muuuuuuito

É muito interessante as soluções de problemas que universo PHP oferece, isso sem dúvida me faz ficar cada vez mais apaixonado pela linguagem. 
E para esse problema, a solução é bem simples, vamos lá:

```jsx{}
<?php 
//Pega o conteudo do arquivo com o file_get_contents
$imagem = file_get_contents(
'https://leonardoprocopio.com/static/fotoaqui.jpg');
  
//Convertemos o conteudo com base64
$data = base64_encode($imagem);
  
//Exibindo resultado da conversão
echo $data;
?>
```

```
RESUMIDO...
iVBORw0KGgoAAAANSUhEUgAAA8AAAAPACAYAAAD61hCbAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw1AUhU9TpaIVBzuIKESoThZERRy1CkWoEGqFVh1MXvojNGlIUlwcBdeCgz+LVQcXZ10dXAVB8AfEzc1J0UVKvC8ptIjxwuN9nHfP4b37AKFWYprVNgZoum2mEnExk10RQ68IYhBdCGBIZpYxK0lJ+NbXPfVR3cV4ln/fn9Wt5iwGBETiGWaYNvE68dSmbXDeJ46woqwSnxOPmnRB4keuKx6/AAAQwAAAACCAAQAAQAADAAAggAEAAEAAAwAAgAAGAAAAAQwAAAACGAAAAAQwAAAACGAAAAAQwAAAACCAAQAAeEX6/wHLFC2ZWi3wyQAAAABJRU5ErkJggg==
```

Simples né!?
O resultado você tem uma string (bem grandinha por sinal), que pode ser enviada para API ou se preferir pode gravar no BD.
Um detalhe interessante: Geralmente os arquivos convertidos para Base64 ficam uns 30% maiores que o arquivo original. 

O comando [base64_encode](https://www.php.net/manual/en/function.base64-encode.php) e [file\_get\_contents](https://www.php.net/manual/en/function.file-get-contents.php) estão desde a versão 4 do PHP.


Espero ter ajudado ;)
