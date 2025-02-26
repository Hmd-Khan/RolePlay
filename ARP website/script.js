// Improved script.js

// Get elements
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeButton = document.querySelectorAll(".close-button");
const registerModal = document.getElementById("registerModal");
const loginModal = document.getElementById("loginModal");

// Function to handle modal content display
function showModalContent(content) {
  if (modalText && modal) {
    modalText.textContent = content;
    modal.style.display = "block";
  }
}

// Function to add click event listeners to buttons
function addClickListener(buttons, callback) {
  buttons.forEach((btn) => {
    btn.addEventListener("click", callback);
  });
}

// Handle buttons to show modal content
const handleButtons = () => {
  const btns = document.querySelectorAll("#faq, #donate, #technical");
  addClickListener(btns, function () {
    const content =
      this.id === "faq"
        ? "This is the FAQ section."
        : this.id === "donate"
        ? "This is the Donate service section."
        : "This is the Technical section.";
    showModalContent(content);
  });

  const newPostButton = document.getElementById("newPostButton");
  if (newPostButton) {
    newPostButton.addEventListener("click", () => {
      showModalContent("This is the New Post section.");
    });
  }

  const discordButton = document.getElementById("discordButton");
  if (discordButton) {
    discordButton.addEventListener("click", () => {
      window.location.href = "https://discord.com/invite/Rm5AQ7jA"; // Replace with your actual Discord invite link
    });
  }
};

// Handle close buttons for modals
const handleCloseButtons = () => {
  closeButton.forEach((button) => {
    button.addEventListener("click", function () {
      this.closest(".modal").style.display = "none";
    });
  });

  window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  });
};

// Function to handle Register and Login buttons
const handleModalToggle = (buttons, showModal, hideModal) => {
  addClickListener(buttons, () => {
    if (showModal) showModal.style.display = "block";
    if (hideModal) hideModal.style.display = "none";
  });
};

// Handle Register and Login buttons
const handleAuthButtons = () => {
  const registerBtns = document.querySelectorAll(
    "#registerNow, #registerNowFromLogin, #startRegistration, #registerNowButton"
  );
  handleModalToggle(registerBtns, registerModal, loginModal);

  const loginButtons = document.querySelectorAll(
    "#loginButton, #loginButtonForum"
  );
  handleModalToggle(loginButtons, loginModal, null);
};

// Function to show content based on section
function showContent(section) {
  const content = document.getElementById("content");
  if (content) {
    const contentData = {
      autopark: `<img src="img/car-1.jpg" alt="Autopark"><div class="text-overlay"><h2>300+ COOL CARS</h2><p>DO YOU LIKE TO DRIVE? CHOOSE A CAR FOR YOURSELF, A NIGHT DRIFTER OR A DASHING DRAG RACER?</p></div>`,
      residents: `<img src="img/hr.jpg" alt="Residents"><div class="text-overlay"><h2>EVENTS</h2><p>YOU WILL DEFINITELY NOT BE BORED! 15 DIFFERENT EVENTS WITH COOL REWARDS.</p></div>`,
      gangster: `<img src="img/hero.jpg" alt="Gangster"><div class="text-overlay"><h2>BECOME A GANGSTER OR CREATE YOUR OWN CRIMINAL FAMILY??</h2><p>GET INTO ONE OF THE 5 CRIMINAL GANGS AND DO DANGEROUS BUSINESS.</p></div>`,
      business: `<img src="img/busi.jpg" alt="Business"><div class="text-overlay"><h2>FROM RAGS TO RICHES</h2><p>MAKE THIS STATE PAY YOU MONEY, IT'S ALL IN YOUR HANDS</p></div>`,
      default: "",
    };
    content.innerHTML = contentData[section] || contentData.default;
  }
}

// Handle Server #1 click to show/hide content
const handleServerClicks = () => {
  const server1 = document.getElementById("server1");
  const serverContent = document.getElementById("server1-content");

  if (server1 && serverContent) {
    server1.addEventListener("click", () => {
      serverContent.style.display =
        serverContent.style.display === "none" ? "block" : "none";
    });
  }

  document.querySelectorAll(".server-subsections a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const section = this.getAttribute("data-section");
      showContent(section);
    });
  });
};

