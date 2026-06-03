(function() {
    console.log('🚀 iPhone Clicker — МИРЫ + ЗАДАНИЯ + ЗОЛОТЫЕ БУСТЫ');

    // ----- МИРЫ с явными путями к фотографиям -----
    const worlds = [
        { 
            id: 0, name: 'Мир Xiaomi', prefix: '🤖', bonus: 1, requiredForNext: 30000, completed: false,
            phones: [
                { name: 'Mi 5', image: 'images/xiaomi/mi5.jpg' },
                { name: 'Mi 6', image: 'images/xiaomi/mi6.jpg' },
                { name: 'Mi 8', image: 'images/xiaomi/mi8.jpg' },
                { name: 'Mi 9', image: 'images/xiaomi/mi9.jpg' },
                { name: 'Mi 10', image: 'images/xiaomi/mi10.jpg' },
                { name: 'Mi 11', image: 'images/xiaomi/mi11.jpg' },
                { name: 'Poco F3', image: 'images/xiaomi/poco_f3.jpg' },
                { name: 'Xiaomi 12', image: 'images/xiaomi/xiaomi_12.jpg' },
                { name: 'Xiaomi 13', image: 'images/xiaomi/xiaomi_13.jpg' },
                { name: 'Xiaomi 14', image: 'images/xiaomi/xiaomi_14.jpg' },
                { name: 'Redmi Note 12', image: 'images/xiaomi/redmi_note_12.jpg' },
                { name: 'Xiaomi 14 Ultra', image: 'images/xiaomi/xiaomi_14_ultra.jpg' },
                { name: 'POCO X6 Pro', image: 'images/xiaomi/poco_x6_pro.jpg' }
            ]
        },
        { 
            id: 1, name: 'Мир Motorola', prefix: '🔊', bonus: 1.2, requiredForNext: 45000, completed: false,
            phones: [
                { name: 'Moto G', image: 'images/motorola/moto_g.jpg' },
                { name: 'Moto X', image: 'images/motorola/moto_x.jpg' },
                { name: 'Moto G4', image: 'images/motorola/moto_g4.jpg' },
                { name: 'Moto Z', image: 'images/motorola/moto_z.jpg' },
                { name: 'Moto G6', image: 'images/motorola/moto_g6.jpg' },
                { name: 'Moto Z2', image: 'images/motorola/moto_z2.jpg' },
                { name: 'Moto G8', image: 'images/motorola/moto_g8.jpg' },
                { name: 'Moto Edge', image: 'images/motorola/moto_edge.jpg' },
                { name: 'Moto G100', image: 'images/motorola/moto_g100.jpg' },
                { name: 'Moto Edge 30', image: 'images/motorola/moto_edge_30.jpg' },
                { name: 'Moto Razr', image: 'images/motorola/moto_razr.jpg' },
                { name: 'Moto Edge 40', image: 'images/motorola/moto_edge_40.jpg' },
                { name: 'Moto ThinkPhone', image: 'images/motorola/moto_thinkphone.jpg' }
            ]
        },
        { 
            id: 2, name: 'Мир Nokia', prefix: '📞', bonus: 1.4, requiredForNext: 60000, completed: false,
            phones: [
                { name: 'Lumia 520', image: 'images/nokia/lumia_520.jpg' },
                { name: 'Lumia 630', image: 'images/nokia/lumia_630.jpg' },
                { name: 'Lumia 735', image: 'images/nokia/lumia_735.jpg' },
                { name: 'Lumia 830', image: 'images/nokia/lumia_830.jpg' },
                { name: 'Lumia 930', image: 'images/nokia/lumia_930.jpg' },
                { name: 'Lumia 950', image: 'images/nokia/lumia_950.jpg' },
                { name: 'Nokia 6', image: 'images/nokia/nokia_6.jpg' },
                { name: 'Nokia 8', image: 'images/nokia/nokia_8.jpg' },
                { name: 'Nokia 9', image: 'images/nokia/nokia_9.jpg' },
                { name: 'Nokia X20', image: 'images/nokia/nokia_x20.jpg' },
                { name: 'Nokia G50', image: 'images/nokia/nokia_g50.jpg' },
                { name: 'Nokia X30', image: 'images/nokia/nokia_x30.jpg' },
                { name: 'Nokia Magic Max', image: 'images/nokia/nokia_magic_max.jpg' }
            ]
        },
        { 
            id: 3, name: 'Мир OnePlus', prefix: '⚡', bonus: 1.6, requiredForNext: 80000, completed: false,
            phones: [
                { name: 'OnePlus One', image: 'images/oneplus/oneplus_one.jpg' },
                { name: 'OnePlus 2', image: 'images/oneplus/oneplus_2.jpg' },
                { name: 'OnePlus 3', image: 'images/oneplus/oneplus_3.jpg' },
                { name: 'OnePlus 5', image: 'images/oneplus/oneplus_5.jpg' },
                { name: 'OnePlus 6', image: 'images/oneplus/oneplus_6.jpg' },
                { name: 'OnePlus 7 Pro', image: 'images/oneplus/oneplus_7_pro.jpg' },
                { name: 'OnePlus 8', image: 'images/oneplus/oneplus_8.jpg' },
                { name: 'OnePlus 9', image: 'images/oneplus/oneplus_9.jpg' },
                { name: 'OnePlus 10 Pro', image: 'images/oneplus/oneplus_10_pro.jpg' },
                { name: 'OnePlus 11', image: 'images/oneplus/oneplus_11.jpg' },
                { name: 'OnePlus 12', image: 'images/oneplus/oneplus_12.jpg' },
                { name: 'OnePlus Open', image: 'images/oneplus/oneplus_open.jpg' },
                { name: 'OnePlus 13', image: 'images/oneplus/oneplus_13.jpg' }
            ]
        },
        { 
            id: 4, name: 'Мир Google', prefix: '🔵', bonus: 1.8, requiredForNext: 100000, completed: false,
            phones: [
                { name: 'Pixel', image: 'images/google/pixel.jpg' },
                { name: 'Pixel 2', image: 'images/google/pixel_2.jpg' },
                { name: 'Pixel 3', image: 'images/google/pixel_3.jpg' },
                { name: 'Pixel 4', image: 'images/google/pixel_4.jpg' },
                { name: 'Pixel 5', image: 'images/google/pixel_5.jpg' },
                { name: 'Pixel 6', image: 'images/google/pixel_6.jpg' },
                { name: 'Pixel 7', image: 'images/google/pixel_7.jpg' },
                { name: 'Pixel 8', image: 'images/google/pixel_8.jpg' },
                { name: 'Pixel 9', image: 'images/google/pixel_9.jpg' },
                { name: 'Pixel Fold', image: 'images/google/pixel_fold.jpg' },
                { name: 'Pixel 9 Pro', image: 'images/google/pixel_9_pro.jpg' },
                { name: 'Pixel 10', image: 'images/google/pixel_10.jpg' },
                { name: 'Pixel 11 Pro', image: 'images/google/pixel_11_pro.jpg' }
            ]
        },
        { 
            id: 5, name: 'Мир iPhone', prefix: '🍎', bonus: 2.0, requiredForNext: 130000, completed: false,
            phones: [
                { name: 'iPhone 6', image: 'images/iphone/iphone_6.jpg' },
                { name: 'iPhone 7', image: 'images/iphone/iphone_7.jpg' },
                { name: 'iPhone 8', image: 'images/iphone/iphone_8.jpg' },
                { name: 'iPhone X', image: 'images/iphone/iphone_x.jpg' },
                { name: 'iPhone XR', image: 'images/iphone/iphone_xr.jpg' },
                { name: 'iPhone 11', image: 'images/iphone/iphone_11.jpg' },
                { name: 'iPhone 12', image: 'images/iphone/iphone_12.jpg' },
                { name: 'iPhone 13', image: 'images/iphone/iphone_13.jpg' },
                { name: 'iPhone 14', image: 'images/iphone/iphone_14.jpg' },
                { name: 'iPhone 15', image: 'images/iphone/iphone_15.jpg' },
                { name: 'iPhone 16e', image: 'images/iphone/iphone_16e.jpg' },
                { name: 'iPhone 16', image: 'images/iphone/iphone_16.jpg' },
                { name: 'iPhone 17 Pro', image: 'images/iphone/iphone_17_pro.jpg' }
            ]
        },
        { 
            id: 6, name: 'Мир Samsung', prefix: '⭐', bonus: 2.3, requiredForNext: 160000, completed: false,
            phones: [
                { name: 'Galaxy S5', image: 'images/samsung/galaxy_s5.jpg' },
                { name: 'Galaxy S6', image: 'images/samsung/galaxy_s6.jpg' },
                { name: 'Galaxy S7', image: 'images/samsung/galaxy_s7.jpg' },
                { name: 'Galaxy S8', image: 'images/samsung/galaxy_s8.jpg' },
                { name: 'Galaxy S9', image: 'images/samsung/galaxy_s9.jpg' },
                { name: 'Galaxy S10', image: 'images/samsung/galaxy_s10.jpg' },
                { name: 'Galaxy S20', image: 'images/samsung/galaxy_s20.jpg' },
                { name: 'Galaxy S21', image: 'images/samsung/galaxy_s21.jpg' },
                { name: 'Galaxy S22', image: 'images/samsung/galaxy_s22.jpg' },
                { name: 'Galaxy S23', image: 'images/samsung/galaxy_s23.jpg' },
                { name: 'Galaxy S24', image: 'images/samsung/galaxy_s24.jpg' },
                { name: 'Galaxy Z Fold', image: 'images/samsung/galaxy_z_fold.jpg' },
                { name: 'Galaxy Z Flip', image: 'images/samsung/galaxy_z_flip.jpg' }
            ]
        },
        { 
            id: 7, name: 'Мир Sony', prefix: '🎮', bonus: 2.6, requiredForNext: 200000, completed: false,
            phones: [
                { name: 'Xperia Z', image: 'images/sony/xperia_z.jpg' },
                { name: 'Xperia Z2', image: 'images/sony/xperia_z2.jpg' },
                { name: 'Xperia Z5', image: 'images/sony/xperia_z5.jpg' },
                { name: 'Xperia XZ', image: 'images/sony/xperia_xz.jpg' },
                { name: 'Xperia 1', image: 'images/sony/xperia_1.jpg' },
                { name: 'Xperia 5', image: 'images/sony/xperia_5.jpg' },
                { name: 'Xperia 1 II', image: 'images/sony/xperia_1_ii.jpg' },
                { name: 'Xperia 5 III', image: 'images/sony/xperia_5_iii.jpg' },
                { name: 'Xperia 1 IV', image: 'images/sony/xperia_1_iv.jpg' },
                { name: 'Xperia 5 IV', image: 'images/sony/xperia_5_iv.jpg' },
                { name: 'Xperia 1 V', image: 'images/sony/xperia_1_v.jpg' },
                { name: 'Xperia Pro-I', image: 'images/sony/xperia_pro_i.jpg' },
                { name: 'Xperia 1 VI', image: 'images/sony/xperia_1_vi.jpg' }
            ]
        },
        { 
            id: 8, name: 'Мир Huawei', prefix: '🌙', bonus: 3.0, requiredForNext: 250000, completed: false,
            phones: [
                { name: 'P8', image: 'images/huawei/p8.jpg' },
                { name: 'P9', image: 'images/huawei/p9.jpg' },
                { name: 'P10', image: 'images/huawei/p10.jpg' },
                { name: 'P20 Pro', image: 'images/huawei/p20_pro.jpg' },
                { name: 'P30 Pro', image: 'images/huawei/p30_pro.jpg' },
                { name: 'Mate 20', image: 'images/huawei/mate_20.jpg' },
                { name: 'P40 Pro', image: 'images/huawei/p40_pro.jpg' },
                { name: 'Mate 40 Pro', image: 'images/huawei/mate_40_pro.jpg' },
                { name: 'P50 Pro', image: 'images/huawei/p50_pro.jpg' },
                { name: 'Mate 50 Pro', image: 'images/huawei/mate_50_pro.jpg' },
                { name: 'P60 Pro', image: 'images/huawei/p60_pro.jpg' },
                { name: 'Mate 60 Pro', image: 'images/huawei/mate_60_pro.jpg' },
                { name: 'Pura 70 Ultra', image: 'images/huawei/pura_70_ultra.jpg' }
            ]
        },
        { 
            id: 9, name: 'Мир Legend', prefix: '👑', bonus: 4.0, requiredForNext: 500000, completed: false,
            phones: [
                { name: 'Legend One', image: 'images/legend/legend_one.jpg' },
                { name: 'Legend Two', image: 'images/legend/legend_two.jpg' },
                { name: 'Legend Three', image: 'images/legend/legend_three.jpg' },
                { name: 'Legend Four', image: 'images/legend/legend_four.jpg' },
                { name: 'Legend Five', image: 'images/legend/legend_five.jpg' },
                { name: 'Legend Six', image: 'images/legend/legend_six.jpg' },
                { name: 'Legend Seven', image: 'images/legend/legend_seven.jpg' },
                { name: 'Legend Eight', image: 'images/legend/legend_eight.jpg' },
                { name: 'Legend Nine', image: 'images/legend/legend_nine.jpg' },
                { name: 'Legend Ten', image: 'images/legend/legend_ten.jpg' },
                { name: 'Legend Eleven', image: 'images/legend/legend_eleven.jpg' },
                { name: 'Legend Twelve', image: 'images/legend/legend_twelve.jpg' },
                { name: 'Legend Ultimate', image: 'images/legend/legend_ultimate.jpg' }
            ]
        }
    ];

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
    function getPhone() { return getWorld().phones[currentPhoneIndex]; }
    function getPhoneName() { return getPhone().name; }
    function getPhoneImage() { return getPhone().image; }
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
        const phone = getPhone();
        
        if (modelNameSpan) modelNameSpan.innerHTML = `${world.prefix} ${phone.name} <span style="font-size:0.7rem; background:#ff9f0a30; padding:2px 8px; border-radius:20px;">🏆 ${world.name}</span>`;
        if (modelImg) {
            modelImg.src = phone.image;
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
            nextSpan.innerHTML = `→ ${next.name}<br><span style="font-size:0.7rem">📊 ${Math.floor(progress)}%</span>`;
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