jQuery.fn.extend({

	Niagara: function(params){

		var paramArray = params.split(',');
		var firstSelect = document.getElementById(paramArray[0].trim());
		SetSelectEventListener($(this), $(firstSelect));

		if (paramArray.length > 1) {

			for (var i =  0; i < paramArray.length - 1 ; i++) {

				var item = document.getElementById(paramArray[i].trim());
				var next = document.getElementById(paramArray[i + 1].trim());				

				SetSelectEventListener($(item), $(next));
			}
		}		
	}	
});

function SetSelectEventListener(select, next){

	select.on('change', function(){

		var url = next.data('url');

		if (typeof(url) !== 'undefined')  {

			$.get(url, {id: select.val()} , function(data){

				var html = '<option value="">Selecione um item</option>';
				for (var y = 0; y < data.length; y++) {
					var item = data[y];
					html += '<option value="'+ item.id +'" >'+ item.nome +'</option>';
				}

				next.html(html);				
			})				
		}	

	});
}