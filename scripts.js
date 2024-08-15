document.getElementById('medalForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const country = document.getElementById('country').value;
    const gold = parseInt(document.getElementById('gold').value);
    const silver = parseInt(document.getElementById('silver').value);
    const bronze = parseInt(document.getElementById('bronze').value);

    // Calcular el total de medallas
    const total = gold + silver + bronze;

    // Crear una nueva fila para la tabla
    const table = document.getElementById('medalTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Agregar celdas a la fila
    const countryCell = newRow.insertCell(0);
    const goldCell = newRow.insertCell(1);
    const silverCell = newRow.insertCell(2);
    const bronzeCell = newRow.insertCell(3);
    const totalCell = newRow.insertCell(4);

    // Insertar valores en las celdas
    countryCell.textContent = country;
    goldCell.textContent = gold;
    silverCell.textContent = silver;
    bronzeCell.textContent = bronze;
    totalCell.textContent = total;

    // Limpiar el formulario
    document.getElementById('medalForm').reset();
});
