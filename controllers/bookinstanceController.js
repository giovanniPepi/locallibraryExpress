const BookInstance = require("../models/bookinstance");

// display all book instances
exports.bookinstance_list = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance list");
};

//display detail page for specific bookinstance
exports.bookinstance_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: BookInstance detail: ${req.params.id}`);
};

// display bookinstance create form on GET
exports.bookinstance_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance create GET");
};

//Handle BookInstance create on POST
exports.bookinstance_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance delete POST");
};

// Display BookInstance update form on GET
exports.bookinstance_update_get = (req, res) => {
  res.send("Not implemented> BookInstance update GET");
};

// handle bookinstance update on POST
exports.bookinstance_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: BookInstance update POST");
};
