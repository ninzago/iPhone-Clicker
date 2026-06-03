(function() {
    console.log('🚀 iPhone Clicker — МИРЫ + ЗАДАНИЯ + ЗОЛОТЫЕ БУСТЫ');

    // ----- МИРЫ (отсортированы от дешёвых к дорогим по реальным ценам) -----
    const worlds = [
        { 
            id: 0, name: 'Мир Xiaomi', prefix: '🤖', bonus: 1, requiredForNext: 30000, completed: false,
            brand: 'xiaomi',
            phones: ['Mi 5', 'Mi 6', 'Mi 8', 'Mi 9', 'Mi 10', 'Mi 11', 'Poco F3', 'Xiaomi 12', 'Xiaomi 13', 'Xiaomi 14', 'Redmi Note 12', 'Xiaomi 14 Ultra', 'POCO X6 Pro'] 
        },
        { 
            id: 1, name: 'Мир Motorola', prefix: '🔊', bonus: 1.2, requiredForNext: 45000, completed: false,
            brand: 'motorola',
            phones: ['Moto G', 'Moto X', 'Moto G4', 'Moto Z', 'Moto G6', 'Moto Z2', 'Moto G8', 'Moto Edge', 'Moto G100', 'Moto Edge 30', 'Moto Razr', 'Moto Edge 40', 'Moto ThinkPhone'] 
        },
        { 
            id: 2, name: 'Мир Nokia', prefix: '📞', bonus: 1.4, requiredForNext: 60000, completed: false,
            brand: 'nokia',
            phones: ['Lumia 520', 'Lumia 630', 'Lumia 735', 'Lumia 830', 'Lumia 930', 'Lumia 950', 'Nokia 6', 'Nokia 8', 'Nokia 9', 'Nokia X20', 'Nokia G50', 'Nokia X30', 'Nokia Magic Max'] 
        },
        { 
            id: 3, name: 'Мир OnePlus', prefix: '⚡', bonus: 1.6, requiredForNext: 80000, completed: false,
            brand: 'oneplus',
            phones: ['OnePlus One', 'OnePlus 2', 'OnePlus 3', 'OnePlus 5', 'OnePlus 6', 'OnePlus 7 Pro', 'OnePlus 8', 'OnePlus 9', 'OnePlus 10 Pro', 'OnePlus 11', 'OnePlus 12', 'OnePlus Open', 'OnePlus 13'] 
        },
        { 
            id: 4, name: 'Мир Google', prefix: '🔵', bonus: 1.8, requiredForNext: 100000, completed: false,
            brand: 'google',
            phones: ['Pixel', 'Pixel 2', 'Pixel 3', 'Pixel 4', 'Pixel 5', 'Pixel 6', 'Pixel 7', 'Pixel 8', 'Pixel 9', 'Pixel Fold', 'Pixel 9 Pro', 'Pixel 10', 'Pixel 11 Pro'] 
        },
        { 
            id: 5, name: 'Мир iPhone', prefix: '🍎', bonus: 2.0, requiredForNext: 130000, completed: false,
            brand: 'iphone',
            phones: ['iPhone 6', 'iPhone 7', 'iPhone 8', 'iPhone X', 'iPhone XR', 'iPhone 11', 'iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 15', 'iPhone 16e', 'iPhone 16', 'iPhone 17 Pro'] 
        },
        { 
            id: 6, name: 'Мир Samsung', prefix: '⭐', bonus: 2.3, requiredForNext: 160000, completed: false,
            brand: 'samsung',
            phones: ['Galaxy S5', 'Galaxy S6', 'Galaxy S7', 'Galaxy S8', 'Galaxy S9', 'Galaxy S10', 'Galaxy S20', 'Galaxy S21', 'Galaxy S22', 'Galaxy S23', 'Galaxy S24', 'Galaxy Z Fold', 'Galaxy Z Flip'] 
        },
        { 
            id: 7, name: 'Мир Sony', prefix: '🎮', bonus: 2.6, requiredForNext: 200000, completed: false,
            brand: 'sony',
            phones: ['Xperia Z', 'Xperia Z2', 'Xperia Z5', 'Xperia XZ', 'Xperia 1', 'Xperia 5', 'Xperia 1 II', 'Xperia 5 III', 'Xperia 1 IV', 'Xperia 5 IV', 'Xperia 1 V', 'Xperia Pro-I', 'Xperia 1 VI'] 
        },
        { 
            id: 8, name: 'Мир Huawei', prefix: '🌙', bonus: 3.0, requiredForNext: 250000, completed: false,
            brand: 'huawei',
            phones: ['P8', 'P9', 'P10', 'P20 Pro', 'P30 Pro', 'Mate 20', 'P40 Pro', 'Mate 40 Pro', 'P50 Pro', 'Mate 50 Pro', 'P60 Pro', 'Mate 60 Pro', 'Pura 70 Ultra'] 
        },
        { 
            id: 9, name: 'Мир Legend', prefix: '👑', bonus: 4.0, requiredForNext: 500000, completed: false,
            brand: 'legend',
            phones: ['Legend One', 'Legend Two', 'Legend Three', 'Legend Four', 'Legend Five', 'Legend Six', 'Legend Seven', 'Legend Eight', 'Legend Nine', 'Legend Ten', 'Legend Eleven', 'Legend Twelve', 'Legend Ultimate'] 
        }
    ];

    // Функция для преобразования названия телефона в имя файла
    function getPhoneFileName(phoneName, brand) {
        // Специальные случаи для разных брендов
        const specialCases = {
            // iPhone
            'iPhone 6': 'iphone_6.jpg',
            'iPhone 7': 'iphone_7.jpg',
            'iPhone 8': 'iphone_8.jpg',
            'iPhone X': 'iphone_x.jpg',
            'iPhone XR': 'iphone_xr.jpg',
            'iPhone 11': 'iphone_11.jpg',
            'iPhone 12': 'iphone_12.jpg',
            'iPhone 13': 'iphone_13.jpg',
            'iPhone 14': 'iphone_14.jpg',
            'iPhone 15': 'iphone_15.jpg',
            'iPhone 16e': 'iphone_16e.jpg',
            'iPhone 16': 'iphone_16.jpg',
            'iPhone 17 Pro': 'iphone_17_pro.jpg',
            
            // Samsung
            'Galaxy S5': 'galaxy_s5.jpg',
            'Galaxy S6': 'galaxy_s6.jpg',
            'Galaxy S7': 'galaxy_s7.jpg',
            'Galaxy S8': 'galaxy_s8.jpg',
            'Galaxy S9': 'galaxy_s9.jpg',
            'Galaxy S10': 'galaxy_s10.jpg',
            'Galaxy S20': 'galaxy_s20.jpg',
            'Galaxy S21': 'galaxy_s21.jpg',
            'Galaxy S22': 'galaxy_s22.jpg',
            'Galaxy S23': 'galaxy_s23.jpg',
            'Galaxy S24': 'galaxy_s24.jpg',
            'Galaxy Z Fold': 'galaxy_z_fold.jpg',
            'Galaxy Z Flip': 'galaxy_z_flip.jpg',
            
            // Xiaomi
            'Mi 5': 'mi_5.jpg',
            'Mi 6': 'mi_6.jpg',
            'Mi 8': 'mi_8.jpg',
            'Mi 9': 'mi_9.jpg',
            'Mi 10': 'mi_10.jpg',
            'Mi 11': 'mi_11.jpg',
            'Poco F3': 'poco_f3.jpg',
            'Xiaomi 12': 'xiaomi_12.jpg',
            'Xiaomi 13': 'xiaomi_13.jpg',
            'Xiaomi 14': 'xiaomi_14.jpg',
            'Redmi Note 12': 'redmi_note_12.jpg',
            'Xiaomi 14 Ultra': 'xiaomi_14_ultra.jpg',
            'POCO X6 Pro': 'poco_x6_pro.jpg',
            
            // Google
            'Pixel': 'pixel.jpg',
            'Pixel 2': 'pixel_2.jpg',
            'Pixel 3': 'pixel_3.jpg',
            'Pixel 4': 'pixel_4.jpg',
            'Pixel 5': 'pixel_5.jpg',
            'Pixel 6': 'pixel_6.jpg',
            'Pixel 7': 'pixel_7.jpg',
            'Pixel 8': 'pixel_8.jpg',
            'Pixel 9': 'pixel_9.jpg',
            'Pixel Fold': 'pixel_fold.jpg',
            'Pixel 9 Pro': 'pixel_9_pro.jpg',
            'Pixel 10': 'pixel_10.jpg',
            'Pixel 11 Pro': 'pixel_11_pro.jpg',
            
            // OnePlus
            'OnePlus One': 'oneplus_one.jpg',
            'OnePlus 2': 'oneplus_2.jpg',
            'OnePlus 3': 'oneplus_3.jpg',
            'OnePlus 5': 'oneplus_5.jpg',
            'OnePlus 6': 'oneplus_6.jpg',
            'OnePlus 7 Pro': 'oneplus_7_pro.jpg',
            'OnePlus 8': 'oneplus_8.jpg',
            'OnePlus 9': 'oneplus_9.jpg',
            'OnePlus 10 Pro': 'oneplus_10_pro.jpg',
            'OnePlus 11': 'oneplus_11.jpg',
            'OnePlus 12': 'oneplus_12.jpg',
            'OnePlus Open': 'oneplus_open.jpg',
            'OnePlus 13': 'oneplus_13.jpg',
            
            // Motorola
            'Moto G': 'moto_g.jpg',
            'Moto X': 'moto_x.jpg',
            'Moto G4': 'moto_g4.jpg',
            'Moto Z': 'moto_z.jpg',
            'Moto G6': 'moto_g6.jpg',
            'Moto Z2': 'moto_z2.jpg',
            'Moto G8': 'moto_g8.jpg',
            'Moto Edge': 'moto_edge.jpg',
            'Moto G100': 'moto_g100.jpg',
            'Moto Edge 30': 'moto_edge_30.jpg',
            'Moto Razr': 'moto_razr.jpg',
            'Moto Edge 40': 'moto_edge_40.jpg',
            'Moto ThinkPhone': 'moto_thinkphone.jpg',
            
            // Nokia
            'Lumia 520': 'lumia_520.jpg',
            'Lumia 630': 'lumia_630.jpg',
            'Lumia 735': 'lumia_735.jpg',
            'Lumia 830': 'lumia_830.jpg',
            'Lumia 930': 'lumia_930.jpg',
            'Lumia 950': 'lumia_950.jpg',
            'Nokia 6': 'nokia_6.jpg',
            'Nokia 8': 'nokia_8.jpg',
            'Nokia 9': 'nokia_9.jpg',
            'Nokia X20': 'nokia_x20.jpg',
            'Nokia G50': 'nokia_g50.jpg',
            'Nokia X30': 'nokia_x30.jpg',
            'Nokia Magic Max': 'nokia_magic_max.jpg',
            
            // Sony
            'Xperia Z': 'xperia_z.jpg',
            'Xperia Z2': 'xperia_z2.jpg',
            'Xperia Z5': 'xperia_z5.jpg',
            'Xperia XZ': 'xperia_xz.jpg',
            'Xperia 1': 'xperia_1.jpg',
            'Xperia 5': 'xperia_5.jpg',
            'Xperia 1 II': 'xperia_1_ii.jpg',
            'Xperia 5 III': 'xperia_5_iii.jpg',
            'Xperia 1 IV': 'xperia_1_iv.jpg',
            'Xperia 5 IV': 'xperia_5_iv.jpg',
            'Xperia 1 V': 'xperia_1_v.jpg',
            'Xperia Pro-I': 'xperia_pro_i.jpg',
            'Xperia 1 VI': 'xperia_1_vi.jpg',
            
            // Huawei
            'P8': 'p8.jpg',
            'P9': 'p9.jpg',
            'P10': 'p10.jpg',
            'P20 Pro': 'p20_pro.jpg',
            'P30 Pro': 'p30_pro.jpg',
            'Mate 20': 'mate_20.jpg',
            'P40 Pro': 'p40_pro.jpg',
            'Mate 40 Pro': 'mate_40_pro.jpg',
            'P50 Pro': 'p50_pro.jpg',
            'Mate 50 Pro': 'mate_50_pro.jpg',
            'P60 Pro': 'p60_pro.jpg',
            'Mate 60 Pro': 'mate_60_pro.jpg',
            'Pura 70 Ultra': 'pura_70_ultra.jpg',
            
            // Legend
            'Legend One': 'legend_one.jpg',
            'Legend Two': 'legend_two.jpg',
            'Legend Three': 'legend_three.jpg',
            'Legend Four': 'legend_four.jpg',
            'Legend Five': 'legend_five.jpg',
            'Legend Six': 'legend_six.jpg',
            'Legend Seven': 'legend_seven.jpg',
            'Legend Eight': 'legend_eight.jpg',
            'Legend Nine': 'legend_nine.jpg',
            'Legend Ten': 'legend_ten.jpg',
            'Legend Eleven': 'legend_eleven.jpg',
            'Legend Twelve': 'legend_twelve.jpg',
            'Legend Ultimate': 'legend_ultimate.jpg'
        };
        
        // Проверяем специальные случаи
        if (specialCases[phoneName]) {
            return specialCases[phoneName];
        }
        
        // Если нет в specialCases, генерируем автоматически
        return phoneName.toLowerCase().replace(/ /g, '_').replace(/-/g, '_') + '.jpg';
    }

    // Функция для получения пути к изображению телефона
    function getPhoneImagePath(phoneName, brand) {
        const fileName = getPhoneFileName(phoneName, brand);
        return `images/${fileName}`;
    }

    // ЗОЛОТЫЕ БУСТЫ
    let goldUpgrades = [
        { name: '💎 Удвоитель клика', price: 50, type: 'clickBoost', effect: '×2 к силе клика', count: 0, maxCount: 10, emoji: '💎', unlocked: true },
        { name: '💰 Золотая лихорадка', price: 100, type: 'goldIncome', effect: '+1 золото/сек', count: 0, maxCount: 10, emoji: '💰', unlocked: true },
        { name: '⚡ Ускоритель', price: 200, type: 'autoBoost', effect: '+1 балл/сек', count: 0, maxCount: 10, emoji: '⚡', unlocked: true },
        { name: '🪙 Алхимик', price: 500, type: 'goldOnClick', effect: 'Клики дают +1 золото', count: 0, maxCount: 5, emoji: '🪙', unlocked: false },
        { name: '👑 Множитель', price: 1000, type: 'globalMultiplier', effect: 'x1.5 ко всем доходам', count: 0, maxCount: 5, emoji: '👑', unlocked: false }
    ];

    // ЗАДАНИЯ
    let quests = [
        { id: 0, name: '👆 Кликер', desc: 'Сделать 100 кликов', target: 100, progress: 0, reward: 25, completed: false, type: 'click' },
        { id: 1, name: '📈 Заработок', desc: 'Накопить 5000 баллов', target: 5000, progress: 0, reward: 100, completed: false, type: 'balance' },
        { id: 2, name: '⭐ Прогресс', desc: 'Открыть 5 телефонов', target: 5, progress: 0, reward: 250, completed: false, type: 'phone' },
        { id: 3, name: '🏆 Мастер мира', desc: 'Накопить 30000 баллов', target: 30000, progress: 0, reward: 50, completed: false, type: 'balance' },
        { id: 4, name: '⚡ Спринтер', desc: 'Сделать 500 кликов', target: 500, progress: 0, reward: 50, completed: false, type: 'click' },
        { id: 5, name: '🌍 Перерождение', desc: 'Перейти в новый мир', target: 1, progress: 0, reward: 250, completed: false, type: 'prestige' }
    ];

    // Переменные игры
    let balance = 0;
    let gold = 0;
    let clickPower = 1;
    let autoIncome = 0;
    let goldPerSecond = 0;
    let clickBoost = 1;
    let globalMultiplier = 1;
    let goldOnClick = 0;
    let currentWorld = 0;
    let currentPhoneIndex = 0;
    let totalClicks = 0;
    let gameCompleted = false;
    let questTimer = null;
    let timeUntilReset = 300;
    let ysdk = null;

    // DOM элементы
    const balanceDisplay = document.getElementById('balanceDisplay');
    const goldDisplay = document.getElementById('goldDisplay');
    const modelNameSpan = document.getElementById('currentModelName');
    const modelImg = document.getElementById('currentModelImage');
    const levelSpan = document.getElementById('levelDisplay');
    const nextSpan = document.getElementById('nextModelDisplay');
    const clickArea = document.getElementById('clickerMain');
    const notifyDiv = document.getElementById('completionNotification');
    const closeBtn = document.getElementById('closeNotification');
    const goldShopList = document.getElementById('goldShopList');
    const questsList = document.getElementById('questsList');
    const questsTimerSpan = document.getElementById('questsTimer');
    const worldsList = document.getElementById('worldsList');
    const worldBonusSpan = document.getElementById('worldBonus');
    const prestigeBtn = document.getElementById('prestigeBtn');

    function getWorld() { return worlds[currentWorld]; }
    function getPhoneName() { return getWorld().phones[currentPhoneIndex]; }
    function getNextPhone() { return currentPhoneIndex + 1 < getWorld().phones.length ? getWorld().phones[currentPhoneIndex + 1] : null; }

    function recalcPhone() {
        let newIndex = 0;
        let threshold = 0;
        for (let i = 0; i < getWorld().phones.length; i++) {
            threshold = 500 * Math.pow(1.5, i);
            if (balance >= threshold) newIndex = i;
            else break;
        }
        if (newIndex !== currentPhoneIndex) {
            currentPhoneIndex = newIndex;
            saveGame();
            updatePhoneQuest();
            updateUI();
        }
    }

    function canPrestige() {
        return balance >= getWorld().requiredForNext && currentWorld < worlds.length - 1;
    }

    function doPrestige() {
        if (!canPrestige()) return;
        updateQuestProgress('prestige', 1);
        
        worlds[currentWorld].completed = true;
        currentWorld++;
        
        balance = 0;
        currentPhoneIndex = 0;
        
        saveGame();
        updateUI();
        renderWorldsList();
        
        alert(`✨ ПЕРЕРОЖДЕНИЕ! ✨\nВы вошли в ${getWorld().name} ${getWorld().prefix}\nБонус к кликам: x${getWorld().bonus}`);
    }

    function switchToWorld(worldId) {
        if (worldId === currentWorld) return;
        if (worldId > currentWorld && !worlds[worldId-1]?.completed) {
            alert(`❌ Сначала завершите мир "${worlds[worldId-1]?.name}"!`);
            return;
        }
        if (worldId < currentWorld || worlds[worldId]?.completed) {
            currentWorld = worldId;
            balance = 0;
            currentPhoneIndex = 0;
            saveGame();
            updateUI();
            renderWorldsList();
        }
    }

    function buyGoldUpgrade(index) {
        const up = goldUpgrades[index];
        if (!up.unlocked) return;
        if (up.count >= up.maxCount) return;
        if (gold < up.price) return;
        
        gold -= up.price;
        up.count++;
        updateQuestProgress('goldUpgrade', 1);
        
        switch(up.type) {
            case 'clickBoost': clickBoost *= 2; break;
            case 'goldIncome': goldPerSecond += 1; break;
            case 'autoBoost': autoIncome += 1; break;
            case 'goldOnClick': goldOnClick += 1; break;
            case 'globalMultiplier': globalMultiplier *= 1.5; break;
        }
        up.price = Math.floor(up.price * 1.5);
        if (index === 3 && up.count >= 1) goldUpgrades[4].unlocked = true;
        
        saveGame();
        updateUI();
    }

    function updateQuestProgress(type, amount) {
        let changed = false;
        for (let q of quests) {
            if (!q.completed && q.type === type) {
                q.progress = Math.min(q.target, q.progress + amount);
                if (q.progress >= q.target && !q.completed) {
                    q.completed = true;
                    gold += q.reward;
                    changed = true;
                    console.log(`✅ Задание выполнено: ${q.name} +${q.reward} золота`);
                }
                changed = true;
            }
        }
        if (changed) { saveGame(); updateUI(); }
    }

    function updateBalanceQuest() {
        for (let q of quests) {
            if (!q.completed && q.type === 'balance') {
                let newProgress = Math.min(q.target, balance);
                if (newProgress !== q.progress) {
                    q.progress = newProgress;
                    if (q.progress >= q.target) {
                        q.completed = true;
                        gold += q.reward;
                        console.log(`✅ Задание выполнено: ${q.name} +${q.reward} золота`);
                    }
                    saveGame();
                    updateUI();
                }
            }
        }
    }

    function updatePhoneQuest() {
        for (let q of quests) {
            if (!q.completed && q.type === 'phone') {
                let phoneLevel = currentPhoneIndex + 1;
                if (phoneLevel >= q.target && !q.completed) {
                    q.completed = true;
                    gold += q.reward;
                    console.log(`✅ Задание выполнено: ${q.name} +${q.reward} золота`);
                    saveGame();
                    updateUI();
                }
            }
        }
    }

    function resetQuests() {
        quests = [
            { id: 0, name: '👆 Кликер', desc: 'Сделать 100 кликов', target: 100, progress: Math.min(100, totalClicks), reward: 25, completed: totalClicks >= 100, type: 'click' },
            { id: 1, name: '📈 Заработок', desc: 'Накопить 5000 баллов', target: 5000, progress: Math.min(5000, balance), reward: 100, completed: balance >= 5000, type: 'balance' },
            { id: 2, name: '⭐ Прогресс', desc: 'Открыть 5 телефонов', target: 5, progress: Math.min(5, currentPhoneIndex + 1), reward: 250, completed: (currentPhoneIndex + 1) >= 5, type: 'phone' },
            { id: 3, name: '🏆 Мастер мира', desc: 'Накопить 30000 баллов', target: 30000, progress: Math.min(30000, balance), reward: 50, completed: balance >= 30000, type: 'balance' },
            { id: 4, name: '⚡ Спринтер', desc: 'Сделать 500 кликов', target: 500, progress: Math.min(500, totalClicks), reward: 50, completed: totalClicks >= 500, type: 'click' },
            { id: 5, name: '🌍 Перерождение', desc: 'Перейти в новый мир', target: 1, progress: 0, reward: 250, completed: false, type: 'prestige' }
        ];
        timeUntilReset = 300;
        saveGame();
        updateUI();
    }

    function startQuestTimer() {
        if (questTimer) clearInterval(questTimer);
        questTimer = setInterval(() => {
            if (timeUntilReset > 0) {
                timeUntilReset--;
                if (questsTimerSpan) {
                    let mins = Math.floor(timeUntilReset / 60);
                    let secs = timeUntilReset % 60;
                    questsTimerSpan.textContent = `🔄 Новые задания через: ${mins}:${secs.toString().padStart(2,'0')}`;
                }
                if (timeUntilReset === 0) resetQuests();
            }
        }, 1000);
    }

    function handleClick(e) {
        e.preventDefault();
        let gain = (clickPower + goldOnClick) * getWorld().bonus * globalMultiplier * clickBoost;
        balance += gain;
        if (goldOnClick > 0) gold += goldOnClick;
        totalClicks++;
        
        updateQuestProgress('click', 1);
        updateBalanceQuest();
        
        saveGame();
        updateUI();
        
        if (modelImg) {
            modelImg.style.transform = 'scale(0.9)';
            setTimeout(() => { if(modelImg) modelImg.style.transform = 'scale(1)'; }, 80);
        }
    }

    function saveGame() {
        const data = { balance, gold, clickPower, autoIncome, goldPerSecond, clickBoost, globalMultiplier, goldOnClick, currentWorld, currentPhoneIndex, totalClicks, quests, timeUntilReset, worlds: worlds.map(w => ({ completed: w.completed })), goldUpgrades: goldUpgrades.map(g => ({ count: g.count, price: g.price, unlocked: g.unlocked })) };
        localStorage.setItem('iphoneClicker_save', JSON.stringify(data));
        if (ysdk) ysdk.savePlayerData(data).catch(e=>console.log);
    }

    function loadGame() {
        const saved = localStorage.getItem('iphoneClicker_save');
        if (saved) {
            try {
                const d = JSON.parse(saved);
                balance = d.balance || 0;
                gold = d.gold || 0;
                clickPower = d.clickPower || 1;
                autoIncome = d.autoIncome || 0;
                goldPerSecond = d.goldPerSecond || 0;
                clickBoost = d.clickBoost || 1;
                globalMultiplier = d.globalMultiplier || 1;
                goldOnClick = d.goldOnClick || 0;
                currentWorld = d.currentWorld || 0;
                currentPhoneIndex = d.currentPhoneIndex || 0;
                totalClicks = d.totalClicks || 0;
                timeUntilReset = d.timeUntilReset || 300;
                if (d.quests) quests = d.quests;
                if (d.worlds) d.worlds.forEach((w, i) => { if(worlds[i]) worlds[i].completed = w.completed; });
                if (d.goldUpgrades) d.goldUpgrades.forEach((s,i) => { if(goldUpgrades[i]) { goldUpgrades[i].count = s.count; goldUpgrades[i].price = s.price; goldUpgrades[i].unlocked = s.unlocked; } });
            } catch(e) { console.log(e); }
        }
        updateUI();
        renderWorldsList();
    }

    function renderWorldsList() {
        if (!worldsList) return;
        let html = '';
        for (let i = 0; i < worlds.length; i++) {
            const w = worlds[i];
            const isActive = i === currentWorld;
            const isCompleted = w.completed;
            html += `<div class="world-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" data-world="${i}">
                        <div><span class="world-prefix">${w.prefix}</span> <span class="world-name">${w.name}</span></div>
                        <div class="world-status">${isCompleted ? '✅ Пройден' : (isActive ? '📍 Текущий' : '🔒 Закрыт')}</div>
                    </div>`;
        }
        worldsList.innerHTML = html;
        
        document.querySelectorAll('.world-item').forEach(el => {
            el.addEventListener('click', () => switchToWorld(parseInt(el.dataset.world)));
        });
        
        if (worldBonusSpan) worldBonusSpan.innerText = getWorld().bonus;
        if (prestigeBtn) {
            if (canPrestige()) {
                prestigeBtn.style.display = 'block';
                prestigeBtn.onclick = () => doPrestige();
            } else {
                prestigeBtn.style.display = 'none';
            }
        }
    }

    function updateUI() {
        if (balanceDisplay) balanceDisplay.innerText = Math.floor(balance);
        if (goldDisplay) goldDisplay.innerText = Math.floor(gold);
        
        recalcPhone();
        
        const world = getWorld();
        const phoneName = getPhoneName();
        const phoneImagePath = getPhoneImagePath(phoneName, world.brand);
        
        if (modelNameSpan) modelNameSpan.innerHTML = `${world.prefix} ${phoneName} <span style="font-size:0.7rem; background:#ff9f0a30; padding:2px 8px; border-radius:20px;">🏆 ${world.name}</span>`;
        if (modelImg) {
            modelImg.src = phoneImagePath;
            // Добавляем обработчик ошибки загрузки изображения
            modelImg.onerror = function() {
                this.src = 'images/default_phone.jpg';
                this.onerror = null;
            };
        }
        if (levelSpan) levelSpan.innerHTML = `${world.name} ${world.prefix} (${currentWorld+1}/${worlds.length}) ✨ x${world.bonus} | 💪 x${globalMultiplier.toFixed(1)} | 💎 x${clickBoost}`;
        
        const next = getNextPhone();
        if (next && nextSpan) {
            let prevThreshold = 500 * Math.pow(1.5, currentPhoneIndex);
            let nextThreshold = 500 * Math.pow(1.5, currentPhoneIndex + 1);
            let progress = ((balance - prevThreshold) / (nextThreshold - prevThreshold)) * 100;
            progress = Math.min(100, Math.max(0, progress));
            nextSpan.innerHTML = `→ ${next}<br><span style="font-size:0.7rem">📊 ${Math.floor(progress)}%</span>`;
            nextSpan.style.cursor = 'default';
            nextSpan.onclick = null;
        } else if (canPrestige() && nextSpan) {
            let progress = (balance / world.requiredForNext) * 100;
            nextSpan.innerHTML = `✨ ПЕРЕРОДИТЬСЯ ✨<br><span style="font-size:0.7rem">📊 ${Math.floor(progress)}%</span>`;
            nextSpan.style.cursor = 'pointer';
            nextSpan.onclick = () => doPrestige();
        } else if (currentWorld === worlds.length-1 && currentPhoneIndex === world.phones.length-1 && !gameCompleted && nextSpan) {
            nextSpan.innerHTML = `🏆 АБСОЛЮТ 🏆`;
            if(notifyDiv) notifyDiv.classList.remove('hidden');
            gameCompleted = true;
        } else if (nextSpan) {
            nextSpan.innerHTML = `⭐ ДО ПЕРЕРОЖДЕНИЯ<br><span style="font-size:0.7rem">📊 ${Math.min(100, Math.floor((balance/world.requiredForNext)*100))}%</span>`;
        }
        
        renderGoldShop();
        renderQuests();
        renderWorldsList();
    }

    function renderGoldShop() {
        if (!goldShopList) return;
        let html = '';
        for(let i=0; i<goldUpgrades.length; i++) {
            const u = goldUpgrades[i];
            if(!u.unlocked) html += `<div class="upgrade-card locked"><div class="upgrade-info"><div class="upgrade-name">???</div><div class="upgrade-badge">🔒</div></div></div>`;
            else if(u.count >= u.maxCount) html += `<div class="upgrade-card maxed"><div class="upgrade-info"><div class="upgrade-name">${u.emoji} ${u.name}</div><div class="upgrade-badge">✅ MAX</div></div><div class="max-label">MAX</div></div>`;
            else html += `<div class="upgrade-card" data-gold-index="${i}"><div class="upgrade-info"><div class="upgrade-name">${u.emoji} ${u.name}</div><div class="upgrade-badge">✨ ${u.effect}</div><div class="upgrade-badge">📈 ${u.count}/${u.maxCount}</div></div><div class="upgrade-price">💰 ${Math.floor(u.price)}</div></div>`;
        }
        goldShopList.innerHTML = html;
        document.querySelectorAll('#goldShopList .upgrade-card:not(.locked):not(.maxed)').forEach(card => {
            const idx = card.dataset.goldIndex;
            if(idx !== undefined) card.addEventListener('click', () => buyGoldUpgrade(parseInt(idx)));
        });
    }

    function renderQuests() {
        if (!questsList) return;
        let html = '';
        for(let q of quests) {
            let percent = (q.progress / q.target) * 100;
            html += `<div class="quest-item ${q.completed ? 'completed' : ''}">
                        <div class="quest-info">
                            <div class="quest-name">${q.name}</div>
                            <div class="quest-desc">${q.desc} (${q.progress}/${q.target})</div>
                            <div class="quest-progress-bar"><div class="quest-progress-fill" style="width:${percent}%"></div></div>
                        </div>
                        <div class="quest-reward">💰 +${q.reward}</div>
                        <button class="quest-btn" ${q.completed ? 'disabled' : ''}>${q.completed ? '✅' : '🏆'}</button>
                    </div>`;
        }
        questsList.innerHTML = html;
    }

    // Автодоходы
    setInterval(() => {
        if (autoIncome > 0) {
            balance += autoIncome * getWorld().bonus * globalMultiplier;
            updateBalanceQuest();
            saveGame();
            updateUI();
        }
    }, 1000);

    setInterval(() => {
        if (goldPerSecond > 0) {
            gold += goldPerSecond;
            saveGame();
            updateUI();
        }
    }, 1000);

    // Вкладки
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
        });
    });

    // SDK
    function callLoadingApiReady() {
        if (window.ysdk && window.ysdk.features && window.ysdk.features.LoadingAPI && !window._readyCalled) {
            try { window.ysdk.features.LoadingAPI.ready(); window._readyCalled = true; console.log('✅ LoadingAPI.ready()'); } catch(e) {}
        }
    }
    if (typeof YaGames !== 'undefined') {
        const checkInterval = setInterval(() => {
            if (window.ysdk && window.ysdk.features && window.ysdk.features.LoadingAPI && !window._readyCalled) {
                clearInterval(checkInterval); callLoadingApiReady();
            }
        }, 10);
        setTimeout(() => { if (!window._readyCalled && window.ysdk) callLoadingApiReady(); }, 2000);
    }

    // События
    if (clickArea) {
        clickArea.addEventListener('click', handleClick);
        clickArea.addEventListener('touchstart', (e) => { e.preventDefault(); handleClick(e); }, { passive: false });
    }
    if (closeBtn) closeBtn.addEventListener('click', () => { if(notifyDiv) notifyDiv.classList.add('hidden'); });
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('selectstart', (e) => e.preventDefault());

    // Инициализация
    function init() {
        loadGame();
        startQuestTimer();
        if (typeof YaGames !== 'undefined') {
            YaGames.init().then(sdk => { window.ysdk = sdk; ysdk = sdk; callLoadingApiReady(); if(sdk.features?.GameplayAPI) sdk.features.GameplayAPI.start(); }).catch(e=>console.log);
        }
    }
    init();
})();