const mongoose = require("mongoose");
const { DateTime, Interval } = require("luxon");

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// virtual for author's full name
AuthorSchema.virtual("name").get(function () {
  // to avoid errors in cases where an author does not have either a family name or first name
  // we want to make sure we handle the exception by returning an empty string for that case
  let fullname = "";
  if (this.first_name && this.family_name) {
    fullname = `${this.family_name}, ${this.first_name}`;
  }
  if (!this.first_name || !this.family_name) {
    fullname = "";
  }
  return fullname;
});

//virtual for author's url
AuthorSchema.virtual("url").get(function () {
  return `/catalog/author/${this._id}`;
});

// formatted dates
AuthorSchema.virtual("neatbirth").get(function () {
  return this.date_of_birth
    ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED)
    : "";
});

AuthorSchema.virtual("neatdeath").get(function () {
  return this.date_of_death
    ? DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED)
    : "";
});

AuthorSchema.virtual("lifespan").get(function () {
  if (this.date_of_death) {
    const date1 = DateTime.fromJSDate(this.date_of_birth);
    const date2 = DateTime.fromJSDate(this.date_of_death);
    const diffYears = Interval.fromDateTimes(date1, date2);
    const lifespan = diffYears.length("years").toFixed(0);
    return `${lifespan} years`;
  } else return "";
});

//exporting
module.exports = mongoose.model("Author", AuthorSchema);
