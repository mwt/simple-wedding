//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Make the countdown work

  const countdown = document.getElementById("countdown");

  const countdownDate = new Date(
    countdown.getAttribute("data-countdown-date")
  ).getTime();

  // Update the countdown every second
  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // If the countdown is over, do nothing
    if (distance < 0) {
      clearInterval(interval);
      return;
    }

    // Calculate the countdown values
    const countdownValues = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };

    // Update the countdown elements every second
    for (const [key, value] of Object.entries(countdownValues)) {
      const unitElement = countdown.querySelector(
        `[data-countdown-unit="${key}"]`
      );
      unitElement.innerHTML = String(value).padStart(2, "0");
    }
  }, 1000);
});
