// ============================================================
// ДАННЫЕ УСЛУГ
// ============================================================
const servicesData = {
    websites: {
        id: 'websites',
        icon: 'fa-laptop-code',
        title: 'Сайты-визитки',
        description: 'Разработка стильных сайтов с рабочей формой обратной связи и индивидуальным дизайном под ваш бизнес.',
        fullDescription: 'Мы создаём современные сайты-визитки, которые становятся мощным инструментом для привлечения клиентов. Каждый проект разрабатывается с учётом вашей ниши, целевой аудитории и бизнес-целей. Наши сайты адаптивны, быстры и оптимизированы под поисковые системы.',
        price: 'от 4 999 ₽',
        priceDetails: 'Включены: дизайн, вёрстка, форма обратной связи, адаптив, базовая SEO-оптимизация.',
        support: 'Техническая поддержка 30 дней бесплатно. Дальнейшее обслуживание — от 3 000 ₽/мес.',
        features: [
            'Индивидуальный дизайн',
            'Адаптивная вёрстка',
            'Форма обратной связи',
            'Базовая SEO-оптимизация',
            'Подключение аналитики',
            'Обучение работе с сайтом'
        ],
        timeline: '7-14 дней'
    },
    telegram: {
        id: 'telegram',
        icon: 'fa-telegram',
        title: 'Telegram-боты',
        description: 'Создание умных ботов для автоматизации продаж, консультаций и взаимодействия с клиентами.',
        fullDescription: 'Разрабатываем Telegram-ботов любой сложности — от простых чат-ботов до полноценных CRM-систем с интеграцией платежей и баз данных. Автоматизируйте обработку заявок, консультации, рассылки и многое другое.',
        price: 'от 15 000 ₽',
        priceDetails: 'Включены: разработка бота, настройка, тестирование, базовое обучение.',
        support: 'Техническая поддержка 14 дней бесплатно. Дальнейшее обслуживание — от 4 000 ₽/мес.',
        features: [
            'Индивидуальный функционал',
            'Интеграция с внешними сервисами',
            'Система платежей',
            'Админ-панель',
            'Автоматические рассылки',
            'Аналитика и статистика'
        ],
        timeline: 'до 10 дней'
    },
    logo: {
        id: 'logo',
        icon: 'fa-pen-fancy',
        title: 'Логотипы и брендинг',
        description: 'Разработка уникальных логотипов, фирменного стиля и айдентики, которые выделят ваш бренд.',
        fullDescription: 'Создаём запоминающиеся логотипы и полноценный фирменный стиль, который отражает ценности вашего бренда. Разрабатываем айдентику для печатной продукции, соцсетей, сайтов и мерча.',
        price: 'от 4 999 ₽',
        priceDetails: 'Включены: 3 концепции, 3 правки, финальные файлы во всех форматах.',
        support: 'Правки в течение 14 дней после сдачи проекта.',
        features: [
            'Анализ конкурентов',
            '3 варианта концепции',
            '3 раунда правок',
            'Фирменный стиль',
            'Гайдлайн',
            'Все форматы файлов'
        ],
        timeline: 'до 5 дней'
    },
    smm: {
        id: 'smm',
        icon: 'fa-share-alt',
        title: 'SMM-маркетинг',
        description: 'Комплексное продвижение в социальных сетях: контент, таргет, работа с аудиторией и аналитика.',
        fullDescription: 'Стратегия, контент-план, визуалы, таргетированная реклама и работа с аудиторией — мы создаём систему, которая приносит реальных клиентов из соцсетей. Работаем с ВКонтакте, Telegram, Instagram* и другими платформами.',
        price: 'от 10 000 ₽/мес',
        priceDetails: 'Включены: стратегия, контент-план, визуалы, таргет, аналитика, отчёты.',
        support: 'Личный менеджер, еженедельные отчёты, поддержка 24/7.',
        features: [
            'Разработка стратегии',
            'Контент-план и визуалы',
            'Таргетированная реклама',
            'Работа с аудиторией',
            'Аналитика и отчёты',
            'Копирайтинг'
        ],
        timeline: 'Постоянное ведение'
    },
    uiux: {
        id: 'uiux',
        icon: 'fa-paint-brush',
        title: 'UI/UX Дизайн',
        description: 'Создание удобных и красивых интерфейсов для сайтов, приложений и любых цифровых продуктов.',
        fullDescription: 'Проектируем интуитивно понятные и эстетичные интерфейсы. Проводим анализ пользовательского опыта, создаём прототипы и дизайн-макеты, которые делают продукт удобным и конкурентоспособным.',
        price: 'от 4 999 ₽',
        priceDetails: 'Включены: анализ, прототипирование, дизайн-макет, адаптация под разные экраны.',
        support: 'Бесплатные правки в течение 10 дней после утверждения макета.',
        features: [
            'UX-анализ',
            'Прототипирование',
            'Дизайн-макет',
            'Адаптация под устройства',
            'Дизайн-система',
            'Взаимодействие с разработчиками'
        ],
        timeline: '7-14 дней'
    },
    consulting: {
        id: 'consulting',
        icon: 'fa-rocket',
        title: 'IT-консалтинг',
        description: 'Помощь в выборе цифровых решений, аудит и стратегия развития вашего бизнеса онлайн.',
        fullDescription: 'Проводим аудит вашего бизнеса, анализируем текущие цифровые процессы и предлагаем стратегию развития. Помогаем выбрать оптимальные IT-решения для автоматизации, роста эффективности и масштабирования.',
        price: 'от 10 000 ₽',
        priceDetails: 'Включены: аудит, стратегия, roadmap, консультации.',
        support: 'Поддержка реализации стратегии в течение 1 месяца.',
        features: [
            'Аудит цифровых процессов',
            'Анализ конкурентов',
            'Стратегия развития',
            'Roadmap внедрения',
            'Выбор IT-решений',
            'Консультации'
        ],
        timeline: '14-21 день'
    }
};

