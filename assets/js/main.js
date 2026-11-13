document.body.classList.add("page-fade");

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const currentPage = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

function openWhatsApp(message) {
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
}

document.querySelectorAll("[data-whatsapp-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const title = form.dataset.whatsappForm;
    const lines = [`${title}`, ""];

    for (const [key, value] of data.entries()) {
      if (value) lines.push(`${key}: ${value}`);
    }

    openWhatsApp(lines.join("\n"));
  });
});

const lightbox = document.querySelector(".lightbox");

if (lightbox) {
  const lightboxImage = lightbox.querySelector("img");
  const lightboxCaption = lightbox.querySelector(".lightbox__caption");
  const closeLightbox = () => lightbox.classList.remove("is-open");

  document.querySelectorAll("[data-lightbox]").forEach((photo) => {
    photo.addEventListener("click", () => {
      const image = photo.querySelector("img");
      if (!image) return;
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt;
      lightboxCaption.textContent = image.alt;
      lightbox.classList.add("is-open");
    });
  });

  lightbox.querySelector(".lightbox__close").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
}

document.querySelectorAll("[data-slider]").forEach((slider) => {
  const track = slider.querySelector(".slider-track");
  const slides = slider.querySelectorAll(".slide");
  let index = 0;

  const showSlide = (nextIndex) => {
    index = (nextIndex + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
  };

  slider.querySelector(".slider-control--prev")?.addEventListener("click", () => showSlide(index - 1));
  slider.querySelector(".slider-control--next")?.addEventListener("click", () => showSlide(index + 1));
  setInterval(() => showSlide(index + 1), 4500);
});

document.querySelectorAll("[data-hero-slides]").forEach((slideshow) => {
  const slides = slideshow.querySelectorAll(".hero-slide");
  if (slides.length < 2) return;
  let activeIndex = 0;

  setInterval(() => {
    slides[activeIndex].classList.remove("is-active");
    activeIndex = (activeIndex + 1) % slides.length;
    slides[activeIndex].classList.add("is-active");
  }, 5000);
});
