var express = require('express');
var router = express.Router();
var articles = require('../../controllers/admin/articles');
var Article = require("../../models/article");
//var multer = require("multer");
//var upload = multer({ dest: 'public/uploads/' })
/* GET home page. */
router.get('/articles', articles.index);
// router.get('/articles', function (req, res, next) {
// 	res.render('admin/articles', { title: 'Express' });
// });

// router.post('/articles', upload.single('picture'), articles.add);
router.post('/articles', /*articles.add*/function(req, res, next) {
	console.log(req.body)
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
	});

module.exports = router;
