var Gato = (
	function () {

		function Gato(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad, papetito, psed) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad, papetito, psed);
			this.precio = 175;
			this.tipo = 'gato';
			this.racionComida = null;
			this.racionAgua = null;
			this.tiempoDeActualizacion = 2 * this.FRAMERATE;
			this.caricia = 0;
			this.promedioApetito = null;
			this.promedioSed = null;
		}
		//Heredar los metodos definidos en Animal (prototype)
		Gato.prototype = Object.create(Animal.prototype);
		Gato.prototype.constructor = Animal;

		//Class Methods
		Gato.prototype.comer = function (palimento) {
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
					console.log('El Gato esta lleno');
					return palimento;
				}
			} else {
				console.log('No hay suficiente alimento para este animal');
				return palimento;
			}
		}

		Gato.prototype.beber = function () {
			if (this.sed < this.capacidadConsumoAgua) {
				this.racionAgua = this.capacidadConsumoAgua - this.sed;
				this.sed += this.racionAgua;
			} else {
				this.sed = this.capacidadConsumoAgua;
				console.log('El Gato esta lleno')
			};
		};

		Gato.prototype.acariciar = function () {
			console.log(this.caricia);
			this.caricia = 100;
		};

		Gato.prototype.rebajarDatos = function () {
			
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

		Gato.prototype.calculoFelicidad = function () {
			this.promedioApetito = (this.apetito * 100) / this.capacidadEstomago;
			this.promedioSed = (this.sed * 100) / this.capacidadConsumoAgua;

			this.felicidad = (this.caricia + this.promedioApetito + this.promedioSed) / 3; 
		}

		Gato.prototype.update = function () {
			this.tiempo++;
			this.rebajarDatos();
			this.calculoFelicidad();

		}
		return Gato;
	}
)();