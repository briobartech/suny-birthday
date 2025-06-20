const card = document.querySelector('.card');

const cardBack = document.getElementById('card-back');
const cardFront = document.getElementById('card-front');
const menssage = `Quería desearte, para empezar, un feliz cumpleaños. \n Y espero que poco a poco las cosas se vayan acomodando en tu vida. 
Así como las placas tectónicas se acomodan, y hacen temblar a Chile, la vida nos desestabiliza para ponernos en el lugar que debemos estar.
Poco a poco vas logrando encontrar aquello que te hace feliz, y eso me pone feliz a mi. 
Me dijiste que estás intentando mejorar, y cada vez que hablamos lo noto. Me alegra poder ser testigo de eso. Me maravilla como quien haya sido testigo del primer amanecer, aunque yo no sea el primero. Pero aún disfruto de esa calidez, y es suficiente para mí. 
Desde la distancia, física-emocional, siempre estoy velando por tu bienestar. 
Pasarán los años, y quizás en algún momento deje de hacer esto, dejaré de estar, pero las pocas cosas que hice usando tu presencia como motor, permanecerán.
Como una braza que lucha contra el viento, este regalo es una resistencia contra lo efímero, para que no caiga en el olvido que te quiero. 
Feliz cumpleaños, Sol.`

card.addEventListener('click', function () {
  card.classList.toggle('is-flipped');
});

const parrafo = document.createElement('p');
parrafo.textContent = menssage;

cardBack.appendChild(parrafo);

// ...existing code...

document.getElementById('descargar-ilustracion').addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = 'assets/suny-gift.png'; // Cambia por la ruta real de tu imagen
  link.download = 'ilustracion.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});