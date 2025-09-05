# ⏰ Animated Clock

Jam digital dengan animasi lingkaran progres (`SVG circle`) untuk menampilkan **jam, menit, dan detik** secara real-time. Proyek ini dibuat dengan **HTML, CSS, dan JavaScript murni** tanpa library tambahan.

---

## 📂 Struktur Proyek

├── index.html # Struktur utama HTML
├── style.css # Styling untuk tampilan jam
└── script.js # Logika jam & animasi progress


---


---

## ⚙️ Cara Pakai

1. Clone atau download proyek ini.
2. Pastikan `index.html`, `style.css`, dan `script.js` berada dalam satu folder.
3. Buka `index.html` di browser.
4. Jam akan berjalan otomatis secara real-time.

---

## 📑 Dokumentasi Kode

### HTML (`index.html`)
- Container utama `clock-container` terdiri dari 3 unit waktu: **Hours**, **Minutes**, **Seconds**.
- Setiap unit memiliki:
  - Lingkaran background (`.circle-bg`)
  - Lingkaran progres (`.progress-ring`) → dikontrol lewat JS
  - Display angka (`#hours`, `#minutes`, `#seconds`)

### CSS (`style.css`)
- Mengatur layout, warna lingkaran, efek glow, animasi floating, dan hover.
- `.progress-ring` menggunakan `stroke` + `fill="transparent"`.
- Properti `stroke-dasharray` dan `stroke-dashoffset` dipakai untuk efek progres.

### JavaScript (`script.js`)
**Class `AnimatedClock`**:

- **constructor()**
  - Ambil elemen HTML (`getElementById`, `querySelector`)
  - Inisialisasi progress ring
  - Update jam tiap 1 detik (`setInterval`)

- **setupRings()**
  - Hitung keliling lingkaran (`circumference = 2πr`)
  - Set `strokeDasharray` dan `strokeDashoffset` awal

- **updateClock()**
  - Ambil waktu sekarang (`new Date()`)
  - Hitung jam (0–23), menit, detik
  - Update teks di elemen display
  - Update progress ring sesuai nilai waktu

- **updateRing(ring, value, max)**
  - Hitung progres: `(value / max) * circumference`
  - Set `strokeDashoffset` agar lingkaran terlihat terisi

---

## 🖼️ Demo Visual
- Lingkaran progres akan terisi seiring waktu:
  - **Jam** → penuh setiap 24 jam
  - **Menit** → penuh setiap 60 menit
  - **Detik** → penuh setiap 60 detik

---

## 📜 Lisensi
Proyek ini bebas digunakan, dipelajari, atau dimodifikasi sesuai kebutuhan.
