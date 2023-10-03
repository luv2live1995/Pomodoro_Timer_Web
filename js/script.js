// Get references to the sidebar and toggle button
const sidebar = document.querySelector('.sidebar');
const toggleButton = document.getElementById('sidebar-toggle');

// Add click event listener to the toggle button
toggleButton.addEventListener('click', function () {
    // Toggle the sidebar by adding/removing the "active" class
    sidebar.classList.toggle('active');

    // Toggle the content margin to make space for the sidebar
    if (sidebar.classList.contains('active')) {
        document.querySelector('.content').style.marginLeft = '0';
    } else {
        document.querySelector('.content').style.marginLeft = '250px';
    }
});
