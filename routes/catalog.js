const express = require("express");
const router = express.Router();

// req controller modules
const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");
const genre_controller = require("../controllers/genreController");
const book_instance_controller = require("../controllers/bookinstanceController");

// ---> Book routes

//GET catalog home page
router.get("/", book_controller.index);

// GET request for creating a Book. This must come before routes that display Book (using id)
router.get("/book/create", book_controller.book_create_get);

// POST request for creating a Book
router.post("/book/create", book_controller.book_create_post);

// GET request to delete Book
router.get("/book/:id/delete", book_controller.book_delete_get);

// POST delete book
router.post("/book/:id/delete", book_controller.book_delete_post);

// GET request update book
router.get("/book/:id/update", book_controller.book_update_get);

// POST request to update Book
router.post("/book/:id/update", book_controller.book_update_post);

// GET update one Book
router.get("/book/:id", book_controller.book_detail);

/// Authors routes

// GET request for creating an Author. Note this must come before route for id

router.get("/author/create", author_controller.author_create_get);

//POST request for creating Author
router.post("/author/create", author_controller.author_create_post);

// GET request delete Author
router.get("/author/:id/delete", author_controller.author_delete_get);

// POST delete Author
router.post("/author/:id/delete", author_controller.author_delete_post);

// GET update Author
router.get("/author/:id/update", author_controller.author_update_get);

// POST request update Author
router.post("/author/:id/update", author_controller.author_update_post);

// GET for one Author
router.get("/author/:id", author_controller.author_detail);

// GET for all Authors
router.get("/authors", author_controller.author_list);

/// GENRE routes

// GET request for creating a Genre, note this must come before route that display Genres by ID
router.get("/genre/create", genre_controller.genre_create_get);

// POST for creating GENRE
router.post("/genre/create", genre_controller.genre_create_post);

// GET for deleting Genre
router.get("/genre/:id/delete", genre_controller.genre_delete_get);

// POST delete genre
router.post("/genre/:id/delete", genre_controller.genre_delete_post);

// GET request update genre
router.get("/genre/:id/update", genre_controller.genre_update_get);

// POST update game
router.post("/genre/:id/update", genre_controller.genre_update_post);

// GET request for one genre
router.get("/genre/:id", genre_controller.genre_detail);

// GET request for all genres
router.get("/genres", genre_controller.genre_list);

// BOOKINSTANCE ROUTES

// GET reuqest for creating a BookInstance. This must come before route that displays bookinstance ID
router.get(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_get
);

//POST for creating BookInstance
router.post(
  "/bookinstance/create",
  book_instance_controller.bookinstance_create_post
);

// GET to delete BookInstance
router.get(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_get
);

// POST to delete bookinstance
router.post(
  "/bookinstance/:id/delete",
  book_instance_controller.bookinstance_delete_post
);

// GET to update BookInstance
router.get(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_get
);

// POST to update BookInstance
router.post(
  "/bookinstance/:id/update",
  book_instance_controller.bookinstance_update_post
);

// GET for one BookInstance
router.get("/bookinstance/:id", book_instance_controller.bookinstance_detail);

// GET for all bookinstance
router.get("/bookinstances", book_instance_controller.bookinstance_list);

module.exports = router;
