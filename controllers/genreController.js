const Genre = require("../models/genre");
const Book = require("../models/book");
const async = require("async");
const { body, validationResult } = require("express-validator");

const mongoose = require("mongoose");

//display list of all genre
exports.genre_list = (req, res) => {
  Genre.find()
    .sort([["name", "ascending"]])
    .exec(function (err, list_genres) {
      if (err) {
        return next(err);
      }
      res.render("genre_list", {
        title: "Genre list",
        genre_list: list_genres,
      });
    });
};

//display detail page for specific genre
exports.genre_detail = (req, res) => {
  async.parallel(
    {
      genre(callback) {
        Genre.findById(req.params.id).exec(callback);
      },
      genre_books(callback) {
        Book.find({ genre: req.params.id }).exec(callback);
      },
    },
    (err, results) => {
      if (err) {
        return next(err);
      }
      if (results.genre == null) {
        //No results...
        const err = new Error("Genre not found");
        err.status = 404;
        return next(err);
      }
      // sucessful
      res.render("genre_detail", {
        title: "Genre Detail",
        genre: results.genre,
        genre_books: results.genre_books,
      });
    }
  );
};

//display genre created form on GET
exports.genre_create_get = (req, res, next) => {
  res.render("genre_form", { title: "Create Genre" });
};

// handle genre created on POST
exports.genre_create_post = [
  // validate and sanitize
  body("name", "Genre name required").trim().isLength({ min: 1 }).escape(),

  //process req after validation and sanitization
  (req, res, next) => {
    //extract the validation errors from a request:
    const errors = validationResult(req);

    // create a genre object with escaped and trimmed data
    const genre = new Genre({ name: req.body.name });

    if (!errors.isEmpty()) {
      // There are errors, therefore render the form again with sanitized values/error msg
      res.render("genre_form", {
        title: "Create Genre",
        genre,
        errors: errors.array(),
      });
    } else {
      // data form is valid
      // check if Genre already exists before commiting to database
      Genre.findOne({ name: req.body.name }).exec((err, found_genre) => {
        if (err) {
          return next(err);
        }

        if (found_genre) {
          //Genre exists, redirect to the details page
          res.redirect(found_genre.url);
        } else {
          genre.save((err) => {
            if (err) {
              return next(err);
            }
            //Genre saved, redirect to genre detail page
            res.redirect(genre.url);
          });
        }
      });
    }
  },
];

// display genre delete form on GET
exports.genre_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre delete get");
};

// display genre delete form on GET
exports.genre_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre delete post");
};

//display Genre update form on GET
exports.genre_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre update GET");
};

// handle genre update POST
exports.genre_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre update POST");
};
