

//document.getElementById('btnCopiar').addEventListener('click', function () {
//    var contenidoParaCopiar = document.getElementById('contenidoParaCopiar');
//var textoACopiar = contenidoParaCopiar.innerText;

//if (copyTextToClipboard(textoACopiar)) {
//    alert('El contenido se ha copiado al portapapeles: ' + textoACopiar);
//    } else {
//    alert('La copia al portapapeles no está soportada por tu navegador.');
//    }
//});

//function copyTextToClipboard(text) {
//    var textArea = document.createElement('textarea');
//textArea.value = text;

//// Añadir el textarea al DOM
//document.body.appendChild(textArea);

//// Seleccionar el texto dentro del textarea
//textArea.select();

//try {
//        var successful = document.execCommand('copy');
//document.body.removeChild(textArea);
//return successful;
//    } catch (err) {
//    document.body.removeChild(textArea);
//return false;
//    }
//}





//document.getElementById('btnCopiar').addEventListener('click', function () {
//    var contenidoParaCopiar = document.getElementById('contenidoParaCopiar');
//    var textoACopiar = contenidoParaCopiar.innerText;

//    if (copyTextToClipboard(textoACopiar)) {
//        Swal.fire({
//            title: 'Éxito',
//            text: 'El contenido se ha copiado al portapapeles: ' + textoACopiar,
//            icon: 'success'
//        });
//    } else {
//        Swal.fire({
//            title: 'Error',
//            text: 'La copia al portapapeles no está soportada por tu navegador.',
//            icon: 'error'
//        });
//    }
//});

//function copyTextToClipboard(text) {
//    var textArea = document.createElement('textarea');
//    textArea.value = text;

//    // Añadir el textarea al DOM
//    document.body.appendChild(textArea);

//    // Seleccionar el texto dentro del textarea
//    textArea.select();

//    try {
//        var successful = document.execCommand('copy');
//        document.body.removeChild(textArea);
//        return successful;
//    } catch (err) {
//        document.body.removeChild(textArea);
//        return false;
//    }
//}




    document.addEventListener('DOMContentLoaded', function() {
        // Al cargar la página, verifica el estado actual del tema y aplica los estilos adecuados
        const isWhiteTheme = localStorage.getItem('whiteTheme') === 'true';
    if (isWhiteTheme) {
        document.body.classList.add('white-theme');
        }

    // Escucha el evento de clic en el botón de luna
    document.getElementById('MoonIcon').onclick = function () {
        document.body.classList.toggle('white-theme');
    const isWhiteTheme = document.body.classList.contains('white-theme');

    // Guarda el estado del tema en el almacenamiento local
    localStorage.setItem('whiteTheme', isWhiteTheme);
        }
    });









//WhiteTheme button Moon changing
var icon = document.getElementById('MoonIcon');


icon.onclick = function () {
    document.body.classList.toggle('white-theme');

    // Obtiene el elemento i dentro del botón
    //el I Es el <i> para iconos de bootstrap
    var moonIcon = icon.querySelector('i');

    if (document.body.classList.contains('white-theme')) {
        // Cambia el contenido del elemento i al icono de sol cuando se activa el tema claro
        moonIcon.className = '';
        
        moonIcon.classList.add('bi', 'bi-moon-stars-fill');

    } 
}



document.getElementById('btnCopiar').addEventListener('click', function () {
    var contenidoParaCopiar = document.getElementById('contenidoParaCopiar');
    var textoACopiar = contenidoParaCopiar.innerText;

    try {
        if (copyTextToClipboard(textoACopiar)) {
            Swal.fire({
                title: 'Password Copiada -> ' + textoACopiar + '',
                width: 600,
                padding: '3em',
                

                
                icon: 'success',
                
                confirmButtonText: 'Continue',
                

            });
        } else {
            Swal.fire({
                title: 'Error',
                text: 'La copia al portapapeles no funcionó',
                icon: 'error'
            });
        }
    } catch (error) {
        Swal.fire({
            title: 'Error',
            width: 600,
            padding: '3em',
            color: 'white',
            background: '#fd5c63',
            iconColor: 'red',
            backdrop: `rgba(255,0,0,0.4)`,
            icon: 'error',
            confirmButtonText: 'Continue',
            confirmButtonColor: 'red'
        });
    }
});

function copyTextToClipboard(text) {
    if (!text) {
        throw new Error('El campo No Puede Estar Vacio');
    }

    if (navigator.clipboard) {
        return navigator.clipboard.writeText(text)
            .then(function () {
                return true;
            })
            .catch(function (err) {
                console.error('Error al copiar al portapapeles: ', err);
                return false;
            });
    } else {
        console.error('Error');
        return false;
    }
}


//1
function rangeSlider(value) {
    document.getElementById('rangeValue').innerHTML = value;
}








//2 son 2 cosas diferentes ojo
function rangeSlider(value) {
    document.getElementById("rangeValue").textContent = value;
}

//DOMcontentloaded es un evento que se dispara cuando el documento HTML ha sido completamente cargado y analizado,


/*addEventListener es un método de JavaScript que se utiliza 
para adjuntar un evento a un elemento HTML
(como un botón, un checkbox, etc.).
Cuando ocurre el evento (por ejemplo,
un clic en un botón o un cambio en un checkbox), 
la función especificada se ejecuta. En el caso del script,
addEventListener se utiliza para escuchar el evento "change" 
en los checkboxes. Cuando el usuario marca o desmarca un checkbox, 
se dispara el evento "change", y la función asociada se ejecuta.*/
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".option-checkbox");

    // Asegurarse de que al menos un checkbox esté marcado inicialmente
    if (![...checkboxes].some(cb => cb.checked)) {
        checkboxes[0].checked = true;
    }

    for (const checkbox of checkboxes) {

        //Evento "Change" para detectar cuando un checkbox ha cambiado su estado, 
        //es decir, cuando el usuario marca o desmarca un checkbox.
        checkbox.addEventListener("change", function () {
            // Verificar si todos los checkboxes están desmarcados
            const allUnchecked = ![...checkboxes].some(cb => cb.checked);

            if (allUnchecked) {
                // No permitir que se desmarquen todos los checkboxes
                this.checked = true;
            }
        });
    }
});



