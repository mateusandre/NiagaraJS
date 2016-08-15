# Niagara-JS
Plug-in JQuery para dropdowns em cascata.

# Niagara JS documentação

- Primeiro deve-se iniciar com um dropdown já populado

- Adicione a propriedade "data-url" no select que receberá os dados, passando como parâmetro a url que fará a consulta, o método que receberá a consulta deverá receber um parâmetro chamado "id" que trará o valor selecionado

- Adicione um id para os selects

# Pronto! agora basta organizar a ordem de chamadas desta forma:

$('#Id do primeiro select').Niagara('Id do select que receberá');
