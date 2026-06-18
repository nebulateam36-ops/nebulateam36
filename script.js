// ============================================================
// 1. ГАМБУРГЕР-МЕНЮ
// ============================================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Закрываем меню при клике на ссылку (для мобильных)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});

// ============================================================
// 2. SCROLL REVEAL — плавное появление блоков
// ============================================================
const sections = document.querySelectorAll('section, .hero');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.15 });

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    revealObserver.observe(section);
});

// ============================================================
// 3. ОТПРАВКА ФОРМЫ В TELEGRAM (через Bot API)
// ============================================================
const form = document.getElementById('contactForm');
const statusDiv = document.getElementById('formStatus');

// ⚠️ ЗАМЕНИТЕ НА СВОИ ДАННЫЕ:
const BOT_TOKEN = '7083188472:AAE4oxFbomFzOlmWkAR0Cizv4Jdng77Vpvs';   // Токен бота
const CHAT_ID = '689854777';          // ID чата или канала

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !contact || !message) {
        statusDiv.style.color = '#ff8a8a';
        statusDiv.textContent = '⚠️ Пожалуйста, заполните все поля.';
        return;
    }

    // Собираем текст сообщения
    const text = `📩 *Новая заявка с сайта Nebula Team*%0A%0A👤 *Имя:* ${name}%0A📞 *Контакт:* ${contact}%0A💬 *Сообщение:* ${message}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=Markdown`;

    try {
        statusDiv.style.color = '#b0d0ff';
        statusDiv.textContent = '⏳ Отправка...';

        const response = await fetch(url);
        const data = await response.json();

        if (data.ok) {
            statusDiv.style.color = '#6fcf97';
            statusDiv.textContent = '✅ Заявка успешно отправлена! Мы свяжемся с вами.';
            form.reset();
        } else {
            throw new Error('Ошибка от Telegram API');
        }
    } catch (error) {
        console.error('Ошибка отправки:', error);
        statusDiv.style.color = '#ff8a8a';
        statusDiv.textContent = '❌ Не удалось отправить заявку. Попробуйте позже.';
    }
});

// ============================================================
// 4. НЕОН-ПУЛЬСАЦИЯ (дополнительный эффект)
// ============================================================
console.log('Nebula Team — сайт загружен! 🚀');