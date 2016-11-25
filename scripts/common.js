/**
 * Created by Artsiom_Papou on 11/11/2016.
 */

(function () {
	"use strict";

	class NewsStorage {
		constructor(news, sources){
			//this.news = news;
			this.currentSourse = '';
			this.sources = sources || [];
		}
		setNews(news){
			this.news = news;
		}
		getNews(){
			return this.news;
		}
		setDefaultResaurse(){
            this.currentSourse = this.sources[0] ? this.sources[0] : "";
			return this.currentSourse;
		}
	}

	class NewsController {
		constructor (url, key){
            this.article = document.createElement("article");
            this.newsContainer = document.getElementById("articles");
            this.storage = new NewsStorage();
            this.publishedTime = storage.publishedAt ? storage.publishedAt.split("T").join(" ") : "";
            this.url = url;
            this.key = key;
		}

		createArticles () {

			Service
				.sendRequest(this.url, this.key, this.storage.currentSourse)
				.then(res => {
					res
                    ViewNews.createTemplate();
				})
				.then(res => {
                    this.article.innerHTML = res;
                    this.newsContainer.appendChild(this.article);
				})
				.catch(err => {
					console.warn(err)
				})
		}

		handler(updatedNewsBlock) {
            this.storage.currentSourse = updatedNewsBlock;
		}
	}

	class NewsView {

		createTemplate(news){


            const html = `
				<header>
					<div class="thumb-wrapper">
						<img src="${news.urlToImage || this.logoUrl}" alt="">
					</div>
					<h2><a href="${news.url}">${news.title}</a></h2>
					<h3>Published: ${publishedTime}</h3>
				</header>
				<div class="article-body">
					<p class="article-body">
						${(news.description || '')}
					</p>
				</div>`;

            return html;
		}

	}

    export default new ViewNews();

	class NavigationView{

		constructor(){
            this.navLinks = document.querySelectorAll(".nav-item");
		}

        setHandler(handler, resources) {
			for( let item of this.navLinks) {
				const link = item.getAttribute("data-url");
				const resource = resources[link];

				item.addEventListener("click", (e) => {
					handler(resource);
				});
			}
		}
	}


    export default new ViewNavigation();


	function renderNews(news, defaultPicture) {
		const defaultPicture = defaultPicture,
			  news = news;

		news.articles.forEach((article) => this.createTemplate(article));
	}

    function clearBlock(selector) {
        selector.innerHTML = "";
    }

    class Service {

        sendRequest(url, key, resource) {
            return fetch(`${url}${resource}${key}`)
                .then((response) => response.json())
                .then((data) => data)
                .catch((error) => console.warn(error))
        }
    }

    export default new Service();

    // function addEvents() {
		// const navLinks = document.querySelectorAll(".nav-item");
		// const newsContainer = document.getElementById("articles");
		// for( let item of navLinks) {
		// 	const link = item.getAttribute("data-url");
		// 	const resource = resources[link];
		// 	item.addEventListener("click", (e) => {
		// 		e.preventDefault();
		// 		clearBlock(newsContainer);
		// 		sendRequest(resource).then(() => renderNews(news));
		// 	})
		// }
    // }
    // function createTemplate(news) {
		// const article = document.createElement("article");
		// const newsContainer = document.getElementById("articles");
		// const publishedTime = news.publishedAt ? news.publishedAt.split("T").join(" ") : "";
		// const html = `
	 //        <header>
	 //        	<div class="thumb-wrapper">
		// 			<img src="${news.urlToImage || this.logoUrl}" alt="">
	 //        	</div>
	 //            <h2><a href="${news.url}">${news.title}</a></h2>
	 //            <h3>Published: ${publishedTime}</h3>
	 //        </header>
	 //        <div class="article-body">
	 //            <p class="article-body">
	 //                ${(news.description || '')}
	 //            </p>
	 //        </div>`;
	 //    article.innerHTML = html;
	 //    newsContainer.appendChild(article);
    // }



	// function sendRequest(url, key, resources) {
	// 	return fetch(`${url}${resource}${key}`)
	//     	.then((response) => response.json())
	// 		.then((data) => data)
	//     	.catch((error) => console.log(error))
	// }

	// class NewsStorageConstructor {
	// 	constructor() {
	// 		this.newsContainer = document.getElementById("articles");
	// 		this.key = "&apiKey=8c90eb13964a48e8ba53ef3b2a1eb61e";
	// 		this.url = " https://newsapi.org/v1/articles?source=";
	// 		this.logoUrl = "https://pp.vk.me/c624017/v624017178/e05e/zW-tDkBCYJI.jpg";
	// 		this.resources = {
	// 			abc: "abc-news-au",
	// 			cnn: "cnn",
	// 			espn: "espn",
	// 			focus: "focus",
	// 			bloomberg: "bloomberg",
	// 			default: "abc-news-au"
	// 		};
	// 		this.news = [];
	// 	}

	// 	createTemplate(news) {
	//     	const article = document.createElement("article");
	//     	const publishedTime = news.publishedAt ? news.publishedAt.split("T").join(" ") : "";
	//     	const html = `
	//             <header>
	//             	<div class="thumb-wrapper">
	// 					<img src="${news.urlToImage || this.logoUrl}" alt="">
	//             	</div>
	//                 <h2><a href="${news.url}">${news.title}</a></h2>
	//                 <h3>Published: ${publishedTime}</h3>
	//             </header>
	//             <div class="article-body">
	//                 <p class="article-body">
	//                     ${(news.description || '')}
	//                 </p>
	//             </div>`;
	//         article.innerHTML = html;
	//         this.newsContainer.appendChild(article);
	//     }

	//    //  sendRequest(resource) {
 //    		return fetch(`${this.url}${resource}${this.key}`)
	// 	    	.then((response) => response.json())
	// 			.then((data) =>  this.news = data)
	// 	    	.catch((error) => console.log(error))
 //    	}
 //    	clearNews(){
 //    		this.newsContainer.innerHTML = "";
 //    	}
 //    	render(data) {
 //            data.articles.forEach((article) => this.createTemplate(article));
	// 	}
 //    	addEvents() {
 //    		const navLinks = document.querySelectorAll(".nav-item");
 //    		for( let item of navLinks) {
 //    			const link = item.getAttribute("data-url");
 //    			const resource = this.resources[link];
 //    			item.addEventListener("click", (e) => {
 //    				e.preventDefault();
 //    				this.clearNews();
 //    				this.sendRequest(resource).then(() => this.render(this.news));
 //    			})
 //    		}
 //    	}
 //    	init(){
 //    		this.addEvents();
 //    		this.sendRequest(this.resources.default).then(() => this.render(this.news));
 //    	}
	// }

	// const news = new NewsStorageConstructor();

	// news.init();
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