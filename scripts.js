document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden");
        if (entry.target.classList.contains("photo")) {
          entry.target.classList.add("fade-in-left");
          entry.target.classList.remove("fade-out-left");
        } else {
          entry.target.classList.add("fade-in-right");
          entry.target.classList.remove("fade-out-right");
        }
      } else {
        if (entry.target.classList.contains("photo")) {
          entry.target.classList.add("fade-out-left");
          entry.target.classList.remove("fade-in-left");
        } else {
          entry.target.classList.add("fade-out-right");
          entry.target.classList.remove("fade-in-right");
        }
      }
    });
  });

  document.querySelectorAll(".hidden").forEach((el) => {
    observer.observe(el);
  });
});
