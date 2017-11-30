var Gato = (
	function () {

		function Gato(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad);
			this.precio = 500;
			this.tipo = 'gato';

			this.cantidadDeProducto = 0;
			// this.velocidadDeProducion = 2 * this.FRAMERATE;
			this.tiempoDeProduction = 2 * this.FRAMERATE;
			this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);
		}
		//Heredar los metodos definidos en Animal (prototype)
		Gato.prototype = Object.create(Animal.prototype);
		Gato.prototype.constructor = Animal;

		//Class Methods
		Gato.prototype.comer = function () {
			console.log(this.nombre + ' soy un gato y estoy comiendo.');
		}

		Gato.prototype.brincar = function () {
			console.log(this.nombre + ' soy un gato y estoy comiendo.');
		}
		return Gato;
	}
)();