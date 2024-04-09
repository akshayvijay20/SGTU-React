// function toggleContainer() {
//   console.log("toggleContainer function called");
//   var exploreContainer = document.querySelector(".explore-container");
//   exploreContainer.classList.toggle("open");
//      exploreContainer.addEventListener("mouseleave", function () {
//         exploreContainer.classList.remove("open");
//       });

//   // Check if the container is open
//   if (exploreContainer.classList.contains("open")) {

//     const targetElement = document.getElementById("backtomenu");
//     console.log(targetElement); 
//     if (targetElement) {
//       targetElement.scrollIntoView({ behavior: "smooth" });
//     }
//   }
// }


// Intersection Observer setup
const exploreContainer = document.querySelector(".explore-container");
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      exploreContainer.classList.add("open");
    } else {
      exploreContainer.classList.remove("open");
    }
  });
}, options);

observer.observe(exploreContainer);

// Variable to track whether the container should remain open after scrolling
let shouldContainerStayOpen = false;

// Function to check if the container is fully scrolled
function isContainerFullyScrolled() {
  return exploreContainer.scrollHeight - exploreContainer.scrollTop === exploreContainer.clientHeight;
}

// Add wheel event listener to the window
window.addEventListener("wheel", function (event) {
  // Check if the container is fully scrolled
  if (!isContainerFullyScrolled()) {
    // If not fully scrolled, prevent the default scroll behavior
    event.preventDefault();
    shouldContainerStayOpen = true; // Keep the container open if not fully scrolled
  } else if (shouldContainerStayOpen) {
    // Close the container only if it was marked to stay open
    exploreContainer.classList.remove("open");
    shouldContainerStayOpen = false; // Reset the variable
  }
});

// Add your toggleContainer function as before
function toggleContainer() {
  console.log("toggleContainer function called");
  exploreContainer.classList.toggle("open");

  // Check if the container is open
  if (exploreContainer.classList.contains("open")) {
    const targetElement = document.getElementById("backtomenu");
    console.log(targetElement);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
}

  