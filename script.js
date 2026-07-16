const toggle = document.getElementById('toggle');
const bulb = document.getElementById('bulb');
const body = document.body;

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        // Turn Light On
        bulb.classList.add('on');
        bulb.classList.remove('off');
        body.classList.add('light-on');
    } else {
        // Turn Light Off
        bulb.classList.add('off');
        bulb.classList.remove('on');
        body.classList.remove('light-on');
    }
});