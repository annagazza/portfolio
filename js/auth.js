document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("passwordForm");
  const input = document.getElementById("password");
  const error = document.getElementById("error");
  const submitIcon = document.getElementById("submitIcon");

  // CONFIGURAZIONE
  const SALT = "X7!a_9s_2026";
  const TARGET_PAGE = "Meti.html";
  const HASH_CORRETTO =
    "c9666c0852439e5344321e84bcdd234a123a9b26f2761f78ebb35c23e93075b6";

  // Stato iniziale icona
  submitIcon.classList.add("disabled");

  // SHA-256
  async function sha256(str) {
    const buffer = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(str)
    );
    return Array.from(new Uint8Array(buffer))
      .map(b => b.toString(16).padStart(2, "0"))
      .join("");
  }

  // Abilita / disabilita icona
  input.addEventListener("input", () => {
    const hasValue = input.value.trim().length > 0;

    submitIcon.classList.toggle("disabled", !hasValue);

    input.classList.remove("wrong");
    error.style.visibility = "hidden";
  });

  // Click sull’icona = submit
  submitIcon.addEventListener("click", () => {
    if (!submitIcon.classList.contains("disabled")) {
      form.requestSubmit();
    }
  });

  // Submit form (ENTER o icona)
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const value = input.value.trim();
    if (!value) return;

    const hashInput = await sha256(value + SALT);

    if (hashInput === HASH_CORRETTO) {
      window.location.href = TARGET_PAGE;
    } else {
      input.classList.add("wrong");
      error.style.visibility = "visible";
      input.value = "";
      submitIcon.classList.add("disabled");
      input.focus();
    }
  });
});
