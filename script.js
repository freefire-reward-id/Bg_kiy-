const input = document.getElementById('user-input');
const output = document.getElementById('output');

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = input.value.toLowerCase();
        const line = document.createElement('p');
        line.innerHTML = `<span class="prompt">R3X@X3:~$</span> ${cmd}`;
        output.appendChild(line);

        // Logic Response
        const response = document.createElement('p');
        if (cmd === 'help') {
            response.innerText = "Available: status, bypass, inject, clear";
        } else if (cmd === 'bypass') {
            response.innerText = "Executing bypass protocol... Done. Target open.";
        } else if (cmd === 'clear') {
            output.innerHTML = '';
        } else {
            response.innerText = `'${cmd}' nggak dikenal. Belajar lagi sana.`;
        }
        
        output.appendChild(response);
        input.value = '';
        document.getElementById('console').scrollTop = document.getElementById('console').scrollHeight;
    }
});