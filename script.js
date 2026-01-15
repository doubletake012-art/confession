const form = document.getElementById("confessionForm");
const confessionText = document.getElementById("confessionText");
const confessionList = document.getElementById("confessionList");

// Load saved confessions
window.onload = () => {
  let saved = JSON.parse(localStorage.getItem("confessions")) || [];
  saved.forEach(text => addConfession(text));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = confessionText.value.trim();
  if (text) {
    addConfession(text);

    // Save to localStorage
    let saved = JSON.parse(localStorage.getItem("confessions")) || [];
    saved.push(text);
    localStorage.setItem("confessions", JSON.stringify(saved));

    confessionText.value = "";
  }
});

function addConfession(text) {
  const div = document.createElement("div");
  div.classList.add("confession");
  div.textContent = text;
  confessionList.prepend(div);
}