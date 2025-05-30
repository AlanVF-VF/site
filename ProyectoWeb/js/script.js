// Obtener datos de un archivo o API
fetch('datos.json') // Cambia la URL según lo que necesites
  .then(response => {
    if (!response.ok) throw new Error('Error en la petición');
    return response.json(); // o response.text() si no es JSON
  })
  .then(data => {
    console.log(data); // Aquí trabajas con los datos recibidos
  })
  .catch(error => {
    console.error('Hubo un problema:', error);
  });