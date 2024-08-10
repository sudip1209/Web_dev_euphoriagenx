// const bookName = document.querySelector("#bookName");
// const bookPrice = document.querySelector("#bookPrice");
// const bookUrl = document.querySelector("#bookUrl");

// const addBook = document.querySelector("#addBook");

addBook.addEventListener("click", function () {
  event.preventDefault();
  const bookName = document.querySelector("#bookName");
  const bookPrice = document.querySelector("#bookPrice");
  const bookUrl = document.querySelector("#bookUrl");

  let new_book = {
    bookName: bookName.value,
    bookPrice: bookPrice.value,
    bookUrl: bookUrl.value,
  };

  if (!localStorage.getItem("booklist")) {
    let booklist = JSON.parse(localStorage.getItem("booklist"));
    booklist.push(new_book);
    localStorage.setItem("booklist", JSON.stringify(new_book));
  } else {
    let booklist = [];
    booklist.push(new_book);
    localStorage.setItem("booklist", JSON.stringify(new_book));
  }

  console.log(bookName.value);
  console.log(bookPrice.value);
  console.log(bookUrl.value);
});
