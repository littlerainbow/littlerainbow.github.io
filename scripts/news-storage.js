let instance = null;


class NewsStorage {
	constructor(sources){

		if(!instance){
			instance = this;
		}

		this.sources = sources || {};
		this.currentSourse = this.sources.default ? this.sources.default : "";
		this.cache = {};

		return instance;
	}
	setDefaultResourse(){
        this.currentSourse = this.sources.default ? this.sources.default : "";
		return this.currentSourse;
	}
	addToCache(resource, newArticles){
        this.cache[resource] = newArticles;
	}
	removeFromCache(resource){
        delete this.cache[resource];
    }

}

export default NewsStorage;
