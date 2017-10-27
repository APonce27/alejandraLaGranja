var Ave = (
	function () {
		function Ave(pnombreAve) {
		}
		//Class Methods
		Ave.prototype.comer = function () {
			console.log(this.nombreAve);
		}
		return Ave;
	}
)();