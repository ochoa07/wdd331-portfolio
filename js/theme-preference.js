(() => {
    const allowed = new Set(["light", "system", "dark"]);
    const container = document.createElement("div");

    container.id = "theme-preference-sync";
    container.hidden = true;
    container.setAttribute("aria-hidden", "true");

    for (const value of allowed) {
        const input = document.createElement("input");

        input.type = "radio";
        input.name = "theme-preference";
        input.value = value;
        input.checked = value === "system";

        container.appendChild(input);
    }

    document.head.appendChild(container);

    let stored = null;

    try {
        stored = localStorage.getItem("theme-preference");
    } catch {
        // The browser may block storage.
    }

    const preference = allowed.has(stored) ? stored : "system";

    container.querySelector(
        `input[value="${preference}"]`
    ).checked = true;

    // Match the visible controls after the HTML has loaded.
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll(
            '.theme-menu input[name="theme-preference"]'
        ).forEach((input) => {
            input.checked = input.value === preference;
        });
    });

    document.addEventListener("change", (event) => {
        const input = event.target;

        if (
            !(input instanceof HTMLInputElement) ||
            input.name !== "theme-preference" ||
            !allowed.has(input.value)
        ) {
            return;
        }

        try {
            localStorage.setItem("theme-preference", input.value);
        } catch {
            // The toggle still works when storage is blocked.
        }
    });
})();