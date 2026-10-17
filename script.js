const cursor = document.getElementById('step1');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

const words = ["Frontend Developer", "React & Next.js Engineer", "UI/UX Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const typingElement = document.getElementById('step2');

function typeEffect() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
    return;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : typingSpeed);
}
document.addEventListener('DOMContentLoaded', typeEffect);

const tiltCards = document.querySelectorAll('[data-tilt]');
tiltCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg) scale3d(1.02, 1.02, 1.02)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
});

const termInput = document.getElementById('step9');
const termBody = document.getElementById('step3');

termInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const command = termInput.value.trim().toLowerCase();
    
    const userLine = document.createElement('p');
    userLine.className = 'box37';
    userLine.innerHTML = `<span class="box38">farruh@dev:~$</span> ${command}`;
    termBody.appendChild(userLine);

    const response = document.createElement('p');
    response.className = 'box39';

    switch (command) {
      case 'about':
        response.textContent = "Yo'ldoshev Farruh — Web dasturchi. Asosiy maqsadim zamonaviy, tez va xavfsiz foydalanuvchi interfeyslarini qurish.";
        break;
      case 'skills':
        response.textContent = "HTML5, CSS3, JavaScript, React.js, Next.js, Tailwind CSS, Git, Node.js";
        break;
      case 'telegram':
        response.textContent = "Telegram: https://t.me/farruh_dev";
        break;
      case 'instagram':
        response.textContent = "Instagram: https://instagram.com/farruhh.012";
        break;
      case 'email':
        response.textContent = "Email: botiraliquliv@gmail.com";
        break;
      case 'contact':
        response.textContent = "Telegram: @farruh_dev | Insta: @farruhh.012 | Email: botiraliquliv@gmail.com";
        break;
      case 'clear':
        termBody.innerHTML = '';
        termInput.value = '';
        return;
      case '':
        response.textContent = '';
        break;
      default:
        response.textContent = `Buyruq topilmadi: '${command}'. 'help' yozib ko'ring.`;
    }

    termBody.appendChild(response);
    termInput.value = '';
    termBody.scrollTop = termBody.scrollHeight;
  }
});