
const experiences = [
  {
    title: 'GVA',
    role: 'Frontend Developer / AI Agent Creator / Automation Architect',
    duration: 'Fev 2024 – Presente',
    desc: 'Criação de agentes inteligentes com OpenAI, LangChain, N8N e automações personalizadas.'
  },
  {
    title: 'CantuStore',
    role: 'Frontend Developer',
    duration: 'Set 2021 – Fev 2024',
    desc: 'Desenvolvimento front-end com foco em interfaces funcionais e responsivas.'
  },
  {
    title: 'Telefônica Educação Digital',
    role: 'Designer Gráfico / 3D',
    duration: 'Out 2017 – Nov 2018',
    desc: 'Animações 3D e design gráfico para produtos educacionais digitais.'
  }
];

const education = [
  {
    institution: 'NoCode StartUp',
    course: 'AI – Diploma (2025 - 2026)'
  },
  {
    institution: 'Alura Cursos Online',
    course: 'Desenvolvedor Front-End (2019 - 2020)'
  },
  {
    institution: 'Vancouver Film School',
    course: '3D Animation (2013 - 2014)'
  }
];

function loadCarousel(data, targetId) {
  const container = document.getElementById(targetId);
  const fullList = [...data, ...data];
  fullList.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${item.title || item.institution}</h3>
                     <p><strong>${item.role || item.course}</strong></p>
                     <p>${item.duration || ''}</p>
                     <p>${item.desc || ''}</p>`;
    container.appendChild(div);
  });
}

loadCarousel(experiences, 'exp-carousel');
loadCarousel(education, 'edu-carousel');

// Typing Animation Loop
const roles = [
  'Front-End Developer',
  'AI Agent Creator',
  'Automation Architect'
];

let currentRole = 0;
let charIndex = 0;
let typingForward = true;
const typingElement = document.getElementById('typing');

function typeEffect() {
  const currentText = roles[currentRole];

  if (typingForward) {
    charIndex++;
    if (charIndex === currentText.length) {
      typingForward = false;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    charIndex--;
    if (charIndex === 0) {
      typingForward = true;
      currentRole = (currentRole + 1) % roles.length;
    }
  }

  typingElement.textContent = currentText.substring(0, charIndex);
  setTimeout(typeEffect, typingForward ? 100 : 60);
}

typeEffect();


// ScrollReveal
ScrollReveal().reveal('.skills-grid, .carousel-track, .contact', {
  delay: 300,
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
  reset: true
});

// Tema Claro/Escuro
function toggleTheme() {
  document.body.classList.toggle('light-theme');
}
