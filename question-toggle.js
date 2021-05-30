const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const button = question.querySelector(".question__button");
  const questionText = question.querySelector(".question__title__text");
  button.addEventListener("click", () => {
    questions.forEach((item) => {
      if(item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });

  questionText.addEventListener("click", () => {
    questions.forEach((item) => {
      if(item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

