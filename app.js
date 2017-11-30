window.addEventListener('load', init, false);

function init() {
    //pnombre,pedad,paltura,ppeso,ptamanno,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoDeProduccion
    var animals = [];
    var currentAnimalSelected = null;

    var granja = new Granja(2000, 10, 10, 10, 10, 100, 10);
    var precioDeVaca = new Vaca().precio;

    var vaca = new Vaca('Matilde', '10', '1.40', '500', '200', '75', '125', 80, 'Leche', '60');
    vaca.color = 'blue';

    animals.push(vaca);

    vaca = new Vaca('Clotilde', '15', '1.30', '420', '180', '70', '110', 60, 'Leche', '10');
    vaca.color = 'green';

    animals.push(vaca);

    vaca = new Vaca('Florina', '8', '1.37', '435', '188', '79', '109', 40, 'Leche', '100');
    vaca.color = 'cyan';

    animals.push(vaca);

    vaca = new Vaca('Juana', '12', '1.45', '510', '225', '85', '140', 100, 'Leche', '70');
    vaca.color = 'brown';

    animals.push(vaca);

    var perro = new Perro('Tommy', '6', '0.70', '15', '75', '20', '55', '0', 'N/A', '100');
    perro.color = 'purple';
    perro.tipo = 'perro'
    animals.push(perro);

    var gato = new Gato('Benjie', '2', '0.45', '5', '45', '15', '30', '0', 'N/A', '100');
    gato.color = 'purple';
    gato.tipo = 'gato'
    animals.push(gato);

    var cerdo = new Cerdo('Pinta', '4', '1', '92', '115', '25', '85', '30', 'Tocino', '100');
    cerdo.color = 'purple';
    cerdo.tipo = 'cerdo'
    animals.push(cerdo);

    var caballo = new Caballo('Lucero', '2', '1.45', '5', '45', '15', '30', '0', 'N/A', '100');
    caballo.color = 'purple';
    caballo.tipo = 'caballo';
    animals.push(caballo);

    var gallina = new Gallina('Misinga', '2', '0.35', '3', '15', '6', '9', '30', 'Huevos', '100');
    gallina.color = 'purple';
    gallina.tipo = 'gallina'
    animals.push(gallina);

    var pato = new Pato('Donny', '3', '0.38', '4', '23', '8', '15', '30', 'Huevos', '100');
    pato.color = 'purple';
    pato.tipo = 'pato'
    animals.push(pato);
    // var granja = new Granja('2000', '200', '600', '60', '50', '3000', '1')

    console.log(animals);
    //console.log(granja);

    var animalContainer_title = document.getElementById('animalTitle');
    var animalsContainer = document.getElementById('animalsContainer');
    var granjaContainer = document.getElementById('farmContainer');

    var btnComprar = document.getElementById('btnComprar');
    var btnVender = document.getElementById('btnVender');
    var btnCerrarPopUpVentas = document.getElementById('cerrarPopUpV');
    var btnCerrarPopUpCompras = document.getElementById('cerrarPopUpC');

    //var popUpVentas = document.getElementById('popUpVentas');
    //popUpVentas.classList.add('ocultarPopUp')

    //var popUpCompras = document.getElementById('popUpCompras');
    //popUpCompras.classList.add('ocultarPopUp')

    //---------------------Seleccion de animal---------------------
    for (var i = 0; i < animals.length; i++) {
        crearAnimalUI(animals[i]);
    }


    function update() {

        for (var i = 0; i < animals.length; i++) {
            animals[i].update();
        }

        window.requestAnimationFrame(update);
    }

    update();

    //---------------------Cargar informacion Animal---------------------

    var granjaDinero = document.getElementById('granjaDinero');
    granjaDinero.innerHTML = "Dinero: " + "$" + granja.dinero;

    var granjaHuevos = document.getElementById('granjaHuevos');
    granjaHuevos.innerHTML = "Huevos: " + granja.huevos;

    var granjaLeche = document.getElementById('granjaLeche');
    granjaLeche.innerHTML = "Leche: " + granja.leche;

    var granjaTocino = document.getElementById('granjaTocino');
    granjaTocino.innerHTML = "Tocino: " + granja.tocino;

    var granjaMaiz = document.getElementById('granjaMaiz');
    granjaMaiz.innerHTML = "Maiz: " + granja.maiz;

    var granjaAlimento = document.getElementById('granjaAlimento');
    granjaAlimento.innerHTML = "Alimento: " + granja.alimento;

    var granjaPasto = document.getElementById('granjaPasto');
    granjaPasto.innerHTML = "Pasto: " + granja.pasto;

    document.getElementById('btnCVaca').addEventListener('click', btnCVacaAction, false);
    document.getElementById('producirBtn').addEventListener('click', producirBtnAction, false);

    //---------------------Cargar informacion Animal---------------------
    function onAnimalCardClick(event) {
        // console.log(event);

        currentAnimalSelected = getAnimalByName(event.target);
        console.log(currentAnimalSelected);

        // event.target.style.background = animal.color;
        animalContainer_title.innerHTML = currentAnimalSelected.nombre;

        var animalEdad = document.getElementById('animalEdad');
        animalEdad.innerHTML = "Edad: " + currentAnimalSelected.edad + "años";

        var animalAltura = document.getElementById('animalAltura');
        animalAltura.innerHTML = "Altura: " + currentAnimalSelected.altura + "m";

        var animalPeso = document.getElementById('animalPeso');
        animalPeso.innerHTML = "Peso: " + currentAnimalSelected.peso + "g";

        var animalCapEstomago = document.getElementById('animalCapEstomago');
        animalCapEstomago.innerHTML = "Capacidad de estomago: " + currentAnimalSelected.capacidadEstomago;

        var animalCapAgua = document.getElementById('animalCapAgua');
        animalCapAgua.innerHTML = "Consumo de agua: " + currentAnimalSelected.capacidaConsumoAgua;

        var animalCapAlimento = document.getElementById('animalCapAlimento');
        animalCapAlimento.innerHTML = "Consumo de alimento: " + currentAnimalSelected.capacidadConsumoAlimento;

        var animalCapProduccion = document.getElementById('animalCapProduccion');
        animalCapProduccion.innerHTML = "Cantidad de producción: " + currentAnimalSelected.cantidadDeProducto;

        var animalTipoProduccion = document.getElementById('animalTipoProduccion');
        animalTipoProduccion.innerHTML = "Tipo de Producción: " + currentAnimalSelected.tipoDeProduccion;

        var animalFelicidad = document.getElementById('animalFelicidad');
        animalFelicidad.innerHTML = "Nivel de felicidad: " + currentAnimalSelected.felicidad + "%";

        var btnComer = document.getElementById('comerBtn');
        btnComer.innerHTML = "Comer";
        btnComer.classList.add('btnProduccion');

        var btnBeber = document.getElementById('beberBtn');
        btnBeber.innerHTML = "Beber";
        btnBeber.classList.add('btnProduccion');

        var btnProducir = document.getElementById('producirBtn');
        var accionProducir = determinarProduccion(currentAnimalSelected.tipo)

        btnProducir.innerHTML = accionProducir;

        if (accionProducir) {
            btnProducir.classList.add('btnProduccion');
            btnProducir.classList.remove('btnOcultar');
        } else {
            btnProducir.classList.remove('btnProduccion');
            btnProducir.classList.add('btnOcultar');
        };
    }

    function getAnimalByName(target) {
        
                var animal = null;
        
                for (var i = 0; i < animals.length; i++) {
                    if (animals[i].nombre === target.id) {
                        animal = animals[i];
                    }
                }
        
                if (animal === null && target.parentElement !== null) {
                    return getAnimalByName(target.parentElement);
                } else if (animal !== null) {
                    return animal;
                } else {
                    return null;
                }
            }

    function determinarProduccion(panimal) {
        var procesoProduccion = "";

        if (panimal === 'vaca') {
            procesoProduccion = "Ordeñar";
        } else {
            if (panimal === 'gallina' || panimal === 'pato') {
                procesoProduccion = "Recolectar huevos";
            } else {
                if (panimal === 'cerdo') {
                    procesoProduccion = "Recoger tocino";
                }
            }
        }

        console.log(procesoProduccion);
        return procesoProduccion;
    }

    //---------------------PopUps---------------------


    btnComprar.addEventListener('click', mostrarPopupCompra, false);

    btnVender.addEventListener('click', mostrarPopupVenta, false);

    btnCerrarPopUpVentas.addEventListener('click', ocultarPopUp, false);
    btnCerrarPopUpCompras.addEventListener('click', ocultarPopUp, false);

    function mostrarPopupCompra() {
        popUpCompras.classList.remove('ocultarPopUp');
    }

    function mostrarPopupVenta() {
        popUpVentas.classList.remove('ocultarPopUp');
    }

    function ocultarPopUp() {
        popUpVentas.classList.add('ocultarPopUp');
        popUpCompras.classList.add('ocultarPopUp');
    }

    function btnCVacaAction(e) {

        //1. Validar la comprar = dinero para comprar la vaca
        console.log(animals);

        if (granja.dinero >= precioDeVaca) {
            granja.dinero -= precioDeVaca;
            //2. Crear Vaca y agragarla a lista de animales
            var vaca = new Vaca('Clara', 1, 2, 100, 100, 5, 5, 5, 'leche', 100);
            vaca.color = 'red';
            animals.push(vaca);

            //3. Agregar el elemento que representa la vaca en UI
            crearAnimalUI(vaca);
            document.getElementById('granjaDinero').innerHTML = "Dinero: " + "$" + granja.dinero;
        }
    }

    function crearAnimalUI(panimal) {

        var animal = document.createElement('div');
        animalsContainer.appendChild(animal);
        animal.id = panimal.nombre;
        animal.classList.add('animalCardContainer');

        var title = document.createElement('h3');
        title.innerHTML = panimal.nombre;
        animal.appendChild(title);

        var happiness = document.createElement('p');
        happiness.innerHTML = 'Felicidad = ' + panimal.felicidad + '%';
        animal.appendChild(happiness);

        var imageAnimal = document.createElement('div');
        imageAnimal.classList.add(panimal.tipo);
        animal.appendChild(imageAnimal);

        animal.addEventListener('click', onAnimalCardClick, false);
    }

    function producirBtnAction(e) {
        console.log(e);
        currentAnimalSelected.producir();
    }

}