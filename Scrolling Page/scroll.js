window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
  
    // Get birds and text
    const birds = [
      document.getElementById('bird1'),
      document.getElementById('bird2'),
      document.getElementById('bird3'),
      document.getElementById('bird4'),
      document.getElementById('bird5')
    ];
    const text = document.getElementById('second-text');
    const subtext = document.getElementById('second-subtext');
  
    // Handle bird parallax effect
    birds.forEach((bird, index) => {
      const speed = 0.5 + (index * 0.1); // Different speed for each bird
      if (scrollPosition < window.innerHeight) {
        bird.style.opacity = 1;
        bird.style.transform = `translateY(${scrollPosition * speed}px)`; // Move bird based on scroll
      } else {
        bird.style.opacity = 0; // Fade out birds when scrolling to the second section
      }
    });
  
    // Show text in the second section
    if (scrollPosition > window.innerHeight) {
      text.style.opacity = 1;
      subtext.style.opacity = 1;
    }
  });
  