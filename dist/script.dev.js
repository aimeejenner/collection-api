"use strict";

var API_URL = "https://api.wellcomecollection.org/catalogue/v2/works?include=subjects&subjects.label=London"; // const API_URL = "https://api.wellcomecollection.org/catalogue/v2/works?page=3";

var getBooks = function getBooks() {
  return fetch("".concat(API_URL)).then(function (res) {
    return res.json();
  }).then(function (jsonResponse) {
    return jsonResponse;
  });
};

getBooksList = function getBooksList() {
  var books, titles, list;
  return regeneratorRuntime.async(function getBooksList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(getBooks());

        case 2:
          books = _context.sent;
          titles = [];
          books.results.forEach(function (book) {
            titles.push("<li>".concat(book.title, "</li>"));
          });
          list = document.getElementById("list");
          list.innerHTML = titles.join("");

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

getBooksList();