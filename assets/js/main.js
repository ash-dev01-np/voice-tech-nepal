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
   Nothing plays when the page loads. The three intros play
   one after another (muted) only once you scroll down to them,
   and pause again when you scroll away.
========================= */
const intros = Array.from(document.querySelectorAll(".about-intro"));
const introGrid = document.querySelector(".intro-grid");
let currentIntro = 0;
let introsInView = false;
let userScrolled = false;

intros.forEach((video, i) => {
  video.autoplay = false;
  video.pause();
  video.addEventListener("ended", () => {
    currentIntro = i + 1 < intros.length ? i + 1 : 0;
    if (i + 1 < intros.length && introsInView) {
      intros[i + 1].play().catch(() => {});
    }
  });
  // If someone presses play on a different intro, carry on from there
  video.addEventListener("play", () => { currentIntro = i; });
});

function updateIntros() {
  if (!intros.length) return;
  if (introsInView && userScrolled) {
    intros[currentIntro].play().catch(() => {});
  } else {
    intros.forEach((v) => v.pause());
  }
}

window.addEventListener("scroll", () => {
  if (!userScrolled) {
    userScrolled = true;
    updateIntros();
  }
}, { passive: true });

if (introGrid && "IntersectionObserver" in window) {
  new IntersectionObserver((entries) => {
    introsInView = entries[0].isIntersecting;
    updateIntros();
  }, { threshold: 0.5 }).observe(introGrid);
}

/* =========================
   PAUSE ANY VIDEO SCROLLED OUT OF VIEW
========================= */
if ("IntersectionObserver" in window) {
  const offscreen = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting && !e.target.paused) e.target.pause();
    });
  }, { threshold: 0 });
  document.querySelectorAll("video:not(.about-intro)").forEach((v) => offscreen.observe(v));
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
