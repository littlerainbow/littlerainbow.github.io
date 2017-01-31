var Article = require("../../models/article");

var articles = {
	index: function(req, res, next) {
		res.render('admin/articles', { title: 'Express' });
	},
	add: function(req, res, next) {
		var {title, content, author} = req.body;
		
		//var {filename: fileName, mimetype: mimeType} = req.file;
		var article = new Article({
			title,
			content,
			//picture: { fileName, mimeType },
            author
		});
		article.save();

		res.redirect('/articles');
	}

}

module.exports = articles;