const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

const updateDebounceText = debounce(() => {
  incrementCount(debounceText);
});

const updateThrottleText = throttle(() => {
  incrementCount(throttleText);
});

function debounce(func, delay = 1000) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function throttle(func, limit = 2000) {
  let lastCall = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - lastCall >= limit) {
      lastCall = now;
      func(...args);
    }
  };
}

document.addEventListener("mousemove", (e) => {
  incrementCount(defaultText);
  updateDebounceText();
  updateThrottleText();
});

function incrementCount(element) {
  element.textContent = (parseInt(element.innerText) || 0) + 1;
}
