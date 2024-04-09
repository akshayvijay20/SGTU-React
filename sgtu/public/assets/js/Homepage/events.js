document.addEventListener("DOMContentLoaded", function () {
  const listItems = document.querySelectorAll(".card .list li");
  const photoCardImages = document.querySelectorAll(".photo-card img");

  const imageMap = {
    "Synergy 2023": [
      "./assets/images/homepage/events/Large/Synergy.png",
      "./assets/images/homepage/events/Small/Synergy.png",
      "./assets/images/homepage/events/Small/Synergy (2).png",
    ],
    "Convo 2023": [
      "./assets/images/homepage/events/Large/Convo.png",
      "./assets/images/homepage/events/Small/Convo.png",
      "./assets/images/homepage/events/Small/Convo (2).png",
    ],
    "Diwali 2023": [
      "./assets/images/homepage/events/Large/Diwali.png",
      "./assets/images/homepage/events/Small/Diwali.png",
      "./assets/images/homepage/events/Small/Diwali (2).png",
    ],
    "Independence Day 2023": [
      "./assets/images/homepage/events/Large/Independence.png",
      "./assets/images/homepage/events/Small/Independence.png",
      "./assets/images/homepage/events/Small/Independence (2).png",
    ],
  };

  function handleListItemClick(item) {
    // Remove the "show-description" class from all items
    listItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("show-description");
      }
    });

    // Toggle the "show-description" class for the clicked item
    item.classList.toggle("show-description");

    // If the clicked item has the "show-description" class, update the images
    if (item.classList.contains("show-description")) {
      const eventName = item.querySelector("h2").textContent;
      const imageUrls = imageMap[eventName];

      if (imageUrls) {
        // Clear the previous images
        photoCardImages.forEach((img) => {
          img.src = ""; // Set the src attribute to an empty string
        });

        // Update with new images
        imageUrls.forEach((url, i) => {
          photoCardImages[i].src = url;
        });
      } else {
        console.error(`Image not found for event: ${eventName}`);
      }
    }
  }

  for (const item of listItems) {
    item.addEventListener("click", () => {
      handleListItemClick(item);
    });
  }

  // Initialize the first item as clicked
  listItems[0].click();
});
