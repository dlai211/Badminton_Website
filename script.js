// Example JavaScript to display data
document.addEventListener('DOMContentLoaded', function() {
    const displayElement = document.getElementById('data-display');

    // Simulated data
    const data = [
        { name: 'Item 1', value: 'Value 1' },
        { name: 'Item 2', value: 'Value 2' },
        { name: 'Item 3', value: 'Value 3' },
    ];

    // Create a list for the data
    const list = document.createElement('ul');
    
    data.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}: ${item.value}`;
        list.appendChild(listItem);
    });

    // Append the list to the display element
    displayElement.appendChild(list);
});
