// ------------------- STARTUP PAGE BUTTONS -------------------
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const noMsg = document.getElementById('noMsg');

if (yesBtn) {
    yesBtn.addEventListener('click', () => {
        window.location.href = 'gifts.html';
    });
}

if (noBtn) {
    noBtn.addEventListener('click', () => {
        noMsg.classList.remove('hidden');
    });
}

// Gifts Page Interactivity
const giftBtns = document.querySelectorAll('.gift-btn');
const giftsMenu = document.getElementById('gifts-menu');
const giftContent = document.getElementById('gift-content');
const giftDetails = document.querySelectorAll('.gift-detail');

if (giftBtns.length) {
    giftBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const gift = btn.getAttribute('data-gift');
            giftsMenu.classList.add('hidden');
            giftContent.classList.remove('hidden');
            giftDetails.forEach(detail => detail.classList.add('hidden'));
            document.getElementById(gift).classList.remove('hidden');
        });
    });
}

// Back Buttons
const backBtns = document.querySelectorAll('.back-btn');
backBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        giftContent.classList.add('hidden');
        giftsMenu.classList.remove('hidden');
    });
});

// Surprise Box Extra
const openSurprise = document.getElementById('open-surprise');
const surpriseContent = document.getElementById('surprise-content');

if (openSurprise) {
    openSurprise.addEventListener('click', () => {
        surpriseContent.classList.remove('hidden');
    });
}

// Start listening after page loads
window.addEventListener('load', startMic);
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (15 + Math.random() * 25) + 'px';
    heart.style.animationDuration = (5 + Math.random() * 5) + 's'; // different speeds
    heart.style.animationDelay = (Math.random() * 3) + 's'; // staggered start
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000); // slightly longer to match slower hearts
}

setInterval(createHeart, 400); // every 0.4s
