// Scroll variables
// let currentSection = 0;
// const sections = document.querySelectorAll('.section');
// const totalSections = sections.length;
// let isScrolling = false; // Prevents multiple scrolls at the same time
// let scrollTimeout;

// // Function to go to a specific section
// function goToSection(index) {
//   if (index >= 0 && index < totalSections) {
//     // Scroll to the next section with smooth scroll
//     window.scrollTo({
//       top: sections[index].offsetTop,
//       behavior: 'smooth', // Smooth scroll
//     });
//     currentSection = index;
//   }
// }

// // Wheel event listener for section-based scroll
// window.addEventListener('wheel', (e) => {
//   if (isScrolling) return; // Prevent rapid scrolling

//   isScrolling = true; // Lock scrolling

//   // Determine the direction of the scroll
//   if (e.deltaY > 0) {
//     // Scroll Down (next section)
//     if (currentSection < totalSections - 1) {
//       goToSection(currentSection + 1);
//     }
//   } else {
//     // Scroll Up (previous section)
//     if (currentSection > 0) {
//       goToSection(currentSection - 1);
//     }
//   }

//   // Timeout to unlock scroll after a short delay
//   clearTimeout(scrollTimeout);
//   scrollTimeout = setTimeout(() => {
//     isScrolling = false; // Allow scrolling again after the timeout
//   }, 200); // Adjust delay to match scroll speed
// });

// // Navbar visibility change on scroll
// window.addEventListener('scroll', () => {
//   const navbar = document.getElementById('navbar');
//   const logo = document.querySelector('#logo img');
//   const navLinks = document.getElementById('nav-links');

//   // When scrolling down, make the navbar white and show the logo
//   if (window.scrollY > 0) {
//     navbar.classList.remove('transparent');
//     navbar.classList.add('white');
//     logo.style.opacity = '1';  // Logo becomes visible
//     logo.style.transform = 'scale(1)';  // Logo returns to its normal size
//     navLinks.classList.add('white');  // Links turn black when navbar turns white
//   } else {
//     navbar.classList.remove('white');
//     navbar.classList.add('transparent');
//     logo.style.opacity = '0';  // Logo becomes hidden
//     logo.style.transform = 'scale(0)';  // Shrink the logo
//     navLinks.classList.remove('white');  // Links stay white on the first section
//   }
// });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
	  e.preventDefault();
  
	  const targetSection = document.querySelector(this.getAttribute('href'));
	  
	  // Smooth scroll to the section
	  targetSection.scrollIntoView({
		behavior: 'smooth'
	  });
	});
  });


var divisor = document.getElementById("divisor"),
slider = document.getElementById("slider");
function moveDivisor() { 
	divisor.style.width = slider.value+"%";
}