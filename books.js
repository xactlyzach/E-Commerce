function renderBooks(filter) {
  const booksWrapper = document.querySelector('.books');

  const books = getBooks();

  if (filter === 'LOW_TO_HIGH') {
    books.sort((a, b) => a.originalPrice - b.originalPrice);
  } else if (filter === 'HIGH_TO_LOW') {
    books.sort((a, b) => b.originalPrice - a.originalPrice);
  } else if (filter === 'RATING') {
    books.sort((a, b) => b.rating - a.rating);
  }

  const booksHtml = books
    .map(book => {
      return `<div class="book">
    <figure class="book__img--wrapper">
      <img class="book__img" src="${book.url}" alt="">
    </figure>
    <div class="book__title">
      ${book.title}
    </div>
    <div class="book__ratings">
      ${ratingsHtml(book.rating)}
    </div>
    <div class="book__price">
      <span class="">$${book.originalPrice.toFixed(2)}</span>
    </div>
  </div>`
    }).join('');

  booksWrapper.innerHTML = booksHtml;
  // booksWrapper.innerHTML = 
}

function ratingsHtml(rating) {
  let ratingHtml = "";
  for (let i = 0; i < Math.floor(rating); i++) {
    ratingHtml += '<i class="fas fa-star"></i>'
  };

  if (!Number.isInteger(rating)) {
    ratingHtml += '<i class="fas fa-star-half-alt"></i>'
  };

  return ratingHtml;
}

function filterBooks() {
  renderBooks(event.target.value);
}

setTimeout(() => {
  renderBooks();
});

// FAKE DATA
function getBooks() {
  return [{
      id: 1,
      title: "Crack the Coding Interview",
      url: "assets/crack the coding interview.png",
      originalPrice: 49.95,
      salePrice: 14.95,
      rating: 4.5,
    },
    {
      id: 2,
      title: "Atomic Habits",
      url: "assets/atomic habits.jpg",
      originalPrice: 39,
      salePrice: null,
      rating: 5,
    },
    {
      id: 3,
      title: "Deep Work",
      url: "assets/deep work.jpeg",
      originalPrice: 29,
      salePrice: 12,
      rating: 5,
    },
    {
      id: 4,
      title: "The 10X Rule",
      url: "assets/book-1.jpeg",
      originalPrice: 44,
      salePrice: 19,
      rating: 4.5,
    },
    {
      id: 5,
      title: "Be Obsessed Or Be Average",
      url: "assets/book-2.jpeg",
      originalPrice: 32,
      salePrice: 17,
      rating: 4,
    },
    {
      id: 6,
      title: "Rich Dad Poor Dad",
      url: "assets/book-3.jpeg",
      originalPrice: 70,
      salePrice: 12.5,
      rating: 5,
    },
    {
      id: 7,
      title: "Cashflow Quadrant",
      url: "assets/book-4.jpeg",
      originalPrice: 11,
      salePrice: 10,
      rating: 4,
    },
    {
      id: 8,
      title: "48 Laws of Power",
      url: "assets/book-5.jpeg",
      originalPrice: 38,
      salePrice: 17.95,
      rating: 4.5,
    },
    {
      id: 9,
      title: "The 5 Second Rule",
      url: "assets/book-6.jpeg",
      originalPrice: 35,
      salePrice: null,
      rating: 4,
    },
    {
      id: 10,
      title: "Your Next Five Moves",
      url: "assets/book-7.jpg",
      originalPrice: 40,
      salePrice: null,
      rating: 4,
    },
    {
      id: 11,
      title: "Mastery",
      url: "assets/book-8.jpeg",
      originalPrice: 30,
      salePrice: null,
      rating: 4.5,
    },
  ];
}