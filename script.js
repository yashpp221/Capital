document.addEventListener('DOMContentLoaded', () => {
  const capitalValueElement = document.getElementById('capitalValue');
  const capitalBox = document.getElementById('capitalBox');
  let currentCapital = 42215623; // Starting capital value

  function getRandomCapital() {
    return Math.floor(Math.random() * (44654551 - 41154500 + 1)) + 41154500;
  }

  function updateCapital() {
    const newCapital = getRandomCapital();
    const isUp = newCapital > 42215623;

    capitalValueElement.textContent = newCapital.toLocaleString('en-IN');
    capitalBox.style.backgroundColor = isUp ? 'green' : 'red';

    currentCapital = newCapital;

    // Blink effect
    capitalBox.style.visibility = 'hidden';
    setTimeout(() => {
      capitalBox.style.visibility = 'visible';
    }, 500);
  }

  setInterval(updateCapital, 3000); // Update every 3 seconds
  updateCapital(); // Initial update
});
