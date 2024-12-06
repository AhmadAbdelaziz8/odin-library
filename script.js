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

myLibrary.unshift(richDad, atomicH, Baily);

// Function to add a book to the library
function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.unshift(newBook);
}

// Select the correct container
let cardContainer = document.querySelector(".cards-container");

// Function to display books (to be implemented later)
function displayBook() {
  // Logic for displaying books will go here
}

const showDialogButton = document.querySelector(".add-book");
const addBookDialogue = document.getElementById("addBookDialogue");
const closeButton = document.getElementById("close");
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