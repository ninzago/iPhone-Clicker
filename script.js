(function() {
    console.log('🚀 iPhone Clicker — с анимацией сжатия телефона');

    // ----- МОДЕЛИ iPhone -----
    const models = [
        { name: 'iPhone 6', image: 'images/iphone6.jpg' },
        { name: 'iPhone 7', image: 'images/iphone7.jpg' },
        { name: 'iPhone 8', image: 'images/iphone8.jpg' },
        { name: 'iPhone X', image: 'images/iphoneX.jpg' },
        { name: 'iPhone XR', image: 'images/iphoneXR.jpg' },
        { name: 'iPhone 11', image: 'images/iphone11.jpg' },
        { name: 'iPhone 12', image: 'images/iphone12.jpg' },
        { name: 'iPhone 13', image: 'images/iphone13.jpg' },
        { name: 'iPhone 14', image: 'images/iphone14.jpg' },
        { name: 'iPhone 15', image: 'images/iphone15.jpg' },
        { name: 'iPhone 16e', image: 'images/iphone16e.jpg' },
        { name: 'iPhone 16', image: 'images/iphone16.jpg' },
        { name: 'iPhone 17 Pro', image: 'images/iphone17 pro.jpg' }
    ];

    // ПОРОГИ ДЛЯ УРОВНЕЙ
    const thresholds = [0];
    const baseRequirement = 500;
    for (let i = 1; i < models.length; i++) {
        thresholds.push(baseRequirement * Math.pow(2, i - 1));
    }

    // УЛУЧШЕНИЯ (полный список)
    const upgrades = [
        { name: 'Множитель I', basePrice: 100, price: 100, type: 'multiplier', unlocked: true, count: 0, maxCount: 2, emoji: '⚡' },
        { name: 'Генератор I', basePrice: 100, price: 100, type: 'auto', unlocked: true, count: 0, maxCount: 2, emoji: '🤖' },
        { name: 'Усилитель I', basePrice: 125, price: 125, type: 'clickAdd', unlocked: false, count: 0, maxCount: 2, emoji: '💪' },
        { name: 'Генератор II', basePrice: 150, price: 150, type: 'auto', unlocked: false, count: 0, maxCount: 2, emoji: '⚙️' },
        { name: 'Множитель II', basePrice: 250, price: 250, type: 'multiplier', unlocked: false, count: 0, maxCount: 2, emoji: '🔥' },
        { name: 'Усилитель II', basePrice: 300, price: 300, type: 'clickAdd', unlocked: false, count: 0, maxCount: 2, emoji: '✨' },
        { name: 'Генератор III', basePrice: 400, price: 400, type: 'auto', unlocked: false, count: 0, maxCount: 2, emoji: '🚀' },
        { name: 'Множитель III', basePrice: 500, price: 500, type: 'multiplier', unlocked: false, count: 0, maxCount: 2, emoji: '💎' },
        { name: 'Усилитель III', basePrice: 550, price: 550, type: 'clickAdd', unlocked: false, count: 0, maxCount: 2, emoji: '👑' },
        { name: 'Генератор IV', basePrice: 750, price: 750, type: 'auto', unlocked: false, count: 0, maxCount: 2, emoji: '🏭' },
        { name: 'Множитель IV', basePrice: 1000, price: 1000, type: 'multiplier', unlocked: false, count: 0, maxCount: 2, emoji: '⭐' }
    ];

    let balance = 0;
    let clickMultiplier = 1;
    let clickAdd = 0;
    let autoIncome = 0;
    let currentLevel = 1;
    let gameCompletedNotified = false;
    let ysdk = null;
    let isGameplayActive = false;

    // DOM элементы
    const balanceDisplay = document.getElementById('balanceDisplay');
    const autoIncomeDisplaySpan = document.getElementById('autoIncomeDisplay');
    const autoRateDisplay = document.getElementById('autoRateDisplay');
    const currentModelNameSpan = document.getElementById('currentModelName');
    const currentModelImg = document.getElementById('currentModelImage');
    const levelDisplaySpan = document.getElementById('levelDisplay');
    const nextModelSpan = document.getElementById('nextModelDisplay');
    const clickerArea = document.getElementById('clickerMain');
    const notificationDiv = document.getElementById('completionNotification');
    const closeNotifBtn = document.getElementById('closeNotification');
    const shopListContainer = document.getElementById('shopList');

    // ----- SDK и gameplay уведомления -----
    function notifyGameplayStart() {
        if (!isGameplayActive && ysdk && ysdk.features && ysdk.features.GameplayAPI) {
            try { ysdk.features.GameplayAPI.start(); isGameplayActive = true; console.log('✅ Gameplay started'); } catch(e) { console.warn(e); }
        }
    }

    function notifyGameplayStop() {
        if (isGameplayActive && ysdk && ysdk.features && ysdk.features.GameplayAPI) {
            try { ysdk.features.GameplayAPI.stop(); isGameplayActive = false; console.log('✅ Gameplay stopped'); } catch(e) { console.warn(e); }
        }
    }

    // ---- Локализация ----
    function getLanguageFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        if (langParam && ['ru', 'en', 'tr', 'kk'].includes(langParam)) return langParam;
        const htmlLang = document.documentElement.lang;
        if (htmlLang && ['ru', 'en', 'tr', 'kk'].includes(htmlLang)) return htmlLang;
        return 'ru';
    }

    function applyLanguage(lang) {
        const gameTitle = document.getElementById('gameTitle');
        const balanceLabel = document.getElementById('balanceLabel');
        const autoLabel = document.getElementById('autoLabel');
        const footerNote = document.getElementById('footerNote');
        if (lang === 'en') {
            if (gameTitle) gameTitle.textContent = 'IPHONE CLICKER';
            if (balanceLabel) balanceLabel.textContent = 'B';
            if (autoLabel) autoLabel.innerHTML = '⏱ Auto <span id="autoIncomeDisplay">0</span>';
            if (footerNote) footerNote.textContent = 'tap iPhone — save for new level';
        } else if (lang === 'tr') {
            if (gameTitle) gameTitle.textContent = 'IPHONE TIKLAYICI';
            if (balanceLabel) balanceLabel.textContent = 'B';
            if (autoLabel) autoLabel.innerHTML = '⏱ Oto <span id="autoIncomeDisplay">0</span>';
            if (footerNote) footerNote.textContent = 'iPhone\'a tıkla — yeni seviye için biriktir';
        } else {
            if (gameTitle) gameTitle.textContent = 'IPHONE CLICKER';
            if (balanceLabel) balanceLabel.textContent = 'Б';
            if (autoLabel) autoLabel.innerHTML = '⏱ Б. Сек. <span id="autoIncomeDisplay">0</span>';
            if (footerNote) footerNote.textContent = 'кликай по айфону — копи на новый уровень';
        }
        const updatedAutoSpan = document.getElementById('autoIncomeDisplay');
        if (updatedAutoSpan) updatedAutoSpan.innerText = autoIncome;
    }

    // ---- СОХРАНЕНИЕ / ЗАГРУЗКА ----
    function saveGameProgress() {
        const gameData = {
            balance, clickMultiplier, clickAdd, autoIncome, currentLevel,
            upgrades: upgrades.map(up => ({ count: up.count, price: up.price, unlocked: up.unlocked }))
        };
        try {
            localStorage.setItem('iphoneClicker_save', JSON.stringify(gameData));
        } catch(e) { console.error('localStorage error:', e); }
        if (ysdk) {
            try { ysdk.savePlayerData(gameData).catch(e => console.error('Yandex save error:', e)); } catch(e) {}
        }
    }

    function applyLoadedData(data) {
        if (!data) return;
        balance = data.balance || 0;
        clickMultiplier = data.clickMultiplier || 1;
        clickAdd = data.clickAdd || 0;
        autoIncome = data.autoIncome || 0;
        currentLevel = data.currentLevel || 1;
        if (data.upgrades && Array.isArray(data.upgrades)) {
            data.upgrades.forEach((savedUp, index) => {
                if (upgrades[index]) {
                    upgrades[index].count = savedUp.count || 0;
                    upgrades[index].price = savedUp.price || upgrades[index].basePrice;
                    upgrades[index].unlocked = savedUp.unlocked || (index < 2);
                }
            });
        }
        updateUI();
    }

    function setDefaultProgress() {
        balance = 0;
        clickMultiplier = 1;
        clickAdd = 0;
        autoIncome = 0;
        currentLevel = 1;
        upgrades.forEach((up, index) => {
            up.count = 0;
            up.price = up.basePrice;
            up.unlocked = index < 2;
        });
        updateUI();
    }

    function loadGameProgress() {
        const savedData = localStorage.getItem('iphoneClicker_save');
        if (savedData) {
            try { applyLoadedData(JSON.parse(savedData)); console.log('📀 Loaded from localStorage'); } 
            catch(e) { console.error('Parse error', e); setDefaultProgress(); }
        } else { setDefaultProgress(); }
    }

    // ---- ОБНОВЛЕНИЕ ИНТЕРФЕЙСА (главное + боковое меню) ----
    function updateUI() {
        if (balanceDisplay) balanceDisplay.innerText = Math.floor(balance);
        if (autoIncomeDisplaySpan) autoIncomeDisplaySpan.innerText = autoIncome;
        if (autoRateDisplay) autoRateDisplay.innerText = autoIncome + '/сек';

        // Расчет нового уровня
        let newLevel = 1;
        for (let i = thresholds.length - 1; i >= 0; i--) {
            if (balance >= thresholds[i]) { newLevel = i + 1; break; }
        }
        newLevel = Math.min(newLevel, models.length);
        if (newLevel !== currentLevel) {
            currentLevel = newLevel;
            // Разблокировка улучшений по уровню (до currentLevel+1)
            for (let i = 0; i < upgrades.length; i++) {
                if (i < currentLevel + 1) upgrades[i].unlocked = true;
            }
            saveGameProgress();
        }

        // Проверка на завершение
        if (currentLevel >= models.length && !gameCompletedNotified) {
            if (notificationDiv) notificationDiv.classList.remove('hidden');
            notifyGameplayStop();
            gameCompletedNotified = true;
        }

        // Отображение текущей модели
        const modelIndex = Math.min(currentLevel - 1, models.length - 1);
        if (currentModelNameSpan) currentModelNameSpan.innerText = models[modelIndex].name;
        if (currentModelImg) currentModelImg.src = models[modelIndex].image;
        if (levelDisplaySpan) levelDisplaySpan.innerText = `Уровень ${currentLevel}`;
        if (nextModelSpan) {
            if (currentLevel < models.length) nextModelSpan.innerText = `→ ${models[currentLevel].name}`;
            else nextModelSpan.innerText = `⭐ MAX`;
        }

        // Отрисовка бокового меню улучшений
        renderSidebarUpgrades();
    }

    // ---- ОТРИСОВКА БОКОВОГО МЕНЮ (вертикальные карточки) ----
    function renderSidebarUpgrades() {
        if (!shopListContainer) return;
        let html = '';
        for (let i = 0; i < upgrades.length; i++) {
            const up = upgrades[i];
            if (!up.unlocked) {
                html += `
                    <div class="upgrade-card locked" data-index="${i}">
                        <div class="upgrade-info">
                            <div class="upgrade-name">???</div>
                            <div class="upgrade-badge">🔒 заблокировано</div>
                        </div>
                    </div>
                `;
            } else if (up.count >= up.maxCount) {
                html += `
                    <div class="upgrade-card maxed" data-index="${i}">
                        <div class="upgrade-info">
                            <div class="upgrade-name">${up.emoji} ${up.name}</div>
                            <div class="upgrade-badge">✅ MAX</div>
                        </div>
                        <div class="max-label">MAX</div>
                    </div>
                `;
            } else {
                html += `
                    <div class="upgrade-card" data-index="${i}">
                        <div class="upgrade-info">
                            <div class="upgrade-name">${up.emoji} ${up.name}</div>
                            <div class="upgrade-badge">уровень ${up.count}/${up.maxCount}</div>
                        </div>
                        <div class="upgrade-price">${Math.floor(up.price)}</div>
                    </div>
                `;
            }
        }
        shopListContainer.innerHTML = html;

        // Навешиваем обработчики на доступные карточки (не locked и не maxed)
        document.querySelectorAll('.upgrade-card:not(.locked):not(.maxed)').forEach(card => {
            card.addEventListener('click', (e) => {
                e.stopPropagation();
                const idx = card.dataset.index;
                if (idx !== undefined) buyUpgrade(parseInt(idx));
            });
        });
    }

    // ---- ПОКУПКА УЛУЧШЕНИЯ ----
    function buyUpgrade(index) {
        const up = upgrades[index];
        if (!up || !up.unlocked) return;
        if (up.count >= up.maxCount) return;
        if (balance < up.price) return;

        balance -= up.price;
        up.count++;

        switch (up.type) {
            case 'multiplier':
                clickMultiplier *= 2;
                break;
            case 'auto':
                autoIncome += 1;
                break;
            case 'clickAdd':
                clickAdd += 1;
                break;
        }

        // Увеличение цены
        up.price = Math.floor(up.price * 2.2);
        saveGameProgress();
        updateUI();
    }

    // ---- ОБРАБОТЧИК КЛИКА ПО АЙФОНУ (с анимацией сжатия) ----
    function handleClick(e) {
        e.preventDefault();
        const gain = (1 + clickAdd) * clickMultiplier;
        balance += gain;
        
        if (window.clickTimeout) clearTimeout(window.clickTimeout);
        window.clickTimeout = setTimeout(() => { saveGameProgress(); }, 500);
        
        updateUI();

        // Анимация сжатия телефона (без пропадания)
        if (currentModelImg) {
            currentModelImg.style.transform = 'scale(0.9)';
            setTimeout(() => {
                if (currentModelImg) currentModelImg.style.transform = 'scale(1)';
            }, 80);
        }
    }

    // ---- АВТОДОХОД ----
    setInterval(() => {
        if (autoIncome > 0) {
            balance += autoIncome;
            saveGameProgress();
            updateUI();
        }
    }, 1000);

    // ---- ВИДИМОСТЬ ----
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            notifyGameplayStop();
            saveGameProgress();
        } else {
            notifyGameplayStart();
        }
    });

    // ---- ЗАПРЕТ КОНТЕКСТНОГО МЕНЮ И ВЫДЕЛЕНИЯ ----
    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
    document.addEventListener('contextmenu', preventDefaults);
    document.addEventListener('selectstart', preventDefaults);

    // ---- СОБЫТИЯ ----
    if (clickerArea) {
        clickerArea.addEventListener('click', handleClick);
        clickerArea.addEventListener('touchstart', (e) => {
            e.preventDefault();
            handleClick(e);
        }, { passive: false });
    }

    if (closeNotifBtn) {
        closeNotifBtn.addEventListener('click', () => {
            if (notificationDiv) notificationDiv.classList.add('hidden');
            notifyGameplayStart();
        });
    }
    if (notificationDiv) {
        notificationDiv.addEventListener('click', (e) => {
            if (e.target === notificationDiv) {
                notificationDiv.classList.add('hidden');
                notifyGameplayStart();
            }
        });
    }

    window.addEventListener('beforeunload', () => {
        notifyGameplayStop();
        saveGameProgress();
    });

    // ---- ИНИЦИАЛИЗАЦИЯ ----
    async function initGame() {
        console.log('🟢 initGame()');
        const language = getLanguageFromUrl();
        applyLanguage(language);
        loadGameProgress();
        
        // Яндекс SDK
        try {
            if (typeof YaGames !== 'undefined') {
                window.ysdk = await YaGames.init();
                console.log('✅ Yandex SDK initialized');
                if (ysdk.features && ysdk.features.LoadingAPI) ysdk.features.LoadingAPI.ready();
                if (ysdk.features && ysdk.features.GameplayAPI) {
                    ysdk.features.GameplayAPI.start();
                    isGameplayActive = true;
                }
            } else {
                console.log('⚠️ YaGames not available');
            }
        } catch(e) { console.warn('SDK error:', e); }
    }

    initGame();
})();