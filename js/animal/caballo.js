var Caballo = (
	function () {

		function Caballo(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad);
			this.precio = 500;
			this.tipo = 'caballo';

			//this.cantidadDeProducto = 0;
			// this.velocidadDeProducion = 2 * this.FRAMERATE;
			//this.tiempoDeProduction = 2 * this.FRAMERATE;
			//this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);
		}
		//Heredar los metodos definidos en Animal (prototype)
		Caballo.prototype = Object.create(Animal.prototype);
		Caballo.prototype.constructor = Animal;

		//Class Methods
		Caballo.prototype.comer = function () {
			console.log(this.nombre + ' soy un caballo y estoy comiendo.');
		}

		Caballo.prototype.brincar = function () {
			console.log(this.nombre + ' soy un caballo y estoy comiendo.');
		}
		return Caballo;
	}
)();