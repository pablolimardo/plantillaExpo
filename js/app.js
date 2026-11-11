// =========================================================
// APP.JS · El cerebro de la web del proyecto
// =========================================================

// ---------- 1) TEMA CLARO / OSCURO ----------
const html = document.documentElement;          // la etiqueta <html>
const btnTema = document.querySelector("#btn-tema");

// Si la persona ya eligió un tema antes, lo recordamos
const temaGuardado = localStorage.getItem("tema");
if (temaGuardado) {
  html.dataset.tema = temaGuardado;              // pone data-tema="claro"
}

btnTema.addEventListener("click", () => {
  const nuevo = html.dataset.tema === "claro" ? "oscuro" : "claro";
  html.dataset.tema = nuevo;
  localStorage.setItem("tema", nuevo);           // lo guardamos en el navegador
});

// ---------- 2) PANEL DEL TANQUE ----------
const NIVEL_MIN = 20;
const NIVEL_MAX = 90;

const sensor   = document.querySelector("#sensor");
const agua     = document.querySelector("#agua");
const nivelTxt = document.querySelector("#nivel-txt");
const estado   = document.querySelector("#estado");

function actualizarPanel(nivel) {
  agua.style.height = nivel + "%";
  nivelTxt.textContent = nivel + "%";

  if (nivel < NIVEL_MIN) {
    estado.textContent = "⚠️ Nivel bajo: bomba ENCENDIDA";
    estado.className = "estado alerta";
  } else if (nivel > NIVEL_MAX) {
    estado.textContent = "🛑 Tanque lleno: bomba APAGADA";
    estado.className = "estado lleno";
  } else {
    estado.textContent = "✅ Nivel normal";
    estado.className = "estado ok";
  }
}

sensor.addEventListener("input", () => {
  actualizarPanel(Number(sensor.value));
});

actualizarPanel(Number(sensor.value));

// ---------- 3) AÑO AUTOMÁTICO EN EL PIE ----------
document.querySelector("#anio").textContent = new Date().getFullYear();