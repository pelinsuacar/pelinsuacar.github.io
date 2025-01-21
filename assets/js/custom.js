document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".category-button");
  const projects = document.querySelectorAll(".project-item");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const category = button.getAttribute("data-category");

      projects.forEach((project) => {
        const categories = project.getAttribute("data-category") || "";
        const categoryList = categories.split(" ");
        if (category === "all" || categoryList.includes(category)) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    });
  });
});
