const tabs = document.querySelectorAll(".tab");
const searchBox = document.getElementById("searchInput");
const cardContainer = document.querySelector(".card-container");

function renderCards(cards) {
  cardContainer.innerHTML = "";
  cards.forEach((card) => {
    cardContainer.innerHTML += `
        <div id="${card.name}" className="flex colored-faculty-section">
          <div className="w-1/5">
            <img src="${card.image}" alt="${card.name}" className="insideFacultyImg">
          </div>
          <div className="inside-faculty-section w-4/5">
            <div className="inside-faculty-content px-3 md:px-8">
              <div>
                <h2 className="cardTitle">${card.name}</h1>
                <p className="">${card.descp}</p>
              </div>
              <div className="flex justify-end programme-info">
                <a href="${card.link}" className="circleBtn cBtnBlack">More Info</a>
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
    data[getActiveTabType()].filter((card) =>
      card.name.toLowerCase().includes(keyword)
    )
  );
});
