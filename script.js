document.querySelectorAll('.question').forEach(question => {
  question.addEventListener('click', function() {
    const section = this.parentElement;
    const img = this.querySelector('img');

    section.classList.toggle('active');

    if (section.classList.contains('active')) {
      img.src = 'assets/icon-minus.svg';
    } else {
      img.src = 'assets/icon-plus.svg';
    }

    document.querySelectorAll('section').forEach(currentSection => {
      if (currentSection !== section) {
        currentSection.classList.remove('active');
        currentSection.querySelector('img').src = 'assets/icon-plus.svg';
      }
    });

  });
  
});

document.querySelectorAll('section.active').forEach(activeSection => {
  const img = activeSection.querySelector('.question img');
  img.src = 'assets/icon-minus.svg';
});
