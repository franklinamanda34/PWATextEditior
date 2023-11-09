const butInstall = document.getElementById('buttonInstall');
// Logic for installing the PWA
let defferedPropmt;
window.addEventListener('beforeinstallprompt', (event) => {
event.preventDefault();
deferredPrompt = event;
butInstall.style.display = 'block';
});
butInstall.addEventListener('click', async () => {
if (deferredPrompt) {
deferredPrompt.prompt();
const choiceResult = await deferredPrompt.userChoice;
if (choiceResult.outcome === 'accepted') {
console.log('Accepted');
} else {
console.log('Not Accepted');
}
deferredPrompt = null;
}
});
window.addEventListener('appinstalled', (event) => {
console.log('Installed');
});


