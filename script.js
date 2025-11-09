//your JS code here. If required.
// STEP 1: Get the HTML elements
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const isbnInput = document.getElementById("isbn");
const submitBtn = document.getElementById("submit");
const bookList = document.getElementById("book-list");

// STEP 2: Add book when click on submit
submitBtn.addEventListener("click", function () {
  
  // Read values from input
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const isbn = isbnInput.value.trim();

  // If any box empty → stop
  if (!title || !author || !isbn) {
    alert("Please fill all fields!");
    return;
  }

  // STEP 3: Create a new table row
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">X</button></td>
  `;

  // STEP 4: Add row to table
  bookList.appendChild(row);

  // STEP 5: Clear input boxes
  titleInput.value = "";
  authorInput.value = "";
  isbnInput.value = "";
});

// STEP 6: Delete a book (event delegation)
bookList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.parentElement.remove();
  }
});
