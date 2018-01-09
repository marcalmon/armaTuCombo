var principal= ['tarta de jyq','ensalada caprese','milanesa','1/4 de pollo'];
var guarnicion = ['ensalada mixta','papas fritas','pure de zapallo'];
var postre = ['flan con crema','queso y dulce','mousse de chocolate'];
var opcion = "ensalada caprese";
var pedido;

for(var i=0; i<principal.length; i++){

	if(opcion == principal[i]){

		pedido = principal[i];
	}
}

console.log(pedido);

/*<div>
				<label for="principal">Seleccione Plato Principal</label>
				<select name="principal" id="principal">
					<option disabled="true" selected="true">Selecione una opcion</option>
					<option>Tarta de jyq</option>
					<option>Ensalada caprese</option>
					<option>Milanesa</option>
					<option>1/4 de pollo</option>
				</select>
			</div>
			<div>
				<label for="guarnicion">Seleccione Guarnición</label>
				<select name="guarnicion" id="guarnicion">
					<option disabled="true" selected="true">Selecione una opcion</option>
					<option>Ensalada Mixta</option>
					<option>Papas fritas</option>
					<option>Puré de Zapallo</option>
				</select>
			</div>
			<div>
				<label for="postre">Seleccione Postre</label>
				<select name="postre" id="postre">
					<option disabled="true" selected="true">Selecione una opcion</option>
					<option>Flan con Crema</option>
					<option>Queso y Dulce</option>
					<option>Mousse de Chocolate</option>
				</select>
			</div>*/

