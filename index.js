const listContainer = document.getElementById("mylist");
const list = listContainer.querySelector("ul");
const addmorebtn = document.getElementById("addItem");
const removebtn = document.getElementById("removeItem");
const note = document.getElementById("note"); // if this exists

addmorebtn.addEventListener("click", () => {
  // Update heading or message instead of replacing list
  const heading = listContainer.querySelector("h2");
  heading.textContent = "New item added!";
  heading.classList.toggle("highlight");

  // Add new item
  const newItem = document.createElement("li");
  newItem.textContent = "Bread";
  list.appendChild(newItem);
});

removebtn.addEventListener("click", () => {
  const heading = listContainer.querySelector("h2");
  heading.textContent = "An item was removed!";
  heading.classList.toggle("highlight");

  // Remove last item if any
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
});
