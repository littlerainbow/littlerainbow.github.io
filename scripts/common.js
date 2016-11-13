/**
 * Created by Artsiom_Papou on 11/11/2016.
 */

(function () {
	"use strict";

	class NewsStorageConstructor {
		constructor() {
			this.newsContainer = document.getElementById("articles");
			this.key = "&apiKey=8c90eb13964a48e8ba53ef3b2a1eb61e";
			this.url = " https://newsapi.org/v1/articles?source="
			this.logoUrl = "https://pp.vk.me/c624017/v624017178/e05e/zW-tDkBCYJI.jpg"
			this.resources = {
				abc: "abc-news-au",
				cnn: "cnn",
				espn: "espn",
				focus: "focus",
				bloomberg: "bloomberg",
				default: "abc-news-au"
			}	

		}

		createTemplate(news) {
	    	let article = document.createElement("article");
	    	let html = `
	            <header>
	            	<div class="thumb-wrapper">
						<img src="${news.urlToImage || this.logoUrl}" alt="">
	            	</div>
	                <h2><a href="${news.url}">${news.title}</a></h2>
	                <h3>Published: ${news.publishedAt.split("T").join(" ") || ''}</h3>
	            </header>
	            <div class="article-body">
	                <p class="article-body">
	                    ${(news.description || '')}
	                </p>
	            </div>`;
	        article.innerHTML = html;
	        this.newsContainer.appendChild(article);
	    }

	    sendRequest(resource) {
    		fetch(`${this.url}${resource}${this.key}`)
		    	.then((response) => {
		    		return response.json();
		    	})
		    	.then((data) => {
		    		data.articles.forEach((article) => this.createTemplate(article));
		    	})
		    	.catch((error) => console.log(error))
    	}
    	clearNews(){
    		this.newsContainer.innerHTML = "";
    	}

    	addEvents() {
    		let navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-item"));
    		navLinks.forEach((item) => {

    			

    			let link = item.getAttribute("data-url");
    			let resource = this.resources[link];
    			item.addEventListener("click", (e) => {
    				e.preventDefault();
    				this.clearNews();
    				this.sendRequest(resource);
    			})
    		});
    	}
    	init(){
    		this.addEvents();
    		this.sendRequest(this.resources.default)
    	}
	}

	let news = new NewsStorageConstructor();
	news.init();
	
})()