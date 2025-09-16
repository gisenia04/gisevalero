// Menú hamburguesa
document.getElementById("menu-toggle").addEventListener("click", function() {
  document.getElementById("nav-links").classList.toggle("show");
});

// Cargar proyectos
function loadProjects() {
  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  let container = document.getElementById("project-gallery");
  container.innerHTML = "";

  projects.forEach(p => {
    const ext = p.file.split('.').pop().toLowerCase();
    let viewButton = "";

    // Solo PDF puede previsualizar
    if(ext === "pdf") {
      viewButton = `<a href="#" class="btn-view" data-file="${p.file}">Ver</a>`;
    }

    container.innerHTML += `
      <div class="project-item">
        <div class="project-info">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="project-buttons">
            ${viewButton}
            <a href="${p.file}" download="${p.name}" class="btn-download">Descargar</a>
          </div>
        </div>
      </div>`;
  });

  // Modal
  const modal = document.getElementById("preview-modal");
  const iframe = document.getElementById("preview-frame");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".btn-view").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const file = btn.getAttribute("data-file");
      iframe.src = file;
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    iframe.src = "";
  });

  window.addEventListener("click", (e) => {
    if(e.target === modal){
      modal.style.display = "none";
      iframe.src = "";
    }
  });
}

loadProjects();
