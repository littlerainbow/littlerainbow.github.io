"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Artsiom_Papou on 11/11/2016.
 */

(function () {
	"use strict";

	var NewsStorageConstructor = function () {
		function NewsStorageConstructor() {
			_classCallCheck(this, NewsStorageConstructor);

			this.newsContainer = document.getElementById("articles");
			this.key = "&apiKey=8c90eb13964a48e8ba53ef3b2a1eb61e";
			this.url = " https://newsapi.org/v1/articles?source=";
			this.logoUrl = "https://pp.vk.me/c624017/v624017178/e05e/zW-tDkBCYJI.jpg";
			this.resources = {
				abc: "abc-news-au",
				cnn: "cnn",
				espn: "espn",
				focus: "focus",
				bloomberg: "bloomberg",
				default: "abc-news-au"
			};
			this.news = [];
		}

		NewsStorageConstructor.prototype.createTemplate = function createTemplate(news) {
			var article = document.createElement("article");
			var publishedTime = news.publishedAt ? news.publishedAt.split("T").join(" ") : "";
			var html = "\n\t            <header>\n\t            \t<div class=\"thumb-wrapper\">\n\t\t\t\t\t\t<img src=\"" + (news.urlToImage || this.logoUrl) + "\" alt=\"\">\n\t            \t</div>\n\t                <h2><a href=\"" + news.url + "\">" + news.title + "</a></h2>\n\t                <h3>Published: " + publishedTime + "</h3>\n\t            </header>\n\t            <div class=\"article-body\">\n\t                <p class=\"article-body\">\n\t                    " + (news.description || '') + "\n\t                </p>\n\t            </div>";
			article.innerHTML = html;
			this.newsContainer.appendChild(article);
		};

		NewsStorageConstructor.prototype.sendRequest = function sendRequest(resource) {
			var _this = this;

			return fetch("" + this.url + resource + this.key).then(function (response) {
				return response.json();
			}).then(function (data) {
				return _this.news = data;
			}).catch(function (error) {
				return console.log(error);
			});
		};

		NewsStorageConstructor.prototype.clearNews = function clearNews() {
			this.newsContainer.innerHTML = "";
		};

		NewsStorageConstructor.prototype.render = function render(data) {
			var _this2 = this;

			data.articles.forEach(function (article) {
				return _this2.createTemplate(article);
			});
		};

		NewsStorageConstructor.prototype.addEvents = function addEvents() {
			var _this3 = this;

			var navLinks = document.querySelectorAll(".nav-item");

			var _loop = function _loop() {
				if (_isArray) {
					if (_i >= _iterator.length) return "break";
					_ref = _iterator[_i++];
				} else {
					_i = _iterator.next();
					if (_i.done) return "break";
					_ref = _i.value;
				}

				var item = _ref;

				var link = item.getAttribute("data-url");
				var resource = _this3.resources[link];
				item.addEventListener("click", function (e) {
					e.preventDefault();
					_this3.clearNews();
					_this3.sendRequest(resource).then(function () {
						return _this3.render(_this3.news);
					});
				});
			};

			for (var _iterator = navLinks, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
				var _ref;

				var _ret = _loop();

				if (_ret === "break") break;
			}
		};

		NewsStorageConstructor.prototype.init = function init() {
			var _this4 = this;

			this.addEvents();
			this.sendRequest(this.resources.default).then(function () {
				return _this4.render(_this4.news);
			});
		};

		return NewsStorageConstructor;
	}();

	var news = new NewsStorageConstructor();

	news.init();
	// const logAppConfig = {
	// 	get (target, key) {
	// 		if(key == "init") {
	// 			console.log("App is running");
	// 		}
	// 		return target[key];
	// 	}
	// };
	// const proxy = new Proxy(news, logAppConfig);
	// proxy.init();
})();