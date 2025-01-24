document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".nav li");
    const tabContents = document.querySelectorAll(".tab-content");
  
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove("active"));
        // Hide all tab contents
        tabContents.forEach(content => content.classList.remove("active"));
        // Add active class to the selected tab
        tab.classList.add("active");
        // Show corresponding tab content
        const target = tab.getAttribute("data-tab");
        document.getElementById(target).classList.add("active");
      });
    });
  });
  