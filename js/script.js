function toggleList(cardId) {
  //Find det card der skal bruges
  const card = document.getElementById(cardId);
  //Find den liste der skal bruges
  const list = card.querySelector(".list");
  //Vis eller skjul listen//
  list.classList.toggle("list-hidden");
  // Find pil-ikonet på kortet og skift det. Hvis det peger nedad, skal det ændres til at pege opad, og omvendt.
  const expandIcon = card.querySelector(".expand-icon i");
  expandIcon.classList.toggle("fa-chevron-down");
  expandIcon.classList.toggle("fa-chevron-up");

  // Luk de andre kort og skjul deres lister samt opdater pil-ikonerne
  const otherCardIds = ["card1", "card2", "card3"];
  otherCardIds.forEach((otherCardId) => {
    if (otherCardId !== cardId) {
      const otherCard = document.getElementById(otherCardId);
      const otherList = otherCard.querySelector(".list");
      const otherExpandIcon = otherCard.querySelector(".expand-icon i");
      otherList.classList.add("list-hidden");
      otherExpandIcon.classList.remove("fa-chevron-down", "fa-chevron-up");
      otherExpandIcon.classList.add("fa-chevron-down");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Find alle billeder der høre til disse bokse
  let images = document.querySelectorAll(".case-img-box img");

  // Tilføjer klikfunktion til hvert billede, så de kan forstørres ved hjælp af css
  images.forEach(function (image) {
    image.addEventListener("click", function () {
      // Toggle klassen "clicked" finder .case-img-box
      this.closest(".case-img-box").classList.toggle("clicked");
    });
  });

  // Scroll til næste sektion når chevron-ikonet klikkes
  const chevronIcon = document.querySelector(".chevron-icon");
  if (chevronIcon) {
    chevronIcon.addEventListener("click", function () {
      const nextSection = document.querySelector(".section-skills");
      const header = document.querySelector(".header");
      let offset = 0;
      if (header) {
        offset = header.offsetHeight;
      }
      if (nextSection) {
        const y =
          nextSection.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  }
});
