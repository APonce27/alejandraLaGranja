var Persona = (
	function () {
		function Persona(pnombrePersona) {
		}
		//Class Methods
		Persona.prototype.comer = function () {
			console.log(this.nombrePersona);
		}
		return Persona;
	}
)();