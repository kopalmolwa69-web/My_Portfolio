document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

window.addEventListener('scroll', () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav a");

  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 100;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.style.color = "white";
        if (link.getAttribute("href") === "#" + id) {
          link.style.color = "#f1f1f6";
        }
      });
    }
  });
});

const elements = document.querySelectorAll(".content, .tool-card");

const showOnScroll = () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
};

elements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.6s ease";
});

window.addEventListener("scroll", showOnScroll);

const btn = document.createElement("button");
btn.innerText = "⬆";
btn.style.position = "fixed";
btn.style.bottom = "30px";
btn.style.right = "30px";
btn.style.padding = "20px 22px";
btn.style.fontSize = "25px";
btn.style.display = "none";
btn.style.background = "#1b1baf";
btn.style.color = "white";
btn.style.border = "none";
btn.style.borderRadius = "8px";
btn.style.cursor = "pointer";

document.body.appendChild(btn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});


btn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
