# Oficina App
Mobile App em React-Native o qual visa facilitar o acompanhamento dos pedidos de orçamento de uma oficina.  
É necessário utilizar o expo para rodar o dev server e build `npm install -g expo`

## Como rodar (dev-server)
* Instale as dependências do Node: `npm install` 
* Rode o Servidor de desenvolvimento: `npm start`
* Acesse o aplicativo do expo no celular e escaneie o qrcode

## Como rodar (build)
* Instale o apk na pasta `/build`
* Forneça as permissões
* Rode o app no celular

## Build expo (expo)
Build Android `expo build:android`  
Build Ios `expo build:ios`  

# Diretório

## Pages src/pages 
Diretório destinado as páginas do aplicativo.

* **Main Page** (main.js): Página principal da aplicação onde é listado os orçamentos

## Configs src/config
Arquivos de configuração.
* **StatusBarConfig.js**: Configurações de cor da status bar (ios/android).
## Components src/components
Diretório dos componentes.
* **Orcamento.js**: item de orçamento e código de show dialog.