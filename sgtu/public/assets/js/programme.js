const tabs = document.querySelectorAll('.tab');
const searchBox = document.getElementById('searchInput');
const cardContainer = document.querySelector('.card-container');

function renderCards(cards) {
  cardContainer.innerHTML = "";
  cards.forEach((card) => {
    cardContainer.innerHTML += `
        <div id="${card.name}" class="flex colored-faculty-section">
          <div class="sm:w-1/4 w-2/5">
            <img src="${card.image}" alt="${card.name}" class="insideFacultyImg">
          </div>
          <div class="inside-faculty-section sm:w-3/4 w-3/5">
            <div class="inside-faculty-content px-3 md:px-8">
              <div>
                <p>Name</p>
                <h2 class="cardTitle">${card.name}</h1>
                <p>Duration</p>
                <h2 class="cardDuration">${card.duration}</h2>
              </div>
              <div class="flex justify-end programme-info">
                <a href="${card.link}" class="circleBtn cBtnBlack">Programme Info</a>
              </div>
            </div>
          </div>
        </div>
      `;
  });
}

function changeActiveTab(type) {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  const activeTab = document.getElementById(`${type}Button`);
  activeTab.classList.add("active");
}

function getActiveTabType() {
  const activeTab = document.querySelector(".tab.active");
  return activeTab ? activeTab.dataset.type : "";
}

// Initial render based on active tab
renderCards(data[getActiveTabType()]);

// Event listeners for tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    const type = this.dataset.type;
    changeActiveTab(type);
    renderCards(data[type]);
  });
});

// Event listener for search box
searchBox.addEventListener("keyup", () => {
  const keyword = searchBox.value.trim().toLowerCase();
  renderCards(
    data[getActiveTabType()]
      .filter((card) => card.name.toLowerCase().includes(keyword))
  );
});
