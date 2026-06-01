// 1. Packet Sniffer Generator
const sniffer = document.getElementById('packet-sniffer');
const packets = [
    "GET /index.php HTTP/1.1", "HOST: 192.168.1.1", "SSL_HANDSHAKE: SUCCESS",
    "BYPASSING_AUTH...", "RECV [255.0.0.12]", "SYN_SENT: Port 8080", "UPLOAD: 1.2MB/s"
];

function addPacket() {
    const line = document.createElement('div');
    line.innerText = `[${new Date().toLocaleTimeString()}] ${packets[Math.floor(Math.random() * packets.length)]}`;
    sniffer.prepend(line);
    if(sniffer.childNodes.length > 30) sniffer.lastChild.remove();
}
setInterval(addPacket, 800);

// 2. Main Terminal Typewriter
const terminal = document.getElementById('main-terminal');
const hackCommands = [
    "> Connect master_node...",
    "> Running 'sudo bypass-firewall'...",
    "> Accessing hidden_directory/.env...",
    "> Found DB_PASSWORD: ***************",
    "> Initializing brute-force attack...",
    "> 10%... 45%... 89%...",
    "> SUCCESS: System is fully compromised.",
    "> Downloading classified_data.zip..."
];

let cmdIdx = 0;
function runTerminal() {
    if (cmdIdx < hackCommands.length) {
        const p = document.createElement('p');
        p.className = "mb-1";
        terminal.appendChild(p);
        
        let charIdx = 0;
        const text = hackCommands[cmdIdx];
        
        function typeChar() {
            if (charIdx < text.length) {
                p.innerHTML += text[charIdx];
                charIdx++;
                setTimeout(typeChar, 30);
            } else {
                cmdIdx++;
                setTimeout(runTerminal, 1000);
            }
            terminal.scrollTop = terminal.scrollHeight;
        }
        typeChar();
    }
}

// 3. Matrix Rain for the side panel
const matrixBox = document.getElementById('matrix-rain');
function updateMatrix() {
    let str = "";
    for(let i=0; i<500; i++) {
        str += String.fromCharCode(0x30A0 + Math.random() * 96);
    }
    matrixBox.innerText = str;
}
setInterval(updateMatrix, 50);

// 4. Clock and Uptime
function updateUptime() {
    const uptimeEl = document.getElementById('uptime');
    let s = 0, m = 0, h = 0;
    setInterval(() => {
        s++;
        if(s==60) { s=0; m++; }
        if(m==60) { m=0; h++; }
        uptimeEl.innerText = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    }, 1000);
}

// 5. Execute Button Animation
function executeFinalBypass() {
    terminal.innerHTML = "<h1 class='text-red-500 font-black text-4xl animate-pulse'>ALERT: DATA EXTRACTION IN PROGRESS</h1>";
    setTimeout(() => {
        alert("CRITICAL ACCESS GRANTED: WELCOME TO THE CORE");
        location.reload();
    }, 3000);
}

window.onload = () => {
    runTerminal();
    updateUptime();
};