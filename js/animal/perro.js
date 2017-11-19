var Perro = (
	function () {

		function Perro(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad);
			this.precio = 500;
			this.tipo = 'perro';

			this.cantidadDeProducto = 0;
			// this.velocidadDeProducion = 2 * this.FRAMERATE;
			this.tiempoDeProduction = 2 * this.FRAMERATE;
			this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);
		}
		//Heredar los metodos definidos en Animal (prototype)
		Perro.prototype = Object.create(Animal.prototype);
		Perro.prototype.constructor = Animal;

		//Class Methods
		Perro.prototype.comer = function () {
			console.log(this.nombre + ' soy un perro y estoy comiendo.');
		}

		Perro.prototype.brincar = function () {
			console.log(this.nombre + ' soy un perro y estoy comiendo.');
		}

		Perro.prototype.producir = function () {
			console.log('Ordennar');
		};

		Perro.prototype.crearProducto = function () {
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

		Perro.prototype.update = function () {
			this.tiempo++;
			this.crearProducto();
		}

		return Perro;
	}
)();