/* =========================
   LOCATION VIDEO POPUP
========================= */
function openLocationVideo(){
  const popup = document.getElementById("locationVideoPopup");
  const video = document.getElementById("locationPopupVideo");
  if(!popup || !video) return;

  video.muted = true;
  video.playsInline = true;

  const src = video.getAttribute("data-src");
  if(src && !video.src){
    video.src = src;
    video.load();
  }

  popup.classList.add("active");
  setTimeout(()=>video.play().catch(()=>{}),80);
}

function closeLocationVideo(){
  const popup = document.getElementById("locationVideoPopup");
  const video = document.getElementById("locationPopupVideo");
  if(!popup || !video) return;

  video.pause();
  video.currentTime = 0;
  video.removeAttribute("src");
  video.load();
  popup.classList.remove("active");
}

/* =========================
   FORCE MUTE (ANDROID FIX)
========================= */
document.addEventListener("play",e=>{
  if(e.target.tagName==="VIDEO"){
    e.target.muted = true;
  }
},true);

/* =========================
   ABOUT INTRO SEQUENCE
========================= */
document.addEventListener("DOMContentLoaded",()=>{
  const vids = document.querySelectorAll(".about-intro");
  if(!vids.length) return;

  vids.forEach(v=>{
    v.muted = true;
    v.playsInline = true;
  });

  vids.forEach((v,i)=>{
    v.addEventListener("ended",()=>{
      if(vids[i+1]){
        vids[i+1].play().catch(()=>{});
      }
    });
  });

  vids[0].play().catch(()=>{});
});

function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  if (!menu) return;
  menu.classList.toggle("active");
}

function sendWhatsApp() {
  const phoneNumber = "9779761408246"; // no + sign
  const message = encodeURIComponent(
    "Hi Voice Tech Nepal! I want to book a seat.\n\nName:\nAge:\nPreferred time:\nOnline/Offline:"
  );

  // wa.me works best on mobile + desktop
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

