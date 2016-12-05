export class ViewNews {

	constructor(){
		this.newsContainer = document.getElementById("articles");

	}

	render(data){
		const post = document.createElement("article");
		this.newsContainer.innerHTML = '';

		data.forEach((article) => {
			const post = document.createElement("article");
			const newArticle = this.createTemplate(article);
			post.innerHTML = newArticle;
			this.newsContainer.appendChild(post);
		})
	}

	createTemplate(news){
		
		const defaultImg = "https://pp.vk.me/c624017/v624017178/e05e/zW-tDkBCYJI.jpg";	
			
		const html = `
			 <header>
				 <div class="thumb-wrapper">
					 <img src="${news.urlToImage || defaultImg}" alt="">
				 </div>
				 <h2><a href="${news.url}">${news.title}</a></h2>
				 <h3>Published: ${this.parseTime(news)}</h3>
			 </header>
			 <div class="article-body">
				 <p class="article-body">
					 ${(news.description || '')}
				 </p>
			 </div>`;

		return html;
	}
	parseTime(article){
		const publishedTime = article.publishedAt ? article.publishedAt.split("T").join(" ") : "";
		return publishedTime;
	}
}

 