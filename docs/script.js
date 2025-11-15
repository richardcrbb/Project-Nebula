fetch('/Project-Nebula/components/sidebar.html', { cache: "no-store" })
  .then(r => r.text())
  .then(html => {
    // Insertar HTML del sidebar
    const sidebarContainer = document.querySelector('#sidebar');
    sidebarContainer.innerHTML = html;

    // AHORA sí existen .toggler y los elementos del sidebar
    const sidebar = sidebarContainer.querySelector("aside.sidebar");
    const sidebarToggler = sidebar.querySelector(".toggler");

    // Funcion para escuchar clicks en el boton y agregar o quitar clase collapsed en elementos
    sidebarToggler.addEventListener("click", () => {
        sidebar.classList.toggle("collapsed");
        document.body.classList.toggle("sidebar-collapsed");
    });

    

  });