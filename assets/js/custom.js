document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  // Debugging: Check if buttons and projects are found
  const buttons = document.querySelectorAll(".category-button");
  const projects = document.querySelectorAll(".project-item");

  console.log("Category buttons found:", buttons.length);
  console.log("Project items found:", projects.length);

  // Check if any buttons or projects are missing
  if (buttons.length === 0) {
    console.error("No category buttons found. Check the HTML structure or class names.");
  }

  if (projects.length === 0) {
    console.error("No project items found. Check the HTML structure or class names.");
  }

  // Add event listeners to buttons
  buttons.forEach((button) => {
    console.log("Adding click event listener to button:", button.textContent);

    button.addEventListener("click", () => {
      console.log("Button clicked:", button.textContent);

      // Remove 'active' class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const category = button.getAttribute("data-category");
      console.log("Selected category:", category);

      // Filter projects based on category
      projects.forEach((project) => {
        const categories = project.getAttribute("data-category") || "";
        const categoryList = categories.split(" ");
        console.log("Project categories:", categoryList);

        if (category === "all" || categoryList.includes(category)) {
          console.log(`Showing project: ${project.textContent}`);
          project.style.display = "block";
        } else {
          console.log(`Hiding project: ${project.textContent}`);
          project.style.display = "none";
        }
      });
    });
  });
});
