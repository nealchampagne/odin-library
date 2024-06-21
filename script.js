const myLibrary = [];

class Book {
  constructor(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
  }
  
  addToLibrary() {
    myLibrary.push(this);
  }
};

const hobbit = new Book('J.R.R. Tolkien', 'The Hobbit', 310, true);
const neuromancer = new Book ('William Gibson', 'Neuromancer', 271, true);
const lookToWindward = new Book ('Iain M. Banks', 'Look to Windward', 357, false);
const fairyTale = new Book ('Stephen King', 'Fairy Tale', 608, false);

hobbit.addToLibrary();
neuromancer.addToLibrary();
lookToWindward.addToLibrary();
fairyTale.addToLibrary();

const hobbitCard = document.createElement('div');
const neuromancerCard = document.createElement('div');
const lookToWindwardCard = document.createElement('div');
const fairyTaleCard = document.createElement('div');

hobbitCard.classList.add('book');
neuromancerCard.classList.add('book');
lookToWindwardCard.classList.add('book');
fairyTaleCard.classList.add('book');

const shelf = document.querySelector('.shelf');

shelf.appendChild(hobbitCard);
shelf.appendChild(neuromancerCard);
shelf.appendChild(lookToWindwardCard);
shelf.appendChild(fairyTaleCard);