const loadBooks = () => {
    const searchField = document.getElementById('search-field')
    const bookName = searchField.value 
    searchField.value = ''

    toggleSpinner('block')

    // Book search Api call

    const url = `http://openlibrary.org/search.json?q=${bookName}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))
};

// loader function
const toggleSpinner = (displayStyle) => {
    document.getElementById('spinner').style.display = displayStyle
}

// displaying search result

const displaySearchResult = books => {
    const booksContainer = document.getElementById('all-books')
    booksContainer.textContent = ''
    books.forEach(book => {

        const div = document.createElement('div')
        div.classList.add('col','d-block')
        div.innerHTML = `
        <div class="card">
        <img src="https://covers.openlibrary.org/b/id/${book?.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text"><small>By</small> ${book.author_name}</p>
          <p>First Published: ${book.first_publish_year}</p>

        </div>
      </div>
      
        `;

        booksContainer.appendChild(div);

      
    });
    toggleSpinner('none')
};
