jQuery.fn.extend({

	Niagara: function(params, callback){

		var paramArray = params.split(',');
		var firstSelect = document.getElementById(paramArray[0].trim());
		SetSelectEventListener($(this), $(firstSelect), callback);

		if (paramArray.length > 1) {

			for (var i =  0; i < paramArray.length - 1 ; i++) {

				var item = document.getElementById(paramArray[i].trim());
				var next = document.getElementById(paramArray[i + 1].trim());				

				SetSelectEventListener($(item), $(next), callback);
			}
		}		
	}	
});

function SetSelectEventListener(select, next, callback){

	select.on('change', function(){

		var url = next.data('url');

		if (typeof(url) !== 'undefined')  {

			$.get(url, {id: select.val()} , function(data){

				var html = '<option value="">Selecione um item</option>';
				for (var y = 0; y < data.length; y++) {
					var item = data[y];
					html += '<option value="'+ item.valor +'" >'+ item.texto +'</option>';
				}

				next.html(html);

				callback(data);
			})				
		}	

	});
}

/*Copyright*/