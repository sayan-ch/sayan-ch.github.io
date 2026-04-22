(function () {
  var storageKey = "theme-preference";
  var validPreferences = ["system", "light", "dark"];

  function getNextPreference(currentPreference) {
    if (currentPreference === "system") {
      return "light";
    }
    if (currentPreference === "light") {
      return "dark";
    }
    return "system";
  }

  function getReadablePreference(preference) {
    if (preference === "light") {
      return "Light";
    }
    if (preference === "dark") {
      return "Dark";
    }
    return "System";
  }

  function getStoredPreference() {
    try {
      var value = localStorage.getItem(storageKey);
      if (!value) {
        return "system";
      }
      if (validPreferences.indexOf(value) >= 0) {
        return value;
      }
      // Backward compatibility with old stored values.
      if (value === "light" || value === "dark") {
        return value;
      }
      return "system";
    } catch (err) {
      return "system";
    }
  }

  function setStoredPreference(preference) {
    try {
      if (preference === "system") {
        localStorage.removeItem(storageKey);
      } else {
        localStorage.setItem(storageKey, preference);
      }
    } catch (err) {
      // Ignore storage write failures.
    }
  }

  function prefersDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function getEffectiveTheme() {
    var explicit = document.documentElement.getAttribute("data-theme");
    if (explicit === "light" || explicit === "dark") {
      return explicit;
    }
    return prefersDark() ? "dark" : "light";
  }

  function updateToggleUI() {
    var toggleBtn = document.querySelector(".theme-toggle");
    if (!toggleBtn) {
      return;
    }

    var icon = toggleBtn.querySelector("i");
    var currentPreference = getStoredPreference();
    var nextPreference = getNextPreference(currentPreference);
    var currentLabel = getReadablePreference(currentPreference);
    var nextLabel = getReadablePreference(nextPreference);

    toggleBtn.setAttribute("aria-label", "Theme: " + currentLabel + ". Click to switch to " + nextLabel + ".");
    toggleBtn.setAttribute("title", "Theme: " + currentLabel + " (next: " + nextLabel + ")");

    if (icon) {
      if (currentPreference === "light") {
        icon.className = "fas fa-sun";
      } else if (currentPreference === "dark") {
        icon.className = "fas fa-moon";
      } else {
        icon.className = "fas fa-circle-half-stroke";
      }
    }
  }

  function applyStoredPreference() {
    var preference = getStoredPreference();
    if (preference === "light" || preference === "dark") {
      document.documentElement.setAttribute("data-theme", preference);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    updateToggleUI();
  }

  function bindEvents() {
    var toggleBtn = document.querySelector(".theme-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", function () {
        var currentPreference = getStoredPreference();
        var nextPreference = getNextPreference(currentPreference);

        if (nextPreference === "system") {
          document.documentElement.removeAttribute("data-theme");
        } else {
          document.documentElement.setAttribute("data-theme", nextPreference);
        }

        setStoredPreference(nextPreference);
        updateToggleUI();
      });
    }

    if (window.matchMedia) {
      var media = window.matchMedia("(prefers-color-scheme: dark)");
      media.addEventListener("change", function () {
        if (getStoredPreference() === "system") {
          updateToggleUI();
        }
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyStoredPreference();
    bindEvents();
  });
})();
