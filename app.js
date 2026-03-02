// 应用状态
let currentLetterIndex = 0;
let currentCase = 'uppercase';
let isDrawing = false;
let canvas, ctx;
let showGuideLine = true;

// DOM 元素
const homePage = document.getElementById('home-page');
const learnPage = document.getElementById('learn-page');
const practicePage = document.getElementById('practice-page');
const alphabetGrid = document.getElementById('alphabet-grid');
const progressDots = document.getElementById('progress-dots');

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
    initHomePage();
    initEventListeners();
    initCanvas();
});

// 初始化首页 - 生成字母卡片
function initHomePage() {
    alphabetGrid.innerHTML = '';
    alphabetData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'letter-card';
        card.innerHTML = `
            <div class="card-letter">${item.letter}</div>
            <div class="card-lowercase">${item.lowercase}</div>
            <div class="card-word">${item.word.text}</div>
        `;
        card.addEventListener('click', () => {
            currentLetterIndex = index;
            showLearnPage();
        });
        alphabetGrid.appendChild(card);
    });
}

// 初始化事件监听
function initEventListeners() {
    // 返回按钮
    document.getElementById('back-btn').addEventListener('click', showHomePage);
    document.getElementById('practice-back-btn').addEventListener('click', showLearnPage);
    
    // 导航按钮
    document.getElementById('prev-btn').addEventListener('click', showPrevLetter);
    document.getElementById('next-btn').addEventListener('click', showNextLetter);
    
    // 书写练习按钮
    document.getElementById('practice-btn').addEventListener('click', showPracticePage);
    
    // 音频按钮
    document.getElementById('play-letter-audio').addEventListener('click', () => playLetterAudio('uppercase'));
    document.getElementById('play-letter-audio-lower').addEventListener('click', () => playLetterAudio('lowercase'));
    document.getElementById('play-word-audio').addEventListener('click', playWordAudio);
    
    // 书写练习页面标签
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCase = e.target.dataset.case;
            updateLetterGuide();
            clearCanvas();
        });
    });
    
    // 画布控制按钮
    document.getElementById('clear-canvas').addEventListener('click', clearCanvas);
    document.getElementById('show-guide').addEventListener('click', toggleGuide);
}

// 显示首页
function showHomePage() {
    homePage.classList.add('active');
    learnPage.classList.remove('active');
    practicePage.classList.remove('active');
}

// 显示学习页面
function showLearnPage() {
    homePage.classList.remove('active');
    learnPage.classList.add('active');
    practicePage.classList.remove('active');
    updateLearnPage();
}

// 显示书写练习页面
function showPracticePage() {
    homePage.classList.remove('active');
    learnPage.classList.remove('active');
    practicePage.classList.add('active');
    
    // 重置为大写标签
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('[data-case="uppercase"]').classList.add('active');
    currentCase = 'uppercase';
    
    setTimeout(() => {
        resizeCanvas();
        updateLetterGuide();
        clearCanvas();
    }, 100);
}

// 更新学习页面内容
function updateLearnPage() {
    const data = alphabetData[currentLetterIndex];
    
    // 更新字母显示
    document.getElementById('uppercase-letter').textContent = data.letter;
    document.getElementById('lowercase-letter').textContent = data.lowercase;
    
    // 更新单词区域
    document.getElementById('word-image').textContent = data.word.emoji;
    document.getElementById('word-text').textContent = data.word.text;
    document.getElementById('word-phonetic').textContent = data.word.phonetic;
    document.getElementById('word-meaning').textContent = data.word.meaning;
    
    // 更新进度点
    updateProgressDots();
    
    // 更新导航按钮状态
    document.getElementById('prev-btn').disabled = currentLetterIndex === 0;
    document.getElementById('next-btn').disabled = currentLetterIndex === alphabetData.length - 1;
}

// 更新进度点
function updateProgressDots() {
    progressDots.innerHTML = '';
    alphabetData.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'dot' + (index === currentLetterIndex ? ' active' : '');
        progressDots.appendChild(dot);
    });
}

// 显示上一个字母
function showPrevLetter() {
    if (currentLetterIndex > 0) {
        currentLetterIndex--;
        updateLearnPage();
    }
}

// 显示下一个字母
function showNextLetter() {
    if (currentLetterIndex < alphabetData.length - 1) {
        currentLetterIndex++;
        updateLearnPage();
    }
}

// 播放字母音频
function playLetterAudio(caseType) {
    const data = alphabetData[currentLetterIndex];
    const letter = caseType === 'uppercase' ? data.letter : data.lowercase;
    
    // 使用 Web Speech API
    speakText(letter);
}

// 播放单词音频
function playWordAudio() {
    const data = alphabetData[currentLetterIndex];
    speakText(data.word.text);
}

// 备用：使用在线 TTS 服务（当浏览器不支持时）
function speakWithOnlineTTS(text) {
    // 使用 Google TTS 服务作为备用
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    utterance.pitch = 1;
    
    // 尝试获取可用的语音
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(voice => voice.lang.includes('en'));
    if (englishVoice) {
        utterance.voice = englishVoice;
    }
    
    window.speechSynthesis.speak(utterance);
}

