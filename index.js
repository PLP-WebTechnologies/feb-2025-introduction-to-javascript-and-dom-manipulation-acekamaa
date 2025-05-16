const listContainer = document.getElementById("mylist");
const list = listContainer.querySelector("ul");
const addBtn = document.getElementById("additem");
const removeBtn = document.getElementById("removeitem");
const darktheme = document.getElementById("darkmode");
const lighttheme = document.getElementById("lightmode");

addBtn.onclick = () => {
  // Add new item
  const item = prompt("Enter item to add:");

  if (item) {
    const newItem = document.createElement("li");
    newItem.textContent = item;
    list.appendChild(newItem);
  }

};

removeBtn.onclick = () => {
  const itemToRemove = prompt("Enter item to remove:");
  const items = Array.from(list.getElementsByTagName("li"));
  const found = items.find((li) => li.textContent === itemToRemove);

  if (found) {
    list.removeChild(found);
  } else {
    alert("Item not found");
  }
};

darktheme.onclick = () => {
  // Change to dark theme
  document.body.style.backgroundColor = "#333";
  document.body.style.color = "#fff";
  listContainer.style.backgroundColor = "#444";
  listContainer.style.color = "#fff";
}