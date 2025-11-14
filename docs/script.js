const sidebar = document.querySelector(".sidebar")
const sidebarToggler = document.querySelector(".toggler");

sidebarToggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed")
});


function loadPage(page) {
      fetch(page)
        .then(response => response.text())
        .then(html => {
          // Convertir el HTML cargado en un documento
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");

          // Tomar solo el contenido del <main>
          const newMain = doc.querySelector("main").innerHTML;

          // Reemplazar el contenido actual del main
          document.getElementById("main-content").innerHTML = newMain;
        })
        .catch(err => console.log('Error cargando la página: ', err));
    }