
const loadBooks = () => {
    const searchField = document.getElementById('search-field')
    const bookName = searchField.value 
    searchField.value = ''
    if(bookName === ''){
        emptySearch('block')
    }

    toggleSpinner('block')
    searchResultShow('none')

    // Book search Api call
    const url = `http://openlibrary.org/search.json?q=${bookName}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))
};

// loader function
const toggleSpinner = (displayStyle) => {
    document.getElementById('spinner').style.display = displayStyle
};

const searchResultShow = (displayStyle) => {
    document.getElementById('result-container').style.display = displayStyle
    document.getElementById('no-result-found').style.display = displayStyle


};

// error handling
const emptySearch = displayStyle => {
    document.getElementById('error').style.display = displayStyle

}


// displaying search result
const displaySearchResult = books => {
    const booksContainer = document.getElementById('all-books')
    booksContainer.textContent = ''

    // error handling and search results
    if(books){
        document.getElementById('no-result-found').style.display = 'none'
    }
    if(books.length === 0){
        document.getElementById('no-result-found').style.display = 'block'
        document.getElementById('no-result-found').innerText = 'No result found'
        emptySearch('none')
    };
    if(books.length !== 0){
        document.getElementById('no-result-found').style.display = 'block'
        document.getElementById('no-result-found').innerText = `${books.length} result found`
        // console.log(books.length)
    };

    // loopting through books
    books?.forEach(book => {

        const div = document.createElement('div')
        div.classList.add('col','d-block')
        div.innerHTML = `
        <div class="card border-2 rounded-2 h-100">
        <img width = 100%; height = "300px" src="https://covers.openlibrary.org/b/id/${book.cover_i ? book.cover_i: 10909258}-M.jpg" class="card-img-top p-2" alt="...">
        <div class="card-body">
          <h5 class="card-title text-primary">${book.title}</h5>
          <p class="card-text">
          Author:
          <span class="fw-bold">${book.author_name ? book.author_name : 'Author Known'}</span>
          
          </p>
          <p class="card-text">
          Publisher:
          <span class="fw-bold">${book.publisher ? book.publisher[0]: 'Known publisher'}</span>
          
          </p>
          <p>First Published: 
          <span class="fw-bold">${book.first_publish_year ? book.first_publish_year : 'Year Unknown' }</span>
          
          </p>

        </div>
      </div>
      
        `;
        booksContainer.appendChild(div);
      
    });

    toggleSpinner('none')
    searchResultShow('block')
};
