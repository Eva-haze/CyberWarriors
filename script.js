const themeToggle = document.getElementById('themeToggle');
const backToTopBtn = document.getElementById('backToTop');
const logoSpin = document.getElementById('logoSpin');

logoSpin.addEventListener("click", () => {
  console.log("!")
  logoSpin.classList.toggle("spinning");
});

// 1. Частицы
tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  particles: {
    number: { value: 300 },
    color: { value: "#8a4fff" },
    shape: {
      type: "star",
      options: {
        star: {
          sides: 4
        }
      }
    },
    opacity: { value: 0.5 },
    size: { value: { min: 2, max: 6 } },
    move: {
      enable: true,
      speed: 1.5
    },
    links: {
      enable: false,
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "attract"
      }
    },
    modes: {
      attract: {
        distance: 200,
        duration: 5,
        speed: 2
      }
    }
  }
});

  // 2. Тень за курсором
  
  const cursorShadow = document.createElement('div');
  cursorShadow.classList.add('cursor-shadow');
  document.body.appendChild(cursorShadow);

  document.addEventListener('mousemove', (e) => {
    cursorShadow.style.left = `${e.clientX}px`;
    cursorShadow.style.top = `${e.clientY}px`;
  });

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  const currentTheme = document.body.classList.contains('light-theme') ? 'light-theme' : '';
  localStorage.setItem('theme', currentTheme);
});


// 3. Кнопка "наверх" 
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// Плавный скролл для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === 'about.html') {
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    } else if (targetId === 'index.html') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  });
});