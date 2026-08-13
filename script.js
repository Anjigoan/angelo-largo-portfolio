const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.classList.toggle("is-open", !isOpen);
    nav.classList.toggle("is-open", !isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.classList.remove("is-open");
      nav.classList.remove("is-open");
    });
  });
}

const tabs = document.querySelector("[data-tabs]");

if (tabs) {
  const buttons = tabs.querySelectorAll("[data-tab]");
  const panels = tabs.querySelectorAll("[data-panel]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.tab;

      buttons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-selected", String(isActive));
      });

      panels.forEach((panel) => {
        const isActive = panel.dataset.panel === target;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });
    });
  });
}

const accordion = document.querySelector("[data-accordion]");

if (accordion) {
  accordion.querySelectorAll(".accordion-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".accordion-item");
      const content = item.querySelector(".accordion-content");
      const isOpen = item.classList.contains("is-open");

      item.classList.toggle("is-open", !isOpen);
      trigger.setAttribute("aria-expanded", String(!isOpen));
      content.hidden = isOpen;
    });
  });
}

const copyButton = document.querySelector("[data-copy-email]");
const emailAddress = "angelo.largo27@gmail.com";

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.top = "-9999px";
  document.body.appendChild(textArea);
  textArea.select();

  const didCopy = document.execCommand("copy");
  document.body.removeChild(textArea);

  if (!didCopy) {
    throw new Error("Copy command failed");
  }

  return Promise.resolve();
}

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const originalText = copyButton.innerHTML;
    copyButton.classList.add("is-loading");

    try {
      await copyToClipboard(emailAddress);
      await new Promise((resolve) => setTimeout(resolve, 600));
      copyButton.classList.remove("is-loading");
      copyButton.textContent = "Copied";
    } catch (error) {
      copyButton.classList.remove("is-loading");
      copyButton.textContent = "Copy failed";
    }

    setTimeout(() => {
      copyButton.innerHTML = originalText;
    }, 1800);
  });
}
