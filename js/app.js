const loadBooks = () => {
    const searchField = document.getElementById('search-field')
    const bookName = searchField.value 
    searchField.value = ''
    console.log(bookName)

    // Book search Api call
};
loadBooks();