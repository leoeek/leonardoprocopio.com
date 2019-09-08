---
title: Saber a versão do Ubuntu
date: '2019-09-06'
spoiler: Você já precisou saber a versão exata do Ubuntu através do terminal? 
updateDate: '2019-09-06'
---

## E lá vamos nós

Recentemente precisei saber a versão do Ubuntu que estava rodando em um servidor, para realizar a instalação de uma biblioteca para aquela versão específica.
Pesquisando na documentação achei várias formas, e trago aqui para vocês as melhores possibilidades que me ajudaram.

##  Mãos a obra

Caso precise de algo básico e rápdio utilze o seguinte comando no seu Terminal:

```jsx{}
leo@ubuntu: sb_release -r
Release: 18.04
```

Achou muito básico? Bora atrás de: nome, versão, codinome e descrição completa. Utilize o seguinte comando:

```jsx{}
leo@ubuntu: cat /etc/lsb-release
DISTRIB_ID=Ubuntu
DISTRIB_RELEASE=18.04
DISTRIB_CODENAME=bionic
DISTRIB_DESCRIPTION=”Ubuntu 18.04.1 LTS”
```

Agora sim já foi atendida a sua espectativa, vamos detalhar um pouco ainda mais com o comando:

```jsx{}
leo@ubuntu: cat /etc/*release
DISTRIB_ID=Ubuntu
DISTRIB_RELEASE=18.04
DISTRIB_CODENAME=bionic
DISTRIB_DESCRIPTION=”Ubuntu 18.04.1 LTS”
NAME=”Ubuntu”
VERSION=”18.04.1 LTS (Bionic Beaver)”
ID=ubuntu
ID_LIKE=debian
PRETTY_NAME=”Ubuntu 18.04.1 LTS”
VERSION_ID=”18.04″
HOME_URL=”https://www.ubuntu.com/”
SUPPORT_URL=”https://help.ubuntu.com/”
BUG_REPORT_URL=”https://bugs.launchpad.net/ubuntu/”
PRIVACY_POLICY_URL=”https://www.ubuntu.com/legal/terms-and-policies/privacy-policy”
VERSION_CODENAME=bionic
UBUNTU_CODENAME=bionic
```
---

Espero ter ajudado ;)
