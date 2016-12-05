/**
 * Created by Artsiom_Papou on 11/11/2016.
 */
 import '../styles/common.scss';
 import {NavigationView} from "./nav-view";
 import {ViewNews} from "./news-view";
 import {getNews} from "./news-request";
 import NewsStorage from "./news-storage";
 import NewsProxy from "./request-proxy";
 

(function () {
	"use strict";

	class NewsController {

		constructor (key, resources){
			
            this.article = document.createElement("article");
			this.storage = new NewsStorage(resources);
			this.resources = resources;
			this.navLinks = document.querySelectorAll(".nav-item");
            this.key = key;
            
		}

		createArticles () {
			//debugger
			const request = new NewsProxy(this.key);
			console.log(this.storage.currentSourse)
			request
				.getNews(this.storage.currentSourse)
				.then(res => {
					const updatedNews = new ViewNews();
					
					//console.dir(updatedNews)
					updatedNews.render(res.articles);
				})
				.catch(err => {
					console.warn(err)
				})
		}

		handler(updatedNewsBlock) {
			this.storage.currentSourse = updatedNewsBlock;
            this.createArticles();
		}

		init(){
			const nav = new NavigationView();
			this.storage.setDefaultResourse();
			this.createArticles();
			nav.setHandler.apply(this,[this.handler.bind(this), this.resources, this.navLinks]);

		}
	}

	const resources = {
				abc: "abc-news-au",
				cnn: "cnn",
				espn: "espn",
				focus: "focus",
				bloomberg: "bloomberg",
				default: "abc-news-au"
			};
	const key = "&apiKey=8c90eb13964a48e8ba53ef3b2a1eb61e";
	const news = new NewsController(key, resources);
	news.init();

})();