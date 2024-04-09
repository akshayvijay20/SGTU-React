document.addEventListener("DOMContentLoaded", function () {
  var accordionSections = document.querySelectorAll('.footMenu');

  accordionSections.forEach(function (section) {
      var title = section.querySelector('.footMenuHead');
      var content = section.querySelector('.footMenuContent');
      var icon = title.querySelector('i');
      title.addEventListener('click', function () {
          // Toggle the open class
          icon.classList.toggle('open');

          // Toggle the display of the content
          content.style.display = content.style.display === 'block' ? 'none' : 'block';

          // Close other accordion sections when one is opened
          accordionSections.forEach(function (otherSection) {
              if (otherSection !== section) {
                  otherSection.querySelector('.footMenuContent').style.display = 'none';
                  otherSection.querySelector('.footMenuHead').classList.remove('open');
                  otherSection.querySelector('.useful-link i').classList.remove('open');
              }
          });
      });
  });
});