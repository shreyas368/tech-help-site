const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "system";
document.documentElement.setAttribute("data-theme", savedTheme);
toggleBtn.textContent = `Theme: ${savedTheme.charAt(0).toUpperCase() + savedTheme.slice(1)}`;

toggleBtn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");

  let next;
  if (current === "light") next = "dark";
  else if (current === "dark") next = "system";
  else next = "light";

  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);

  toggleBtn.textContent = `Theme: ${next.charAt(0).toUpperCase() + next.slice(1)}`;
});
