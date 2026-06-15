document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. CHANGING TEXT
  // ==========================================
  const roles = [
    "Frontend Developer",
    "Web Developer",
    "Digital Creator",
    "UI Designer",
    "Freelancer",
  ];

  let index = 0;
  const roleText = document.querySelector(".changing-text");

  setInterval(() => {
    index++;
    if (index >= roles.length) {
      index = 0;
    }
    roleText.textContent = roles[index];
  }, 2000);

  // ==========================================
  // 2. MOBILE MENU TOGGLE
  // ==========================================
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    navToggle.classList.toggle("open");
  });

  // Close mobile menu gracefully when clicking any link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.classList.remove("open");
    });
  });

  // ==========================================
  // 3. PROJECT FILTER UTILITY
  // ==========================================
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectWrappers = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Manage active styles switcher safely
      document.querySelector(".filter-btn.active").classList.remove("active");
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      projectWrappers.forEach((wrapper) => {
        const cardCategory = wrapper.getAttribute("data-category");

        // Toggle our custom layout utility 'hidden' to filter elements
        if (filterValue === "all" || filterValue === cardCategory) {
          wrapper.classList.remove("hidden");
        } else {
          wrapper.classList.add("hidden");
        }
      });
    });
  });

  // ==========================================
  // 4. INTERACTIVE FORM HANDLER
  // ==========================================
  const contactForm = document.getElementById("contact-form");
  const formFeedback = document.getElementById("formFeedback");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const clientName = document.getElementById("name").value.trim();

    // Dynamically insert confirmation data
    formFeedback.textContent = `Thank you, ${clientName}! Your message has been sent successfully.`;

    // Use our custom utility behavior
    formFeedback.classList.remove("hidden");
    formFeedback.classList.add("success-msg");

    contactForm.reset();

    // Clear notification message view safely after a delay
    setTimeout(() => {
      formFeedback.classList.add("hidden");
      formFeedback.classList.remove("success-msg");
    }, 5000);
  });
});
