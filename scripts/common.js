/**
 * Created by Artsiom_Papou on 11/11/2016.
 */

(function () {
	"use strict";

	class NewsStorageConstructor {
		constructor() {
			this.key = "&apiKey=8c90eb13964a48e8ba53ef3b2a1eb61e";
			this.url = " https://newsapi.org/v1/articles?source="
			this.resources = {
				abc: "abc-news-au",
				cnn: "cnn",
				espn: "espn",
				focus: "focus",
				ign: "ign"
			}	

		}

		createTemplate(news) {
	    	let article = document.createElement("article")
	    	let html = `
	            <header>
	                <h2><a href="${news.url}">${news.title}</a></h2>
	                <h3>Published: ${news.publishedAt}</h3>
	            </header>
	            <div class="article-body">
	            	<div class="thumb-wrapper">
						<img src="${news.urlToImage}" alt="">
	            	</div>
	                <p class="article-body">
	                    ${news.description}
	                </p>
	            </div>`;
	        article.innerHTML = html;
	    }

	    sendRequest(resource) {
	    	console.log(`${this.url resource this.key}`)
    		fetch(`${this.url} ${resource} ${this.key}`)
		    	.then((response) => response.json())
		    	.then((data) => this.createTemplate(data))
		    	.catch((error) => console.log(error))
    	}
    	clearNews(){
    		let articles = document.getElementById("articles");
    		articles.innerHTML = "";
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
    	}
	}

	let news = new NewsStorageConstructor();
	news.init();
	
})()