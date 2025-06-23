const eventDate = new Date("August 15, 2025 10:00:00").getTime();

const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "The event has started!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}, 1000);

function openModal(img) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}
// === Sign-Up Form Validation ===
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("formMessage");

    if (name.value.trim() === "") {
      message.textContent = "Please enter your name.";
      message.style.color = "red";
      name.focus();
      return;
    }

    if (!validateEmail(email.value)) {
      message.textContent = "Please enter a valid email address.";
      message.style.color = "red";
      email.focus();
      return;
    }

    message.textContent = "Thank you for signing up!";
    message.style.color = "green";
    this.reset();
  });
}

function validateEmail(email) {
  const re = /^[^@]+@[^@]+\.[^@]+$/;
  return re.test(email.toLowerCase());
}