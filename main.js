// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const openDrawer = document.getElementById("open-drawer");
    const closeDrawer = document.getElementById("close-drawer");
    const drawer = document.getElementById("drawer");
  
    // Open Drawer
    openDrawer.addEventListener("click", () => {
      drawer.classList.add("open");
    });
  
    // Close Drawer
    closeDrawer.addEventListener("click", () => {
      drawer.classList.remove("open");
    });
  
    // Optional: Close drawer when clicking outside
    window.addEventListener("click", (e) => {
      if (!drawer.contains(e.target) && e.target !== openDrawer) {
        drawer.classList.remove("open");
      }
    });
  });
  