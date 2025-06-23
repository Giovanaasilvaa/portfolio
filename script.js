//video
document.addEventListener("DOMContentLoaded", function () {
    let openVideoBtn = document.getElementById("open-video-btn");
    let videoModal = document.getElementById("video-modal");
    let videoContainer = document.getElementById("video-container");
    let closeBtn = document.getElementById("close-btn");
    let iframe = videoContainer.querySelector('iframe');
    
    // URL original do vídeo sem autoplay
    const videoUrl = "https://www.youtube.com/embed/3mmhsNYM3k4";
    
    // Função para fechar o modal e resetar o vídeo
    function fecharVideoModal() {
        videoModal.style.display = "none";
        // Remove o autoplay e reseta o iframe
        iframe.src = videoUrl;
    }

    openVideoBtn.addEventListener("click", function (event) {
        event.preventDefault(); 
        videoModal.style.display = "flex";
        // Adiciona autoplay=1 à URL do vídeo
        iframe.src = videoUrl + "?autoplay=1";
    });

    closeBtn.addEventListener("click", fecharVideoModal);

    window.addEventListener("click", function (event) {
        if (event.target === videoModal) {
            fecharVideoModal();
        }
    });
});

//digitação
document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("typewriter");

  const text = `Welcome to my portfolio! I'm Giovana Marques Silva,
  passionate about technology and innovation. Here you will find
  my projects, experiences and learnings in the development area. 
  Explore and find out more about my work!`;

  let index = 0;

  function type() {
    const current = text.slice(0, index);
    const cursor = `<span class="cursor">|</span>`;
    element.innerHTML = current.replace(/\n/g, "<br>") + cursor;

    if (index < text.length) {
      index++;
      setTimeout(type, 30); 
    }
  }

  type();
});

// Inicia a animação 
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('ativo');
    } else {
      entry.target.classList.remove('ativo');
    }
  });
}, { threshold: 0.1});

const sectionsToObserve = [
  document.getElementById('technology'),
  document.getElementById('project'),
  document.getElementById('about-me')
];

sectionsToObserve.forEach(section => {
  if(section) observer.observe(section);
});

