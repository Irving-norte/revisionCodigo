const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

// Función asíncrona para mostrar el usuario
async function displayUser(username) {
  try {
    $n.textContent = 'cargando...'; // Mostrar mensaje de carga
    const response = await fetch(`${usersEndpoint}/${username}`);
    if (!response.ok) {
      throw new Error(`User not found: ${response.statusText}`); // Manejo de errores si el usuario no se encuentra
    }
    const data = await response.json();
    console.log(data);

    // Mostrar datos del usuario o mensajes por defecto si no hay datos disponibles
    $n.textContent = data.name || 'No name available';
    $b.textContent = data.blog || 'No blog available';
    $l.textContent = data.location || 'No location available';
  } catch (err) {
    handleError(err);
  }
}

// Función para manejar errores
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err.message}`; // Mostrar mensaje de error en la página
  // Hacer visible el mensaje de error
  const errorMessage = document.getElementById('errorMessage');
  errorMessage.textContent = `Algo salió mal: ${err.message}`;
  errorMessage.classList.remove('d-none');
}

// Llamada inicial a la función displayUser
displayUser('ErikOG18');