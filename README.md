## Magento Modulo de Mascarar campos - BR

- Simples solução para mascarar campos automaticamente no Magento2.
- Funcionando nos campos de CPF/CNPJ (TAX/VAT), Telefone, e CEP (Zipcode/Postcode).
- Usando [jQuerySimpleMask](https://github.com/DevUtils/jQuerySimpleMask "jQuerySimpleMas") adaptado para o Magento2.
- Testado e criado usando Magento 2.3.6
### Instalação (Apenas manual)
- Faça o [download](https://github.com/LimaJonas/magento-maskinput/releases "download") do modulo.
- Em [Magento_Root]/App/Code, crie as pastas Jonaslima/Maskinput.
- Extraia arquivos dentro da pasta Maskinput.
- Execute os comandos:

```
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy pt_BR -f
php bin/magento cache:flush
```
- Pronto, instalado. basta testar.

## Videos

[![](https://i.imgur.com/agGygOE.gif)](https://i.imgur.com/agGygOE.gif)

## Alterar Máscara
- Talvez você necessite alterar alguma máscara. É bem simples, basta entrar em  [Modulo_Root]/view/frontend/web/js/ e alterar o arquivo **setMask.js**. 
