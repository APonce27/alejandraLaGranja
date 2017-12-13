var Granja = (
	function () {
		function Granja(pdinero,phuevos,pleche,ptocino,pmaiz,palimento,ppasto) {
			this.dinero = pdinero;
			this.huevos = phuevos;
			this.leche = pleche;			
			this.tocino = ptocino;
			this.maiz = pmaiz;
			this.alimento = palimento;
			this.pasto = ppasto;
			this.precioMaiz = 3;
			this.precioAlimento = 5;
			this.precioPasto = 2;
			this.precioHuevos = 8;
			this.precioLeche = 10;
			this.precioTocino = 15;
		}

		return Granja;
	}
)();