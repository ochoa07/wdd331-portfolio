// Update the teaching example and the visible CSS together.
const stepImage = document.querySelector('#step-image');
const notes = [
    'The fixed height and fill value stretch the picture.',
    'The box is now 16:9. Fill still stretches this 8:5 picture slightly.',
    'Cover preserves the photo’s proportions and crops it to fill the 16:9 box.'
];
function setStep(step) {
    stepImage.classList.toggle('ratio', step >= 1);
    stepImage.classList.toggle('fixed', step === 2);
    document.querySelectorAll('[data-step]').forEach(button => {
        button.setAttribute('aria-pressed', Number(button.dataset.step) === step);
    });
    document.querySelector('#step-note').textContent = notes[step];
    document.querySelector('#step-code').textContent = `.card img {
    display: block;
    width: 100%;
    height: ${step === 0 ? '130px' : 'auto'};
${step >= 1 ? '    aspect-ratio: 16 / 9;\n' : ''}    object-fit: ${step === 2 ? 'cover' : 'fill'};
}`.replaceAll('\n', '\n');
}
document.querySelectorAll('[data-step]').forEach(button => {
    button.addEventListener('click', () => setStep(Number(button.dataset.step)));
});
const fit = document.querySelector('#fit');
const ratio = document.querySelector('#ratio');
function updateFit() {
    const image = document.querySelector('#play-image');
    image.style.objectFit = fit.value;
    image.style.aspectRatio = ratio.value;
    document.querySelector('#play-code').textContent = `width: 100%;
height: auto;
aspect-ratio: ${ratio.value};
object-fit: ${fit.value};`;
}
fit.addEventListener('change', updateFit);
ratio.addEventListener('change', updateFit);
const position = document.querySelector('#position');
function updatePosition() {
    document.querySelector('#position-image').style.objectPosition = position.value;
    document.querySelector('#position-code').textContent = `aspect-ratio: 1;
object-fit: cover;
object-position: ${position.value};`;
}
position.addEventListener('change', updatePosition);
document.querySelector('#hero-width').addEventListener('input', event => {
    document.querySelector('#hero-wrap').style.width = event.target.value + '%';
    document.querySelector('#width-value').textContent = event.target.value + '%';
});
setStep(0);
updateFit();
updatePosition();
