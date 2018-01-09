var principal= ['tarta de jyq','ensalada caprese','milanesa','1/4 de pollo'];
var guarnicion = ['ensalada mixta','papas fritas','pure de zapallo'];
var postre = ['flan con crema','queso y dulce','mousse de chocolate'];
var opcion;
var pprinc;

$(document).ready(function(){

	$("#btnpedido").on('click', function(){

		pprinc = $('#principal').val();
	});

	console.log(pprinc);
	/*for(var i=0; i<principal.length; i++){

		if(opcion == principal[i]){


		}
	}*/



});