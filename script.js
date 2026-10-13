// Select the theme toggle button from the DOM
const themeToggleBtn = document.getElementById('themeToggle');

// Listen for a 'click' event on the toggle button
themeToggleBtn.addEventListener('click', () => {
    
    // Get the HTML document element
    const htmlElement = document.documentElement;
    
    // Check the current theme attribute
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    // If the current theme is 'dark', switch it back to light mode
    if (currentTheme === 'dark') {
        htmlElement.removeAttribute('data-theme');
        themeToggleBtn.textContent = '🌙 Dark Mode';
    } else {
        // If there is no dark theme active, set the attribute to 'dark'
        htmlElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = '☀️ Light Mode';
    }
});