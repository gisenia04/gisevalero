const proyectos = [
  { 
    nombre: "Proyecto de Aplicacion Profesional", 
    descripcion: "Actividad Semana 01", 
    archivo: "proyectodeaplicacionprofesional.pdf" 
  }
];

const gallery = document.getElementById("project-gallery");
const modal = document.getElementById("preview-modal");
const iframe = document.getElementById("preview-frame");
const closeBtn = modal.querySelector(".close");

// Asegurarse de que el modal esté oculto al inicio
modal.style.display = "none";
iframe.src = "";

// Crear tarjetas de proyecto
proyectos.forEach(proyecto => {
  const div = document.createElement("div");
  div.classList.add("project-item");

  div.innerHTML = `
    <div class="project-info">
      <h3>${proyecto.nombre}</h3>
      <p>${proyecto.descripcion}</p>
      <div class="project-buttons">
        <button class="btn-view">Ver</button>
        <a href="${proyecto.archivo}" class="btn-download" download>Descargar</a>
      </div>
    </div>
  `;

  gallery.appendChild(div);

  // Botón Ver: solo abre modal al hacer clic
  const btnView = div.querySelector(".btn-view");
  btnView.addEventListener("click", () => {
    iframe.src = proyecto.archivo;
    modal.style.display = "flex";
  });
});

// Cerrar modal al hacer clic en la X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  iframe.src = "";
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    iframe.src = "";
  }
});
