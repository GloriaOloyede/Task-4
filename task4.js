document.getElementById('colorBtn').addEventListener('click', function() {
  console.log("Button clicked!");  // This will verify if the button click is working.

  // Generate a random hex color
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  
  // Change background and update the color code text
  document.body.style.backgroundColor = randomColor;
  document.getElementById('colorCode').textContent = randomColor;
});

