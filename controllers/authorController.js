const Author = require("../models/author");
const async = require("async");
const Book = require("../models/book");
const { body, validationResult } = require("express-validator");

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
  res.render("author_form", { title: "Create Author" });
};

//author create POST
exports.author_create_post = [
  body("first_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("First name must be specified")
    .isAlphanumeric()
    .withMessage("First name has non-alphanumeric characters"),

  body("family_name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Family name must be specified.")
    .isAlphanumeric()
    .withMessage("Family name has non-alphanumeric characters"),

  body("date_of_birth", "Invalid date of birth")
    // run a subsequent validation only if a field has been entered
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),
  body("date_of_death", "Invalid date of death")
    .optional({ checkFalsy: true })
    .isISO8601()
    .toDate(),
  //process after sanitization and validation
  (req, res, next) => {
    //Extract the errors from request
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      //errors, render form again with sanitized errors and messages
      res.render("author_form", {
        title: "Create Author",
        author: req.body,
        errors: errors.array(),
      });
      return;
    }

    //Data from form is valid

    // Create an Author object with escaped and trimmed data:
    const author = new Author({
      first_name: req.body.first_name,
      family_name: req.body.family_name,
      date_of_birth: req.body.date_of_birth,
      date_of_death: req.body.date_of_death,
    });
    author.save((err) => {
      if (err) {
        return next(err);
      }

      // Sucessful - redirect to new author record
      res.redirect(author.url);
    });
  },
];

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
