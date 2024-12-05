document.querySelectorAll('.project-evaluation').forEach((evaluation, index) => {
    const likeBtn = evaluation.querySelector('.like-btn');
    const dislikeBtn = evaluation.querySelector('.dislike-btn');
    const resultElement = evaluation.querySelector('.evaluation-result');
    let likes = 0;
    let dislikes = 0;
    let userChoice = null;

    function updateButtonStates() {
        likeBtn.classList.toggle('active', userChoice === 'like');
        dislikeBtn.classList.toggle('active', userChoice === 'dislike');
    }

    function updateResult() {
        resultElement.textContent = `${likes} likes, ${dislikes} dislikes`;
    }

    likeBtn.addEventListener('click', () => {
        if (userChoice === 'like') {
            likes--;
            userChoice = null;
        } else {
            if (userChoice === 'dislike') {
                dislikes--;
            }
            likes++;
            userChoice = 'like';
        }
        updateButtonStates();
        updateResult();
    });

    dislikeBtn.addEventListener('click', () => {
        if (userChoice === 'dislike') {
            dislikes--;
            userChoice = null;
        } else {
            if (userChoice === 'like') {
                likes--;
            }
            dislikes++;
            userChoice = 'dislike';
        }
        updateButtonStates();
        updateResult();
    });
});
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