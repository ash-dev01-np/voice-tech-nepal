function toggleMobileMenu(force) {
  const menu = document.getElementById("mobileMenu");
  const btn = document.querySelector(".mobile-menu-btn");
  if (!menu) return;
  const open = typeof force === "boolean" ? force : !menu.classList.contains("active");
  menu.classList.toggle("active", open);
  if (btn) btn.setAttribute("aria-expanded", String(open));
}

document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => toggleMobileMenu(false));
});

function sendWhatsApp() {
  const phoneNumber = "9779761408246";
  const message = encodeURIComponent(
    "Hi Voice Tech Nepal! I want to book a seat.\n\nName:\nAge:\nPreferred time:\nOnline/Offline:"
  );
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank", "noopener,noreferrer");
}

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

if ("IntersectionObserver" in window) {
  const offscreen = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting && !e.target.paused) e.target.pause();
    });
  }, { threshold: 0 });
  document.querySelectorAll("video:not(.about-intro)").forEach((v) => offscreen.observe(v));
}

const allVideos = document.querySelectorAll("video");
allVideos.forEach((video) => {
  video.addEventListener("play", () => {
    allVideos.forEach((other) => {
      if (other !== video) other.pause();
    });
  });
});

document.querySelectorAll(".video-thumb").forEach((thumb) => {
  const video = thumb.querySelector("video");
  const button = thumb.querySelector(".video-play");
  if (!video || !button) return;
  video.controls = false;
  button.addEventListener("click", () => {
    video.muted = false;
    video.play().catch(() => {});
  });
  video.addEventListener("play", () => {
    thumb.classList.add("is-playing");
    video.controls = true;
  });
  video.addEventListener("ended", () => {
    thumb.classList.remove("is-playing");
    video.controls = false;
    video.load();
  });
});

const navLinks = Array.from(document.querySelectorAll('#mobileMenu a[href^="#"]'));
const navTargets = navLinks.map((a) => document.querySelector(a.getAttribute("href")));
const siteHeader = document.querySelector("header");
let navUpdateQueued = false;

function updateActiveNav() {
  navUpdateQueued = false;
  const line = window.scrollY + (siteHeader ? siteHeader.offsetHeight : 0) + window.innerHeight * 0.25;
  let current = -1;
  navTargets.forEach((section, i) => {
    if (section && section.getBoundingClientRect().top + window.scrollY <= line) current = i;
  });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
    current = navLinks.length - 1;
  }
  navLinks.forEach((link, i) => {
    const on = i === current;
    link.classList.toggle("active", on);
    if (on) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
}

function queueNavUpdate() {
  if (!navUpdateQueued) {
    navUpdateQueued = true;
    requestAnimationFrame(updateActiveNav);
  }
}

window.addEventListener("scroll", queueNavUpdate, { passive: true });
window.addEventListener("resize", queueNavUpdate);
updateActiveNav();

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
