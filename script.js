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

newBookBtn.onclick = () => {
  modal.style.display = 'grid';
};

closeBtn.onclick = () => {
  newBookForm.reset();
  modal.style.display = 'none';
};

submitBtn.addEventListener('click', () => {
  const book = new Book (formTitle.value, formAuthor.value, formPages.value, haveRead.checked);
  book.addToLibrary();
  newBookForm.reset();
  updateShelf();
  modal.style.display = 'none';
});

const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 310, 'Yes');

hobbit.addToLibrary();

updateShelf();