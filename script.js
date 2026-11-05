const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");

if (menuButton && nav) {
  const menuIcon = menuButton.querySelector("path");
  const iconOpen = "M4 7h16M4 12h16M4 17h10";
  const iconClose = "M6 6l12 12M18 6 6 18";

  const setMenu = (isOpen) => {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    menuIcon.setAttribute("d", isOpen ? iconClose : iconOpen);
    nav.hidden = !isOpen;
  };

  menuButton.addEventListener("click", () => {
    setMenu(menuButton.getAttribute("aria-expanded") !== "true");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  menuButton.closest(".site-header").addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !nav.hidden) {
      setMenu(false);
      menuButton.focus();
    }
  });
}

const cursorArea = document.querySelector("[data-cursor-area]");

if (cursorArea) {
  const ring = cursorArea.querySelector("[data-cursor-ring]");
  const pill = cursorArea.querySelector("[data-cursor-pill]");

  cursorArea.addEventListener("mousemove", (event) => {
    const { clientX: x, clientY: y } = event;
    ring.style.opacity = "1";
    pill.style.opacity = "1";
    ring.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    pill.style.transform = `translate3d(${x + 26}px, ${y + 26}px, 0) rotate(-6deg)`;
  });

  cursorArea.addEventListener("mouseleave", () => {
    ring.style.opacity = "0";
    pill.style.opacity = "0";
  });
}

const filterButtons = document.querySelectorAll("[data-filter]");
const cases = document.querySelectorAll("[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });

    cases.forEach((item) => {
      item.hidden = target !== "all" && item.dataset.category !== target;
    });
  });
});

const contactForm = document.querySelector("[data-contact-form]");
const contactDone = document.querySelector("[data-contact-done]");

if (contactForm && contactDone) {
  const topicButtons = contactForm.querySelectorAll("[data-topic]");
  const topicField = contactForm.querySelector('[name="topic"]');
  const subjectField = contactForm.querySelector('[name="_subject"]');
  const errorMessage = contactForm.querySelector("[data-contact-error]");
  const submitButton = contactForm.querySelector('[type="submit"]');
  const submitLabel = submitButton.querySelector("[data-submit-label]");

  topicButtons.forEach((button) => {
    button.addEventListener("click", () => {
      topicField.value = button.dataset.topic;
      subjectField.value = `Portfolio message: ${button.dataset.topic}`;

      topicButtons.forEach((item) => {
        item.setAttribute("aria-pressed", String(item === button));
      });
    });
  });

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    errorMessage.hidden = true;
    submitButton.disabled = true;
    submitLabel.textContent = "Sending";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(contactForm),
      });

      if (!response.ok) {
        throw new Error("Message failed to send");
      }

      contactForm.reset();
      contactForm.hidden = true;
      contactDone.hidden = false;
    } catch (error) {
      errorMessage.hidden = false;
    } finally {
      submitButton.disabled = false;
      submitLabel.textContent = "Send it";
    }
  });

  contactDone.querySelector("[data-contact-reset]").addEventListener("click", () => {
    contactDone.hidden = true;
    contactForm.hidden = false;
  });
}
