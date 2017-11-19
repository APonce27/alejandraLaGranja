var Cerdo = (
	function () {

		function Cerdo(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad);
			this.precio = 500;
			this.tipo = 'cerdo';

			this.cantidadDeProducto = 0;
			// this.velocidadDeProducion = 2 * this.FRAMERATE;
			this.tiempoDeProduction = 2 * this.FRAMERATE;
			this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);
		}
		//Heredar los metodos definidos en Animal (prototype)
		Cerdo.prototype = Object.create(Animal.prototype);
		Cerdo.prototype.constructor = Animal;

		//Class Methods
		Cerdo.prototype.comer = function () {
			console.log(this.nombre + ' soy un cerdo y estoy comiendo.');
		}

		Cerdo.prototype.brincar = function () {
			console.log(this.nombre + ' soy un cerdo y estoy comiendo.');
		}

		Cerdo.prototype.producir = function () {
			console.log('Ordennar');
		};

		Cerdo.prototype.crearProducto = function () {
			//this.capacidadProduccion
			//this.cantidadDeProducto = 0;
			//this.velocidadDeProducion = 0

			if (this.capacidadProduccion <= this.cantidadDeProducto) {
				if (this.tiempo >= this.tiempoDeProduction) {
					this.cantidadDeProducto += this.cantidadDeProductoPorTiempo;
					this.tiempo = 0;
					console.log(this.nombre + ' tiene ' + this.cantidadDeProducto + ' de producto!');
				}
			} else {
				//Vaca llena
			}

		}

		Cerdo.prototype.update = function () {
			this.tiempo++;
			this.crearProducto();
		}

		return Cerdo;
	}
)();