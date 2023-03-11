const API_URL = "https://api.wellcomecollection.org/catalogue/v2/works?include=subjects&subjects.label=London";
// const API_URL = "https://api.wellcomecollection.org/catalogue/v2/works?page=3";

const getBooks = () => {
    return fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((jsonResponse) => {
        return jsonResponse;
      });
};

getBooksList = async () => {
    const books = await getBooks();
    const titles = [];
    books.results.forEach(book => {
        titles.push(`<li>${book.title}</li>`);
    });
    const list = document.getElementById("list");   
    list.innerHTML = titles.join("");
}
 
getBooksList();










    





