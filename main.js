const card = document.querySelector('.card');

const cardBack = document.getElementById('card-back');
const cardFront = document.getElementById('card-front');


card.addEventListener('click', function () {
  card.classList.toggle('is-flipped');
});

/* const parrafo = document.createElement('p');
parrafo.textContent = menssage;

cardBack.appendChild(parrafo); */

// ...existing code...

document.getElementById('descargar-ilustracion').addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = 'assets/suny-gift.png'; // Cambia por la ruta real de tu imagen
  link.download = 'ilustracion.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});