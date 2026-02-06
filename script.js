// ===============================================
// NAVIGATION TOGGLE (MOBILE)
// ===============================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
	navMenu.classList.toggle('active');
	const icon = navToggle.querySelector('i');
	if (navMenu.classList.contains('active')) {
		icon.classList.remove('fa-bars');
		icon.classList.add('fa-times');
	} else {
		icon.classList.remove('fa-times');
		icon.classList.add('fa-bars');
	}
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
	link.addEventListener('click', () => {
		navMenu.classList.remove('active');
		const icon = navToggle.querySelector('i');
		icon.classList.remove('fa-times');
		icon.classList.add('fa-bars');
	});
});

// ===============================================
// NAVBAR BACKGROUND ON SCROLL
// ===============================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
	if (window.scrollY > 100) {
		navbar.style.background = 'rgba(26, 26, 26, 0.98)';
		navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
	} else {
		navbar.style.background = 'rgba(26, 26, 26, 0.95)';
		navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
	}
});

// ===============================================
// GALLERY TABS
// ===============================================

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
	button.addEventListener('click', () => {
		// Remove active class from all buttons and contents
		tabButtons.forEach(btn => btn.classList.remove('active'));
		tabContents.forEach(content => content.classList.remove('active'));
		// Add active class to clicked button
		button.classList.add('active');
		/* ...existing code... */