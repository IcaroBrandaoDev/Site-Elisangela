// ---------- Configuração central do WhatsApp ----------
// Confirmar se este é o número atual antes de publicar o site.
const WHATSAPP_NUMBER = "5531988765288"; // formato: código país + DDD + número
const WHATSAPP_MESSAGE = "Olá! Gostaria de agendar uma consulta com a psicóloga Elisangela.";

document.addEventListener("DOMContentLoaded", () => {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  document.querySelectorAll(".whatsapp-link").forEach(link => {
    link.setAttribute("href", waUrl);
  });

  // Ano dinâmico no rodapé
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Header com sombra ao rolar
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll);

  // Menu mobile
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const navOverlay = document.getElementById("navOverlay");

  const closeMenu = () => {
    navMenu.classList.remove("open");
    navOverlay.classList.remove("open");
    menuToggle.classList.remove("active");
  };

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    navOverlay.classList.toggle("open");
  });

  navOverlay.addEventListener("click", closeMenu);
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Reveal on scroll
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => observer.observe(el));
});
