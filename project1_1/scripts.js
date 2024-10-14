// Dropdown Menu functionality
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownItems = document.querySelectorAll('.dropdown-menu a');

// Toggle the dropdown menu
dropdownToggle.addEventListener('click', () => {
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.style.display = 'none';
  }
});

// Handle dropdown item selection
dropdownItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownToggle.textContent = e.target.textContent;
    dropdownMenu.style.display = 'none';
  });
});
