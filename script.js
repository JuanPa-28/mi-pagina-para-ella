const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');

envelope.addEventListener('click', () => {
    envelope.classList.add('open'); // Agrega la clase 'open' al sobre
    setTimeout(() => {
        letter.classList.add('visible'); // Agrega la clase 'visible' a la carta después de un retraso
    }, 400); // El retraso debe ser menor que la duración de la transición del sobre
});