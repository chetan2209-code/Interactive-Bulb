const toggle = document.getElementById('toggle');
const bulb = document.getElementById('bulb');
const pullChain = document.getElementById('pull-chain');
const body = document.body;

function updateLightState() {
    const isOn = toggle.checked;

    if (isOn) {
        bulb.classList.add('on');
        bulb.classList.remove('off');
        body.classList.add('light-on');

        // Add flicker animation on turning ON
        bulb.classList.add('flicker');
        setTimeout(() => {
            bulb.classList.remove('flicker');
        }, 400); // 400ms is the duration of bulbFlicker animation
    } else {
        bulb.classList.add('off');
        bulb.classList.remove('on', 'flicker');
        body.classList.remove('light-on');
    }
}

function triggerPullChain() {
    if (pullChain.classList.contains('pulling')) return;

    pullChain.classList.add('pulling');

    setTimeout(() => {
        toggle.checked = !toggle.checked;
        updateLightState();
    }, 150);

    pullChain.addEventListener('animationend', () => {
        pullChain.classList.remove('pulling');
    }, { once: true });
}

toggle.addEventListener('change', updateLightState);
pullChain.addEventListener('click', triggerPullChain);
bulb.addEventListener('click', triggerPullChain);