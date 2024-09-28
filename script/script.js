

  document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll('.custom-btn');
    const expandableContents = document.querySelectorAll('.expandable-text');
    
    // Loop through each button and assign a click event listener
    toggleButtons.forEach((button, index) => {
      button.addEventListener("click", function() {
        const content = expandableContents[index];  // Get corresponding content
        const icon = this.querySelector('.icon1');   // Get the icon inside the clicked button

        if (content.style.display === "none" || content.style.display === "") {
          content.style.display = "block";
          icon.classList.remove("bi-plus");
          icon.classList.add("bi-dash"); // Change to minus sign
        } else {
          content.style.display = "none";
          icon.classList.remove("bi-dash");
          icon.classList.add("bi-plus"); // Change back to plus sign
        }
      });
    });
  });



  window.addEventListener('scroll', function() {
    const serviceItems = document.querySelectorAll('.service-item');
    const triggerHeight = window.innerHeight * 0.8;
  
    serviceItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
  
      if (itemTop < triggerHeight) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  });
  