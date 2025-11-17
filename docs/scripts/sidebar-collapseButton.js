fetch('/Project-Nebula/components/sidebar.html', { cache: "no-store" })
  .then(r => {
    if (!r.ok) throw new Error('Sidebar not found: ' + r.status);
    return r.text();
  })
  .then(html => {
    const sidebarContainer = document.querySelector('#sidebar');
    sidebarContainer.innerHTML = html;

    const sidebar = sidebarContainer.querySelector("aside.sidebar");
    const sidebarToggler = sidebar.querySelector(".toggler");

    sidebarToggler.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
      document.body.classList.toggle("sidebar-collapsed");
    });
  })
  .catch(e => console.error(e));
