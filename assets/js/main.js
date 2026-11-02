/* =========================
   MOBILE MENU
========================= */
function toggleMobileMenu(force) {
  const menu = document.getElementById("mobileMenu");
  const btn = document.querySelector(".mobile-menu-btn");
  if (!menu) return;
  const open = typeof force === "boolean" ? force : !menu.classList.contains("active");
  menu.classList.toggle("active", open);
  if (btn) btn.setAttribute("aria-expanded", String(open));
}

// Close the menu after tapping a section link
document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => toggleMobileMenu(false));
});

/* =========================
   WHATSAPP BOOKING
========================= */
function sendWhatsApp() {
  const phoneNumber = "9779761408246"; // no + sign
  const message = encodeURIComponent(
    "Hi Voice Tech Nepal! I want to book a seat.\n\nName:\nAge:\nPreferred time:\nOnline/Offline:"
  );
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank", "noopener,noreferrer");
}

/* =========================
   ABOUT INTRO SEQUENCE
   Plays the three intros one after another (muted),
   starting when they scroll into view.
========================= */
const intros = document.querySelectorAll(".about-intro");

intros.forEach((video, i) => {
  video.addEventListener("ended", () => {
    if (intros[i + 1]) intros[i + 1].play().catch(() => {});
  });
});

if (intros.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) {
      intros[0].play().catch(() => {});
      observer.disconnect();
    }
  }, { threshold: 0.4 });
  observer.observe(intros[0]);
}

/* =========================
   ONE VIDEO AT A TIME
========================= */
const allVideos = document.querySelectorAll("video");
allVideos.forEach((video) => {
  video.addEventListener("play", () => {
    allVideos.forEach((other) => {
      if (other !== video) other.pause();
    });
  });
});

/* =========================
   FOOTER YEAR
========================= */
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
