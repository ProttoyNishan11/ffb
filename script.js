// Toggle answer visibility when a question card is clicked
function toggleAnswers(card) {
  const answers = card.querySelector("ol");
  answers.style.display = answers.style.display === "block" ? "none" : "block";
}

// Toggle check marks on answers
function toggleCheck(event, btn) {
  // Stop click from triggering the card toggle
  event.stopPropagation();

  if (btn.textContent === "☐") {
    btn.textContent = "☑";
    btn.classList.add("checked");
  } else {
    btn.textContent = "☐";
    btn.classList.remove("checked");
  }
}
