// Global var
let animationCount = 0;

// Reusable function with parameters & return value
function toggleAnimation(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
    return false; 
  } else {
    element.classList.add(className);
    return true; 
  }
}

// Update counter 
function updateCounter() {
  animationCount++;
  console.log(`Animations triggered: ${animationCount}`);
}

// Event listener to trigger CSS animation
const btn = document.getElementById("myanim");
const box = document.getElementById("box");

btn.addEventListener("click", () => {
  const started = toggleAnimation(box, "box-animate");
  if (started) {
    updateCounter();
  }
});
