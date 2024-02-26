import { getBooks } from './api-books';

export async function homeCategory(END_POINT, categoriesBooks) {
  try {
    const data = await getBooks(END_POINT, categoriesBooks);
    renderBooks(data);
    updateTitle(categoriesBooks);
  } catch (error) {
    console.error('Failed to fetch books:', error);
  }
}

function renderBooks(books) {
  const gallery = document.querySelector('.booksgallery');
  const markup = books
    .map(book => {
      return `
      <li class="booksgallery-item" id="book-${book._id}">
        <div class="container-item">
          <img class="gallery-image" src="${book.book_image}" alt="${book.description}">
          <h3 class="name-book">${book.title}</h3>
          <p class="author-book">${book.author}</p>
        </div>
      </li>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}

function updateTitle(category) {
  const titleElement = document.querySelector('.selected-title');
  const itemCategory = category.split(' ');
  const textSpan = itemCategory[itemCategory.length - 1];
  itemCategory.pop();
  titleElement.innerHTML = `${itemCategory.join(
    ' '
  )} <span class="selected-color">${textSpan} </span>`;
}