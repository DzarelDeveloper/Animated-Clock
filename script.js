class AnimatedClock {
    constructor() {
        // Ambil elemen display
        this.hoursElement = document.getElementById('hours');
        this.minutesElement = document.getElementById('minutes');
        this.secondsElement = document.getElementById('seconds');

        // Ambil progress rings
        this.hoursRing = document.querySelector('.hours .progress-ring');
        this.minutesRing = document.querySelector('.minutes .progress-ring');
        this.secondsRing = document.querySelector('.seconds .progress-ring');

        // Setup initial ring values
        this.setupRings();

        // Update clock langsung dan setiap 1 detik
        this.updateClock();
        setInterval(() => this.updateClock(), 1000);
    }

    setupRings() {
        const radius = 74;
        const circumference = 2 * Math.PI * radius;

        [this.hoursRing, this.minutesRing, this.secondsRing].forEach(ring => {
            ring.style.strokeDasharray = circumference;
            ring.style.strokeDashoffset = circumference;
        });
    }

    updateClock() {
        const now = new Date();
        const hours = now.getHours();      // 0 - 23
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        // Update teks display
        this.hoursElement.textContent = hours.toString().padStart(2, '0');
        this.minutesElement.textContent = minutes.toString().padStart(2, '0');
        this.secondsElement.textContent = seconds.toString().padStart(2, '0');

        // Update progress rings
        this.updateRing(this.hoursRing, hours, 24);   // max = 24 untuk 24 jam
        this.updateRing(this.minutesRing, minutes, 60);
        this.updateRing(this.secondsRing, seconds, 60);
    }

    updateRing(ring, value, max) {
        const radius = 74;
        const circumference = 2 * Math.PI * radius;
        const progress = (value / max) * circumference;
        const offset = circumference - progress;

        ring.style.strokeDashoffset = offset;
    }
}

// Inisialisasi jam setelah halaman selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    new AnimatedClock();
});
