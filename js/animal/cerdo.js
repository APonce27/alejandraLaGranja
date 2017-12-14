var Cerdo = (
	function () {

		function Cerdo(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad, papetito, psed) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad, papetito, psed);
			this.precio = 350;
			this.tipo = 'cerdo';
			this.racionComida = null;
			this.racionAgua = null;

			this.cantidadDeProducto = 0;
			// this.velocidadDeProducion = 2 * this.FRAMERATE;
			this.tiempoDeProduction = 2 * this.FRAMERATE;
			this.cantidadDeProductoPorTiempo = null;
			this.caricia = 0;
			this.promedioApetito = null;
			this.promedioSed = null;
		}
		//Heredar los metodos definidos en Animal (prototype)
		Cerdo.prototype = Object.create(Animal.prototype);
		Cerdo.prototype.constructor = Animal;

		//Class Methods
		Cerdo.prototype.comer = function (palimento) {
			if (palimento > 0) {
				if (this.apetito < this.capacidadEstomago) {
					this.racionComida = this.capacidadEstomago - this.apetito;
					if (this.racionComida <= palimento) {
						this.apetito += this.racionComida;
						palimento -= this.racionComida;
						return palimento;
					} else { 
						this.apetito += palimento;
						palimento = 0;
						return palimento;
					}

				} else {
					this.apetito = this.capacidadEstomago;
					console.log('El Cerdo esta lleno');
					return palimento;
				}
			} else {
				console.log('No hay suficiente alimento para este animal');
				return palimento;
			}
		}

		Cerdo.prototype.beber = function () {
			if (this.sed < this.capacidadConsumoAgua) {
				this.racionAgua = this.capacidadConsumoAgua - this.sed;
				this.sed += this.racionAgua;
			} else {
				this.sed = this.capacidadConsumoAgua;
				console.log('El Cerdo esta lleno')
			};
		};

		Cerdo.prototype.acariciar = function () {
			console.log(this.caricia);
			this.caricia = 100;
		};

		Cerdo.prototype.producir = function (pproductoGranja) {
			console.log(pproductoGranja);
			pproductoGranja += this.cantidadDeProducto;
			this.cantidadDeProducto = 0;

			console.log(pproductoGranja);

			return pproductoGranja;
		};

		Cerdo.prototype.crearProducto = function () {
			//this.capacidadProduccion
			//this.cantidadDeProducto = 0;
			//this.velocidadDeProducion = 0
			this.cantidadDeProductoPorTiempo = 1 * (this.felicidad / 100);

			if (this.felicidad > 0) {
				if (this.cantidadDeProducto <= this.capacidadProduccion) {
					if (this.tiempo >= this.tiempoDeProduction) {
						this.cantidadDeProducto += this.cantidadDeProductoPorTiempo;
						this.tiempo = 0;
						if (this.apetito > 0) {
							this.apetito -= 0.5;
						}
						if (this.sed > 0) {
							this.sed -= 0.5
						}
						if (this.caricia > 0) {
							this.caricia -= 2;
						}

					}
				}
			}
		}

		Cerdo.prototype.calculoFelicidad = function () {
			this.promedioApetito = (this.apetito * 100) / this.capacidadEstomago;
			this.promedioSed = (this.sed * 100) / this.capacidadConsumoAgua;

			this.felicidad = (this.caricia + this.promedioApetito + this.promedioSed) / 3; 
		}

		Cerdo.prototype.update = function () {
			this.tiempo++;
			this.crearProducto();
			this.calculoFelicidad();
		}
		return Cerdo;
	}
)();