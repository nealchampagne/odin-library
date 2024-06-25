/** Initialize Library array and grab essential DOM elements */

const myLibrary = [];
const shelf = document.querySelector('.shelf');
const newBookBtn = document.querySelector('.newbookbtn');
const closeBtn = document.querySelector('.closebtn');
const submitBtn = document.querySelector('.submitbtn');
const formTitle = document.getElementById('booktitle');
const formAuthor = document.getElementById('author');
const formPages = document.getElementById('pagecount');
const haveRead = document.getElementById('haveread');
const newBookForm = document.getElementById('newbookform');
const modal = document.querySelector('.modal');

/** Book class with method to add self to library */

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = Math.random()*Math.random();
  }
  
  addToLibrary() {
    myLibrary.push(this);
  }
};

/** Keep shelf up to date when books are added/removed or read is toggled */

const updateShelf = () => {
  while (shelf.firstChild) {
    shelf.removeChild(shelf.lastChild);
  };
  myLibrary.forEach((book) => {
    const deleteBtn = document.createElement('button');
    const bookDiv = document.createElement('div');
    const bookTitle = document.createElement('div');
    const bookAuthor = document.createElement('div');
    const bookPages = document.createElement('div');
    const bookHaveRead = document.createElement('div');
    const readToggle = document.createElement('button');
    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', book.id);
    deleteBtn.classList.add('deletebtn');
    deleteBtn.textContent = '×';
    bookTitle.textContent = `${book.title}`;
    bookAuthor.textContent = `By: ${book.author}`;
    bookPages.textContent = `Pages: ${book.pages}`;
    book.read ? bookHaveRead.textContent = `Read: Yes` : bookHaveRead.textContent = `Read: No`;
    bookHaveRead.classList.add('bookread');
    readToggle.classList.add('readtoggle');
    readToggle.textContent = 'toggle read';
    bookDiv.appendChild(deleteBtn);
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor)
    bookDiv.appendChild(bookPages);
    bookDiv.appendChild(bookHaveRead);
    bookHaveRead.appendChild(readToggle);
    shelf.appendChild(bookDiv);

    deleteBtn.addEventListener('click', () => {
      shelf.removeChild(document.getElementById(book.id));
      index = myLibrary.findIndex(elem => elem.id === book.id);
      myLibrary.splice(index, 1);
      updateShelf();
    });

    readToggle.addEventListener('click', () => {
      book.read ? book.read = false : book.read = true;
      updateShelf();
    });
  });
}

/** Show modal */

newBookBtn.onclick = () => {
  modal.style.display = 'grid';
};

/** Hide modal and clear form */

closeBtn.onclick = () => {
  newBookForm.reset();
  modal.style.display = 'none';
};

/** Override default behavior, create new book object from user input, 
    push to library, update shelf, clear and hide form modal */

document.addEventListener('submit', (event) => {
  const book = new Book (formTitle.value, formAuthor.value, formPages.value, haveRead.checked);
  book.addToLibrary();
  newBookForm.reset();
  updateShelf();
  modal.style.display = 'none';
  event.preventDefault();
});