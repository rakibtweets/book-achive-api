const loadBooks = () => {
    const searchField = document.getElementById('search-field')
    const bookName = searchField.value 
    searchField.value = ''

    // Book search Api call

    const url = `http://openlibrary.org/search.json?q=${bookName}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs))
};

// displaying search result

const displaySearchResult = books => {
    books.forEach(book => {
        
        console.log(book.title)
    });
    // console.log(books);
}