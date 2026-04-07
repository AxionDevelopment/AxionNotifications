window.addEventListener('message', function(event) {
    const data = event.data;

    if (data.action === "notify") {
        createNotification(data.message, data.type, data.duration);
    }
});

function createNotification(message, type, duration) {
    const container = document.getElementById('notifications');

    const notif = document.createElement('div');
    notif.classList.add('notification', type);

    notif.innerHTML = `
        <div class="text">${message}</div>
        <div class="progress-bar">
            <div class="progress-fill"></div>
        </div>
    `;

    container.appendChild(notif);

    const progressFill = notif.querySelector('.progress-fill');

    setTimeout(() => {
        notif.classList.add('show');
    }, 10);

    setTimeout(() => {
        progressFill.style.transitionDuration = duration + "ms";
        progressFill.style.width = "0%";
    }, 50);

    setTimeout(() => {
        notif.classList.remove('show');
        setTimeout(() => notif.remove(), 350);
    }, duration);
}