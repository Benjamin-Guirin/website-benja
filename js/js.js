//corazon

// Selecciona todos los elementos con la clase "fa-heart"
const corazones = document.getElementsByClassName('fa-heart');

// Agrega un evento de clic a cada corazón
for (const corazon of corazones) {
  corazon.addEventListener('click', () => {
    // Verifica si el corazón actual tiene la clase "active"
    if (corazon.classList.contains('active')) {
      corazon.classList.remove('active'); // Si tiene la clase, quítala
    } else {
      corazon.classList.add('active'); // Si no tiene la clase, agrégala
    }

    // Almacena el estado del "like" en el almacenamiento local
    const index = Array.from(corazones).indexOf(corazon);
    localStorage.setItem(`corazon-${index}`, corazon.classList.contains('active'));
  });

  // Recupera el estado del "like" del almacenamiento local al cargar la página
  const index = Array.from(corazones).indexOf(corazon);
  const isActive = localStorage.getItem(`corazon-${index}`);
  if (isActive === 'true') {
    corazon.classList.add('active');
  }
}


///////

