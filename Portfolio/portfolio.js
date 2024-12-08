const projectSections = document.querySelectorAll('.project-detail');
const body = document.body;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const projectTitle = entry.target.querySelector('.project-heading').textContent;
      applyTheme(entry.target, projectTitle);
    } else {
      // Reset the theme when the project is not in view
      resetTheme(entry.target);
    }
  });
}, { threshold: 0.5 });

function applyTheme(projectElement, projectTitle) {
  let backgroundColor, fontFamily, headingColor, textColor, buttonColor;

  switch(projectTitle) {
    case 'Who Is Your Antistress?':
      backgroundColor = 'linear-gradient(135deg, #a8e6cf, #dcedc1)';
      fontFamily = "'Comic Sans MS', cursive";
      headingColor = '#4a4a4a';
      textColor = '#333333';
      buttonColor = '#66bb6a';
      break;
    case 'Chatney: First AI Student':
      backgroundColor = 'linear-gradient(135deg, #2c3e50, #34495e)';
      fontFamily = "'Courier New', monospace";
      headingColor = '#ecf0f1';
      textColor = '#bdc3c7';
      buttonColor = '#3498db';
      break;
    case 'The Final Print':
      backgroundColor = 'linear-gradient(135deg, #2c3e50, #c0392b)';
      fontFamily = "'Nosifer', cursive";
      headingColor = '#e74c3c';
      textColor = '#ecf0f1';
      buttonColor = '#c0392b';
      break;
    case 'How To Pretend To Be A Responsible Student':
      backgroundColor = 'linear-gradient(135deg, #f1c40f, #e67e22)';
      fontFamily = "'Schoolbell', cursive";
      headingColor = '#d35400';
      textColor = '#34495e';
      buttonColor = '#e67e22';
      break;
    default:
      backgroundColor = 'linear-gradient(135deg, #d1acdf, #a1a9a9)';
      fontFamily = "'Poppins', sans-serif";
      headingColor = '#333333';
      textColor = '#666666';
      buttonColor = '#007BFF';
  }

  projectElement.style.background = backgroundColor;
  projectElement.style.fontFamily = fontFamily;
  
  projectElement.querySelector('.project-heading').style.color = headingColor;
  projectElement.querySelector('.project-description').style.color = textColor;
  projectElement.querySelector('.learn-more-btn').style.backgroundColor = buttonColor;
}

function resetTheme(projectElement) {
  projectElement.style.background = '';
  projectElement.style.fontFamily = '';
  
  projectElement.querySelector('.project-heading').style.color = '';
  projectElement.querySelector('.project-description').style.color = '';
  projectElement.querySelector('.learn-more-btn').style.backgroundColor = '';
}

projectSections.forEach(section => observer.observe(section));

// Skills navigation
const skillsContainer = document.querySelector('.skills-container');
const slides = document.querySelectorAll('.slide:not(.clone)');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;
const totalSlides = slides.length;

function updateSlidePosition() {
  skillsContainer.style.transform = `translateX(${-currentIndex * 33.333}%)`;
}

function moveToNextSlide() {
  currentIndex++;
  updateSlidePosition();
  if (currentIndex === totalSlides) {
    setTimeout(() => {
      skillsContainer.style.transition = 'none';
      currentIndex = 0;
      updateSlidePosition();
      setTimeout(() => {
        skillsContainer.style.transition = 'transform 0.3s ease-in-out';
      }, 10);
    }, 300);
  }
}

function moveToPrevSlide() {
  if (currentIndex === 0) {
    skillsContainer.style.transition = 'none';
    currentIndex = totalSlides;
    updateSlidePosition();
    setTimeout(() => {
      skillsContainer.style.transition = 'transform 0.3s ease-in-out';
      currentIndex--;
      updateSlidePosition();
    }, 10);
  } else {
    currentIndex--;
    updateSlidePosition();
  }
}

rightArrow.addEventListener('click', moveToNextSlide);
leftArrow.addEventListener('click', moveToPrevSlide);

// Initialize the first slide
updateSlidePosition();
document.addEventListener('DOMContentLoaded', function() {
  const menuTrigger = document.querySelector('.menu-trigger');
  const navLinks = document.querySelector('.nav-links');

  menuTrigger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    menuTrigger.classList.toggle('active');
  });

  // Close menu when a link is clicked
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navLinks.classList.remove('active');
      menuTrigger.classList.remove('active');
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const menuTrigger = document.querySelector('.menu-trigger');
  const navLinks = document.querySelector('.nav-links');

  menuTrigger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    console.log('Menu clicked');
  });
});
