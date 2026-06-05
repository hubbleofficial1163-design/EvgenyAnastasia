

(function() {

        // Нулевая секция и музыка
    const coverSection = document.getElementById('coverSection');
    const openBtn = document.getElementById('openInvitationBtn');
    const bgMusic = document.getElementById('bgMusic');
    
    if (openBtn && coverSection) {
        openBtn.addEventListener('click', function() {
            // Скрываем нулевую секцию
            coverSection.classList.add('hide');
            
            // Запускаем музыку
            if (bgMusic) {
                bgMusic.play().catch(function(error) {
                    console.warn('Автовоспроизведение заблокировано браузером:', error);
                });
            }
        });
    }
    // Функция для корректной работы 100vh на мобильных устройствах
    function setCorrectVH() {
        let heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.style.height = `${window.innerHeight}px`;
        }
    }
    
    // Функция для анимации элементов при появлении в поле зрения (при скролле)
    function observeSections() {
        const sections = document.querySelectorAll('.guests-section, .timer-section, .program-section, .location-section, .map-section, .details-section, .dresscode-section, .rsvp-section, .farewell-section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        
        sections.forEach(section => {
            observer.observe(section);
        });
    }
    
    // Вызываем при загрузке
    window.addEventListener('DOMContentLoaded', function() {
        setCorrectVH();
        
        // Анимация hero секции через 200мс
        const heroContainer = document.querySelector('.hero-container');
        if (heroContainer) {
            setTimeout(() => {
                heroContainer.classList.add('visible');
            }, 200);
        }
        
        // Запускаем наблюдатель для анимации секций при скролле
        observeSections();
    });
    
    // При изменении размера окна
    window.addEventListener('resize', function() {
        setCorrectVH();
    });
    
    // Проверка наличия изображения
    window.addEventListener('load', function() {
        const img = document.querySelector('.hero-image img');
        if (img) {
            const testImage = new Image();
            testImage.onerror = function() {
                console.warn('⚠️ Изображение 1.jpg не найдено. Пожалуйста, добавьте файл 1.jpg в ту же папку');
            };
            testImage.src = img.src;
        }
    });
})();

(function() {
    // Функция для корректной работы 100vh на мобильных устройствах
    function setCorrectVH() {
        let heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.style.height = `${window.innerHeight}px`;
        }
    }
    
    // Функция для обновления таймера
    function updateTimer() {
        const weddingDate = new Date(2026, 6, 11, 0, 0, 0); // 11 июля 2026
        const now = new Date();
        const diff = weddingDate - now;
        
        if (diff <= 0) {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    // Функция для анимации элементов при появлении в поле зрения
    function observeSections() {
        const sections = document.querySelectorAll('.guests-section, .timer-section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        
        sections.forEach(section => {
            observer.observe(section);
        });
    }
    
    // Вызываем при загрузке
    window.addEventListener('DOMContentLoaded', function() {
        setCorrectVH();
        
        // Анимация hero секции
        const heroContainer = document.querySelector('.hero-container');
        if (heroContainer) {
            setTimeout(() => {
                heroContainer.classList.add('visible');
            }, 200);
        }
        
        // Запускаем таймер
        updateTimer();
        setInterval(updateTimer, 1000);
        
        // Запускаем наблюдатель для анимации секций
        observeSections();
    });
    
    // При изменении размера окна
    window.addEventListener('resize', function() {
        setCorrectVH();
    });
    
    // Проверка наличия изображения
    window.addEventListener('load', function() {
        const img = document.querySelector('.hero-image img');
        if (img) {
            const testImage = new Image();
            testImage.onerror = function() {
                console.warn('⚠️ Изображение 1.jpg не найдено');
            };
            testImage.src = img.src;
        }
    });
})();