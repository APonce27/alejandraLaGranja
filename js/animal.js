var Animal = (
	function () {
		function Animal(pnombreAnimal) {
		}
		//Class Methods
		Animal.prototype.comer = function () {
			console.log(this.nombreAnimal);
		}
		return Animal;
	}
)();