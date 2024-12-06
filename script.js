// Array to store books
const myLibrary = [];

// Book blueprint
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Sample books
let richDad = new Book("rich dad poor dad", "jackie chan", 360, false);
let atomicH = new Book("Atomic habits", "donald trump", 480, true);
let Baily = new Book("Bailey and Love", "tsunami", 202, false);

// Function to add a book to the library
function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.unshift(newBook);
}

// Select the correct container
let cardContainer = document.querySelector(".cards-container");

// Function to display books
function displayBook() {
  myLibrary.forEach((book) => {
    // Create card element
    let card = document.createElement("div");
    card.classList.add("card"); // Add a class for styling

    // Create title, author, pages, and button elements
    let title = document.createElement("p");
    title.textContent = `Title: ${book.title}`;

    let author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;

    let pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;

    let button = document.createElement("button");
    button.textContent = book.read;

    // Append the elements to the card
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(button);

    // Append the card to the container
    cardContainer.appendChild(card);
  });
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
