var express = require('express');
var article = require('../../../controllers/api/article');
var router = express.Router();
var Article = require("../../../models/article");


router.get('/:id', (req, res, err) => {
	Article.findById(req.params.id, function (err, article) {
		res.json(article)
	})
});

router.get('/', (req, res, next) => {

	Article.find({}, function (err, articles) {
		res.json(articles);
	})
});
router.get('/update/:id', function (req, res, next) {
    Article.findById(req.params.id, function (err, article) {
        res.render("update", {article})
    })
});
router.post('/update/:id', function (req, res, next) {
	Article.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, doc) {
		res.redirect(`/articles/${req.params.id}`)
    });
});

router.delete('', (req,res,next) => {
	Article.findByIdAndRemove(req.params.id, function (err, item) {
		//res.redirect("/articles");
		return req.body;
	})
});
// router.post('/:id', (req,res,next) => {
// 	Article.findByIdAndRemove(req.params.id, function (err, item) {
// 		res.redirect("/articles");
// 	})
// });

module.exports = router;