// ============================================================
// ЗАГРУЗКА ДАННЫХ НА СТРАНИЦЕ УСЛУГИ
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    // Получаем параметр id из URL
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id');
    
    const contentDiv = document.getElementById('serviceContent');
    const loader = document.getElementById('serviceLoader');
    
    // Если id нет или услуга не найдена
    if (!serviceId || !servicesData[serviceId]) {
        contentDiv.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #ff8a8a;"></i>
                <h2 style="margin-top: 20px; color: #ff8a8a;">Услуга не найдена</h2>
                <p style="color: #b8ccff; margin-top: 10px;">Пожалуйста, вернитесь на главную страницу и выберите услугу.</p>
                <a href="index.html#services" class="btn-primary" style="margin-top: 20px;">Вернуться к услугам</a>
            </div>
        `;
        return;
    }
    
    const service = servicesData[serviceId];
    
    // Формируем список особенностей
    const featuresList = service.features.map(f => 
        `<li><i class="fas fa-check" style="color: #00D4FF; margin-right: 10px;"></i> ${f}</li>`
    ).join('');
    
    // Заполняем контент
    contentDiv.innerHTML = `
        <div class="service-detail-content">
            <div class="service-header" style="display: flex; align-items: center; gap: 20px; margin-bottom: 30px; flex-wrap: wrap;">
                <i class="fas ${service.icon}" style="font-size: 4rem; color: #00D4FF; background: rgba(0, 212, 255, 0.1); padding: 20px; border-radius: 20px;"></i>
                <div>
                    <h1 style="font-family: 'Orbitron', sans-serif; font-size: 2.4rem; background: linear-gradient(135deg, #00D4FF, #B026FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                        ${service.title}
                    </h1>
                    <p style="color: #b8ccff; font-size: 1.1rem; margin-top: 8px;">${service.description}</p>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 30px;">
                <div style="background: rgba(10, 14, 39, 0.4); padding: 24px; border-radius: 20px; border: 1px solid rgba(42, 92, 255, 0.15);">
                    <h3 style="color: #00D4FF; font-family: 'Orbitron', sans-serif; font-size: 1.1rem; margin-bottom: 12px;">
                        <i class="fas fa-info-circle"></i> О услуге
                    </h3>
                    <p style="color: #c6d6ff; line-height: 1.7;">${service.fullDescription}</p>
                </div>
                
                <div style="background: rgba(10, 14, 39, 0.4); padding: 24px; border-radius: 20px; border: 1px solid rgba(42, 92, 255, 0.15);">
                    <h3 style="color: #00D4FF; font-family: 'Orbitron', sans-serif; font-size: 1.1rem; margin-bottom: 12px;">
                        <i class="fas fa-check-circle"></i> Что входит
                    </h3>
                    <ul style="list-style: none; color: #c6d6ff; line-height: 2;">
                        ${featuresList}
                    </ul>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-top: 30px;">
                <div style="background: rgba(0, 212, 255, 0.05); padding: 24px; border-radius: 16px; border: 1px solid rgba(0, 212, 255, 0.15); text-align: center;">
                    <i class="fas fa-tag" style="font-size: 2rem; color: #00D4FF; margin-bottom: 10px;"></i>
                    <h4 style="color: #b8ccff; font-size: 0.9rem;">Стоимость</h4>
                    <p style="font-size: 1.6rem; font-weight: 700; color: #fff; margin-top: 5px;">${service.price}</p>
                    <p style="color: #6a7fb5; font-size: 0.8rem; margin-top: 5px;">${service.priceDetails}</p>
                </div>
                
                <div style="background: rgba(176, 38, 255, 0.05); padding: 24px; border-radius: 16px; border: 1px solid rgba(176, 38, 255, 0.15); text-align: center;">
                    <i class="fas fa-headset" style="font-size: 2rem; color: #B026FF; margin-bottom: 10px;"></i>
                    <h4 style="color: #b8ccff; font-size: 0.9rem;">Поддержка</h4>
                    <p style="font-size: 1rem; font-weight: 500; color: #fff; margin-top: 5px;">${service.support}</p>
                </div>
                
                <div style="background: rgba(255, 215, 0, 0.05); padding: 24px; border-radius: 16px; border: 1px solid rgba(255, 215, 0, 0.15); text-align: center;">
                    <i class="fas fa-clock" style="font-size: 2rem; color: #ffd700; margin-bottom: 10px;"></i>
                    <h4 style="color: #b8ccff; font-size: 0.9rem;">Срок</h4>
                    <p style="font-size: 1.4rem; font-weight: 700; color: #fff; margin-top: 5px;">${service.timeline}</p>
                </div>
            </div>
            
            <!-- ===== НОВЫЙ БЛОК: СВЯЗАТЬСЯ С НАМИ ===== -->
            <div style="margin-top: 40px; padding-top: 30px; border-top: 1px solid rgba(42, 92, 255, 0.15);">
                <h3 style="font-family: 'Orbitron', sans-serif; font-size: 1.4rem; text-align: center; margin-bottom: 20px; background: linear-gradient(135deg, #00D4FF, #B026FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                    <i class="fas fa-comments"></i> Связаться с нами
                </h3>
                <p style="text-align: center; color: #b8ccff; margin-bottom: 24px;">Мы всегда на связи! Выберите удобный способ:</p>
                
                <div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: center;">
                    <!-- Telegram -->
                    <a href="https://t.me/nebulateam36" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 12px; background: rgba(10, 14, 39, 0.6); backdrop-filter: blur(4px); padding: 14px 28px; border-radius: 60px; border: 1px solid rgba(42, 92, 255, 0.2); font-weight: 500; transition: 0.3s ease; color: #d0ddff; text-decoration: none;">
                        <i class="fab fa-telegram-plane" style="font-size: 1.6rem; color: #26A5E4;"></i>
                        Telegram
                    </a>
                    
                    <!-- ВКонтакте -->
                    <a href="https://vk.ru/club239678865" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 12px; background: rgba(10, 14, 39, 0.6); backdrop-filter: blur(4px); padding: 14px 28px; border-radius: 60px; border: 1px solid rgba(42, 92, 255, 0.2); font-weight: 500; transition: 0.3s ease; color: #d0ddff; text-decoration: none;">
                        <i class="fab fa-vk" style="font-size: 1.6rem; color: #4C75A3;"></i>
                        ВКонтакте
                    </a>
                    
                    <!-- Телефон -->
                    <a href="tel:+79050441713" style="display: inline-flex; align-items: center; gap: 12px; background: rgba(10, 14, 39, 0.6); backdrop-filter: blur(4px); padding: 14px 28px; border-radius: 60px; border: 1px solid rgba(42, 92, 255, 0.2); font-weight: 500; transition: 0.3s ease; color: #d0ddff; text-decoration: none;">
                        <i class="fas fa-phone-alt" style="font-size: 1.6rem; color: #4CAF50;"></i>
                        +7 (905) 044-17-13
                    </a>
                    
                    <!-- Email -->
                    <a href="mailto:nebulateam36@gmail.com" style="display: inline-flex; align-items: center; gap: 12px; background: rgba(10, 14, 39, 0.6); backdrop-filter: blur(4px); padding: 14px 28px; border-radius: 60px; border: 1px solid rgba(42, 92, 255, 0.2); font-weight: 500; transition: 0.3s ease; color: #d0ddff; text-decoration: none;">
                        <i class="fas fa-envelope" style="font-size: 1.6rem; color: #FF6B6B;"></i>
                        nebulateam36@gmail.com
                    </a>
                </div>
                
                <div style="text-align: center; margin-top: 24px;">
                    <a href="index.html#services" style="display: inline-flex; align-items: center; gap: 8px; color: #6a7fb5; font-weight: 500; text-decoration: none; transition: 0.3s ease;">
                        <i class="fas fa-arrow-left"></i> Все услуги
                    </a>
                </div>
            </div>
        </div>
    `;
});