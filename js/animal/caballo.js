var Caballo = (
	function () {

		function Caballo(pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad, papetito, psed) {
			Animal.call(this, pnombre, pedad, paltura, ppeso, pcapacidadEstomago, pcapacidadConsumoAgua, pcapacidadConsumoAlimento, pcapacidadProduccion, ptipoDeProduccion, pfelicidad, papetito, psed);
			this.precio = 700;
			this.tipo = 'caballo';
			this.racionComida = null;
			this.racionAgua = null;
			this.tiempoDeActualizacion = 2 * this.FRAMERATE;
			this.caricia = 0;
			this.promedioApetito = null;
			this.promedioSed = null;
		}
		//Heredar los metodos definidos en Animal (prototype)
		Caballo.prototype = Object.create(Animal.prototype);
		Caballo.prototype.constructor = Animal;

		//Class Methods
		Caballo.prototype.comer = function (ppasto) {
			if (ppasto > 0) {
				if (this.apetito < this.capacidadEstomago) {
					this.racionComida = this.capacidadEstomago - this.apetito;
					if (this.racionComida <= ppasto) {
						this.apetito += this.racionComida;
						ppasto -= this.racionComida;
						return ppasto;
					} else { 
						this.apetito += ppasto;
						ppasto = 0;
						return ppasto;
					}

				} else {
					this.apetito = this.capacidadEstomago;
					console.log('El Caballo esta lleno');
					return ppasto;
				}
			} else {
				console.log('No hay suficiente alimento para este animal');
				return ppasto;
			}
		}

		Caballo.prototype.beber = function () {
			if (this.sed < this.capacidadConsumoAgua) {
				this.racionAgua = this.capacidadConsumoAgua - this.sed;
				this.sed += this.racionAgua;
			} else {
				this.sed = this.capacidadConsumoAgua;
				console.log('El Caballo esta lleno')
			};
		};

		Caballo.prototype.acariciar = function () {
			console.log(this.caricia);
			this.caricia = 100;
		};

		Caballo.prototype.rebajarDatos = function () {
			
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
			
		Caballo.prototype.calculoFelicidad = function () {
			this.promedioApetito = (this.apetito * 100) / this.capacidadEstomago;
			this.promedioSed = (this.sed * 100) / this.capacidadConsumoAgua;

			this.felicidad = (this.caricia + this.promedioApetito + this.promedioSed) / 3; 
		}

		Caballo.prototype.update = function () {
			this.tiempo++;
			this.rebajarDatos();
			this.calculoFelicidad();

		}
		return Caballo;
	}
)();