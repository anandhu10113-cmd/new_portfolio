// ── Navbar scroll shadow ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Fade-in on scroll ──
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
fadeEls.forEach(el => observer.observe(el));

// ── Contact form submit feedback ──
const sendBtn = document.getElementById('send-btn');
if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const name    = document.getElementById('contact-name').value.trim();
    const email   = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !subject || !message) {
      sendBtn.textContent = 'Please fill all fields';
      sendBtn.style.background = '#C4775A';
      setTimeout(() => {
        sendBtn.innerHTML = 'Send message <i class="bi bi-send"></i>';
        sendBtn.style.background = '';
      }, 2500);
      return;
    }

    sendBtn.innerHTML = 'Message sent! <i class="bi bi-check2"></i>';
    sendBtn.style.background = '#4CAF50';
    setTimeout(() => {
      sendBtn.innerHTML = 'Send message <i class="bi bi-send"></i>';
      sendBtn.style.background = '';
      document.getElementById('contact-name').value    = '';
      document.getElementById('contact-email').value   = '';
      document.getElementById('contact-subject').value = '';
      document.getElementById('contact-message').value = '';
    }, 3000);
  });
}
