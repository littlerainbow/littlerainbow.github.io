var mongoose = require('mongoose');
var Article = mongoose.model("article", {
  title: String,
  picture: {
  	fileName: String,
  	mimeType: String
  },
  content: String,
  author: String
});

module.exports = Article;