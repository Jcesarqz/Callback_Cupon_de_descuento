// Elementos seleccionados
const button = document.getElementById('get-coupon');
const loading = document.getElementById('loading');
const coupon = document.getElementById('coupon');
const couponCodeElement = document.getElementById('coupon-code');

// Función para obtener el cupón con asincronía
function getStudentCoupon(callback) {
  loading.classList.remove('hidden'); // Muestra "cargando"
  coupon.classList.add('hidden'); // Oculta el cupón previo

  // Simulación de espera del servidor
  setTimeout(() => {
    const studentCouponCode = "EDUCACION20"; // Código especial para estudiantes
    callback(studentCouponCode);
  }, 3000); // Retraso de 3 segundos
}

// Evento al hacer clic en el botón
button.addEventListener('click', () => {
  button.disabled = true; // Desactiva el botón durante la espera
  button.textContent = "Procesando... 🎓";

  getStudentCoupon((code) => {
    couponCodeElement.textContent = code; // Actualiza el código en pantalla
    loading.classList.add('hidden'); // Oculta la carga
    coupon.classList.remove('hidden'); // Muestra el cupón
    button.disabled = false; // Reactiva el botón
    button.textContent = "¡Quiero otro descuento!";
  });
});
