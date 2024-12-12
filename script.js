const envelope = document.getElementById('envelope');
const card = document.getElementById('card');
const heartsContainer = document.getElementById('hearts-container');

// Abre la carta al hacer clic en el sobre
envelope.addEventListener('click', () => {
  card.classList.add('open');
  createHearts();
});

// Función para crear corazones animados por toda la página
function createHearts() {
  for (let i = 0; i < 50; i++) { // Aumentamos el número de corazones
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Posición aleatoria en toda la ventana
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.animationDelay = Math.random() * 2 + 's';
    heartsContainer.appendChild(heart);

    // Elimina el corazón después de la animación
    heart.addEventListener('animationend', () => {
      heart.remove();
    });
  }
}