// Handle showing/hiding of game section, server rules section, and complaint section
const handleSectionToggle = () => {
  const gameSection = document.querySelector(".game-section");
  const serverRulesSection = document.querySelector(".server-rules-section");
  const complaintSection = document.querySelector(".complaint-section");
  const applicationSection = document.querySelector(".applications-section");
  const stateOrganizationSection = document.querySelector(
    ".state-organization-section"
  );
  const roleplayBiographiesSection = document.querySelector(
    ".roleplay-biographies-section"
  );
  const viewServerRulesLinks = document.querySelectorAll(".view-server-rules");
  const viewComplaintLinks = document.querySelectorAll(".view-complaints");
  const viewApplicationLinks = document.querySelectorAll(".view-applications");
  const viewStateOrganizationLinks = document.querySelectorAll(
    ".view-state-organization"
  );
  const viewRoleplayBiographiesLinks = document.querySelectorAll(
    ".view-roleplay-biographies"
  );
  const backToGameSectionLinks = document.querySelectorAll(
    ".back-to-game-section"
  );

  viewServerRulesLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      gameSection.style.display = "none";
      serverRulesSection.style.display = "block";
    });
  });

  viewComplaintLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      gameSection.style.display = "none";
      complaintSection.style.display = "block";
    });
  });

  viewApplicationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      gameSection.style.display = "none";
      applicationSection.style.display = "block";
    });
  });

  viewStateOrganizationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      gameSection.style.display = "none";
      stateOrganizationSection.style.display = "block";
    });
  });

  viewRoleplayBiographiesLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      gameSection.style.display = "none";
      roleplayBiographiesSection.style.display = "block";
    });
  });

  backToGameSectionLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      serverRulesSection.style.display = "none";
      complaintSection.style.display = "none";
      applicationSection.style.display = "none";
      stateOrganizationSection.style.display = "none";
      gameSection.style.display = "block";
      roleplayBiographiesSection.style.display = "none";
    });
  });
};

// Function to handle rules modal display
const handleRulesModal = () => {
  const rulesMessages = {
    "general-rule": "These are the general rules...",
    "election-rule": "These are the election rules...",
    "rules-for-leader": "These are the rules for leaders...",
    "event-rule": "These are the event rules...",
    "ghetto-rule": "These are the ghetto rules...",
    "rules-of-state": "These are the rules of state...",
  };

  const rows = document.querySelectorAll(".rules-table tbody tr");
  rows.forEach((row) => {
    row.addEventListener("click", function () {
      const rule = this.getAttribute("data-rule");
      showModalContent(rulesMessages[rule]);
    });
  });
};

// Initialize event listeners on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  handleButtons();
  handleCloseButtons();
  handleAuthButtons();
  handleServerClicks();
  handleSectionToggle();
  handleRulesModal();
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all necessary elements
  const complaintsListView = document.querySelector(".complaints-list-view");
  const complaintFormContainer = document.getElementById(
    "complaint-form-container"
  );
  const complaintForm = document.getElementById("complaint-form");
  const backButton = document.getElementById("back-button");
  const formTitle = document.getElementById("form-title");
  const complaintTypeInput = document.getElementById("complaint-type");

  // Set current date and time
  const now = new Date();
  document.getElementById("date").value = now.toISOString().split("T")[0];
  document.getElementById("time").value = now.toTimeString().slice(0, 5);

  // Function to show form
  function showComplaintForm(complaintType) {
    complaintsListView.style.display = "none";
    complaintFormContainer.style.display = "block";
    complaintTypeInput.value = complaintType;

    // Update form title based on complaint type
    formTitle.textContent = `Submit Complaint - ${complaintType
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase())}`;
  }

  // Add click handlers for both complaint types
  document
    .getElementById("admin-complaints")
    .addEventListener("click", function () {
      showComplaintForm("administrators-and-assistants");
    });

  document
    .getElementById("player-complaints")
    .addEventListener("click", function () {
      showComplaintForm("players");
    });

  // Back button handler
  backButton.addEventListener("click", function () {
    complaintFormContainer.style.display = "none";
    complaintsListView.style.display = "block";
    complaintForm.reset();

    // Reset date and time
    document.getElementById("date").value = now.toISOString().split("T")[0];
    document.getElementById("time").value = now.toTimeString().slice(0, 5);
  });

  // Form submission handler
  complaintForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/complaints/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Complaint submitted successfully!");
        // Return to complaints list
        complaintFormContainer.style.display = "none";
        complaintsListView.style.display = "block";
        complaintForm.reset();
      } else {
        throw new Error("Failed to submit complaint");
      }
    } catch (error) {
      console.error("Error submitting complaint:", error);
      alert("Failed to submit complaint. Please try again.");
    }
  });
});
