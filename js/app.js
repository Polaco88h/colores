// Función para saludar
function saludar() {
    alert('¡Hola! Bienvenido a nuestra página web.');
  }
  
  // Estructura de repetición (bucle for) para cambiar el color de fondo de secciones
  const secciones = document.querySelectorAll('section');
  for (let i = 0; i < secciones.length; i++) {
    secciones[i].style.backgroundColor = getRandomColor();
  }
  
  // Función para generar colores aleatorios
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }