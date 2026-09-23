const miAudio = document.getElementById('musica-fondo');

// Ajustamos el volumen al 20% (puedes cambiar este valor entre 0.0 y 1.0)
miAudio.volume = 0.2;

function activarMusica() {
    miAudio.play()
        .then(() => {
            console.log("Música iniciada por interacción del usuario.");

            // Removemos los event listeners para que no intente reproducir cada vez que te muevas
            eventosInteraccion.forEach(evento => {
                window.removeEventListener(evento, activarMusica);
            });
        })
        .catch(error => {
            console.log("Esperando una interacción más directa para reproducir:", error);
        });
}

const eventosInteraccion = ['click', 'keydown', 'mousemove', 'scroll', 'touchstart'];

eventosInteraccion.forEach(evento => {
    window.addEventListener(evento, activarMusica, { passive: true });
});

function desplegardatos1() {
    const nombre = "Luis Roberto Miranda de la Cruz";
    const matricula = "Tu matricula"; 
    const carrera = "Ingeniería en Sistemas Computacionales";
    const semestre = "5to Semestre";

    const texto = `
        <strong>Nombre:</strong> ${nombre} <br>
        <strong>Matrícula:</strong> ${matricula} <br>
        <strong>Carrera:</strong> ${carrera} <br>
        <strong>Semestre:</strong> ${semestre}
    `;

    const resultados = document.getElementById('resultados');
    resultados.innerHTML = texto;
    resultados.style.display = "block"; // Lo mostramos
}


function calcularpromedio(event) {
    
    event.preventDefault(); 

    
    const p1 = parseFloat(document.getElementById('parcial1').value);
    const p2 = parseFloat(document.getElementById('parcial2').value);
    const p3 = parseFloat(document.getElementById('parcial3').value);
    const resultado = document.getElementById('resultadopromedio');

   
    if (isNaN(p1) || isNaN(p2) || isNaN(p3)) {
        resultado.textContent = "Por favor, ingresa las tres calificaciones válidas.";
        resultado.style.color = "orange";
        return;
    }

  
    const promedio = (p1 + p2 + p3) / 3;

   
    if (promedio >= 70) {
        resultado.textContent = `Promedio: ${promedio.toFixed(2)} - Aprobado`;
        resultado.style.color = "#00ff00"; // Verde para aprobado
    } else {
        resultado.textContent = `Promedio: ${promedio.toFixed(2)} - Reprobado`;
        resultado.style.color = "#ff4d4d"; // Rojo para reprobado
    }
}

function addElement() {
    const input = document.getElementById('inputtext');
    const texto = input.value.trim();

    if (texto !== "") {

        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = texto;
        
       
        nuevoLi.classList.add('text-light', 'mb-1');


        document.getElementById('listadinamica').appendChild(nuevoLi);


        input.value = "";
    }
}

function cleanElement() {

    document.getElementById('listadinamica').innerHTML = "";
}


const seccionCambio = document.getElementById('cambio');


function cambbg1() {
    seccionCambio.style.backgroundColor = "#fa4652"; 

    seccionCambio.classList.remove('text-dark');
    seccionCambio.classList.add('text-light');
}


function cambbg2() {
    seccionCambio.style.backgroundColor = "#ecd181"; 

    seccionCambio.classList.remove('text-light');
    seccionCambio.classList.add('text-dark');
}


function cambbg3() {
    seccionCambio.style.backgroundColor = "#5f3c3a"; 

    seccionCambio.classList.remove('text-dark');
    seccionCambio.classList.add('text-light');
}

function ogbg() {
    seccionCambio.style.backgroundColor = "#643c3c"; 
    seccionCambio.classList.remove('text-dark');
    seccionCambio.classList.add('text-light');
}

