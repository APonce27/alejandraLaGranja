var Perro = (
	function () {

		function Perro(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad, papetito, psed) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad, papetito, psed);
			this.precio = 200;
			this.tipo = 'perro';
			this.racionComida = null;
			this.racionAgua = null;
			this.tiempoDeActualizacion = 2 * this.FRAMERATE;
			this.caricia = 0;
			this.promedioApetito = null;
			this.promedioSed = null;
		}
		//Heredar los metodos definidos en Animal (prototype)
		Perro.prototype = Object.create(Animal.prototype);
		Perro.prototype.constructor = Animal;

		//Class Methods
		Perro.prototype.comer = function (palimento) {
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
					console.log('El Perro esta lleno');
					return palimento;
				}
			} else {
				console.log('No hay suficiente alimento para este animal');
				return palimento;
			}
		}

		Perro.prototype.beber = function () {
			if (this.sed < this.capacidadConsumoAgua) {
				this.racionAgua = this.capacidadConsumoAgua - this.sed;
				this.sed += this.racionAgua;
			} else {
				this.sed = this.capacidadConsumoAgua;
				console.log('El Perro esta lleno')
			};
		};

		Perro.prototype.acariciar = function () {
			console.log(this.caricia);
			this.caricia = 100;
		};

		Perro.prototype.rebajarDatos = function () {
			
			if (this.felicidad > 0) {
				
				if (this.tiempo >= this.tiempoDeActualizacion) {
					
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

		Perro.prototype.calculoFelicidad = function () {
			this.promedioApetito = (this.apetito * 100) / this.capacidadEstomago;
			this.promedioSed = (this.sed * 100) / this.capacidadConsumoAgua;

			this.felicidad = (this.caricia + this.promedioApetito + this.promedioSed) / 3; 
		}

		Perro.prototype.update = function () {
			this.tiempo++;
			this.rebajarDatos();
			this.calculoFelicidad();
		}
		return Perro;
	}
)();