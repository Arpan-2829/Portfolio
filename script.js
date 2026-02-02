// ====== REVEAL ON SCROLL (SECTIONS + SKILLS) ======
const revealElements = document.querySelectorAll(".section, .skill-card");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target); // performance boost
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "0.8s ease";
  revealObserver.observe(el);
});