// 使用 Web Speech API 朗读文本
function speakText(text) {
    if (!('speechSynthesis' in window)) {
        showToast('您的浏览器不支持语音播放，请使用Chrome浏览器');
        return;
    }
    
    // 取消之前的语音
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    utterance.pitch = 1;
    
    // 错误处理
    utterance.onerror = (event) => {
        console.error('语音播放错误:', event.error);
        if (event.error === 'not-allowed') {
            showToast('请允许网页播放语音，或使用Chrome浏览器');
        } else if (event.error === 'network') {
            showToast('语音服务不可用，请检查网络');
        } else {
            showToast('语音播放失败，请尝试使用Chrome浏览器');
        }
    };
    
    // 某些浏览器需要延迟
    setTimeout(() => {
        window.speechSynthesis.speak(utterance);
    }, 50);
}

// 显示提示信息（替代 alert）
function showToast(message) {
    // 移除已有的 toast
    const existingToast = document.querySelector('.toast-message');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        font-size: 14px;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// ==================== 书写练习功能 ====================

// 初始化画布
function initCanvas() {
    canvas = document.getElementById('writing-canvas');
    ctx = canvas.getContext('2d');
    
    // 设置画布样式
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#2196F3';
    
    // 添加触摸和鼠标事件
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', stopDrawing);
    
    // 窗口大小改变时调整画布
    window.addEventListener('resize', () => {
        if (practicePage.classList.contains('active')) {
            resizeCanvas();
        }
    });
}

// 调整画布大小
function resizeCanvas() {
    const container = canvas.parentElement;
    const rect = container.getBoundingClientRect();
    
    // 保存当前内容
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.drawImage(canvas, 0, 0);
    
    // 设置新尺寸
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    // 恢复样式
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = Math.max(6, rect.width / 20);
    ctx.strokeStyle = '#2196F3';
    
    // 恢复内容（按比例缩放）
    if (tempCanvas.width > 0 && tempCanvas.height > 0) {
        ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
    }
}

// 开始绘制
function startDrawing(e) {
    isDrawing = true;
    const pos = getCanvasPosition(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
}

// 绘制
function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const pos = getCanvasPosition(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
}

// 停止绘制
function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();
}

// 处理触摸开始
function handleTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousedown', {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}

// 处理触摸移动
function handleTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousemove', {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}

// 获取画布位置
function getCanvasPosition(e) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

// 清除画布
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// 切换描红显示
function toggleGuide() {
    showGuideLine = !showGuideLine;
    updateLetterGuide();
}

// 更新字母描红
function updateLetterGuide() {
    const data = alphabetData[currentLetterIndex];
    const guide = document.getElementById('letter-guide');
    const letter = currentCase === 'uppercase' ? data.letter : data.lowercase;
    
    if (showGuideLine) {
        guide.textContent = letter;
        guide.style.opacity = '0.3';
    } else {
        guide.style.opacity = '0';
    }
    
    // 更新笔画动画
    updateStrokeAnimation(letter);
}

// 更新笔画顺序动画
function updateStrokeAnimation(letter) {
    const container = document.getElementById('stroke-animation');
    const strokes = currentCase === 'uppercase' ? letterStrokes[letter] : lowercaseStrokes[letter];
    
    if (!strokes) {
        container.innerHTML = '<p style="color: #999;">暂无笔画动画</p>';
        return;
    }
    
    // 创建SVG动画
    const svgSize = 100;
    let pathData = '';
    
    // 将笔画点转换为路径
    for (let i = 0; i < strokes.length - 1; i += 2) {
        const start = strokes[i];
        const end = strokes[i + 1];
        if (start && end) {
            pathData += `M ${start.x} ${start.y} L ${end.x} ${end.y} `;
        }
    }
    
    container.innerHTML = `
        <svg viewBox="0 0 100 100" class="stroke-svg">
            <defs>
                <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#2196F3;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#4CAF50;stop-opacity:1" />
                </linearGradient>
            </defs>
            <text x="50" y="65" font-size="60" text-anchor="middle" fill="#ddd" font-family="Comic Sans MS, cursive">${letter}</text>
            <path d="${pathData}" fill="none" stroke="url(#strokeGradient)" stroke-width="3" stroke-linecap="round" 
                  class="animate-stroke"/>
        </svg>
    `;
}

// 添加键盘导航支持
document.addEventListener('keydown', (e) => {
    if (learnPage.classList.contains('active')) {
        if (e.key === 'ArrowLeft') showPrevLetter();
        if (e.key === 'ArrowRight') showNextLetter();
        if (e.key === 'Escape') showHomePage();
    }
    if (practicePage.classList.contains('active')) {
        if (e.key === 'Escape') showLearnPage();
    }
});

// 添加滑动手势支持（移动端）
let touchStartX = 0;
let touchEndX = 0;

learnPage.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

learnPage.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            showNextLetter();
        } else {
            showPrevLetter();
        }
    }
}
