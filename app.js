window.addEventListener('load', init, false);

function init() {
    //pnombre,pedad,paltura,ppeso,ptamanno,pcapacidadEstomago,pcapacidadConsumoAgua,pcapacidadConsumoAlimento,pcapacidadProduccion,ptipoDeProduccion
    var animals = [];
    var currentAnimalSelected = null;

    var granja = new Granja(2000, 10, 10, 10, 10, 100, 10);
    var precioDeVaca = new Vaca().precio,
        precioDeCerdo = new Cerdo().precio,
        precioDeCaballo = new Caballo().precio,
        precioDePerro = new Perro().precio,
        precioDeGato = new Gato().precio,
        precioDeGallina = new Gallina().precio,
        precioDePato = new Pato().precio,
        precioDePasto = new Granja().precioPasto,
        precioDeAlimento = new Granja().precioAlimento,
        precioDeMaiz = new Granja().precioMaiz,
        precioDeLeche = new Granja().precioLeche,
        precioDeHuevos = new Granja().precioHuevos,
        precioDeTocino = new Granja().precioTocino,
        granja = null;

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var respuesta = JSON.parse(xhttp.responseText);
    
                console.log(respuesta);
    
                var objetoAnimal = respuesta.animales,
                    objetoGranja = respuesta.granja;
    
                for (var i = 0; i < objetoAnimal.length; i++) {
                    switch (objetoAnimal[i].tipo) {
                        case "vaca":
                            var nuevoAnimal = new Vaca(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].tamanno, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, objetoAnimal[i].felicidad, objetoAnimal[i].apetito, objetoAnimal[i].sed);
                            animals.push(nuevoAnimal);
                            break;
                        case "gallina":
                            var nuevoAnimal = new Gallina(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].tamanno, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, objetoAnimal[i].felicidad, objetoAnimal[i].apetito, objetoAnimal[i].sed);
                            animals.push(nuevoAnimal);
                            break;
                        case "pato":
                            var nuevoAnimal = new Pato(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].tamanno, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, objetoAnimal[i].felicidad, objetoAnimal[i].apetito, objetoAnimal[i].sed);
                            animals.push(nuevoAnimal);
                            break;
                        case "cerdo":
                            var nuevoAnimal = new Cerdo(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].tamanno, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, objetoAnimal[i].felicidad, objetoAnimal[i].apetito, objetoAnimal[i].sed);
                            animals.push(nuevoAnimal);
                            break;
                        case "caballo":
                            var nuevoAnimal = new Caballo(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].tamanno, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, objetoAnimal[i].felicidad, objetoAnimal[i].apetito, objetoAnimal[i].sed);
                            animals.push(nuevoAnimal);
                            break;
                        case "perro":
                            var nuevoAnimal = new Perro(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].tamanno, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, objetoAnimal[i].felicidad, objetoAnimal[i].apetito, objetoAnimal[i].sed);
                            animals.push(nuevoAnimal);
                            break;
                        case "gato":
                            var nuevoAnimal = new Gato(objetoAnimal[i].nombre, objetoAnimal[i].edad, objetoAnimal[i].altura, objetoAnimal[i].peso, objetoAnimal[i].tamanno, objetoAnimal[i].capacidadEstomago, objetoAnimal[i].capacidadConsumoAgua, objetoAnimal[i].capacidadProduccion, objetoAnimal[i].tipoDeProduccion, objetoAnimal[i].felicidad, objetoAnimal[i].apetito, objetoAnimal[i].sed);
                            animals.push(nuevoAnimal);
                    }
                };

                granja = new Granja(objetoGranja[0].dinero, objetoGranja[0].huevos, objetoGranja[0].leche, objetoGranja[0].tocino, objetoGranja[0].maiz, objetoGranja[0].alimento, objetoGranja[0].pasto);
            }
        };
        xhttp.open("GET", "animal.json", false);
        xhttp.send();



    console.log(animals);
    console.log(granja);

    var animalContainer_title = document.getElementById('animalTitle');
    var animalsContainer = document.getElementById('animalsContainer');
    var granjaContainer = document.getElementById('farmContainer');

    var btnComprar = document.getElementById('btnComprar');
    var btnVender = document.getElementById('btnVender');
    var btnCerrarPopUpVentas = document.getElementById('cerrarVentaPopUp');
    var btnCerrarPopUpCompras = document.getElementById('cerrarCompraPopUp');

    var popUpVentas = document.getElementById('popUpVentas');
    popUpVentas.classList.add('ocultarPopUp')

    var popUpCompras = document.getElementById('popUpCompras');
    popUpCompras.classList.add('ocultarPopUp')

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

    //---------------------Cargar informacion Granja---------------------

    var granjaDinero = document.getElementById('dineroGranja');
    granjaDinero.innerHTML = "Dinero: " + "$" + granja.dinero;

    var granjaHuevos = document.getElementById('huevosGranja');
    granjaHuevos.innerHTML = "Huevos: " + granja.huevos;

    var granjaLeche = document.getElementById('lecheGranja');
    granjaLeche.innerHTML = "Leche: " + granja.leche;

    var granjaTocino = document.getElementById('tocinoGranja');
    granjaTocino.innerHTML = "Tocino: " + granja.tocino;

    var granjaMaiz = document.getElementById('maizGranja');
    granjaMaiz.innerHTML = "Maiz: " + granja.maiz;

    var granjaAlimento = document.getElementById('alimentoGranja');
    granjaAlimento.innerHTML = "Alimento: " + granja.alimento;

    var granjaPasto = document.getElementById('pastoGranja');
    granjaPasto.innerHTML = "Pasto: " + granja.pasto;

    document.getElementById('btnComprarAnimal').addEventListener('click', btnComprarAnimal, false);
    document.getElementById('btnComprarAlimento').addEventListener('click', btnComprarAlimento, false);
    document.getElementById('producirBtn').addEventListener('click', producirBtnAction, false);
    document.getElementById('btnVenderProducto').addEventListener("click", venderProducto, false);
    document.getElementById('comerBtn').addEventListener('click', comer, false);
    document.getElementById('beberBtn').addEventListener('click', beber, false);
    document.getElementById('acariciarBtn').addEventListener('click', acariciar, false);


    //---------------------Cargar informacion Animal---------------------
    function onAnimalCardClick(event) {
        
                selectAnimal = getAnimalByName(event.target);
                console.log(selectAnimal);
        
                animalContainer_title.innerHTML = selectAnimal.nombre;
        
                var animalEdad = document.getElementById('animalEdad');
                animalEdad.innerHTML = `Edad: ${selectAnimal.edad} años`;
        
                var animalAltura = document.getElementById('animalAltura');
                animalAltura.innerHTML = `Altura: ${selectAnimal.altura}m`;
        
                var animalPeso = document.getElementById('animalPeso');
                animalPeso.innerHTML = `Peso: ${selectAnimal.peso} g`;
        
                var animalCapEstomago = document.getElementById('animalCapEstomago');
                animalCapEstomago.innerHTML = `Capacidad de estomago: ${selectAnimal.capacidadEstomago}`;
        
                var animalCapAgua = document.getElementById('animalCapAgua');
                animalCapAgua.innerHTML = `Consumo de agua: ${selectAnimal.capacidaConsumoAgua}`;
        
                var animalCapAlimento = document.getElementById('animalCapAlimento');
                animalCapAlimento.innerHTML = `Consumo de alimento: ${selectAnimal.capacidadConsumoAlimento}`;
        
                var animalCapProduccion = document.getElementById('animalCapProduccion');
                animalCapProduccion.innerHTML = `Cantidad de producción: ${parseFloat(Math.round(selectAnimal.cantidadDeProducto * 100) / 100).toFixed(2)}`;
        
                var animalTipoProduccion = document.getElementById('animalTipoProduccion');
                animalTipoProduccion.innerHTML = `Tipo de Producción: ${selectAnimal.tipoDeProduccion}`;
        
                var animalFelicidad = document.getElementById('animalFelicidad');
                animalFelicidad.innerHTML = `Nivel de felicidad: ${selectAnimal.felicidad}%`;
                var animalApetito = document.getElementById('animalApetito');
                
                var animalSed = document.getElementById('animalSed');

                window.setInterval(
                    function () {
        
                        animalCapProduccion.innerHTML = `Cantidad de producción: ${parseFloat(Math.round(currentAnimalSelected.cantidadDeProducto * 100) / 100).toFixed(2)}`;
                        animalFelicidad.innerHTML = `Nivel de felicidad: ${parseFloat(Math.round(currentAnimalSelected.felicidad))}%`;
                        animalApetito.innerHTML = `Apetito = ${parseFloat(Math.round(currentAnimalSelected.apetito))}`;
                        animalSed.innerHTML = `Sed = ${parseFloat(Math.round(currentAnimalSelected.sed))}`;
        
                    }, 1000);
                    
                var btnComer = document.getElementById('comerBtn');
                btnComer.innerHTML = "Comer";
                btnComer.classList.add('btnStyle');
        
                var btnBeber = document.getElementById('beberBtn');
                btnBeber.innerHTML = "Beber";
                btnBeber.classList.add('btnStyle');

                var btnAcariciar = document.getElementById('acariciarBtn');
                btnAcariciar.innerHTML = "Acariciar";
                btnAcariciar.classList.add('btnStyle');
        
                var btnProducir = document.getElementById('producirBtn');
                var accionProducir = determinarProduccion(selectAnimal.tipo)
        
                btnProducir.innerHTML = accionProducir;
        
                if (accionProducir) {
                    btnProducir.classList.add('btnStyle');
                    btnProducir.classList.remove('btnOcultar');
                } else {
                    btnProducir.classList.remove('btnStyle');
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

        switch (panimal) {
            case "vaca":
                procesoProduccion = "Ordeñar";
                break;
            case "gallina":
                procesoProduccion = "Recolectar huevos";
                break;
            case "pato":
                procesoProduccion = "Recolectar huevos";
                break;
            case "cerdo":
                procesoProduccion = "Recoger tocino";
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

    function btnComprarAnimal(e) {

        var nuevoAnimalNombre = document.getElementById('nombreNuevoAnimal').value,
            animalSeleccionado = document.getElementById('slctAnimal').value,
            animalNuevo,
            animalPrecio;

            if(nuevoAnimalNombre == "") {
                console.log("Ingrese un nombre válido");
            } else {
                console.log(animals);
                switch (animalSeleccionado) {
                    case 'vaca':
                    animalPrecio = precioDeVaca;
                    animalNuevo = new Vaca(nuevoAnimalNombre, 1, 2, 100, 100, 5, 5, 70, 'leche', 100, 25, 10);
                    break;

                    case 'cerdo':
                    animalPrecio = precioDeCerdo;
                    animalNuevo = new Cerdo(nuevoAnimalNombre, 4, 1, 92, 115, 25, 85, 45, 'tocino', 100, 25, 10);
                    break;

                    case 'caballo':
                    animalPrecio = precioDeCaballo;
                    animalNuevo = new Caballo(nuevoAnimalNombre, 2, 1.45, 5, 45, 15, 30, 'N/A', 100, 25, 10);
                    break;

                    case 'gallina':
                    animalPrecio = precioDeGallina;
                    animalNuevo = new Gallina(nuevoAnimalNombre,2, 0.35, 3, 15, 6, 9, 30, 'huevos', 100, 25, 10);
                    break;

                    case 'pato':
                    animalPrecio = precioDePato;
                    animalNuevo = new Pato(nuevoAnimalNombre, 3, 0.38, 4, 23, 8, 15, 30, 'huevos', 100, 25, 10);
                    break;

                    case 'perro':
                    animalPrecio = precioDePerro;
                    animalNuevo = new Perro(nuevoAnimalNombre, 6, 0.70, 15, 75, 20, 55, 0, 'N/A', 100, 25, 10);
                    break;

                    case 'gato':
                    animalPrecio = precioDeGato;
                    animalNuevo = new Gato(nuevoAnimalNombre, 2, 0.45, 5, 45, 15, 30, 0, 'N/A', 100, 25, 10);
                    break;

                    default:
                        console.log('Seleccione un animal');
                }

                if (granja.dinero >= animalPrecio) {
                    granja.dinero -= animalPrecio;

                    animals.push(animalNuevo);

                    crearAnimalUI(animalNuevo);
                    document.getElementById('dineroGranja').innerHTML = `Dinero: $ ${granja.dinero}`;
                }

                ocultarPopUp();
            }
        }


        function btnComprarAlimento(e) {
            var alimentoSeleccionado = document.getElementById('slctAlimento').value,
                cantPorComprar = parseInt(document.getElementById('cantidadAlimento').value);
                console.log(cantPorComprar);
            var asignarPrecioDeAlimento = null,
                renovarDato = null,
                producto = null;

                switch(alimentoSeleccionado) {
                    case 'alimento':
                    asignarPrecioDeAlimento = precioDeAlimento;
                    renovarDato = document.getElementById(alimentoGranja);
                    producto = granja.alimento;
                    break;

                    case 'pasto': 
                    asignarPrecioDeAlimento = precioDePasto;
                    renovarDato = document.getElementById(pastoGranja);
                    producto = granja.pasto;
                    break;
                    
                    case 'maiz': 
                    asignarPrecioDeAlimento = precioDeMaiz;
                    renovarDato = document.getElementById(maizGranja);
                    producto = granja.maiz;
                    break;

                    default:
                        console.log('seleccione un alimento');               
                }

                var costoTotalCompra = determinarPrecioAlimento * cantidadAComprar;
                
                    if (granja.dinero >= costoTotalCompra) {
                        granja.dinero -= costoTotalCompra;
            
                        producto += cantidadAComprar;
            
                        document.getElementById('dineroGranja').innerHTML = `Dinero: $ ${granja.dinero}`;
            
                        if (alimentoSeleccionado == "alimento") {
                            document.getElementById('alimentoGranja').innerHTML = `Alimento ${producto}`;
                        } else {
                            if (alimentoSeleccionado == "pasto") {
                                document.getElementById('pastoGranja').innerHTML = `Pasto ${producto}`;
                            } else {
                                if (alimentoSeleccionado == "maiz") {
                                    document.getElementById('maizGranja').innerHTML = `Maiz ${producto}`;
                                }
                            }
                        }
                    }
                    ocultarPopUp();
        }


    function crearAnimalUI(panimal) {

        var animal = document.createElement('div');
        animalsContainer.appendChild(animal);
        animal.id = panimal.nombre;
        animal.classList.add('animalCardContainer');

        var title = document.createElement('h3');
        title.innerHTML = panimal.nombre;
        animal.appendChild(title);

        var felicidad = document.createElement('p');
        
                window.setInterval(
                    function () {
                        felicidad.innerHTML = `Felicidad = ${parseFloat(Math.round(panimal.felicidad))} %`;
        
                    }
                )
                animal.appendChild(felicidad);

                if (panimal.tipo === 'vaca' || panimal.tipo === 'cerdo' || panimal.tipo === 'pato' || panimal.tipo === 'gallina') {
                    var nivelProduccion = document.createElement('p');
        
                    window.setInterval(
                        function () {
                            var porcentajeProduccion = panimal.cantidadDeProducto / panimal.capacidadProduccion * 100;
        
                            if (porcentajeProduccion > 100) {
                                porcentajeProduccion = 100;
                            };
        
                            nivelProduccion.innerHTML = `Producción = ${parseFloat(Math.round(porcentajeProduccion))} %`;
        
                        }, 1000);// Intervalo de tiempo
        
                    animal.appendChild(nivelProduccion);
                };    

        var imageAnimal = document.createElement('div');
        imageAnimal.classList.add(panimal.tipo);
        animal.appendChild(imageAnimal);

        animal.addEventListener('click', onAnimalCardClick, false);
    }

    //comer

    function comer() {
        
        var restarComida = null;

        if(currentAnimalSelected.tipo === 'vaca' || currentAnimalSelected.tipo === 'caballo'){
            restarComida = currentAnimalSelected.comer(granja.pasto);
            granja.pasto = restarComida;
            pastoGranja.innerHTML = `Pasto: ${granja.pasto}`;
        }else{
            if(currentAnimalSelected.tipo === 'pato' || currentAnimalSelected.tipo === 'gallina'){
                restarComida = currentAnimalSelected.comer(granja.maiz);
                granja.maiz = restarComida;
                console.log(granja.maiz);
                maizGranja.innerHTML = `Maiz: ${granja.maiz}`;
            }else{
                restarComida = currentAnimalSelected.comer(granja.alimento);
                granja.alimento = restarComida;
                alimentoGranja.innerHTML = `Alimento: ${granja.alimento}`;
            }
        }
    }

    function beber() {
        currentAnimalSelected.beber();
    }

    function acariciar() {
        currentAnimalSelected.acariciar();
    }


    function producirBtnAction(e) {
        console.log(e);
        switch (currentAnimalSelected.tipo) {
            case 'vaca':

                var sumarProduccion = currentAnimalSelected.producir(granja.leche);
                granja.leche = sumarProduccion;
                lecheGranja.innerHTML = `Leche: ${parseFloat(Math.round(granja.leche))}`;

                break;
            case 'cerdo':

                var sumarProduccion = currentAnimalSelected.producir(granja.tocino);
                granja.tocino = sumarProduccion;
                tocinoGranja.innerHTML = `Tocino: ${parseFloat(Math.round(granja.tocino))}`;

                break;
            case 'pato':

                var sumarProduccion = currentAnimalSelected.producir(granja.huevos);
                granja.huevos = sumarProduccion;
                huevosGranja.innerHTML = `Huevos: ${parseFloat(Math.round(granja.huevos))}`;

                break;
            case 'gallina':

                var sumarProduccion = currentAnimalSelected.producir(granja.huevos);
                granja.huevos = sumarProduccion;
                huevosGranja.innerHTML = `Huevos: ${parseFloat(Math.round(granja.huevos))}`;
        }
    }
}

function venderProducto(e) {
    var productoAVender = document.getElementById('slctVender').value;
    var cantidadAVender = parseInt(document.getElementById('cantidadProducto').value);
    var ganancia = null;

    switch (productoAVender) {
        case 'leche':
            if (granja.leche >= cantidadAVender) {
                granja.leche -= cantidadAVender;
                ganancia = precioDeLeche * cantidadAVender;
                granja.dinero += ganancia;

                document.getElementById('dineroGranja').innerHTML = `Dinero: $ ${granja.dinero}`;
                document.getElementById('lecheGranja').innerHTML = `Leche: ${parseFloat(Math.round(granja.leche * 100) / 100).toFixed(1)}`;
                ocultarPopUp();
            } else {
                console.log(`No hay suficiente producto`);
            };
            break;

        case 'huevos':
            if (granja.huevos >= cantidadAVender) {
                granja.huevos -= cantidadAVender;
                ganancia = precioDeHuevos * cantidadAVender;
                granja.dinero += ganancia;

                document.getElementById('dineroGranja').innerHTML = `Dinero: $ ${granja.dinero}`;
                document.getElementById('huevosGranja').innerHTML = `Huevos: ${parseFloat(Math.round(granja.huevos * 100) / 100).toFixed(1)}`;
                ocultarPopUp();
            } else {
                console.log(`No hay suficiente producto`);
            };
            break;

        case 'tocino':
            if (granja.tocino >= cantidadAVender) {
                granja.tocino -= cantidadAVender;
                ganancia = precioDeTocino * cantidadAVender;
                granja.dinero += ganancia;

                document.getElementById('dineroGranja').innerHTML = `Dinero: $ ${granja.dinero}`;
                document.getElementById('tocinoGranja').innerHTML = `Tocino: ${parseFloat(Math.round(granja.tocino * 100) / 100).toFixed(1)}`;
                ocultarPopUp();
            } else {
                console.log(`No hay suficiente producto`);
            };
    }



};