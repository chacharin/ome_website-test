function loadHeader() {
    fetch('0header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });
}

// Function to load footer
function loadFooter() {
    fetch('0footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
}

// Call functions to load header and footer
window.onload = function() {
    loadHeader();
    loadFooter();
};