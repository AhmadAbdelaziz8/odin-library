// Array to store books
let myLibrary = [];

// Book blueprint
function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

// set Identified for each book
let idCounter = 0;

// Function to toggle the read status of a book
function toggleReadStatus(id) {
  const book = myLibrary.find((book) => book.id === id);
  if (book) {
    book.read = !book.read; // Toggle the read status
    displayBook(); // Refresh the display
  }
}

// Updated displayBook function
function displayBook() {
  cardContainer.innerHTML = ""; // Clear the container before adding updated cards
  myLibrary.forEach((book) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", book.id);

    // Create title, author, pages elements
    let title = document.createElement("p");
    title.textContent = `Title: ${book.title}`;

    let author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;

    let pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;

    // Create and style the "Read" button
    let readButton = document.createElement("button");
    readButton.classList.add("read-button");
    readButton.textContent = book.read ? "Read" : "Not Read";
    readButton.addEventListener("click", () => {
      toggleReadStatus(book.id); // Pass the book's ID
    });

    // Create and style the delete button
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteBook(book.id); // Pass the book's ID
    });

    // Create a flex container for buttons
    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.appendChild(readButton);
    buttonContainer.appendChild(deleteButton);

    // Append elements to the card
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(buttonContainer);
    // Append the card to the container
    cardContainer.appendChild(card);
  });
}

// Function to add a book to the library
function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read, ++idCounter);
  myLibrary.unshift(newBook);
}

// Select the correct container
let cardContainer = document.querySelector(".cards-container");

// function to delte button
function deleteBook(id) {
  myLibrary = myLibrary.filter((book) => book.id !== id);
  displayBook(); // Refresh the display after deletion
}

// get the dialog buttons
const showDialogButton = document.querySelector(".add-book");
const addBookDialogue = document.getElementById("addBookDialogue");
const cancelButton = document.getElementById("cancel");
const submitButton = document.getElementById("submit");

// show dialoge
showDialogButton.addEventListener("click", () => {
  addBookDialogue.showModal(); //
});

// close dialog
cancelButton.addEventListener("click", () => {
  addBookDialogue.close();
});

// submit form
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  // Get form data
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const pages = document.getElementById("pages").value.trim();
  const read = document.getElementById("read").checked; // If using a checkbox for read status
  // add to the Library
  addBookToLibrary(title, author, pages, read);

  // Clear the form
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").checked = false;

  addBookDialogue.close();
  displayBook();
});

displayBook(); // Call displayBook to show initial books
