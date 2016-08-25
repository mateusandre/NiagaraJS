# Niagara JS
Plug-in JQuery para dropdowns em cascata.

# Niagara JS documentação

- Primeiro deve-se iniciar com um dropdown já populado: 

	```html
<select id="select1">
		<option value="1">Opção 1</option>
		<option value="2">Opção 2</option>
		<option value="3">Opção 3</option>
	</select>
	```

- Adicione a propriedade "data-url" no select que receberá os dados, passando como parâmetro a url que fará a consulta, o método que receberá a consulta deverá receber um parâmetro chamado "id" que trará o valor selecionado e deve retornar um JSON com as propriedades "valor" e "texto":
	```html
	<select id="select2" data-url="http://dominio.com/consulta">
		<option value="">Selecione um item</option>		
	</select>
	```

## Pronto! agora basta organizar a ordem de chamadas pelo id desta forma:
```js
$('#select1').Niagara('select2');
```

##Callbak - Para adicionar uma função de callback basta passá-la como segundo parâmetro:
```js
$('#select1').Niagara('select2', function(){
	//Seu código aqui
});
```
### Você ainda pode receber os resultado da consulta como parâmetro do callback:
```js
$('#select1').Niagara('select2', function(data){
	//Seu código aqui
});
```

