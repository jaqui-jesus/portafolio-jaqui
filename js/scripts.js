document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

  // Obtén los datos del formulario
  const formData = new FormData(this);

  // Realiza la solicitud POST a Formspree
  fetch("https://formspree.io/f/xjkyybvr", {
      method: "POST",
      body: formData,
      headers: {
          Accept: "application/json",
      },
  })
      .then((response) => {
          if (response.ok) {
              // Muestra un mensaje de éxito
              const statusMessage = document.getElementById("statusMessage");
              statusMessage.innerHTML =
                  '<div class="alert alert-success">¡Mensaje enviado con éxito!</div>';
              // Limpia el formulario
              document.getElementById("contactForm").reset();
              // Oculta el mensaje después de 5 segundos
              setTimeout(() => {
                  statusMessage.innerHTML = ""; // Limpia el mensaje
              }, 5000); // 5000 milisegundos = 5 segundos
          } else {
              // Muestra un mensaje de error
              const statusMessage = document.getElementById("statusMessage");
              statusMessage.innerHTML =
                  '<div class="alert alert-danger">Hubo un error al enviar el mensaje. Inténtalo de nuevo.</div>';
              // Oculta el mensaje después de 5 segundos
              setTimeout(() => {
                  statusMessage.innerHTML = ""; // Limpia el mensaje
              }, 5000); // 5000 milisegundos = 5 segundos
          }
      })
      .catch((error) => {
          // Muestra un mensaje de error en caso de fallo en la solicitud
          const statusMessage = document.getElementById("statusMessage");
          statusMessage.innerHTML =
              '<div class="alert alert-danger">Hubo un error al enviar el mensaje. Inténtalo de nuevo.</div>';
          // Oculta el mensaje después de 5 segundos
          setTimeout(() => {
              statusMessage.innerHTML = ""; // Limpia el mensaje
          }, 5000); // 5000 milisegundos = 5 segundos
      });
});