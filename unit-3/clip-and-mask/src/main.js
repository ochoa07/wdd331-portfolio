// Embedded illustration: no image download, account, or internet connection needed.
const art = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"><defs><linearGradient id="sky" x2="0" y2="1"><stop stop-color="#7777b4"/><stop offset="1" stop-color="#f9baaa"/></linearGradient><linearGradient id="lake" x2="0" y2="1"><stop stop-color="#afaccf"/><stop offset="1" stop-color="#465f84"/></linearGradient></defs><path fill="url(#sky)" d="M0 0h600v600H0z"/><circle cx="420" cy="160" r="62" fill="#ffe5ba"/><path fill="#8e8cae" d="M0 310 170 100 350 330 460 210 600 340v260H0z"/><path fill="#ece3e8" d="m170 100-60 75 59-24 48 17z"/><path fill="#505e82" d="M0 360 100 260 280 390 405 280 600 390v210H0z"/><path fill="url(#lake)" d="M0 395h600v205H0z"/><path fill="#ded0d8" d="M280 420h180v4H280zm-60 32h230v4H220zm100 35h170v4H320zm-90 40h200v4H230z"/><path fill="#344d59" d="m0 390 100 30 60 45-95 25 110 110H0zm600 30-80 30-40 70-80 80h200z"/><path fill="#263f49" d="m55 230-50 130h30v100h40V360h30zm490 25-50 130h30v100h40V385h30z"/></svg>`;
document.querySelectorAll('.landscape').forEach(img => { img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(art); });
const radius = document.querySelector('#radius');
radius.addEventListener('input', () => {
  document.querySelector('.circle').style.clipPath = `circle(${radius.value}% at 50% 50%)`;
  document.querySelector('#radius-value').textContent = radius.value + '%';
});
const morph = document.querySelector('#morph');
document.querySelector('#diamond').addEventListener('click', () => { morph.classList.remove('bad'); morph.classList.toggle('changed'); });
document.querySelector('#triangle').addEventListener('click', () => { morph.classList.remove('changed'); morph.classList.toggle('bad'); });
document.querySelector('#reset').addEventListener('click', () => { morph.classList.remove('changed', 'bad'); });
document.querySelector('#fix').addEventListener('click', event => {
 const fixed = document.querySelector('#tiles').classList.toggle('fixed');
 document.querySelector('#tile-code').textContent = fixed ? 'mask-size: 100% 100%;\nmask-repeat: no-repeat;' : 'mask-size: 70px 70px;\nmask-repeat: repeat;';
 event.target.textContent = fixed ? 'Show repeating mask again' : 'Fix mask size and repeat';
});
