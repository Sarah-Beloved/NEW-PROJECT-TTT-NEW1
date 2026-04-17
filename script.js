function openModal(imageElement) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImg");

  if (!modal || !modalImage) return;

  modal.style.display = "flex";
  modalImage.src = imageElement.src;
  modalImage.alt = imageElement.alt || "Selected image";
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  if (!modal) return;

  modal.style.display = "none";

}

function filterDresses(type) {
  const dresses = document.querySelectorAll('.dress-card');

  dresses.forEach(dress => {
    if (type === 'all' || dress.classList.contains(type)) {
      dress.style.display = 'block';
    } else {
      dress.style.display = 'none';
    }
  });
}

function filterSuits(type) {
  const suits = document.querySelectorAll(".dress-card");

  suits.forEach(suit => {
    if (type === "all" || suit.classList.contains(type)) {
      suit.style.display = "block";
    } else {
      suit.style.display = "none";
    }
  });
}

function filterItems(category) {
  const items = document.querySelectorAll(".dress-card");

  items.forEach(item => {
    if (category === "all") {
      item.style.display = "block";
    } else if (item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

/// ========================
// MOBILE MENU TOGGLE
// ========================
const menuToggle = document.getElementById("menu-toggle"); // button
const navMenu = document.getElementById("nav-menu");       // nav

// Toggle nav on menu click
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Close nav when clicking outside
document.addEventListener("click", function(e) {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove("active");
    }
});

// ========================
// IMAGE MODAL FUNCTIONALITY
// ========================
function openModal(imageElement) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImg");

    if (!modal || !modalImage) return;

    modal.style.display = "flex";
    modalImage.src = imageElement.src;
    modalImage.alt = imageElement.alt || "Selected image";
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    if (!modal) return;
    modal.style.display = "none";
}

// Optional: close modal when clicking outside image
const modal = document.getElementById("imageModal");
if (modal) {
    modal.addEventListener("click", function(e) {
        if (e.target === modal) closeModal();
    });
}

// ========================
// FILTER ITEMS FUNCTIONALITY
// ========================
function filterItems(category) {
    const items = document.querySelectorAll(".dress-card"); // can be used for dresses, suits, etc.

    items.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
<<<<<<< HEAD

//LOGIN PAGE//

// Example users
const users = [
  { username: "user1", email: "user1@example.com", password: "pass123" },
  { username: "user2", email: "user2@example.com", password: "mypassword" }
];

const form = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

// Show/hide password
togglePassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    togglePassword.textContent = "Show";
  }
});

// Single submit listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.getElementById("email").value.trim(); // can be username or email
  const password = passwordInput.value.trim();

  // Check if input matches username OR email
  const user = users.find(u => (u.username === input || u.email === input) && u.password === password);

  if (user) {
    // Save login state in localStorage
    localStorage.setItem("loggedInUser", user.username);

    alert("Login successful!");
    window.location.href = "index.html"; // redirect to home
  } else {
    errorMsg.textContent = "Invalid username/email or password!";
  }
});
=======
>>>>>>> 7f7939e (UPDATE)
