/* Business cat easter egg */
/* assets/js/cat.js */

const cat = document.querySelector('.business-cat');
const catMessage = document.getElementById('cat-message');

const messages = [
    'I want this job.',
    'Yes. Hire me.',
    'I can do this.',
    'This is fine. Pay me.',
    'Looks good enough to ship.',
    'I\'ve done harder things.',
    'We can improve it later.'
];

let clicks = 0;

if (cat && catMessage) {
    const showMessage = () => {
        const message = messages[clicks % messages.length];
        catMessage.classList.remove('visible');

        setTimeout(() => {
            catMessage.textContent = message;
            catMessage.classList.add('visible');
        }, 100);

        clicks++;
    };

    cat.addEventListener('click', showMessage);

    cat.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') showMessage();
    });
}