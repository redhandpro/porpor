document.getElementById('helloBtn').addEventListener('click', () => {
  alert('سلام! 🌟 خوش آمدی به سایت نمونهٔ من.');
});

document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('msg');
  msg.textContent = `ممنون ${name}! ما به زودی به ${email} ایمیل می‌زنیم.`;
});
