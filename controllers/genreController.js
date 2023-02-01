const Genre = require("../models/genre");

//display list of all genre
exports.genre_list = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre list");
};

//display detail page for specific genre
exports.genre_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: Genre detail: ${req.params.id}`);
};

//display genre created form on GET
exports.genre_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre create GET");
};

// handle genre created on POST
exports.genre_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre create POST");
};

// display genre delete form on GET
exports.genre_delete_get = (req, res) => {
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
