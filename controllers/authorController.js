const Author = require("../models/author");
const async = require("async");
const Book = require("../models/book");

//Display list of all authors...
exports.author_list = (req, res, next) => {
  Author.find()
    .sort([["family_name", "ascending"]])
    .exec(function (err, list_authors) {
      if (err) {
        return next(err);
      }
      res.render("author_list", {
        title: "Author list",
        author_list: list_authors,
      });
    });
};

//  page detail for a specific authro
exports.author_detail = (req, res, next) => {
  async.parallel(
    {
      author(callback) {
        Author.findById(req.params.id).exec(callback);
      },
      authors_books(callback) {
        Book.find({ author: req.params.id }, "title summary").exec(callback);
      },
    },
    (err, results) => {
      if (err) {
        return next(err);
      }
      if (results.author == null) {
        const err = new Error("Author not found");
        return next(err);
      }
      res.render("author_detail", {
        title: "Author Detail",
        author: results.author,
        author_books: results.authors_books,
      });
    }
  );
};

// auhtor create form on GET
exports.author_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: author create GET");
};

//author create POST
exports.author_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: author POST");
};

// display author delete form on GET
exports.author_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: author delete GET");
};

// display author delete on POST
exports.author_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: author delete POST");
};

// author update form on GET
exports.author_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: AUTHOR UPDATE GET");
};

// handle author update POST
exports.author_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: AUTHOR UPDATE POST");
};
