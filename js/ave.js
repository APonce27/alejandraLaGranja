var Ave = (
	function () {
		function Ave(pnombre) {
		}
		//Class Methods
		Ave.prototype.comer = function () {
			console.log(this.nombreAve);
		}
		return Ave;
	}
)();