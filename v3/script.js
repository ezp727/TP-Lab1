document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('medalForm');
    const tableBody = document.getElementById('medalTable').getElementsByTagName('tbody')[0];

    // Función para cargar medallas desde el servidor
    async function loadMedals() {
        const response = await fetch('http://localhost:3000/medals');
        const medals = await response.json();
        tableBody.innerHTML = '';
        medals.forEach(medal => {
            const newRow = tableBody.insertRow();
            newRow.insertCell(0).textContent = medal.country;
            newRow.insertCell(1).textContent = medal.gold;
            newRow.insertCell(2).textContent = medal.silver;
            newRow.insertCell(3).textContent = medal.bronze;
            newRow.insertCell(4).textContent = medal.gold + medal.silver + medal.bronze;
        });
    }

    loadMedals();

    // Manejo del envío del formulario
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const data = {
            country: document.getElementById('country').value,
            gold: parseInt(document.getElementById('gold').value),
            silver: parseInt(document.getElementById('silver').value),
            bronze: parseInt(document.getElementById('bronze').value),
        };

        await fetch('http://localhost:3000/medals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        form.reset();
        loadMedals();
    });
});

