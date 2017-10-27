var Producto = (
	function () {
		function Producto(pnombreProducto) {
		}
		//Class Methods
		Producto.prototype.comer = function () {
			console.log(this.nombreProducto);
		}
		return Producto;
	}
)();