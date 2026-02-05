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
let hideTimeout = null;

if (cat && catMessage) {
    const showMessage = () => {
        let message;
        let tone = 'default';

        if (clicks < messages.length) {
            message = messages[clicks];
        } else if (clicks === messages.length) {
            message = 'Ok. You\'re definitely clicking on purpose.';

        } else if (clicks === messages.length + 1) {
            message = 'There is no secret feature. This is the secret feature.';
            tone = 'meta';
        } else {
            message = 'You can stop now. Or not.';
            tone = 'warning';
        }

        // clear previous timeout
        if (hideTimeout) {
            clearTimeout(hideTimeout);
        }

        catMessage.dataset.tone = tone;
        catMessage.classList.remove('visible');

        setTimeout(() => {
            catMessage.textContent = message;
            catMessage.classList.add('visible');
        }, 100);

        // auto-hide + reset
        hideTimeout = setTimeout(() => {
            catMessage.classList.remove('visible');
            clicks = 0;
        }, 4000);

        clicks++;
    };

    cat.addEventListener('click', showMessage);

    cat.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            showMessage();
        }
    });
}