const text = "Hello, world! This is an example text.";
const container = document.getElementById("text-container");

function showTextWordByWord() {
  const words = text.split(" ");
  let index = 0;

  const interval = setInterval(function() {
    if (index < words.length) {
      container.textContent += words[index] + " ";
      container.style.opacity = 1; // Fade in the text
      index++;
    } else {
      clearInterval(interval);
    }
  }, 1000); // Change the delay here (in milliseconds) to control the speed of appearance
}

showTextWordByWord();

// const themeToggle = document.getElementById('theme-toggle');
// const themeIcon = document.getElementById('theme-icon');
// const body = document.body;

// themeToggle.addEventListener('click', function() {
//   body.classList.toggle('dark-mode');
  
  // if (body.classList.contains('dark-mode')) {
    // themeIcon.textContent = 'brightness_7'; // Change to the appropriate dark mode icon
  // } else {
    // themeIcon.textContent = 'brightness_4'; // Change to the appropriate light mode icon
//   }
// });


