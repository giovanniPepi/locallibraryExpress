const Author = require("../models/author");

//Display list of all authors...
exports.author_list = (req, res) => {
  res.send("NOT IMPLEMENTED: author list...");
};

//  page detail for a specific authro
exports.author_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: author detail: ${req.params.id}`);
};

// auhtor create form on GET
exports.author_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: author create GET");
};

//author create POST
exports.author_create_post = (req, res) {
  res.send("NOT IMPLEMENTED: author POST")
}

// display author delete form on GET
exports.author_delete_get = (req, res) {
  res.send("NOT IMPLEMENTED: author delete GET")
}

// display author delete on POST
exports.author_delete_post = (req, res) {
  res.send("NOT IMPLEMENTED: author delete POST")
}

// author update form on GET
exports.author_update_get = (req, res) => {
  res.send('NOT IMPLEMENTED: AUTHOR UPDATE GET');
}

// handle author update POST
exports.author_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: AUTHOR UPDATE POST")
}
